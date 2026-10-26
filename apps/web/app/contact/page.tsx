"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import SpotlightBackground from "@/components/animations/mesh-background";

// Local utility to avoid touching shared libs
function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-neutral-300"
      >
        {label}
        {required ? <span className="text-tech-blue"> *</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className={cn(
          "w-full rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2",
          "text-neutral-100 placeholder:text-neutral-500",
          "outline-none ring-0 focus:border-tech-blue focus:bg-neutral-900 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.06)]",
          "transition"
        )}
      />
    </div>
  );
}

function TextArea({
  label,
  id,
  placeholder,
  required,
  rows = 6,
}: {
  label: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-neutral-300"
      >
        {label}
        {required ? <span className="text-tech-blue"> *</span> : null}
      </label>
      <textarea
        id={id}
        name={id}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className={cn(
          "w-full resize-y rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2",
          "text-neutral-100 placeholder:text-neutral-500",
          "outline-none ring-0 focus:border-tech-blue focus:bg-neutral-900 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.06)]",
          "transition"
        )}
      />
    </div>
  );
}

// Cool loading overlay component
function LoadingOverlay({ isVisible }: { isVisible: boolean }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (isVisible) {
      setMounted(true);
      return;
    }
    const timer = setTimeout(() => setMounted(false), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center",
        "bg-black/85 backdrop-blur-md",
        "transition-all duration-300 ease-out",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      )}
    >
      {/* Animated grid overlay */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 select-none",
          "[background-size:40px_40px] opacity-20",
          "[background-image:linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]"
        )}
      />

      {/* Centered content */}
      <div
        className={cn(
          "relative z-10 flex flex-col items-center justify-center space-y-6",
          "transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        {/* Spinning ring with dual animation */}
        <div className="relative">
          <div className="h-20 w-20 animate-spin rounded-full border-[3px] border-neutral-800 border-t-tech-blue" />
          <div
            className="absolute inset-0 h-20 w-20 animate-spin rounded-full border-[3px] border-transparent border-r-tech-blue/70"
            style={{
              animationDirection: "reverse",
              animationDuration: "0.9s",
            }}
          />
          {/* Inner pulsing dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-2 w-2 animate-pulse rounded-full bg-tech-blue/80" />
          </div>
        </div>

        {/* Pulsing dots with staggered animation */}
        <div className="flex space-x-2.5">
          <div
            className="h-2.5 w-2.5 animate-pulse rounded-full bg-tech-blue/90"
            style={{ animationDelay: "0s", animationDuration: "1.4s" }}
          />
          <div
            className="h-2.5 w-2.5 animate-pulse rounded-full bg-tech-blue/90"
            style={{ animationDelay: "0.2s", animationDuration: "1.4s" }}
          />
          <div
            className="h-2.5 w-2.5 animate-pulse rounded-full bg-tech-blue/90"
            style={{ animationDelay: "0.4s", animationDuration: "1.4s" }}
          />
        </div>

        {/* Text with subtle animation */}
        <p className="text-lg font-medium text-tech-200 tracking-wide">
          Sending your message...
        </p>
      </div>

      {/* Subtle gradient orbs with smooth movement */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 animate-pulse rounded-full bg-tech-blue/8 blur-3xl"
        style={{ animationDuration: "3s" }}
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/4 h-72 w-72 animate-pulse rounded-full bg-tech-purple/8 blur-3xl"
        style={{ animationDelay: "1.5s", animationDuration: "3s" }}
      />
    </div>
  );
}

export default function ContactPage() {
  const [status, setStatus] = React.useState<"idle" | "success" | "error">(
    "idle"
  );
  const [submitting, setSubmitting] = React.useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    try {
      const formData = new FormData(e.currentTarget);
      const firstName = formData.get("firstName")?.toString() || "";
      const lastName = formData.get("lastName")?.toString() || "";
      const email = formData.get("email")?.toString() || "";
      const subject = formData.get("subject")?.toString() || "";
      const message = formData.get("message")?.toString() || "";

      const text = `NeuroMark — New Project Enquiry

Name: ${firstName} ${lastName}
Email: ${email}
Business / Project Name: ${subject}

Message:
${message}

Please get back to me regarding this project.`;

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/message/2CWY2OYVHRFGM1?text=${encodedText}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      setStatus("success");
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-neutral-100">
      <LoadingOverlay isVisible={submitting} />
      <SpotlightBackground>
        <Navbar />
        <section className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 place-items-center gap-16 pb-24 pt-28 lg:grid-cols-2 lg:gap-24 lg:pb-28 lg:pt-32">
          <div className="flex w-full max-w-xl flex-col items-center lg:items-start justify-center space-y-6 text-center lg:text-left lg:max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 mb-2">
              <span className="font-mono text-[11px] font-black tracking-[0.3em] text-tech-blue uppercase">
                [ START A CONVERSATION ]
              </span>
            </div>
            <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl">
              Let's build systems that scale.
            </h1>
            <p className="mt-2 max-w-prose text-neutral-300 md:text-lg leading-relaxed">
              NeuroMark works with ambitious businesses to build AI automation, custom software, conversion-focused websites, and scalable digital systems. Drop us a message and our engineering team will get back to you promptly.
            </p>

            <div className="mt-8 grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 text-left">
                <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-1">Email</p>
                <a
                  href="mailto:contact@neuromark.ai.in"
                  className="block text-base font-semibold text-neutral-100 underline-offset-4 hover:underline"
                >
                  neuromark.ai.in
                </a>
              </div>
              <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 text-left">
                <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-1">Phone</p>
                <a
                  href="tel:+919515845869"
                  className="block text-base font-semibold text-neutral-100 underline-offset-4 hover:underline"
                >
                  +91 95158 45869
                </a>
              </div>
            </div>

            <div className="w-full relative rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 text-left">
              <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-1">Location</p>
              <p className="text-base font-semibold text-neutral-100">
                Hyderabad, Telangana, India
              </p>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="https://www.instagram.com/neuromark.agency"
                target="_blank"
                className={cn(
                  "rounded-md border border-neutral-800 bg-neutral-900/40 px-4 py-2 text-sm text-neutral-200",
                  "hover:border-neutral-700 hover:bg-neutral-900 transition"
                )}
              >
                Instagram
              </Link>
              <Link
                href="https://www.linkedin.com/company/neuromark-agency"
                target="_blank"
                className={cn(
                  "rounded-md border border-neutral-800 bg-neutral-900/40 px-4 py-2 text-sm text-neutral-200",
                  "hover:border-neutral-700 hover:bg-neutral-900 transition"
                )}
              >
                LinkedIn
              </Link>
            </div>
          </div>

          <div className="relative mt-6 w-full max-w-xl lg:mt-2 lg:max-w-2xl">
            <GlowingEffect
              blur={0}
              borderWidth={3}
              spread={80}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              className="absolute inset-0 rounded-2xl"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/10 to-transparent blur-3xl" />

            <form
              onSubmit={onSubmit}
              className="relative z-10 space-y-7 rounded-2xl border border-neutral-800 bg-neutral-950/60 p-7 backdrop-blur md:space-y-8 md:p-10"
            >
              <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field id="firstName" label="First name" placeholder="Ada" required />
                <Field id="lastName" label="Last name" placeholder="Lovelace" required />
              </div>
              <div className="relative z-10">
                <Field
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="relative z-10">
                <Field id="subject" label="Business / Project Name" placeholder="My Company / Startup" />
              </div>
              <div className="relative z-10">
                <TextArea
                  id="message"
                  label="Project Details & Requirements"
                  placeholder="Tell us about your project, timeline, and goals..."
                  required
                  rows={8}
                />
              </div>
              <div className="relative z-10 space-y-4 pt-2">
                {status === "success" ? (
                  <div
                    role="status"
                    className={cn(
                      "flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3",
                      "text-sm font-medium text-emerald-400"
                    )}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Thanks! Your message has been sent successfully.
                  </div>
                ) : null}
                {status === "error" ? (
                  <div
                    role="status"
                    className={cn(
                      "flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3",
                      "text-sm font-medium text-red-400"
                    )}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Something went wrong. Please try again.
                  </div>
                ) : null}
                <div className="flex items-center justify-between">
                  <p className="text-xs text-neutral-500">
                    By sending, you agree to our{" "}
                    <Link
                      href="/about"
                      className="underline underline-offset-4 hover:text-neutral-300"
                    >
                      terms
                    </Link>
                    .
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className={cn(
                      "rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-black",
                      "hover:bg-neutral-200 active:bg-neutral-300 transition disabled:opacity-60 disabled:cursor-not-allowed"
                    )}
                  >
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </SpotlightBackground>
      <Footer />
    </main>
  );
}