"use client";

import { useReCaptcha } from "next-recaptcha-v3";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { executeRecaptcha } = useReCaptcha();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const resolveAfter3Sec = new Promise(async (resolve, reject) => {
      try {
        const token = await executeRecaptcha("contact");

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, token }),
        });

        if (!response.ok) {
          const err = await response.json();
          throw new Error(err?.error || "Something went wrong");
        }

        const data = await response.json();
        setFormData({ name: "", email: "", message: "" });
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(resolveAfter3Sec, {
      pending: "Sending your message...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    });
  };

  return (
    <main className="p-3 md:p-8">
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
            <div className="text-sm text-gray-500 mb-4">
              By clicking &quot;Submit,&quot; you consent to having your
              information securely processed and sent via SMTP to the designated
              recipient at mrepol742@gmail.com.
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-lg font-semibold shadow hover:from-blue-700 hover:to-blue-500 transition"
            >
              🚀 Send Message
            </button>
          </form>
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Official Contact Email
            </h2>
            <a
              href="mailto:mrepol742@gmail.com"
              className="text-white inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-700 bg-gray-900 font-medium break-all hover:ring-2 hover:ring-blue-500 transition"
            >
              📩 mrepol742@gmail.com
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full border border-gray-600 bg-gray-700/40 text-gray-400">
                primary
              </span>
            </a>
            <h2 className="text-xl font-semibold mb-2">
              Official Project Support Email
            </h2>
            <a
              href="mailto:support@melvinjonesrepol.com"
              className="text-white inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-700 bg-gray-900 font-medium break-all hover:ring-2 hover:ring-blue-500 transition"
            >
              📩 support@melvinjonesrepol.com
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full border border-gray-600 bg-gray-700/40 text-gray-400">
                primary
              </span>
            </a>
            <h2 className="text-xl font-semibold mb-2">
              Do‑Not‑Reply Address (Notifications Only)
            </h2>
            <div className="text-white inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-700 bg-gray-900 font-medium break-all">
              📨 donotreply.mrepol742@gmail.com
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full border border-gray-600 bg-gray-700/40 text-gray-400">
                no reply
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
