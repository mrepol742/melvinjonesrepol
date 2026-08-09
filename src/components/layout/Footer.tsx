"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faSteam,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { navLanguages } from "@/lib/i18n";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useConsent } from "@/context/consent";

export default function Footer({
  posts,
}: {
  posts: { slug: string; title: string }[];
}) {
  const t = useTranslations("components.footer");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { openBanner } = useConsent();

  const handleLocaleChange = (nextLocale: string) => {
    if (nextLocale === locale) return;
    const normalizedPath = pathname.replace(
      /^\/(en|fil|cmn|es|hi|nl|fr|ru|ar)(?=\/|$)/,
      "",
    );
    router.replace(`/${nextLocale}${normalizedPath || "/"}`);
  };

  const TrustpilotWidget = dynamic(() => import("../common/TrustPilotWidget"), {
    ssr: false,
  });

  const navLinks = [
    { href: "/", label: t("footer_home") },
    { href: "/about", label: t("footer_about") },
    { href: "/case-studies", label: t("footer_case_studies") },
    { href: "/now", label: t("footer_now") },
    { href: "/projects", label: t("footer_projects") },
    { href: "/blog", label: t("footer_blog") },
    { href: "/gaming", label: t("footer_gaming") },
    { href: "/certificates", label: t("footer_certificates") },
    { href: "/work-experience", label: t("footer_work_experience") },
    { href: "/contact-me", label: t("footer_contact_me") },
  ];

  const projectLinks = [
    {
      href: "https://web-designs.melvinjonesrepol.com",
      label: "Web Design",
      external: true,
    },
    {
      href: "https://wakatime.melvinjonesrepol.com",
      label: t("footer_wakatime_stats"),
      external: true,
    },
    {
      href: "https://ai.melvinjonesrepol.com",
      label: t("footer_melvin_ai"),
      external: true,
    },
    { href: "/webvium-browser", label: t("footer_webvium_browser") },
    { href: "/protocol-discussion-platform", label: t("footer_pdp") },
    { href: "/axleshift-freight-management", label: t("footer_afm") },
    { href: "/point-of-sale", label: t("footer_pos") },
    { href: "/ulisha-store-laravel", label: t("footer_usl") },
    { href: "/canis-chatbot", label: t("footer_canis_chatbot") },
    {
      href: "https://keepandroidopen.org/",
      label: t("footer_kao"),
      external: true,
    },
    {
      href: "https://www.hallofcodes.org",
      label: t("footer_hoc"),
      external: true,
    },
    { href: "/sitemap.xml", label: t("footer_sitemap") },
  ];

  const toolLinks = [
    { href: "/tools/open-graph", label: t("footer_ogc") },
    { href: "/tools/ip-address", label: t("footer_iat") },
    { href: "/tools/qrcode-generator", label: t("footer_qcg") },
    { href: "/tools/user-agent", label: t("footer_uap") },
    {
      href: "https://go.melvinjonesrepol.com",
      label: t("footer_shortlink"),
      external: true,
    },
  ];

  const socialLinks = [
    {
      href: "https://facebook.com/melvinjonesrepol",
      icon: faFacebook,
      label: "Facebook",
    },
    { href: "https://github.com/mrepol742", icon: faGithub, label: "GitHub" },
    {
      href: "https://linkedin.com/in/mrepol742",
      icon: faLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com/@mrepol742",
      icon: faYoutube,
      label: "YouTube",
    },
    {
      href: "https://steamcommunity.com/id/mrepol742",
      icon: faSteam,
      label: "Steam",
    },
  ];

  const linkClass =
    "text-sm text-zinc-500 hover:text-zinc-100 transition-colors duration-150";

  return (
    <footer
      className="bg-gray-900 text-gray-200 py-10 border-t border-gray-800 rounded-xl"
      data-aos="fade-up"
    >
      <nav aria-label="Footer Navigation" className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <span className="text-xl font-bold bg-gradient-to-tr from-violet-500 via-yellow-300 to-green-400 bg-clip-text text-transparent animate-gradient-shift">
              Melvin Jones Repol
            </span>

            <div className="flex items-center gap-2 text-xs text-zinc-500 leading-relaxed max-w-52">
              <span className="relative flex h-1.5 w-1.5 me-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
              </span>
              <div className="flex flex-col">
                <span className="text-zinc-500">Full Stack Developer</span>
                <span className="opacity-60">Up to Date Web Design</span>
              </div>
            </div>

            <p className="text-xs text-zinc-500 leading-relaxed max-w-52">
              {t("description")}
            </p>

            <div className="flex gap-2 mt-5">
              {socialLinks.map(({ href, icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="flex items-center justify-center p-2 rounded-full border border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-100 hover:bg-white/5 transition-all duration-200"
                >
                  <FontAwesomeIcon icon={icon} className="text-sm" />
                </Link>
              ))}
            </div>

            <div className="mt-5">
              <TrustpilotWidget />
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-4">
              Projects
            </h4>
            <ul className="space-y-2.5">
              {projectLinks.map(({ href, label, external }) => (
                <li key={href}>
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    className={linkClass}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-4">
              Tools
            </h4>
            <ul className="space-y-2.5">
              {toolLinks.map(({ href, label, external }) => (
                <li key={href}>
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    className={linkClass}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent posts + Language */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-4">
              {t("footer_recent_posts")}
            </h4>

            {posts.length > 0 ? (
              <ul className="space-y-2.5 mb-8">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className={`block truncate ${linkClass}`}
                      title={post.title}
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-zinc-600 text-sm mb-8">
                {t("footer_no_recent_posts")}
              </p>
            )}

            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-3">
              {t("footer_language_region")}
            </h4>
            <div className="relative">
              <select
                value={locale}
                onChange={(e) => handleLocaleChange(e.target.value)}
                className="w-full appearance-none rounded-lg border border-gray-700 bg-gray-800/60 px-3 py-2 text-xs text-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-colors"
                aria-label="Select language"
              >
                {navLanguages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label} · {lang.region}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-600">
                ▼
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Melvin Jones Repol.{" "}
            {t("footer_all_rights_reserved")}
          </span>

          <div className="flex items-center gap-4 text-xs text-zinc-600">
            <button
              onClick={openBanner}
              className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors"
            >
              <Image
                src="/images/0410-hd-privacy-choices-icon.png"
                alt="Privacy Choices"
                width={16}
                height={16}
              />
              Cookie Preferences
            </button>

            <span className="text-zinc-800 select-none">·</span>

            <Link
              href="/uptime"
              target="_blank"
              className="hover:text-zinc-300 transition-colors"
            >
              Uptime
            </Link>

            <span className="text-zinc-800 select-none">·</span>

            <Link
              href="/legal"
              target="_blank"
              className="hover:text-zinc-300 transition-colors"
            >
              Legal
            </Link>

            <span className="text-zinc-800 select-none">·</span>

            <Link
              href="https://github.com/mrepol742/melvinjonesrepol"
              target="_blank"
              className="hover:text-zinc-300 transition-colors"
            >
              {t("footer_open_source")}
            </Link>
          </div>
        </div>
      </nav>
    </footer>
  );
}
