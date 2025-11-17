"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCertificate,
  faEnvelope,
  faFolder,
  faImages,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Nav() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <div className="my-10">
      <nav
        className={`fixed z-50 mt-5 top-0 left-1/2 transform -translate-x-1/2 rounded bg-gray-800 text-white p-3 max-w-xl shadow-lg hover:shadow-xl transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex justify-center items-center">
          <ul className="flex space-x-3">
            <li>
              <Link href="/" className="group flex items-center">
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
                  Melvin Jones Repol
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="group flex items-center hover:text-orange-500"
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
            <li>
              <Link
                href="/my-team"
                className="group flex items-center hover:text-orange-500"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="inline-block mr-1"
                  size="1x"
                />
                <span className="ml-1 overflow-hidden max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-focus-visible:max-w-xs group-focus-visible:opacity-100 transition-all duration-200 whitespace-nowrap">
                  My Team
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/certificates"
                className="group flex items-center hover:text-orange-500"
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
            <li>
              <Link
                href="/contact-me"
                className="group flex items-center hover:text-orange-500"
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
          </ul>
        </div>
      </nav>
    </div>
  );
}
