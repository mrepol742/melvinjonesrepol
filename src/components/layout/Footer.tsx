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
import TrustPilotWidget from "../common/TrustPilotWidget";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function Footer({
  posts,
}: {
  posts: { slug: string; title: string }[];
}) {
  const t = useTranslations("components.footer");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: "en", label: "English", region: "Global", short: "EN" },
    { code: "fil", label: "Filipino", region: "Philippines", short: "FIL" },
    {
      code: "cmn",
      label: "中文 (Chinese)",
      region: "China",
      short: "ZH",
    },
    {
      code: "es",
      label: "Español (Spanish)",
      region: "Latin America",
      short: "ES",
    },
    {
      code: "hi",
      label: "हिंदी (Hindi)",
      region: "India",
      short: "HI",
    },
  ];

  const handleLocaleChange = (nextLocale: string) => {
    if (nextLocale === locale) return;

    const normalizedPath = pathname.replace(
      /^\/(en|fil|cmn|es|hi)(?=\/|$)/,
      "",
    );
    const nextPath = `/${nextLocale}${normalizedPath || "/"}`;
    console.log(nextPath);
    // replace and refresh to ensure the new locale is applied immediately
    router.replace(nextPath);
    router.refresh();
  };

  return (
    <footer
      className="bg-gray-900 text-gray-200 py-10 border-t border-gray-800"
      data-aos="fade-up"
    >
      <nav aria-label="Footer Navigation" className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row md:justify-between md:items-start gap-8">
          {/* Logo & Description */}
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-tr from-violet-500 via-yellow-300 to-green-400 bg-clip-text text-transparent animate-gradient-shift">
              Melvin Jones Repol
            </span>
            <p className="my-2 text-sm text-gray-400 max-w-xs">
              {t("description")}
            </p>

            <div className="flex space-x-3 mb-4">
              <Link
                href="https://facebook.com/melvinjonesrepol"
                target="_blank"
                aria-label="Facebook"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="lg"
                  className="hover:text-red-500 transition"
                />
              </Link>
              <Link
                href="https://github.com/mrepol742"
                target="_blank"
                aria-label="GitHub"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                  className="hover:text-red-500 transition"
                />
              </Link>
              <Link
                href="https://linkedin.com/in/mrepol742"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="lg"
                  className="hover:text-red-500 transition"
                />
              </Link>
              <Link
                href="https://youtube.com/@mrepol742"
                target="_blank"
                aria-label="YouTube"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="lg"
                  className="hover:text-red-500 transition"
                />
              </Link>
              <Link
                href="https://steamcommunity.com/id/mrepol742"
                target="_blank"
                aria-label="Steam"
              >
                <FontAwesomeIcon
                  icon={faSteam}
                  size="lg"
                  className="hover:text-red-500 transition"
                />
              </Link>
            </div>

            <TrustPilotWidget />
          </div>
          {/* Links */}
          <div>
            <div>
              <h4 className="text-sm font-semibold mb-2 text-white">Links</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    {t("footer_home")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    {t("footer_projects")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    {t("footer_blog")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gaming"
                    className="hover:text-orange-500 text-blue-400"
                  >
                    {t("footer_gaming")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/teams"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    {t("footer_teams")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/certificates"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    {t("footer_certificates")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work-experience"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    {t("footer_work_experience")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    {t("footer_gallery")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-me"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    {t("footer_contact_me")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    {t("footer_about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/terms-of-service"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    {t("footer_terms_of_service")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/privacy-policy"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    {t("footer_privacy_policy")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/cookie-policy"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    {t("footer_cookie_policy")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-2 text-white">Resources</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="https://wakatime.melvinjonesrepol.com"
                  className="hover:text-orange-500 text-blue-400"
                >
                  {t("footer_wakatime_stats")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://ai.melvinjonesrepol.com"
                  className="hover:text-orange-500 text-red-400"
                >
                  {t("footer_melvin_ai")}
                </Link>
              </li>
              <li>
                <Link
                  href="/webvium-browser"
                  className="hover:text-orange-500 text-blue-400"
                >
                  {t("footer_webvium_browser")}
                </Link>
              </li>
              <li>
                <Link
                  href="/protocol-discussion-platform"
                  className="hover:text-orange-500 text-gray-400"
                >
                  {t("footer_pdp")}
                </Link>
              </li>
              <li>
                <Link
                  href="/axleshift-freight-management"
                  className="hover:text-orange-500 text-gray-400"
                >
                  {t("footer_afm")}
                </Link>
              </li>
              <li>
                <Link
                  href="/point-of-sale"
                  className="hover:text-orange-500 text-gray-400"
                >
                  {t("footer_pos")}
                </Link>
              </li>
              <li>
                <Link
                  href="/ulisha-store-laravel"
                  className="hover:text-orange-500 text-blue-400"
                >
                  {t("footer_usl")}
                </Link>
              </li>
              <li>
                <Link
                  href="/canis-chatbot"
                  className="hover:text-orange-500 text-gray-400"
                >
                  {t("footer_canis_chatbot")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://keepandroidopen.org/"
                  className="hover:text-orange-500 text-red-400"
                >
                  {t("footer_kao")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.hallofcodes.org"
                  className="hover:text-orange-500 text-blue-400"
                >
                  {t("footer_hoc")}
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="hover:text-orange-500 text-gray-400"
                >
                  {t("footer_sitemap")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-w-full md:max-w-90 lg:max-w-40 xl:max-w-50">
            <h4 className="text-sm font-semibold mb-2 text-white">Tools</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="/floating-console-extension"
                  className="hover:text-orange-500 text-gray-400"
                >
                  {t("footer_fce")}
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/open-graph"
                  className="hover:text-orange-500 text-gray-400"
                >
                  {t("footer_ogc")}
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/ip-address"
                  className="hover:text-orange-500 text-gray-400"
                >
                  {t("footer_iat")}
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/qrcode-generator"
                  className="hover:text-orange-500 text-gray-400"
                >
                  {t("footer_qcg")}
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/user-agent"
                  className="hover:text-orange-500 text-gray-400"
                >
                  {t("footer_uap")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://go.melvinjonesrepol.com"
                  className="hover:text-orange-500 text-blue-400"
                >
                  {t("footer_shortlink")}
                </Link>
              </li>
            </ul>

            <h4 className="text-sm font-semibold my-2 text-white">
              {t("footer_recent_posts")}
            </h4>
            {posts.length > 0 ? (
              <ul className="space-y-1 text-sm">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block max-w-full truncate hover:text-orange-500 text-gray-400"
                      title={post.title}
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 text-sm">
                {t("footer_no_recent_posts")}
              </p>
            )}
          </div>

          <div className="rounded-xl border border-gray-800/80 bg-gray-900/40 p-4">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              {t("footer_language_region")}
            </p>
            <div className="relative">
              <select
                value={locale}
                onChange={(e) => handleLocaleChange(e.target.value)}
                className="w-full appearance-none rounded-lg border border-gray-800 bg-gray-950/40 px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500"
                aria-label="Select language"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label} · {lang.region}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                ▼
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-300">
          <div className="text-left">
            <span className="block">
              © {new Date().getFullYear()} Melvin Jones Repol.{" "}
              {t("footer_all_rights_reserved")}
            </span>
            <p className="text-muted text-gray-400 max-w-sm me-5">
              {t("footer_copyright")}
            </p>
          </div>

          <small className="block mt-4 text-xs text-green-400 mb-3">
            <Link
              href="https://github.com/mrepol742/melvinjonesrepol"
              target="_blank"
              className="underline hover:text-green-300"
            >
              {t("footer_open_source")}
            </Link>
          </small>
        </div>
      </nav>
    </footer>
  );
}
