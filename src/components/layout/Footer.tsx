"use client";

import { useTheme } from "@/hooks/useTheme";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faFacebook,
  faGithub,
  faLinkedin,
  faSteam,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Script from "next/script";
import Image from "next/image";
import TrustPilotWidget from "../widget/TrustPilotWidget";
import Button from "../Button";

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="bg-gray-900 text-gray-200 py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row md:justify-between md:items-start gap-8">
          {/* Logo & Description */}
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-tr from-violet-500 via-yellow-300 to-green-400 bg-clip-text text-transparent animate-gradient-shift">
              Melvin Jones Repol
            </span>
            <p className="mt-2 text-sm text-gray-400 max-w-xs">
              Building modern software experiences with passion and precision.
              Striving for excellence, one project at a time.
            </p>
            <small className="block mt-4 text-xs text-green-400 mb-3">
              This site is Open Source.{" "}
              <Link
                href="https://github.com/mrepol742/melvinjonesrepol.com"
                target="_blank"
                className="underline hover:text-green-300"
              >
                View on GitHub
              </Link>
            </small>
            <h4 className="text-sm font-semibold mb-2 text-white">Follow Us</h4>
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
                    href="/pricing"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    Pricing
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
                    href="https://cv.melvinjonesrepol.com"
                    className="hover:text-orange-500 text-blue-400"
                  >
                    CV
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/terms-of-service"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/privacy-policy"
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
                  href="https://wakatime.melvinjonesrepol.com"
                  className="hover:text-orange-500 text-blue-400"
                >
                  Wakatime Stats
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
                  href="/webvium-browser"
                  className="hover:text-orange-500 text-blue-400"
                >
                  Webvium Browser
                </Link>
              </li>
              <li>
                <Link
                  href="/webvium-launcher"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Webvium Launcher
                </Link>
              </li>
              <li>
                <Link
                  href="/axleshift-freight-management"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Axleshift Freight Management
                </Link>
              </li>
              <li>
                <Link
                  href="/point-of-sale"
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
                  href="/canis-chatbot"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Canis Chatbot
                </Link>
              </li>
              <li>
                <Link
                  href="https://devpulse-waka.vercel.app"
                  className="hover:text-indigo-500 text-gray-400"
                >
                  DevPulse
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
                  href="/floating-console-extension"
                  className="hover:text-orange-500 text-gray-400"
                >
                  Floating Console Extension
                </Link>
              </li>
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
                  href="/tools/user-agent"
                  className="hover:text-orange-500 text-gray-400"
                >
                  User Agent Parser
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
            <h4 className="text-sm font-semibold">Theme</h4>
            <div className="flex items-center space-x-3 mb-4">
              <Button
                onClick={toggleTheme}
                className="bg-gray-700 before:bg-gray-800 after:bg-gray-800"
              >
                {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
              </Button>
            </div>
            <h4 className="text-sm font-semibold text-white">My App</h4>
            <div className="flex mb-4">
              <Link
                href="https://released.melvinjonesrepol.com/android/melvinjones-app.apk"
                aria-label="Melvin Jones App"
              >
                <Button
                  icon={faAndroid}
                  className="bg-gray-700 before:bg-gray-800 after:bg-gray-800"
                >
                  Download
                </Button>
              </Link>
            </div>
            <h4 className="text-sm font-semibold mb-2 text-white">
              Sponsor/Support
            </h4>
            <iframe
              src="https://github.com/sponsors/mrepol742/button"
              title="Sponsor mrepol742"
              height="32"
              className="mb-2 transition-transform duration-200 hover:translate-x-1 hover:translate-y-1"
              width="170"
            ></iframe>
            <Link href="https://ko-fi.com/F1F6EHA8F" target="_blank">
              <Image
                height="36"
                width="170"
                src="https://storage.ko-fi.com/cdn/kofi6.png?v=6"
                className="mb-2 transition-transform duration-200 hover:translate-x-1 hover:translate-y-1"
                alt="Buy Me a Coffee at ko-fi.com"
              />
            </Link>
            <Link href="https://www.buymeacoffee.com/mrepol742">
              <Image
                alt="Buy me a coffee mrepol742"
                height="36"
                width="170"
                className="transition-transform duration-200 hover:translate-x-1 hover:translate-y-1"
                src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=mrepol742&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
              />
            </Link>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} Melvin Jones Repol. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
