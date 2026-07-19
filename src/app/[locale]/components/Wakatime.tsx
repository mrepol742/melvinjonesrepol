import { fetchCurrentStats } from "@/lib/wakatime/stat";
import { getTranslations } from "next-intl/server";
import { faLinux } from "@fortawesome/free-brands-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function formatHours(seconds: number) {
  return (seconds / 3600).toFixed(1);
}

function formatPct(value?: number | string) {
  if (value === undefined || value === null) return "0%";
  const n = typeof value === "string" ? Number(value) : value;
  if (Number.isNaN(n)) return "0%";
  return `${n.toFixed(1)}%`;
}

function formatCost(value: number) {
  if (!value) return "$0.00";
  return `$${value.toFixed(2)}`;
}

function formatTokens(value: number) {
  if (!value) return "0";
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return `${value}`;
}

// Fixed categorical palette assigned per agent name, cycled in a stable order
// rather than per-render, so a given agent always reads the same color.
const AGENT_COLORS: Record<string, string> = {
  Sonnet: "bg-orange-500",
  Haiku: "bg-amber-400",
  GPT: "bg-sky-500",
  "Codex-Cli": "bg-sky-500",
};
const FALLBACK_COLORS = [
  "bg-violet-500",
  "bg-emerald-500",
  "bg-pink-500",
  "bg-teal-500",
];

function agentColor(name: string, index: number) {
  return AGENT_COLORS[name] ?? FALLBACK_COLORS[index % FALLBACK_COLORS.length];
}

type AiAgentBreakdown = { name: string; lines: number; cost: number };

type EditorStat = {
  name: string;
  total_seconds: number;
  percent: number;
  digital: string;
  ai_additions?: number;
  ai_deletions?: number;
  human_additions?: number;
  human_deletions?: number;
  ai_agent_breakdown?: AiAgentBreakdown[];
  ai_agent_total_cost?: number;
  ai_input_tokens?: number;
  ai_output_tokens?: number;
  ai_sessions?: number;
  ai_prompt_events_total?: number;
};

