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
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Melvin Jones Repol. All rights reserved.
        </p>
        <Link href="/" className="text-gray-400 hover:underline inline-block">
          <FacebookIcon size={15} className="inline-block mx-2" />
        </Link>
        <Link href="/" className="text-gray-400 hover:underline inline-block">
          <InstagramIcon size={15} className="inline-block mx-2" />
        </Link>
        <Link href="/" className="text-gray-400 hover:underline inline-block">
          <TwitterIcon size={15} className="inline-block mx-2" />
        </Link>
        <Link href="/" className="text-gray-400 hover:underline inline-block">
          <GithubIcon size={15} className="inline-block mx-2" />
        </Link>
        <Link href="/" className="text-gray-400 hover:underline inline-block">
          <LinkedinIcon size={15} className="inline-block mx-2" />
        </Link>
        <Link href="/" className="text-gray-400 hover:underline inline-block">
          <YoutubeIcon size={15} className="inline-block mx-2" />
        </Link>
      </div>
    </footer>
  );
}
