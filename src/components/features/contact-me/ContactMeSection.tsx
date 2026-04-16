"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { faAt, faPerson, faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
    <main className="h-screen flex items-center p-3 md:p-8">
      <section className="mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-2/3">
            <h1 className="text-2xl font-semibold mb-2" data-aos="fade-up">
              Contact Me – Get in Touch
            </h1>

            <p className="mb-6 max-w-md" data-aos="fade-up">
              Whether you have a question, a project idea, or just want to
              connect, fill out the form below and I will respond promptly.
            </p>

            <form onSubmit={handleSubmit}>
              <div data-aos="fade-up" className="mb-4">
                <Input
                  icon={faUser}
                  handleChange={handleChange}
                  form={{
                    name: "name",
                    value: formData.name,
                    placeholder: "Your Name",
                    required: true,
                  }}
                />
              </div>

              <div data-aos="fade-up" className="mb-4">
                <Input
                  icon={faAt}
                  handleChange={handleChange}
                  form={{
                    name: "email",
                    value: formData.email,
                    placeholder: "you@example.com",
                    required: true,
                  }}
                />
              </div>

              <div className="absolute left-[-10000px] top-0 opacity-0">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div data-aos="fade-up">
                <label className="block text-sm font-semibold mb-1">
                  Message
                </label>

                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border
                         transition-all duration-300
                         focus-within:shadow-md focus-within:-translate-y-[1px]"
                >
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message here..."
                    className="w-full outline-none bg-transparent text-sm placeholder:opacity-60"
                  />
                </div>
              </div>

              <span className="text-sm" data-aos="fade-up">
                By continuing, you agree to our{" "}
                <Link
                  href="/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </span>

              <Button
                data-aos="fade-up"
                className="w-full bg-indigo-400 before:bg-indigo-600 after:bg-indigo-600"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="md:w-1/3 flex flex-col gap-6" data-aos="fade-up">
            <div>
              <h2 className="text-lg font-semibold" data-aos="fade-up">
                Alternative Contact
              </h2>
              <div className="flex flex-col gap-2">
                <Link
                  href="https://wa.me/+639283559507"
                  className="underline-offset-2 hover:underline"
                  data-aos="fade-up"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </Link>
                <Link
                  href="https://www.facebook.com/melvinjonesrepol"
                  className="underline-offset-2 hover:underline"
                  data-aos="fade-up"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold" data-aos="fade-up">
                Documents & Policies
              </h2>
              <Link
                href="/legal/developer-client-agreement"
                className="underline-offset-2 hover:underline"
                data-aos="fade-up"
                target="_blank"
                rel="noopener noreferrer"
              >
                Developer Client Agreement
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
