"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const resolveAfter3Sec = new Promise(async (resolve) => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error("Something went wrong");

        setFormData({ name: "", email: "", message: "" });
        resolve(response);
      } catch (error) {
        resolve(error);
      }
    });

    toast.promise(resolveAfter3Sec, {
      pending: "Sending your message...",
      success: "Message sent successfully! 🎉",
      error: "Failed to send message. Please try again. ❌",
    });
  };

  return (
    <main className="p-8">
      <section>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-2xl font-semibold">Contact Me</h1>
          <p className="text-grey-300 mb-6 text-center max-w-md">
            Have a question, project, or just want to say hi? Fill out the form
            below and I&apos;ll get back to you soon!
          </p>
          <form
            onSubmit={handleSubmit}
            className="bg-black/70 backdrop-blur shadow-lg rounded-xl p-8 w-full max-w-lg space-y-6"
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
                className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
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
                className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
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
                className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
                required
                placeholder="Type your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-lg font-semibold shadow hover:from-blue-700 hover:to-blue-500 transition"
            >
              🚀 Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
