import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GithubIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Logo & Description */}
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold text-white">
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
          </div>
          {/* Links */}
          <div className="flex flex-1 justify-between">
            <div>
              <h4 className="text-sm font-semibold mb-2 text-white">Links</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/" className="hover:underline text-gray-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:underline text-gray-400">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/my-team" className="hover:underline text-gray-400">
                    My Team
                  </Link>
                </li>
                <li>
                  <Link href="/certificates" className="hover:underline text-gray-400">
                    Certificates
                  </Link>
                </li>
                <li>
                  <Link href="/contact-me" className="hover:underline text-gray-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2 text-white">
                Resources
              </h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/blog" className="hover:underline text-gray-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:underline text-gray-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline text-gray-400">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold mb-2 text-white">Follow Us</h4>
            <div className="flex space-x-3">
              <Link
                href="https://facebook.com/melvinjonesrepol"
                target="_blank"
                aria-label="Facebook"
              >
                <FacebookIcon
                  size={20}
                  className="hover:text-blue-500 transition"
                />
              </Link>
              <Link
                href="https://instagram.com/melvinjonesrepol"
                target="_blank"
                aria-label="Instagram"
              >
                <InstagramIcon
                  size={20}
                  className="hover:text-pink-400 transition"
                />
              </Link>
              <Link
                href="https://x.com/@mrepol742"
                target="_blank"
                aria-label="Twitter"
              >
                <TwitterIcon
                  size={20}
                  className="hover:text-blue-400 transition"
                />
              </Link>
              <Link
                href="https://github.com/mrepol742"
                target="_blank"
                aria-label="GitHub"
              >
                <GithubIcon
                  size={20}
                  className="hover:text-gray-300 transition"
                />
              </Link>
              <Link
                href="https://linkedin.com/in/mrepol742"
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkedinIcon
                  size={20}
                  className="hover:text-blue-700 transition"
                />
              </Link>
              <Link
                href="https://youtube.com/@mrepol742"
                target="_blank"
                aria-label="YouTube"
              >
                <YoutubeIcon
                  size={20}
                  className="hover:text-red-500 transition"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Melvin Jones Repol. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
