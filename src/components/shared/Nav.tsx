"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCertificate,
  faEnvelope,
  faFolder,
  faGamepad,
  faImages,
  faMoon,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/theme";

export default function Nav() {
  const [show, setShow] = useState(true);
  const [showDesktopContact, setShowDesktopContact] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      setShowDesktopContact(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <nav
        className={`rounded md:rounded-full fixed z-50 mt-5 top-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-3 max-w-xl shadow-lg hover:shadow-xl transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-label="Main Navigation"
      >
        <div className="mx-auto flex justify-center items-center">
          <ul className="flex space-x-3">
            <li>
              <Link
                href="/"
                className="group flex items-center"
                aria-label="Home - Melvin Jones Repol"
                title="Home"
              >
                <span className="relative flex items-center">
                  <Image
                    src="/favicon.png"
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
                </span>
                <span className="hover:text-orange-500 ml-1 overflow-hidden max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-focus-visible:max-w-xs group-focus-visible:opacity-100 transition-all duration-200 whitespace-nowrap">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="group flex items-center hover:text-orange-500"
                aria-label="Projects - Melvin Jones Repol"
                title="Projects"
              >
                <FontAwesomeIcon
                  icon={faFolder}
                  className="inline-block mr-1"
                  size="1x"
                />
                <span className="ml-1 overflow-hidden max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-focus-visible:max-w-xs group-focus-visible:opacity-100 transition-all duration-200 whitespace-nowrap">
                  Projects
                </span>
              </Link>
            </li>
            <li
              className="hidden md:block"
              aria-label="Gaming - Melvin Jones Repol"
              title="Gaming"
            >
              <Link
                href="/gaming"
                className="group flex items-center hover:text-orange-500"
              >
                <FontAwesomeIcon
                  icon={faGamepad}
                  className="inline-block mr-1"
                  size="1x"
                />
                <span className="ml-1 overflow-hidden max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-focus-visible:max-w-xs group-focus-visible:opacity-100 transition-all duration-200 whitespace-nowrap">
                  Gaming
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/teams"
                className="group flex items-center hover:text-orange-500"
                aria-label="Teams - Melvin Jones Repol"
                title="Teams"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="inline-block mr-1"
                  size="1x"
                />
                <span className="ml-1 overflow-hidden max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-focus-visible:max-w-xs group-focus-visible:opacity-100 transition-all duration-200 whitespace-nowrap">
                  Teams
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/certificates"
                className="group flex items-center hover:text-orange-500"
                aria-label="Certificates - Melvin Jones Repol"
                title="Certificates"
              >
                <FontAwesomeIcon
                  icon={faCertificate}
                  className="inline-block mr-1"
                  size="1x"
                />
                <span className="ml-1 overflow-hidden max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-focus-visible:max-w-xs group-focus-visible:opacity-100 transition-all duration-200 whitespace-nowrap">
                  Certificates
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/work-experience"
                className="group flex items-center hover:text-orange-500"
                aria-label="Work Experience - Melvin Jones Repol"
                title="Work Experience"
              >
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="inline-block mr-1"
                  size="1x"
                />
                <span className="ml-1 overflow-hidden max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-focus-visible:max-w-xs group-focus-visible:opacity-100 transition-all duration-200 whitespace-nowrap">
                  Work Experience
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="group flex items-center hover:text-orange-500"
                aria-label="Gallery - Melvin Jones Repol"
                title="Gallery"
              >
                <FontAwesomeIcon
                  icon={faImages}
                  className="inline-block mr-1"
                  size="1x"
                />
                <span className="ml-1 overflow-hidden max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-focus-visible:max-w-xs group-focus-visible:opacity-100 transition-all duration-200 whitespace-nowrap">
                  Gallery
                </span>
              </Link>
            </li>
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
              <li>
                <Link
                  href="/contact-me"
                  className="group flex items-center hover:text-orange-500"
                  aria-label="Contact Me - Melvin Jones Repol"
                  title="Contact Me"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="inline-block mr-1"
                    size="1x"
                  />
                  <span className="ml-1 overflow-hidden max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-focus-visible:max-w-xs group-focus-visible:opacity-100 transition-all duration-200 whitespace-nowrap">
                    Contact
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>

      <button
        onClick={toggleTheme}
        className={`hidden md:flex fixed top-5 right-5 z-50 h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg transition-transform duration-300 hover:shadow-xl focus:outline-none ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </button>
    </div>
  );
}
