"use client";

import { useConsent } from "@/context/consent";
import Image from "next/image";

export default function CookiePreference() {
  const { openBanner } = useConsent();

  return (
    <button
      onClick={openBanner}
      className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors"
    >
      <Image
        src="/images/0410-hd-privacy-choices-icon.png"
        alt="Privacy Choices"
        width={16}
        height={16}
      />
      Cookie Preferences
    </button>
  );
}
