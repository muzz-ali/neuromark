"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/animations/mesh-background";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "project-1",
    title: "Omnichannel AI Support Bot for Fintech",
    client: "FinFlow Global",
    category: "AI Chatbots & Automation",
    description: "Built and deployed an enterprise-grade LLM customer support assistant that resolved 74% of tier-1 inquiries autonomously.",
    metrics: ["74% Automation Rate", "< 1.2s Response Time", "99.4% CSAT Score"],
    image: "/assets/Events/AI_Unlocked.png",
  },
  {
    id: "project-2",
    title: "High-Performance E-Commerce Redesign",
    client: "Aura Home Furnishing",
    category: "Web & Mobile Development",
    description: "Transformed an outdated legacy storefront into a lightning-fast Next.js e-commerce platform with immersive 3D product previews.",
    metrics: ["2.4x Conversion Lift", "99/100 Lighthouse Score", "45% Lower Bounce Rate"],
    image: "/assets/Events/DesignVerse.png",
  },
  {
    id: "project-3",
    title: "Autonomous Voice Agent for Healthcare",
    client: "MediCare Clinic Network",
    category: "AI Voice Agents",
    description: "Implemented an AI voice receptionist handling patient appointment scheduling, SMS confirmations, and insurance pre-checks.",
    metrics: ["10,000+ Calls Handled / Mo", "Zero Missed Bookings", "30 Hrs Saved Weekly"],
    image: "/assets/Events/SpeakerSession25.png",
  },
  {
    id: "project-4",
    title: "Enterprise Logistics CRM & Dashboard",
    client: "TransLogistics India",
    category: "Custom Software & Dashboards",
    description: "Engineered a real-time fleet tracking dashboard and automated dispatch system integrating IoT sensors and route optimization.",
    metrics: ["Real-Time GPS Tracking", "18% Fuel Cost Reduction", "Unified Operations"],
    image: "/assets/Events/HelloWorld25.jpg",
  },
];

export default function WorkPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "AI Chatbots & Automation", "Web & Mobile Development", "AI Voice Agents", "Custom Software & Dashboards"];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-black text-white">
      <SpotlightBackground>
        <Navbar />
        <main className="relative px-6 pb-28 pt-36 lg:pt-44">
          <div className="mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 mb-6">
              <span className="font-mono text-[11px] font-black tracking-[0.3em] text-tech-blue uppercase">
                SELECTED WORK & CASE STUDIES
              </span>
            </div>
            <h1 className="font-manrope text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Proven results for <span className="text-tech-blue">ambitious brands</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-zinc-400">
              Explore how we've helped businesses scale through cutting-edge software engineering and practical AI integrations.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2.5 font-mono text-xs font-bold tracking-wider uppercase transition-all ${
                  filter === cat
                    ? "bg-white text-black"
                    : "border border-white/10 bg-neutral-950 text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-3xl border border-white/10 bg-neutral-950/60 overflow-hidden backdrop-blur transition-all duration-300 hover:border-tech-blue/50 flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-black/80 backdrop-blur border border-white/10 px-4 py-1.5 font-mono text-[11px] text-tech-blue font-bold uppercase">
                    {project.category}
                  </div>
                </div>

                <div className="p-8 lg:p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
                      Client: {project.client}
                    </p>
                    <h3 className="font-manrope text-2xl font-extrabold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="font-sans text-base text-zinc-400 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-8">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center">
                          <span className="font-manrope text-xs font-extrabold text-white">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold text-white tracking-widest uppercase hover:text-tech-blue transition-colors"
                    >
                      Request Case Study Details <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-28 max-w-4xl text-center rounded-3xl border border-white/10 bg-neutral-950 p-12 lg:p-16">
            <h2 className="font-manrope text-3xl font-extrabold text-white mb-4">
              Ready to build your success story?
            </h2>
            <p className="font-sans text-base text-zinc-400 max-w-xl mx-auto mb-8">
              Let's discuss how NeuroMark can elevate your digital presence and operational efficiency.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 font-manrope text-sm font-black text-black transition-all hover:scale-105 active:scale-95"
            >
              Start Your Project
            </a>
          </div>
        </main>
        <Footer />
      </SpotlightBackground>
    </div>
  );
}