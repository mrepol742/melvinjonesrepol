"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HomeIcon,
  FolderKanbanIcon,
  ShieldHalfIcon,
  ShieldCheckIcon,
  BriefcaseBusinessIcon,
  ContactRoundIcon,
} from "lucide-react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="rounded-full m-5 bg-gray-800 text-white p-2 max-w-xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mx-auto flex justify-center items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="group  flex items-center">
              <Image
                src="/favicon.png"
                alt="Logo"
                width={25}
                height={25}
                className="inline-block mr-1 rounded-full"
              />
              <span className="ml-1 overflow-hidden max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-focus-visible:max-w-xs group-focus-visible:opacity-100 transition-all duration-200 whitespace-nowrap">
                Melvin Jones Repol
              </span>
            </Link>
          </li>
          <li>
            <Link href="/projects" className="group  flex items-center">
              <FolderKanbanIcon className="inline-block mr-1" />
              <span className="ml-1 overflow-hidden max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-focus-visible:max-w-xs group-focus-visible:opacity-100 transition-all duration-200 whitespace-nowrap">
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link href="/my-team" className="group  flex items-center">
              <ShieldHalfIcon className="inline-block mr-1" />
              <span className="ml-1 overflow-hidden max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-focus-visible:max-w-xs group-focus-visible:opacity-100 transition-all duration-200 whitespace-nowrap">
                My Team
              </span>
            </Link>
          </li>
          <li>
            <Link href="/certificates" className="group  flex items-center">
              <ShieldCheckIcon className="inline-block mr-1" />
              <span className="ml-1 overflow-hidden max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-focus-visible:max-w-xs group-focus-visible:opacity-100 transition-all duration-200 whitespace-nowrap">
                Certificates
              </span>
            </Link>
          </li>
          <li>
            <Link href="/work-experience" className="group  flex items-center">
              <BriefcaseBusinessIcon className="inline-block mr-1" />
              <span className="ml-1 overflow-hidden max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-focus-visible:max-w-xs group-focus-visible:opacity-100 transition-all duration-200 whitespace-nowrap">
                Work Experience
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact-me" className="group  flex items-center">
              <ContactRoundIcon className="inline-block mr-1" />
              <span className="ml-1 overflow-hidden max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-focus-visible:max-w-xs group-focus-visible:opacity-100 transition-all duration-200 whitespace-nowrap">
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
