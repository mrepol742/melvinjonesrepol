"use client";

import { useTheme } from "@/hooks/theme";
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
import TrustPilotWidget from "./TrustPilotWidget";
import { faDownload, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { getRecentPosts } from "@/lib/posts";

export default function Footer({
  posts,
}: {
  posts: { slug: string; title: string }[];
}) {
  const { theme, toggleTheme } = useTheme();

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
                    href="/blog"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    Blog
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
                    href="/teams"
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
                    href="/work-experience"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    Work Experience
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
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/privacy-policy"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/cookie-policy"
                    className="hover:text-orange-500 text-gray-400"
                  >
                    Cookie Policy
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
                  href="https://keepandroidopen.org/"
                  className="hover:text-orange-500 text-red-400"
                >
                  Keep Android Open
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
          <div className="max-w-full md:max-w-90 lg:max-w-40 xl:max-w-50">
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

            <h4 className="text-sm font-semibold my-2 text-white">
              Recent Posts
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
              <p className="text-gray-400 text-sm">No recent posts.</p>
            )}
          </div>
          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold mb-2 text-white">Sponsor</h4>
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
        <div className="flex justify-between mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-300">
          <div className="text-left">
            <span className="block">
              © {new Date().getFullYear()} Melvin Jones Repol. All rights
              reserved.
            </span>
            <p className="text-muted text-gray-400 max-w-sm me-5">
              Melvin Jones Repol (also known as Repol Systems) is a single legal
              entity responsible for all services and content on this website.
            </p>
          </div>
          <button onClick={toggleTheme}>
            {theme === "dark" ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>
        </div>
      </nav>
    </footer>
  );
}
