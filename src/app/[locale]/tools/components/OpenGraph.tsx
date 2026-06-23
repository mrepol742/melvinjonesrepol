"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

type OpenGraphMeta = Record<string, string>;

export default function OpenGraphTool() {
  const t = useTranslations("tools_open_graph");
  const [formData, setFormData] = useState({
    username: "",
    url: "",
  });
  const [meta, setMeta] = useState<OpenGraphMeta | null>(null);
  const [grecaptchaLoaded, setGrecaptchaLoaded] = useState(false);

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

  const fetchOG = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!grecaptchaLoaded || !window.grecaptcha?.enterprise) {
      toast.error(t("recaptcha_error"));
      return;
    }

    const resolveAfter3Sec = new Promise(async (resolve, reject) => {
      try {
        const token = await window.grecaptcha.enterprise.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "",
          { action: "open_graph" },
        );

        const response = await fetch("/api/tools/open-graph", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, token }),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data?.error || "Something went wrong");
        }
        setMeta(data.meta);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="mt-18 p-3 md:p-8">
      <section className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          {t("title")}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300 mb-6">
          {t("description")}
        </p>

        <form
          onSubmit={fetchOG}
          className="flex flex-col md:flex-row gap-4 mb-6"
        >
          <div className="absolute left-[-10000px] top-0 h-px w-px opacity-0">
            <label
              htmlFor="username"
              className="block text-sm font-semibold mb-1 text-white-700"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Gotcha"
            />
          </div>
          <input
            type="text"
            name="url"
            placeholder={t("url_placeholder")}
            value={formData.url}
            onChange={handleChange}
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition duration-200"
          >
            {t("fetch_button")}
          </button>
        </form>

        {meta && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {t("result_title")}
            </h2>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 shadow-inner space-y-2">
              {Object.entries(meta).map(([key, value]) => (
                <p key={key} className="text-gray-700 dark:text-gray-200">
                  <span className="font-semibold">{key}:</span> {value}
                </p>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
