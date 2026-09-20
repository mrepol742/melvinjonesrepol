"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { faAt, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
import { sanitizeMessageHtml } from "@/lib/message-html";

export default function ContactMe() {
  const t = useTranslations("contact_me");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    username: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [grecaptchaLoaded, setGrecaptchaLoaded] = useState(false);
  const [messageTab, setMessageTab] = useState<"message" | "preview">(
    "message",
  );

  const characterCount =
    formData.message.trim() === "" ? 0 : formData.message.trim().length;
  const isValidcharacterCount = characterCount >= 500 && characterCount <= 1000;
  const messagePreview = useMemo(
    () => sanitizeMessageHtml(formData.message),
    [formData.message],
  );

  useEffect(() => {
    const loadGrecaptcha = () => {
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
    };

    loadGrecaptcha();
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isSubmitting) return;

    if (!grecaptchaLoaded || !window.grecaptcha?.enterprise) {
      toast.error(t("recaptcha_error"));
      return;
    }

    setIsSubmitting(true);

    const submitPromise = (async () => {
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
        if (!response.ok)
          throw new Error(data?.error || "Something went wrong");

        setFormData({ name: "", email: "", message: "", username: "" });
        return data;
      } finally {
        setIsSubmitting(false);
      }
    })();

    toast.promise(submitPromise, {
      pending: t("toast_pending"),
      success: t("toast_success"),
      error: {
        render({ data }) {
          const error = data as Error;
          return error?.message || t("toast_error");
        },
      },
    });
  };

  const contactRoutes = [
    {
      name: "Email",
      detail: "me@melvinjonesrepol.com",
      href: "mailto:me@melvinjonesrepol.com",
    },
    {
      name: "LinkedIn",
      detail: "Professional inquiries",
      href: "https://www.linkedin.com/in/mrepol742",
    },
    {
      name: "WhatsApp",
      detail: "Quick questions",
      href: "https://wa.me/+639283559507",
    },
  ];

  return (
    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(16rem,.7fr)_minmax(0,1.3fr)]">
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <p className="homepage-kicker">Start with context</p>
        <h2 className="mt-4 max-w-md text-4xl font-black uppercase leading-[0.88] tracking-[-0.06em] md:text-6xl">
          Let&apos;s build
          <br />
          something <span className="homepage-accent">useful.</span>
        </h2>
        <p className="mt-6 max-w-md leading-7">
          Tell me what you are trying to solve, who it is for, and where the
          work stands today. A detailed brief helps me respond with useful next
          steps.
        </p>

        <div className="mt-10 border-y border-stone-300 dark:border-stone-700">
          {contactRoutes.map((route) => (
            <Link
              key={route.name}
              href={route.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-stone-300 py-4 last:border-b-0 hover:text-orange-700 dark:border-stone-700 dark:hover:text-orange-300"
            >
              <span>
                <span className="block text-xs font-bold uppercase tracking-widest">
                  {route.name}
                </span>
                <span className="mt-1 block text-sm text-stone-600 dark:text-stone-400">
                  {route.detail}
                </span>
              </span>
              <span className="text-lg transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/legal/developer-client-agreement"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex border-b-2 border-orange-600 pb-1 text-xs font-bold uppercase tracking-widest hover:text-orange-700 dark:hover:text-orange-300"
        >
          Read the developer agreement
        </Link>
      </aside>

      <div className="border border-orange-500/50 bg-stone-950 p-6 text-stone-100 shadow-[5px_5px_0_0_rgba(234,88,12,0.55)] md:p-10">
        <div className="border-b border-stone-700 pb-6">
          <p className="homepage-kicker">Project brief</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight">
            Give me the useful version.
          </h3>
          <p className="mt-2 text-sm leading-6 text-stone-400">
            Please include the problem, the goal, and any relevant timeline or
            constraints. Messages need 500 to 1,000 characters.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label>
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-stone-400">
                {t("form_name_label")}
              </span>
              <Input
                icon={faUser}
                handleChange={handleChange}
                form={{
                  name: "name",
                  value: formData.name,
                  placeholder: t("form_name_placeholder"),
                  required: true,
                }}
                className="border-stone-700 bg-stone-900 text-stone-100"
              />
            </label>
            <label>
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-stone-400">
                {t("form_email_label")}
              </span>
              <Input
                icon={faAt}
                handleChange={handleChange}
                form={{
                  name: "email",
                  value: formData.email,
                  placeholder: t("form_email_placeholder"),
                  required: true,
                }}
                className="border-stone-700 bg-stone-900 text-stone-100"
              />
            </label>
          </div>

          <div
            className="absolute left-[-9999px] top-[-9999px]"
            aria-hidden="true"
          >
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
                required: false,
              }}
            />
          </div>

          <div>
            <div
              role="tablist"
              aria-label="Contact message editor"
              className="mb-4 border-b border-stone-700"
            >
              <div className="flex items-center justify-between">
                <div>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={messageTab === "message"}
                    aria-controls="message-panel"
                    onClick={() => setMessageTab("message")}
                    className={`border-b-2 px-4 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${messageTab === "message" ? "border-orange-500 text-orange-400" : "border-transparent text-stone-400 hover:text-stone-200"}`}
                  >
                    {t("form_message_label")}
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={messageTab === "preview"}
                    aria-controls="preview-panel"
                    onClick={() => setMessageTab("preview")}
                    className={`border-b-2 px-4 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${messageTab === "preview" ? "border-orange-500 text-orange-400" : "border-transparent text-stone-400 hover:text-stone-200"}`}
                  >
                    Preview
                  </button>
                </div>

                <span
                  className={`text-xs font-mono ${characterCount === 0 ? "text-stone-400" : isValidcharacterCount ? "text-orange-600 dark:text-orange-400" : "text-orange-700 dark:text-orange-300"}`}
                >
                  {characterCount} / 1000
                </span>
              </div>
            </div>

            {messageTab === "message" ? (
              <div id="message-panel" role="tabpanel">
                <div className="border border-stone-700 bg-stone-900 px-4 py-3 transition-all duration-200 focus-within:border-orange-500 focus-within:shadow-[3px_3px_0_0_rgba(234,88,12,0.35)]">
                  <textarea
                    rows={9}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={t("form_message_placeholder")}
                    className="w-full resize-none bg-transparent text-sm outline-none placeholder:opacity-40"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <p className="text-xs text-stone-400">
                    {characterCount > 0 && !isValidcharacterCount
                      ? characterCount < 500
                        ? `${500 - characterCount} more characters needed`
                        : `${characterCount - 1000} characters over limit`
                      : "A concise, detailed brief works best."}
                  </p>
                  <div className="flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <span
                        key={index}
                        className={`h-1 w-4 ${characterCount >= (index + 1) * 100 ? "bg-orange-500" : "bg-stone-700"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <section
                id="preview-panel"
                role="tabpanel"
                aria-labelledby="message-preview-title"
                className="overflow-hidden border border-stone-700 bg-stone-900"
              >
                <div className="bg-white p-4 text-stone-800 sm:p-6">
                  <div className="mx-auto max-w-xl border border-orange-200 bg-white">
                    <div className="border-b border-orange-200 px-6 py-5 font-mono text-base font-bold text-stone-800">
                      Melvin Jones Repol
                    </div>
                    <div className="px-6 py-9">
                      <p className="m-0 text-xs font-bold uppercase tracking-[0.12em] text-orange-600">
                        New contact message
                      </p>
                      <h5 className="mt-4 font-mono text-2xl font-semibold tracking-tight text-stone-800">
                        Someone reached out.
                      </h5>
                      <div className="mt-6 text-sm leading-6 text-stone-600">
                        <p className="m-0">
                          <strong>Name:</strong> {formData.name || "Your name"}
                        </p>
                        <p className="mt-2">
                          <strong>Email:</strong>{" "}
                          {formData.email || "you@example.com"}
                        </p>
                        <p className="mt-6 mb-2 font-bold">Message</p>
                        <div
                          className="contact-message-preview"
                          dangerouslySetInnerHTML={{
                            __html:
                              messagePreview ||
                              "<p>Your formatted message will appear here.</p>",
                          }}
                        />
                      </div>
                    </div>
                    <div className="border-t border-orange-200 px-6 py-4 text-xs leading-5 text-stone-600">
                      Melvin Jones Repol · Practical software, technical
                      insights, and project updates.
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>

          <div className="border-t border-stone-700 pt-6">
            <p className="mb-4 text-xs leading-5 text-stone-400">
              {t("form_privacy_prefix")}{" "}
              <Link
                href="/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-orange-700 underline underline-offset-2 hover:text-orange-900 dark:text-orange-300 dark:hover:text-orange-200"
              >
                {t("form_privacy_link")}
              </Link>
              .
            </p>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full border border-orange-600 bg-orange-600 text-orange-50 before:bg-orange-700 after:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? t("toast_pending") : t("form_submit")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
