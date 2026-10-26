"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/animations/mesh-background";
import { Code2, Brain, Cpu, Globe, Shield, Zap, Layers, Sparkles } from "lucide-react";

const servicesList = [
  {
    number: "01",
    title: "AI Automation",
    description: "Streamline repetitive business workflows and operational bottlenecks with custom-built intelligent automation pipelines.",
    capabilities: ["Workflow Auditing", "Zapier & Custom APIs", "Automated Document Processing", "Email & CRM Sync"],
    icon: Brain,
  },
  {
    number: "02",
    title: "AI Chatbots",
    description: "Deploy 24/7 intelligent conversational agents trained on your proprietary data to handle customer support, FAQs, and lead qualification.",
    capabilities: ["Custom Knowledge Base Training", "Multi-Channel Integration", "Sentiment Analysis", "Seamless Human Hand-off"],
    icon: Cpu,
  },
  {
    number: "03",
    title: "AI Voice Agents",
    description: "Next-generation human-like voice agents for inbound customer inquiries, appointment setting, and outbound follow-ups.",
    capabilities: ["Natural Speech Synthesis", "Real-Time Response", "CRM Logging", "Multi-Language Support"],
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Custom Software",
    description: "Robust, scalable enterprise software engineered from scratch to solve your unique business logic and operational challenges.",
    capabilities: ["Cloud-Native Architecture", "Microservices & APIs", "Secure Data Pipelines", "Enterprise Security"],
    icon: Code2,
  },
  {
    number: "05",
    title: "Web & Mobile Development",
    description: "High-performance websites and native mobile apps designed for speed, exceptional user experience, and high conversion rates.",
    capabilities: ["Next.js & React Ecosystem", "iOS & Android Apps", "UI/UX Design Systems", "Performance Optimization"],
    icon: Globe,
  },
  {
    number: "06",
    title: "CRM & Dashboards",
    description: "Centralized command centers and custom CRM solutions that give you real-time visibility into customer data and business metrics.",
    capabilities: ["Custom Analytics", "Role-Based Access Control", "Automated Reporting", "Data Visualization"],
    icon: Layers,
  },
  {
    number: "07",
    title: "AI Integrations",
    description: "Embed state-of-the-art LLMs, computer vision, and machine learning models directly into your existing legacy software stack.",
    capabilities: ["OpenAI & Anthropic APIs", "Vector Search & RAG", "Custom Model Fine-Tuning", "Secure API Wrappers"],
    icon: Zap,
  },
  {
    number: "08",
    title: "AI Consulting",
    description: "Strategic guidance to help leadership teams identify high-ROI AI opportunities and execute practical implementation roadmaps.",
    capabilities: ["Readiness Assessments", "Technology Stack Selection", "Ethical AI Governance", "Team Upskilling"],
    icon: Shield,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SpotlightBackground>
        <Navbar />
        <main className="relative px-6 pb-28 pt-36 lg:pt-44">
          <div className="mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 mb-6">
              <span className="font-mono text-[11px] font-black tracking-[0.3em] text-tech-blue uppercase">
                NEUROMARK SERVICES
              </span>
            </div>
            <h1 className="font-manrope text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Solutions built for the <span className="text-tech-blue">future of business</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-zinc-400">
              From intelligent AI agents to high-performance web applications, we engineer digital systems that drive growth and operational excellence.
            </p>
          </div>

          <div className="mx-auto mt-24 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.number}
                  className="group relative rounded-3xl border border-white/10 bg-neutral-950/60 p-10 backdrop-blur transition-all duration-300 hover:border-tech-blue/50 hover:bg-neutral-900/80"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tech-blue/10 text-tech-blue">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <span className="font-mono text-xs font-black tracking-widest text-zinc-500">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="font-manrope text-2xl font-extrabold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="font-sans text-base text-zinc-400 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="border-t border-white/10 pt-6">
                    <p className="font-mono text-[10px] font-black tracking-[0.2em] text-white/50 uppercase mb-4">
                      Key Capabilities:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-300"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold text-tech-blue tracking-widest uppercase hover:underline"
                    >
                      Inquire About This Service →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-28 max-w-4xl text-center rounded-3xl border border-white/10 bg-neutral-950 p-12 lg:p-16">
            <h2 className="font-manrope text-3xl font-extrabold text-white mb-4">
              Need a custom solution?
            </h2>
            <p className="font-sans text-base text-zinc-400 max-w-xl mx-auto mb-8">
              Every business has unique requirements. Tell us about your project and we'll architect a tailored solution.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 font-manrope text-sm font-black text-black transition-all hover:scale-105 active:scale-95"
            >
              Talk to Our Engineers
            </a>
          </div>
        </main>
        <Footer />
      </SpotlightBackground>
    </div>
  );
}