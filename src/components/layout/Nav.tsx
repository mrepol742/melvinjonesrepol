"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBlog,
  faBriefcase,
  faCertificate,
  faEnvelope,
  faFolder,
  faGamepad,
  faImages,
  faMoon,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/theme";
import { useTranslations } from "next-intl";

export default function Nav() {
  const t = useTranslations("components.nav");
  const [show, setShow] = useState(true);
  const [showDesktopContact, setShowDesktopContact] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    {
      key: "projects",
      label: t("nav_projects"),
      href: "/projects",
      icon: faFolder,
    },
    {
      key: "blog",
      label: t("nav_blog"),
      href: "/blog",
      icon: faBlog,
      desktopOnly: true,
      mobileMenu: true,
    },
    {
      key: "gaming",
      label: t("nav_gaming"),
      href: "/gaming",
      icon: faGamepad,
      desktopOnly: true,
      mobileMenu: true,
    },
    {
      key: "certificates",
      label: t("nav_certificates"),
      href: "/certificates",
      icon: faCertificate,
    },
    {
      key: "work-experience",
      label: t("nav_work_experience"),
      href: "/work-experience",
      icon: faBriefcase,
    },
    {
      key: "gallery",
      label: t("nav_gallery"),
      href: "/gallery",
      icon: faImages,
      desktopOnly: true,
      mobileMenu: true,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 768;

      setShowDesktopContact(isDesktop);

      if (isDesktop) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const mobileMenuItems = navItems.filter((item) => item.mobileMenu);

  const baseLinkClass = "group flex items-center hover:text-orange-500";

  const hoverLabelClass =
    "ml-1 overflow-hidden max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-focus-visible:max-w-xs group-focus-visible:opacity-100 transition-all duration-200 whitespace-nowrap";

  const renderMainItem = (item: (typeof navItems)[number]) => (
    <li key={item.key} className={item.desktopOnly ? "hidden md:block" : ""}>
      <Link
        href={item.href}
        className={baseLinkClass}
        aria-label={`${item.label} - Melvin Jones Repol`}
        title={item.label}
      >
        <FontAwesomeIcon
          icon={item.icon}
          className="inline-block mr-1"
          size="1x"
        />

        <span className={hoverLabelClass}>{item.label}</span>
      </Link>
    </li>
  );

  return (
    <>
      <nav
        className={`rounded md:rounded-full fixed z-50 mt-5 top-0 left-1/2 transform -translate-x-1/2 bg-gray-800/60 text-white p-3 shadow-lg hover:shadow-xl transition-all duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-label="Main Navigation"
      >
        <div className="mx-auto flex justify-center items-center">
          <ul className="flex gap-4 items-center">
            <li title={t("nav_home")}>
              <Link href="/" className={baseLinkClass}>
                <Image
                  src="/favicon.ico"
                  alt="Logo"
                  width={25}
                  height={25}
                  className="inline-block rounded-full"
                  style={{
                    minWidth: 25,
                    minHeight: 25,
                    width: 25,
                    height: 25,
                  }}
                />

                <span className={hoverLabelClass}>{t("nav_home")}</span>
              </Link>
            </li>

            {navItems.map(renderMainItem)}

            {showDesktopContact ? (
              <li className="bg-gray-700 hover:bg-orange-400 transition-all text-white rounded-full px-2 py-1">
                <Link
                  href="/contact-me"
                  className="flex items-center whitespace-nowrap text-xs"
                  title={t("nav_contact_me")}
                >
                  {t("nav_contact_me")}
                </Link>
              </li>
            ) : (
              <li title={t("nav_contact_me")}>
                <Link href="/contact-me" className={baseLinkClass}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="inline-block mr-1"
                    size="1x"
                  />

                  <span className={hoverLabelClass}>{t("nav_contact_me")}</span>
                </Link>
              </li>
            )}

            <li
              onClick={toggleTheme}
              className="hidden md:flex items-center bg-gray-700 hover:bg-orange-400 transition-all text-white rounded-full px-2 py-1"
              title={t("nav_toggle_theme")}
            >
              <button className="text-xs">
                {theme === "dark" ? (
                  <FontAwesomeIcon icon={faSun} />
                ) : (
                  <FontAwesomeIcon icon={faMoon} />
                )}
              </button>
            </li>

            <li className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className={baseLinkClass}
                title={t("nav_menu")}
              >
                <span className="relative inline-block w-4 h-4 mr-1">
                  <FontAwesomeIcon
                    icon={faBars}
                    className={`absolute inset-0 transition-all duration-200 ${
                      isMobileMenuOpen
                        ? "opacity-0 rotate-90 scale-75"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                    size="1x"
                  />

                  <FontAwesomeIcon
                    icon={faXmark}
                    className={`absolute inset-0 transition-all duration-200 ${
                      isMobileMenuOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-75"
                    }`}
                    size="1x"
                  />
                </span>

                <span className={hoverLabelClass}>{t("nav_menu")}</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute top-0 right-0 h-full w-[82%] max-w-sm bg-slate-950/40 border-l border-white/10 shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Image
                src="/favicon.ico"
                alt="Logo"
                width={42}
                height={42}
                className="rounded-full"
              />

              <div>
                <p className="text-white font-semibold">Melvin Jones Repol</p>

                <p className="text-sm text-gray-400">
                  support@melvinjonesrepol.com
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="mb-6">
              <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {t("nav_main_sections")}
              </p>

              <ul className="space-y-1">
                {navItems
                  .filter(
                    (item) =>
                      item.key === "projects" ||
                      item.key === "certificates" ||
                      item.key === "work-experience" ||
                      item.key === "about",
                  )
                  .map((item) => (
                    <li key={item.key}>
                      <Link
                        href={item.href}
                        onClick={handleMobileLinkClick}
                        className="
                          group flex items-center gap-3
                          rounded-xl
                          px-3 py-3
                          hover:bg-slate-800/40
                          transition-all duration-200
                        "
                      >
                        <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-white group-hover:text-orange-400 transition-colors">
                          <FontAwesomeIcon icon={item.icon} />
                        </div>

                        <span className="text-sm text-white">{item.label}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {t("nav_other_sections")}
              </p>

              <ul className="space-y-1">
                {mobileMenuItems.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      onClick={handleMobileLinkClick}
                      className="
                        group flex items-center gap-3
                        rounded-xl
                        px-3 py-3
                        hover:bg-slate-800/40
                        transition-all duration-200
                      "
                    >
                      <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-white group-hover:text-orange-400 transition-colors">
                        <FontAwesomeIcon icon={item.icon} />
                      </div>

                      <span className="text-sm text-white">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 p-4 space-y-2">
            <button
              onClick={() => {
                toggleTheme();
                handleMobileLinkClick();
              }}
              className="
                w-full flex items-center justify-between
                rounded-xl px-4 py-3
                bg-gray-900 hover:bg-gray-800
                transition-all
              "
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-white">
                  <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
                </div>

                <div className="text-left">
                  <p className="text-sm text-white">{t("nav_theme")}</p>

                  <p className="text-xs text-gray-400">
                    {t("nav_toggle_appearance")}
                  </p>
                </div>
              </div>
            </button>

            <Link
              href="/contact-me"
              onClick={handleMobileLinkClick}
              className="
                flex items-center justify-center
                rounded-xl px-4 py-3
                bg-gray-900 hover:bg-orange-400
                text-white
                transition-all
              "
            >
              {t("nav_contact_me")}
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
