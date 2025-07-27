"use client"

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="rounded bg-gray-800 text-white p-4">
      <div className="mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold hover:underline">
          Melvin Jones Repol
        </Link>
        {/* Hamburger button for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/my-team" className="hover:underline">
              My Team
            </Link>
          </li>
          <li>
            <Link href="/contact-me" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="md:hidden mt-2 flex flex-col space-y-2 bg-gray-700 rounded p-2">
          <li>
            <Link
              href="/"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/team"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
