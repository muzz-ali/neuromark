"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/animations/mesh-background";
import { BookOpen } from "lucide-react";

interface Resource {
  title: string;
  category: string;
  description: string;
  readTime: string;
}

const resourcesData: Resource[] = [
  {
    title: "The State of AI Automation in Local & Growing Businesses (2026)",
    category: "AI",
    description: "An in-depth guide on how growing businesses are leveraging chatbots and voice agents to reduce response times by 80%.",
    readTime: "6 min read",
  },
  {
    title: "Next.js Performance Optimization Playbook",
    category: "Web Development",
    description: "Technical strategies for achieving 99+ Lighthouse scores and lightning-fast page loads on modern web applications.",
    readTime: "8 min read",
  },
  {
    title: "How to Integrate LLMs and Vector Search into Legacy Systems",
    category: "Software",
    description: "A practical roadmap for engineering teams looking to add RAG (Retrieval-Augmented Generation) capabilities safely.",
    readTime: "10 min read",
  },
  {
    title: "CRM Architecture & Automated Lead Qualification Framework",
    category: "Automation",
    description: "Designing automated CRM pipelines that score leads instantly and route high-value inquiries to sales reps.",
    readTime: "5 min read",
  },
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI", "Web Development", "Software", "Automation"];

  const filteredResources = activeCategory === "All"
    ? resourcesData
    : resourcesData.filter(r => r.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      <SpotlightBackground>
        <Navbar />
        <main className="relative px-6 pb-28 pt-36 lg:pt-44">
          <div className="mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 mb-6">
              <BookOpen className="h-4 w-4 text-tech-blue" />
              <span className="font-mono text-[11px] font-black tracking-[0.3em] text-tech-blue uppercase">
                NEUROMARK INSIGHTS & RESOURCES
              </span>
            </div>
            <h1 className="font-manrope text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Guides, playbooks, and <span className="text-tech-blue">expert insights</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-zinc-400">
              Explore our technical guides and industry insights on AI automation, web development, and digital growth.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2.5 font-mono text-xs font-bold tracking-wider uppercase transition-all ${
                  activeCategory === cat
                    ? "bg-white text-black"
                    : "border border-white/10 bg-neutral-950 text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredResources.map((resource, idx) => (
              <div
                key={idx}
                className="group rounded-3xl border border-white/10 bg-neutral-950/60 p-8 backdrop-blur transition-all duration-300 hover:border-tech-blue/50 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full border border-tech-blue/30 bg-tech-blue/10 px-3 py-1 font-mono text-[10px] text-tech-blue font-bold uppercase">
                      {resource.category}
                    </span>
                    <span className="font-mono text-xs text-zinc-500">{resource.readTime}</span>
                  </div>
                  <h3 className="font-manrope text-2xl font-bold text-white mb-3 group-hover:text-tech-blue transition-colors">
                    {resource.title}
                  </h3>
                  <p className="font-sans text-base text-zinc-400 leading-relaxed mb-6">
                    {resource.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold text-white tracking-widest uppercase hover:text-tech-blue transition-colors"
                  >
                    Read Resource →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-28 max-w-4xl text-center rounded-3xl border border-white/10 bg-neutral-950 p-12 lg:p-16">
            <h2 className="font-manrope text-3xl font-extrabold text-white mb-4">
              Have a technical question or topic in mind?
            </h2>
            <p className="font-sans text-base text-zinc-400 max-w-xl mx-auto mb-8">
              Our engineering team is always ready to discuss custom software architectures and AI integration strategies.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 font-manrope text-sm font-black text-black transition-all hover:scale-105 active:scale-95"
            >
              Ask Our Experts
            </a>
          </div>
        </main>
        <Footer />
      </SpotlightBackground>
    </div>
  );
}