function AiContributions({ editors }: { editors: EditorStat[] }) {
  const totalCost = editors.reduce(
    (sum, e) => sum + (e.ai_agent_total_cost ?? 0),
    0,
  );
  const totalAiLines = editors.reduce(
    (sum, e) => sum + (e.ai_additions ?? 0) + (e.ai_deletions ?? 0),
    0,
  );
  const totalTokens = editors.reduce(
    (sum, e) => sum + (e.ai_input_tokens ?? 0) + (e.ai_output_tokens ?? 0),
    0,
  );
  const totalSessions = editors.reduce(
    (sum, e) => sum + (e.ai_sessions ?? 0),
    0,
  );

  const assisted = editors.filter(
    (e) =>
      (e.ai_agent_breakdown?.length ?? 0) > 0 ||
      (e.ai_agent_total_cost ?? 0) > 0,
  );

  if (assisted.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-wide">
          AI Contributions
        </p>
        <p className="text-xs">spend, lines, and sessions by agent</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-zinc-800 p-3">
          <p className="text-xs uppercase tracking-wide">Agent spend</p>
          <p className="mt-1 text-xl font-semibold">{formatCost(totalCost)}</p>
        </div>
        <div className="rounded-xl border border-zinc-800 p-3">
          <p className="text-xs uppercase tracking-wide">AI lines changed</p>
          <p className="mt-1 text-xl font-semibold">
            {totalAiLines.toLocaleString()}
          </p>
        </div>
        <div className="rounded-xl border border-zinc-800 p-3">
          <p className="text-xs uppercase tracking-wide">Tokens used</p>
          <p className="mt-1 text-xl font-semibold">
            {formatTokens(totalTokens)}
          </p>
        </div>
        <div className="rounded-xl border border-zinc-800 p-3">
          <p className="text-xs uppercase tracking-wide">Sessions</p>
          <p className="mt-1 text-xl font-semibold">{totalSessions}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {assisted.map((editor) => {
          const breakdown = editor.ai_agent_breakdown ?? [];
          const cost = editor.ai_agent_total_cost ?? 0;
          const costShare = totalCost > 0 ? (cost / totalCost) * 100 : 0;
          const aiLines =
            (editor.ai_additions ?? 0) + (editor.ai_deletions ?? 0);
          const humanLines =
            (editor.human_additions ?? 0) + (editor.human_deletions ?? 0);
          const totalLines = aiLines + humanLines;
          const aiLineShare = totalLines > 0 ? (aiLines / totalLines) * 100 : 0;

          return (
            <article
              key={editor.name}
              className="rounded-2xl border border-zinc-800 p-4 shadow-sm"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">{editor.name}</p>
                <p className="text-sm font-semibold">{formatCost(cost)}</p>
              </div>
              <p className="mt-0.5 text-xs">
                {editor.ai_sessions ?? 0} sessions ·{" "}
                {editor.ai_prompt_events_total ?? 0} prompts ·{" "}
                {formatTokens(
                  (editor.ai_input_tokens ?? 0) +
                    (editor.ai_output_tokens ?? 0),
                )}{" "}
                tokens
              </p>

              {breakdown.length > 0 && (
                <div className="mt-3 flex h-2 w-full overflow-hidden rounded-full border border-zinc-800">
                  {breakdown.map((agent, i) => {
                    const share =
                      cost > 0
                        ? (agent.cost / cost) * 100
                        : 100 / breakdown.length;
                    return (
                      <div
                        key={agent.name}
                        className={agentColor(agent.name, i)}
                        style={{ width: `${share}%` }}
                        title={`${agent.name}: ${formatCost(agent.cost)}`}
                      />
                    );
                  })}
                </div>
              )}

              {breakdown.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  {breakdown.map((agent, i) => (
                    <span
                      key={agent.name}
                      className="flex items-center gap-1.5 text-xs"
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${agentColor(agent.name, i)}`}
                      />
                      {agent.name} · {formatCost(agent.cost)}
                      {agent.lines > 0
                        ? ` · ${agent.lines.toLocaleString()} lines`
                        : ""}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-3 border-t border-zinc-800 pt-3">
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span>AI vs human lines</span>
                  <span>
                    {aiLines.toLocaleString()} / {totalLines.toLocaleString()} (
                    {aiLineShare.toFixed(0)}% AI)
                  </span>
                </div>
                {/*<div className="flex h-1.5 w-full overflow-hidden rounded-full border border-zinc-800">
                  <div
                    className="h-full bg-cyan-500"
                    style={{ width: `${aiLineShare}%` }}
                    title={`AI: ${aiLines.toLocaleString()} lines`}
                  />
                  <div
                    className="h-full bg-zinc-500"
                    style={{ width: `${100 - aiLineShare}%` }}
                    title={`Human: ${humanLines.toLocaleString()} lines`}
                  />
                </div>

                <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg border border-zinc-800 p-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-cyan-500" />
                      <span>AI</span>
                    </div>
                    <p className="mt-1">
                      <span className="text-emerald-400">
                        +{(editor.ai_additions ?? 0).toLocaleString()}
                      </span>{" "}
                      <span className="text-red-400">
                        -{(editor.ai_deletions ?? 0).toLocaleString()}
                      </span>
                    </p>
                  </div>
                  <div className="rounded-lg border border-zinc-800 p-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-zinc-500" />
                      <span>Human</span>
                    </div>
                    <p className="mt-1">
                      <span className="text-emerald-400">
                        +{(editor.human_additions ?? 0).toLocaleString()}
                      </span>{" "}
                      <span className="text-red-400">
                        -{(editor.human_deletions ?? 0).toLocaleString()}
                      </span>
                    </p>
                  </div>
                </div>*/}
              </div>

              <div className="mt-2 flex items-center justify-between text-xs">
                <span>Share of tracked time</span>
                <span>{formatPct(editor.percent)}</span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default async function Wakatime() {
  const t = await getTranslations("wakatime");
  const stats = await fetchCurrentStats();

  if (!stats) return null;

  const topLanguages = stats?.data?.languages ?? [];
  const editors: EditorStat[] = stats?.data?.editors ?? [];
  const totalSeconds = stats?.data?.total_seconds ?? 0;
  const totalHours = formatHours(totalSeconds);

  const editorNames = editors.map((e) => e.name).join(", ") || "—";
  const operatingSystems =
    stats?.data?.operating_systems?.map((os) => os.name).join(", ") || "—";
  const machines =
    stats?.data?.machines?.map((machine) => machine.name).join(", ") || "—";

  function getLanguageIcon(lang: string, props = {}) {
    if (!lang) return null;
    const name = lang.toLowerCase();
    const cls = `devicon-${name}-plain colored`;
    return <i className={cls} {...props} />;
  }

  return (
    <section className="w-full space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em]">
            {t("section_label")}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            {t("section_title")}
          </h2>
        </div>

        <div className="text-right">
          <p className="text-3xl font-bold leading-none">{totalHours} hrs</p>
          <p className="text-sm">{t("last_7_days")}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-2xl border border-zinc-800 p-4 shadow-sm">
          <p className="text-xs uppercase tracking-wide">
            {t("top_language_label")}
          </p>
          <p className="mt-2 text-xl font-semibold">
            {topLanguages[0]?.name || "—"}
          </p>
          <p className="mt-1 text-sm">
            {topLanguages[0]
              ? `${formatHours(topLanguages[0].total_seconds)} hrs`
              : "—"}
          </p>
        </article>

        <article className="rounded-2xl border border-zinc-800 p-4 shadow-sm">
          <p className="text-xs uppercase tracking-wide">
            {t("editors_label")}
          </p>
          <p className="mt-2 font-medium leading-relaxed">{editorNames}</p>
        </article>

        <article className="rounded-2xl border border-zinc-800 p-4 shadow-sm">
          <p className="text-xs uppercase tracking-wide">{t("os_label")}</p>
          <p className="mt-2 font-medium leading-relaxed">
            <FontAwesomeIcon icon={faLinux} className="mr-2" />
            {operatingSystems}
          </p>
        </article>

        <article className="rounded-2xl border border-zinc-800 p-4 shadow-sm">
          <p className="text-xs uppercase tracking-wide">
            {t("machines_label")}
          </p>
          <p className="mt-2 font-medium leading-relaxed">
            <FontAwesomeIcon icon={faLaptop} className="mr-2" />
            {machines}
          </p>
        </article>
      </div>

      <AiContributions editors={editors} />

      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-wide">
          {t("breakdown_title")}
        </p>
        <p className="text-xs">{t("breakdown_subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {topLanguages.slice(0, 8).map((lang, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={100 * (index + 1)}
          >
            <div className="rounded-xl border border-zinc-800 p-3 transition-transform duration-200 hover:-translate-y-0.5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg">
                  {getLanguageIcon(lang.name, { style: { fontSize: 24 } })}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{lang.name}</p>
                  <p className="text-xs">
                    {formatHours(lang.total_seconds)} hrs
                  </p>
                </div>
              </div>

              <div className="mt-3">
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span>{t("share_label")}</span>
                  <span>{formatPct(lang.percent)}</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full border border-zinc-800">
                  <div
                    className="h-full bg-cyan-500 rounded-full"
                    style={{ width: formatPct(lang.percent) }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="text-sm text-muted"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        {t("last_updated_label")}{" "}
        {stats.last_fetched ? new Date(stats.last_fetched).toUTCString() : "—"}
      </div>
    </section>
  );
}
