"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    username: "",
  });
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!grecaptchaLoaded || !window.grecaptcha?.enterprise) {
      toast.error("reCAPTCHA is not loaded. Please try again later.");
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
      pending: "Sending your message...",
      success: "Message sent successfully!",
      error: {
        render({ data }) {
          const err = data as Error;
          return err?.message || "Failed to send message. Please try again.";
        },
      },
    });
  };

  return (
    <main className="my-18 p-3 md:p-8">
      <section>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-2xl font-semibold">Contact Me</h1>
          <p className="mb-6 text-center max-w-md">
            Have a question, project, or just want to say hi? Fill out the form
            below and I&apos;ll get back to you soon!
          </p>
          <form
            onSubmit={handleSubmit}
            className="bg-black/10 backdrop-blur shadow-lg rounded-xl p-8 w-full max-w-lg space-y-3 mb-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-1 text-white-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-1 text-white-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
                placeholder="you@email.com"
              />
            </div>
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
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-1 text-white-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
                required
                placeholder="Type your message here..."
              />
            </div>
            <p className="text-sm text-gray-500 mb-4">
              By clicking &quot;Submit,&quot; you consent to having your
              information securely processed and sent via SMTP to the designated
              recipient at mrepol742@gmail.com.
            </p>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-lg font-semibold shadow hover:from-blue-700 hover:to-blue-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
