"use client";

import Script from "next/script";
import { useConsent } from "@/context/consent";

export default function LivechatAI() {
  const { consent } = useConsent();

  if (!consent?.functional) {
    return null;
  }

  return (
    <Script
      id="livechat-ai"
      src="https://app.livechatai.com/embed.js"
      strategy="afterInteractive"
      data-id="cmdmcvh4n0001jt0c03xemlxw"
      onLoad={() => {
        console.log("LiveChatAI loaded");
      }}
    />
  );
}
