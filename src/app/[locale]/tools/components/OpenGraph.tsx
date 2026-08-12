"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faLink,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

type OpenGraphMeta = Record<string, string>;

export default function OpenGraphTool() {
  const t = useTranslations("tools_open_graph");
  const [formData, setFormData] = useState({
    username: "",
    url: "",
  });
  const [meta, setMeta] = useState<OpenGraphMeta | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [grecaptchaLoaded, setGrecaptchaLoaded] = useState(false);

  useEffect(() => {
    const loadGrecaptcha = () => {
      const scriptId = "recaptcha-enterprise";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = `https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
        script.async = true;
        script.onload = () => setGrecaptchaLoaded(true);
        document.body.appendChild(script);
      } else {
        setGrecaptchaLoaded(true);
      }
    };

    loadGrecaptcha();
  }, []);

  const fetchOG = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!grecaptchaLoaded || !window.grecaptcha?.enterprise) {
      toast.error(t("recaptcha_error"));
      return;
    }

    setIsSubmitting(true);

    const submitPromise = (async () => {
      try {
        const token = await window.grecaptcha.enterprise.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "",
          { action: "open_graph" },
        );

        const response = await fetch("/api/tools/open-graph", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, token }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.error || "Something went wrong");
        }

        setMeta(data.meta);

        return data;
      } finally {
        setIsSubmitting(false);
      }
    })();

    toast.promise(submitPromise, {
      pending: t("toast_pending"),
      success: t("toast_success"),
      error: {
        render({ data }) {
          const err = data as Error;
          return err?.message || t("toast_error");
        },
      },
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-6">
        <Card>
          <div className="text-xs uppercase tracking-widest mb-4">
            Tool Overview
          </div>
          <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
          <p className="leading-7">
            Inspect the metadata a page exposes for link previews and social
            sharing. This is useful when a URL renders the wrong title,
            description, image, or card information after deployment.
          </p>
        </Card>

        <Card subtitle="OG">
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="mt-1">
                <FontAwesomeIcon icon={faGlobe} />
              </span>
              <div>
                <p className="font-semibold">What it checks</p>
                <p className="leading-7">
                  Standard Open Graph properties, common title and description
                  fields, and Twitter card metadata when present.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5">
                <FontAwesomeIcon icon={faLink} />
              </span>
              <div>
                <p className="font-semibold">Best for</p>
                <p className="leading-7">
                  Debugging inconsistent previews, validating published pages,
                  and checking whether the page is exposing the metadata you
                  expect.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5">
                <FontAwesomeIcon icon={faShieldHalved} />
              </span>
              <div>
                <p className="font-semibold">Input</p>
                <p className="leading-7">
                  Paste a full URL or domain. The tool will fetch the page and
                  extract supported metadata fields from the response.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <div className="text-xs uppercase tracking-widest mb-4">
            Run Check
          </div>

          <form onSubmit={fetchOG} className="space-y-5">
            <div className="absolute left-[-10000px] top-0 h-px w-px opacity-0">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Gotcha"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest mb-2 opacity-50">
                URL
              </p>
              <Input
                icon={faGlobe}
                handleChange={
                  handleChange as unknown as (
                    e: React.ChangeEvent<HTMLInputElement>,
                  ) => void
                }
                form={{
                  name: "url",
                  value: formData.url,
                  placeholder: t("url_placeholder"),
                  required: true,
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded uppercase text-sm relative px-7 py-4 mt-3 font-semibold overflow-hidden shadow-none transition-transform duration-200 hover:translate-x-1 hover:translate-y-1 before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-full before:h-1 before:rounded-b-lg after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-1 after:h-full after:rounded-r-lg w-full bg-indigo-400 before:bg-indigo-600 after:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
            >
              {isSubmitting ? t("toast_pending") : t("fetch_button")}
            </button>
          </form>
        </Card>

        <Card>
          <div className="mb-6">
            <div className="text-xs uppercase tracking-widest mb-2">
              Results
            </div>
            <h2 className="text-2xl font-bold">{t("result_title")}</h2>
          </div>

          {meta ? (
            <div className="space-y-3">
              {Object.entries(meta).map(([key, value]) => (
                <div
                  key={key}
                  className="rounded-2xl border border-zinc-800 p-4"
                >
                  <p className="text-xs uppercase tracking-widest mb-2">
                    {key}
                  </p>
                  <p className="text-sm leading-7 wrap-break-word">{value}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-zinc-800 p-6 text-sm leading-7">
              No metadata loaded yet. Run a check to inspect the page title,
              description, Open Graph fields, and supported Twitter card tags.
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
