"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBlog,
  faBriefcase,
  faCertificate,
  faCircleInfo,
  faEnvelope,
  faFolder,
  faGamepad,
  faImages,
  faMoon,
  faSun,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/theme";

const navItems = [
  { key: "projects", label: "Projects", href: "/projects", icon: faFolder },
  {
    key: "blog",
    label: "Blog",
    href: "/blog",
    icon: faBlog,
    desktopOnly: true,
    mobileMenu: true,
  },
  {
    key: "gaming",
    label: "Gaming",
    href: "/gaming",
    icon: faGamepad,
    desktopOnly: true,
    mobileMenu: true,
  },
  {
    key: "teams",
    label: "Teams",
    href: "/teams",
    icon: faUser,
    desktopOnly: true,
    mobileMenu: true,
  },
  {
    key: "certificates",
    label: "Certificates",
    href: "/certificates",
    icon: faCertificate,
  },
  {
    key: "work-experience",
    label: "Work Experience",
    href: "/work-experience",
    icon: faBriefcase,
  },
  {
    key: "gallery",
    label: "Gallery",
    href: "/gallery",
    icon: faImages,
    desktopOnly: true,
    mobileMenu: true,
  },
  { key: "about", label: "About", href: "/about", icon: faCircleInfo },
];

export default function Nav() {
  const [show, setShow] = useState(true);
  const [showDesktopContact, setShowDesktopContact] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, toggleTheme } = useTheme();

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

  const renderMobileItem = (item: (typeof navItems)[number]) => (
    <li key={`mobile-${item.key}`}>
      <Link
        href={item.href}
        className={baseLinkClass}
        onClick={handleMobileLinkClick}
        aria-label={`${item.label} - Melvin Jones Repol`}
        title={item.label}
      >
        <FontAwesomeIcon
          icon={item.icon}
          className="inline-block mr-1"
          size="1x"
        />
        <span className="ml-1">{item.label}</span>
      </Link>
    </li>
  );

  return (
    <>
      <nav
        className={`rounded md:rounded-full fixed z-50 mt-5 top-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-3 shadow-lg hover:shadow-xl transition-all duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-label="Main Navigation"
      >
        <div className="mx-auto flex justify-center items-center">
          <ul className="flex gap-4">
            <li aria-label="Home - Melvin Jones Repol" title="Home">
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
                <span className={hoverLabelClass}>Me</span>
              </Link>
            </li>

            {navItems.map(renderMainItem)}

            {showDesktopContact ? (
              <li className="bg-gray-700 hover:bg-orange-400 transition-all text-white rounded-full px-2 py-1">
                <Link
                  href="/contact-me"
                  className="flex items-center whitespace-nowrap text-xs"
                  aria-label="Contact Me - Melvin Jones Repol"
                  title="Contact Me"
                >
                  Contact Me
                </Link>
              </li>
            ) : (
              <li
                aria-label="Contact Me - Melvin Jones Repol"
                title="Contact Me"
              >
                <Link
                  href="/contact-me"
                  className={baseLinkClass}
                  aria-label="Contact Me - Melvin Jones Repol"
                  title="Contact Me"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="inline-block mr-1"
                    size="1x"
                  />
                  <span className={hoverLabelClass}>Contact</span>
                </Link>
              </li>
            )}

            <li
              onClick={toggleTheme}
              className="hidden md:flex items-center bg-gray-700 hover:bg-orange-400 transition-all text-white rounded-full px-2 py-1"
              aria-label="Toggle Theme - Melvin Jones Repol"
              title="Toggle Theme"
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
                aria-label="Menu - Melvin Jones Repol"
                title="Menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav-menu"
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
                <span className={hoverLabelClass}>Menu</span>
              </button>
            </li>
          </ul>
        </div>

        <div
          id="mobile-nav-menu"
          className={`md:hidden transition-[grid-template-rows,opacity,transform] duration-300 origin-top overflow-hidden grid ${
            isMobileMenuOpen
              ? "mt-3 grid-rows-[1fr] opacity-100 translate-y-0"
              : "mt-0 grid-rows-[0fr] opacity-0 -translate-y-2 pointer-events-none"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="min-h-0">
            <div className="bg-gray-700 rounded-lg p-3 shadow-lg">
              <ul className="flex flex-col gap-2">
                {mobileMenuItems.map(renderMobileItem)}

                <li
                  aria-label="Toggle Theme - Melvin Jones Repol"
                  title="Theme"
                >
                  <button
                    onClick={() => {
                      toggleTheme();
                      handleMobileLinkClick();
                    }}
                    className={baseLinkClass}
                  >
                    <FontAwesomeIcon
                      icon={theme === "dark" ? faSun : faMoon}
                      className="inline-block mr-1"
                      size="1x"
                    />
                    <span className="ml-1">Toggle Theme</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
