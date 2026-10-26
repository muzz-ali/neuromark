"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/animations/mesh-background";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SpotlightBackground>
        <Navbar />
        <main className="relative px-6 pb-28 pt-36 lg:pt-44">
          <div className="mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 mb-6">
              <span className="font-mono text-[11px] font-black tracking-[0.3em] text-tech-blue uppercase">
                ABOUT NEUROMARK
              </span>
            </div>
            <h1 className="font-manrope text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Engineering the future of <span className="text-tech-blue">digital business</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl font-sans text-lg text-zinc-400 leading-relaxed">
              NeuroMark is a modern digital and AI software agency. We help growing businesses and enterprises build, automate, and scale their digital presence through high-performance web development and practical AI systems.
            </p>
          </div>

          <div className="mx-auto mt-24 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-manrope text-3xl font-bold text-white">Our Mission</h2>
              <p className="font-sans text-base text-zinc-300 leading-relaxed">
                Most businesses struggle with outdated websites, fragmented workflows, and missed opportunities in the AI era. Our mission is simple: bridge the gap between complex technology and real-world business growth.
              </p>
              <p className="font-sans text-base text-zinc-300 leading-relaxed">
                Whether you need a high-converting website, an intelligent customer support chatbot, or custom enterprise software, NeuroMark delivers production-ready systems built for speed and reliability.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 lg:p-10">
              <h3 className="font-manrope text-xl font-bold text-white mb-6">The NeuroMark Advantage</h3>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="text-tech-blue font-bold">✓</span>
                  <span><strong>Engineering Rigor:</strong> Clean, maintainable code built on modern tech stacks like Next.js, React, and Python.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-tech-blue font-bold">✓</span>
                  <span><strong>AI-First Mindset:</strong> Practical automation and AI solutions that save time and reduce overhead.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-tech-blue font-bold">✓</span>
                  <span><strong>Conversion Focused:</strong> Every product and website is optimized to turn visitors into loyal customers.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-28 max-w-6xl">
            <h2 className="font-manrope text-3xl font-extrabold text-white text-center mb-16">
              Our 5-Step Execution Framework
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Discover", desc: "Audit business workflows, goals, and technical requirements." },
                { step: "02", title: "Design", desc: "Craft intuitive UI/UX and architectural blueprints." },
                { step: "03", title: "Develop", desc: "Engineer high-performance code and robust APIs." },
                { step: "04", title: "Automate", desc: "Integrate AI agents, chatbots, and automation pipelines." },
                { step: "05", title: "Optimize", desc: "Rigorous testing, performance tuning, and launch." },
              ].map((item) => (
                <div key={item.step} className="rounded-2xl border border-white/10 bg-neutral-950/60 p-6 backdrop-blur">
                  <span className="font-mono text-xs font-bold text-tech-blue">{item.step}</span>
                  <h3 className="font-manrope text-xl font-bold text-white mt-2 mb-3">{item.title}</h3>
                  <p className="font-sans text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-28 max-w-4xl text-center rounded-3xl border border-white/10 bg-neutral-950 p-12 lg:p-16">
            <h2 className="font-manrope text-3xl font-extrabold text-white mb-4">
              Ready to elevate your digital presence?
            </h2>
            <p className="font-sans text-base text-zinc-400 max-w-xl mx-auto mb-8">
              Let's discuss how NeuroMark can help your business grow.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 font-manrope text-sm font-black text-black transition-all hover:scale-105 active:scale-95"
            >
              Get in Touch
            </a>
          </div>
        </main>
        <Footer />
      </SpotlightBackground>
    </div>
  );
}