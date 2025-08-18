"use client";

import { useTheme } from "@/hooks/useTheme";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faSteam, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="bg-gray-900 text-gray-200 py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Logo & Description */}
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-tr from-violet-500 via-yellow-300 to-green-400 bg-clip-text text-transparent animate-gradient-shift">
              Melvin Jones Repol
            </span>
            <p className="mt-2 text-sm text-gray-400 max-w-xs">
              Building modern software experiences with passion and precision.
              Striving for excellence, one project at a time.
            </p>
            <small className="block mt-4 text-xs text-green-400">
              This site is Open Source.{" "}
              <Link
                href="https://github.com/mrepol742/melvinjonesrepol.com"
                target="_blank"
                className="underline hover:text-green-300"
              >
                View on GitHub
              </Link>
            </small>
            <small className="block mt-2 text-xs text-gray-500">
              mrepol742@gmail.com
            </small>
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
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gaming"
                    className="hover:text-orange-500 text-blue-400"
                  >
                    Gaming
                  </Link>
                </li>
                <li>
                  <Link
                    href="/my-team"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    My Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/certificates"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    Certificates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-me"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    Privacy
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
                  href="/book-a-demo"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Book a Demo
                </Link>
              </li>
              <li>
                <Link
                  href="https://ai.melvinjonesrepol.com"
                  className="hover:text-orange-500 text-red-400"
                >
                  Melvin AI
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/webvium-browser"
                  className="hover:text-orange-500 text-blue-400"
                >
                  Webvium Browser
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/orion-chatbot"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Orion Chatbot
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/axleshift-core-1"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Axleshift Core 1
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/point-of-sale"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Point of Sale
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.ulishastore.com"
                  className="hover:text-orange-500 text-blue-400"
                >
                  Ulisha Store
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/canis-chatbot"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Canis Chatbot
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2 text-white">Tools</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="/tools/open-graph"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Open Graph Checker
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/ip-address"
                  className="hover:text-orange-500 text-gray-400"
                >
                  IP Address Tool
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/qrcode-generator"
                  className="hover:text-orange-500 text-gray-400"
                >
                  QR Code Generator
                </Link>
              </li>
              <li>
                <Link
                  href="https://go.melvinjonesrepol.com"
                  className="hover:text-orange-500 text-blue-400"
                >
                  Shortlink
                </Link>
              </li>
            </ul>
          </div>
          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold mb-2">Theme</h4>
            <div className="flex items-center space-x-3 mb-4">
              <button
                onClick={toggleTheme}
                className="px-3 py-1 bg-gray-700 rounded hover:bg-orange-500 transition-colors"
              >
                {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
              </button>
            </div>
            <h4 className="text-sm font-semibold mb-2 text-white">Follow Us</h4>
            <div className="flex space-x-3">
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
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} Melvin Jones Repol. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
