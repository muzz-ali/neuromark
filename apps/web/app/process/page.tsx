"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/animations/mesh-background";
import { ArrowRight, Cpu, Layers, GitBranch, Zap, RefreshCw } from "lucide-react";

const processStages = [
  {
    step: "01",
    title: "Audit",
    description: "Analyze current systems, operational bottlenecks, data flows, and growth opportunities.",
    icon: Layers,
  },
  {
    step: "02",
    title: "Design",
    description: "Architect the solution, user experience, technical stack, and intelligent workflow structure.",
    icon: GitBranch,
  },
  {
    step: "03",
    title: "Develop",
    description: "Build high-performance web applications, robust software systems, and secure API integrations.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "Automate",
    description: "Connect AI agents, intelligent chatbots, voice assistants, and automated CRM pipelines.",
    icon: Zap,
  },
  {
    step: "05",
    title: "Optimize",
    description: "Measure real-world performance, refine execution, and continuously scale results.",
    icon: RefreshCw,
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SpotlightBackground>
        <Navbar />
        <main className="relative px-6 pb-28 pt-36 lg:pt-44">
          <div className="mx-auto max-w-7xl">
            <div className="text-center lg:text-left mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 mb-6">
                <span className="font-mono text-[11px] font-black tracking-[0.3em] text-tech-blue uppercase">
                  [ HOW WE WORK ]
                </span>
              </div>
              <h1 className="font-manrope text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                A proven engine <br />
                <span className="text-tech-blue">for scale.</span>
              </h1>
              <p className="mt-6 max-w-3xl font-sans text-lg text-zinc-400 leading-relaxed">
                NeuroMark combines AI, automation, software engineering, and growth-focused digital systems into a continuous, high-performance execution process.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Side: Stages */}
              <div className="lg:col-span-7 space-y-6">
                {processStages.map((stage) => {
                  const IconComp = stage.icon;
                  return (
                    <div
                      key={stage.step}
                      className="group relative rounded-3xl border border-white/10 bg-neutral-950/70 p-8 backdrop-blur transition-all duration-300 hover:border-tech-blue/50 hover:bg-neutral-900/80"
                    >
                      <div className="flex items-start gap-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-tech-blue/10 text-tech-blue font-mono text-sm font-bold">
                          {stage.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-manrope text-2xl font-bold text-white group-hover:text-tech-blue transition-colors">
                              {stage.title}
                            </h3>
                            <IconComp className="h-5 w-5 text-zinc-500 group-hover:text-tech-blue transition-colors" />
                          </div>
                          <p className="font-sans text-base text-zinc-400 leading-relaxed">
                            {stage.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Side: Visual Diagram / System Representation */}
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <div className="rounded-3xl border border-white/10 bg-neutral-950/90 p-8 lg:p-10 backdrop-blur shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-tech-blue/5 via-transparent to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    <h3 className="font-mono text-xs font-black tracking-[0.3em] text-tech-blue uppercase mb-8">
                      SYSTEM EXECUTION FLOW
                    </h3>

                    <div className="space-y-6">
                      {processStages.map((stage, idx) => (
                        <div key={stage.step} className="relative">
                          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/60 p-4 transition-all hover:border-tech-blue/40">
                            <span className="font-mono text-xs font-bold text-tech-blue bg-tech-blue/10 px-2.5 py-1 rounded-lg">
                              {stage.step}
                            </span>
                            <span className="font-manrope text-base font-bold text-white">
                              {stage.title}
                            </span>
                          </div>
                          {idx < processStages.length - 1 && (
                            <div className="flex justify-center my-2">
                              <div className="h-6 w-px bg-gradient-to-b from-tech-blue/50 to-white/10" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 text-center">
                      <p className="font-mono text-[11px] text-zinc-400">
                        Continuous feedback loop for exponential business growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-28 max-w-4xl text-center rounded-3xl border border-white/10 bg-neutral-950 p-12 lg:p-16">
              <h2 className="font-manrope text-3xl font-extrabold text-white mb-4">
                Ready to execute this framework for your business?
              </h2>
              <p className="font-sans text-base text-zinc-400 max-w-xl mx-auto mb-8">
                Let's start with stage 01 — an initial audit of your digital systems and growth opportunities.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 font-manrope text-sm font-black text-black transition-all hover:scale-105 active:scale-95"
              >
                Start Your Audit <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </SpotlightBackground>
    </div>
  );
}
