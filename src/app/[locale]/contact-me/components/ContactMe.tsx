"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { faAt, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

export default function ContactMe() {
  const t = useTranslations("contact_me");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    username: "",
  });

  const [grecaptchaLoaded, setGrecaptchaLoaded] = useState(false);

  const wordCount =
    formData.message.trim() === ""
      ? 0
      : formData.message.trim().split(/\s+/).length;
  const isValidWordCount = wordCount >= 20 && wordCount <= 500;

  useEffect(() => {
    const scriptId = "recaptcha-enterprise";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.onload = () => setGrecaptchaLoaded(true);
      document.body.appendChild(script);
    } else {
      setGrecaptchaLoaded(true);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!grecaptchaLoaded || !window.grecaptcha?.enterprise) {
      toast.error(t("recaptcha_error"));
      return;
    }

    const resolveAfter3Sec = new Promise(async (resolve, reject) => {
      try {
        const token = await window.grecaptcha.enterprise.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "",
          { action: "contact_me" },
        );

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, token }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.error || "Something went wrong");
        }

        setFormData({ name: "", email: "", message: "", username: "" });

        resolve(data);
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(resolveAfter3Sec, {
      pending: t("toast_pending"),
      success: t("toast_success"),
      error: {
        render({ data }) {
          const err = data as Error;
          return err?.message || t("toast_error");
        },
      },
    });
  };

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
      <div className="lg:col-span-3">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest mb-2 opacity-50">
                {t("form_name_label")}
              </p>
              <Input
                icon={faUser}
                handleChange={handleChange}
                form={{
                  name: "name",
                  value: formData.name,
                  placeholder: t("form_name_placeholder"),
                  required: true,
                }}
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest mb-2 opacity-50">
                {t("form_email_label")}
              </p>
              <Input
                icon={faAt}
                handleChange={handleChange}
                form={{
                  name: "email",
                  value: formData.email,
                  placeholder: t("form_email_placeholder"),
                  required: true,
                }}
              />
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest mb-2 opacity-50">
              {t("form_username_label")}
            </p>
            <Input
              icon={faUser}
              handleChange={handleChange}
              form={{
                name: "username",
                value: formData.username,
                placeholder: t("form_username_placeholder"),
                required: true,
              }}
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs uppercase tracking-widest opacity-50">
                {t("form_message_label")}
              </p>
              <span
                className={`text-xs font-mono transition-colors ${
                  wordCount === 0
                    ? "opacity-30"
                    : isValidWordCount
                      ? "text-green-500"
                      : wordCount > 500
                        ? "text-red-500"
                        : "text-amber-500"
                }`}
              >
                {wordCount} / 500
              </span>
            </div>

            <div className="rounded-xl border border-zinc-800 px-4 py-3 transition-all duration-200 focus-within:shadow-sm focus-within:-translate-y-px">
              <textarea
                rows={7}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={t("form_message_placeholder")}
                className="w-full outline-none bg-transparent text-sm placeholder:opacity-40 resize-none"
              />
            </div>

            <div className="mt-1.5 flex items-center justify-between">
              {wordCount > 0 && !isValidWordCount ? (
                <p className="text-xs text-amber-500">
                  {wordCount < 20
                    ? `${20 - wordCount} more word${20 - wordCount === 1 ? "" : "s"} needed`
                    : `${wordCount - 500} word${wordCount - 500 === 1 ? "" : "s"} over limit`}
                </p>
              ) : (
                <span />
              )}
              <div className="flex gap-0.5">
                {Array.from({ length: 10 }).map((_, i) => {
                  const threshold = (i + 1) * 50;
                  const filled = wordCount >= threshold;
                  const partial =
                    !filled && wordCount > i * 50 && wordCount < threshold;
                  return (
                    <div
                      key={i}
                      className={`h-1 w-4 rounded-full transition-all duration-200 ${
                        filled
                          ? wordCount > 500
                            ? "bg-red-500"
                            : "bg-green-500"
                          : partial
                            ? "bg-amber-400"
                            : "opacity-10 border"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-xs opacity-50 mb-4">
              {t("form_privacy_prefix")}{" "}
              <Link
                href="/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-80"
              >
                {t("form_privacy_link")}
              </Link>
              .
            </p>

            <Button className="w-full bg-indigo-400 before:bg-indigo-600 after:bg-indigo-600">
              {t("form_submit")}
            </Button>
          </div>
        </form>
      </div>

      <div className="lg:col-span-2 flex flex-col gap-4">
        <div className="rounded-2xl border border-zinc-800 p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs uppercase tracking-widest">{t("sidebar_status")}</span>
          </div>
          <p className="text-sm leading-relaxed opacity-60">
            {t("sidebar_status_description")}
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 p-6">
          <p className="text-xs uppercase tracking-widest mb-4 opacity-50">
            {t("sidebar_reach_out")}
          </p>
          <div className="flex flex-col gap-3">
            {[
              { name: "WhatsApp", href: "https://wa.me/+639283559507" },
              {
                name: "Facebook",
                href: "https://www.facebook.com/melvinjonesrepol",
              },
              { name: "Email", href: "mailto:me@melvinjonesrepol.com" },
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/mrepol742",
              },
            ].map((item, index) => (
              <>
                {index !== 0 && <div className="h-px border-t opacity-20" />}

                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group"
                >
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-xs opacity-40 group-hover:opacity-70 transition-opacity">
                    →
                  </span>
                </Link>
              </>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 p-6">
          <p className="text-xs uppercase tracking-widest mb-4 opacity-50">
            {t("sidebar_before_start")}
          </p>
          <Link
            href="/legal/developer-client-agreement"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between group"
          >
            <span className="text-sm font-medium">
              {t("sidebar_dca")}
            </span>
            <span className="text-xs opacity-40 group-hover:opacity-70 transition-opacity">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
