"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/animations/mesh-background";
import {
  Code2,
  Globe,
  Brain,
  Shield,
  GitBranch,
  Wrench,
  GraduationCap,
  Trophy,
  BookOpen,
  ExternalLink,
  type LucideProps,
} from "lucide-react";

interface Resource {
  name: string;
  description: string;
  url: string;
}

interface ResourceCategory {
  id: string;
  label: string;
  tagLabel: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  accentColor: "blue" | "violet";
  resources: Resource[];
}

const categories: ResourceCategory[] = [
  {
    id: "programming",
    label: "Programming & CS",
    tagLabel: "CORE_FUNDAMENTALS",
    icon: Code2,
    accentColor: "blue",
    resources: [
      {
        name: "MIT OpenCourseWare — CS",
        description:
          "Free university-level computer science courses from MIT, covering algorithms, data structures, and systems.",
        url: "https://ocw.mit.edu/collections/introductory-computer-science/",
      },
      {
        name: "CS50 by Harvard",
        description:
          "Harvard's renowned introduction to computer science and programming, available free on edX.",
        url: "https://cs50.harvard.edu/x/",
      },
      {
        name: "The Odin Project",
        description:
          "A free, open-source full-stack curriculum with project-based learning and community support.",
        url: "https://www.theodinproject.com/",
      },
      {
        name: "GeeksforGeeks",
        description:
          "Comprehensive tutorials, practice problems, and articles across all CS domains.",
        url: "https://www.geeksforgeeks.org/",
      },
    ],
  },
  {
    id: "webdev",
    label: "Web Development",
    tagLabel: "WEB_ENGINEERING",
    icon: Globe,
    accentColor: "violet",
    resources: [
      {
        name: "MDN Web Docs",
        description:
          "The definitive reference for HTML, CSS, and JavaScript maintained by Mozilla and the community.",
        url: "https://developer.mozilla.org/",
      },
      {
        name: "Next.js Documentation",
        description:
          "Official docs for Next.js — the React framework used to build this very website.",
        url: "https://nextjs.org/docs",
      },
      {
        name: "Tailwind CSS Docs",
        description:
          "Utility-first CSS framework documentation with examples and best practices.",
        url: "https://tailwindcss.com/docs",
      },
      {
        name: "JavaScript.info",
        description:
          "Modern JavaScript tutorial covering fundamentals through advanced topics with clear examples.",
        url: "https://javascript.info/",
      },
    ],
  },
  {
    id: "ai-ml",
    label: "AI & Machine Learning",
    tagLabel: "AI_RESEARCH",
    icon: Brain,
    accentColor: "blue",
    resources: [
      {
        name: "fast.ai",
        description:
          "Practical deep learning courses designed to make AI accessible without heavy math prerequisites.",
        url: "https://www.fast.ai/",
      },
      {
        name: "Kaggle",
        description:
          "Data science competitions, datasets, and collaborative notebooks for hands-on ML practice.",
        url: "https://www.kaggle.com/",
      },
      {
        name: "Papers With Code",
        description:
          "Browse state-of-the-art ML papers alongside open-source implementations and benchmarks.",
        url: "https://paperswithcode.com/",
      },
      {
        name: "Google AI Education",
        description:
          "Courses, guides, and tools from Google covering ML fundamentals and TensorFlow.",
        url: "https://ai.google/education/",
      },
    ],
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    tagLabel: "SECURITY_OPS",
    icon: Shield,
    accentColor: "violet",
    resources: [
      {
        name: "OWASP",
        description:
          "The Open Web Application Security Project — essential guides, tools, and the Top 10 vulnerability list.",
        url: "https://owasp.org/",
      },
      {
        name: "TryHackMe",
        description:
          "Interactive, gamified cybersecurity training with guided rooms for all skill levels.",
        url: "https://tryhackme.com/",
      },
      {
        name: "Hack The Box",
        description:
          "Practice offensive and defensive security skills on realistic lab environments.",
        url: "https://www.hackthebox.com/",
      },
      {
        name: "CyberChef",
        description:
          "A web-based tool by GCHQ for encoding, decoding, encryption, and data analysis operations.",
        url: "https://gchq.github.io/CyberChef/",
      },
    ],
  },
  {
    id: "opensource",
    label: "Open Source",
    tagLabel: "OPEN_SOURCE",
    icon: GitBranch,
    accentColor: "blue",
    resources: [
      {
        name: "GitHub",
        description:
          "The world's largest platform for version control, collaboration, and open-source development.",
        url: "https://github.com/",
      },
      {
        name: "First Timers Only",
        description:
          "A curated collection of beginner-friendly open-source issues to help you start contributing.",
        url: "https://www.firsttimersonly.com/",
      },
      {
        name: "Open Source Guide",
        description:
          "GitHub's official guide on how to contribute to, launch, and maintain open-source projects.",
        url: "https://opensource.guide/",
      },
      {
        name: "Good First Issues",
        description:
          "Discover beginner-friendly issues across popular open-source projects to make your first contribution.",
        url: "https://goodfirstissues.com/",
      },
    ],
  },
  {
    id: "tools",
    label: "Dev Tools",
    tagLabel: "TOOLCHAIN",
    icon: Wrench,
    accentColor: "violet",
    resources: [
      {
        name: "Visual Studio Code",
        description:
          "The most popular free code editor with an extensive marketplace of extensions.",
        url: "https://code.visualstudio.com/",
      },
      {
        name: "Git Documentation",
        description:
          "Official documentation for Git — the distributed version control system every developer needs.",
        url: "https://git-scm.com/doc",
      },
      {
        name: "Docker Docs",
        description:
          "Learn containerization from official Docker documentation, tutorials, and getting-started guides.",
        url: "https://docs.docker.com/",
      },
      {
        name: "DevDocs",
        description:
          "Fast, offline-capable API documentation browser combining 400+ docs in one searchable interface.",
        url: "https://devdocs.io/",
      },
    ],
  },
  {
    id: "learning",
    label: "Learning Platforms",
    tagLabel: "LEARNING_HUB",
    icon: GraduationCap,
    accentColor: "blue",
    resources: [
      {
        name: "freeCodeCamp",
        description:
          "Free, verified certifications in web development, data science, and more with thousands of coding challenges.",
        url: "https://www.freecodecamp.org/",
      },
      {
        name: "Coursera",
        description:
          "University-level courses and specializations from Stanford, Google, IBM, and more.",
        url: "https://www.coursera.org/",
      },
      {
        name: "edX",
        description:
          "Free courses from Harvard, MIT, and top universities across CS, AI, and engineering.",
        url: "https://www.edx.org/",
      },
      {
        name: "Khan Academy — Computing",
        description:
          "Free computing courses covering algorithms, cryptography, and information theory.",
        url: "https://www.khanacademy.org/computing",
      },
    ],
  },
  {
    id: "competitive",
    label: "Competitive Programming",
    tagLabel: "COMPETITIVE",
    icon: Trophy,
    accentColor: "violet",
    resources: [
      {
        name: "LeetCode",
        description:
          "The leading platform for coding interview prep with 3000+ problems and weekly contests.",
        url: "https://leetcode.com/",
      },
      {
        name: "Codeforces",
        description:
          "Competitive programming platform with regular contests, editorial solutions, and global rankings.",
        url: "https://codeforces.com/",
      },
      {
        name: "HackerRank",
        description:
          "Practice coding, prepare for interviews, and earn skill certifications across multiple domains.",
        url: "https://www.hackerrank.com/",
      },
      {
        name: "CSES Problem Set",
        description:
          "A comprehensive collection of competitive programming problems for systematic skill-building.",
        url: "https://cses.fi/problemset/",
      },
    ],
  },
  {
    id: "docs",
    label: "Documentation & Books",
    tagLabel: "REFERENCE_DOCS",
    icon: BookOpen,
    accentColor: "blue",
    resources: [
      {
        name: "ACM Digital Library",
        description:
          "The official ACM research database — access papers, journals, and proceedings across all computing fields.",
        url: "https://dl.acm.org/",
      },
      {
        name: "arXiv — Computer Science",
        description:
          "Open-access preprints of cutting-edge CS research papers across all subfields.",
        url: "https://arxiv.org/list/cs/recent",
      },
      {
        name: "Teach Yourself CS",
        description:
          "A curated self-study guide recommending the best book and video lecture for each core CS subject.",
        url: "https://teachyourselfcs.com/",
      },
      {
        name: "Google Technical Writing",
        description:
          "Free courses from Google on writing clear, effective technical documentation.",
        url: "https://developers.google.com/tech-writing",
      },
    ],
  },
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <>
      <SpotlightBackground>
        <Navbar />

        <main className="relative min-h-screen">
          {/* ─── Hero Section ─── */}
          <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-44 text-center lg:pb-28 lg:pt-52">
            <div className="absolute inset-0 -z-10 bg-concentric-grid bg-grid-md opacity-[0.04] mask-radial" />

            <div className="relative z-10 mx-auto max-w-5xl">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2">
                <BookOpen className="h-4 w-4 text-tech-blue" />
                <span className="font-mono text-[11px] font-black tracking-[0.3em] text-white/60 uppercase">
                  RESOURCE_INDEX
                </span>
              </div>

              <h1 className="font-manrope text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
                Curated
                <span className="block text-tech-blue">resources.</span>
              </h1>

              <p className="mx-auto mt-10 max-w-3xl font-sans text-lg font-normal text-zinc-300 md:text-xl md:leading-relaxed">
                A hand-picked collection of tools, courses, and references to
                accelerate your engineering journey — from fundamentals to
                frontier research.
              </p>
            </div>
          </section>

          {/* ─── Category Filter ─── */}
          <section className="mx-auto max-w-7xl px-6 pb-8">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={`rounded-full px-5 py-2.5 font-mono text-[11px] font-bold tracking-widest uppercase transition-all ${
                  activeCategory === "all"
                    ? "bg-white text-black"
                    : "border border-white/10 bg-white/[0.04] text-white/60 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                ALL
              </button>
              {categories.map((cat) => {
                const CatIcon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() =>
                      setActiveCategory(
                        activeCategory === cat.id ? "all" : cat.id
                      )
                    }
                    className={`flex items-center gap-2 rounded-full px-4 py-2.5 font-mono text-[11px] font-bold tracking-widest uppercase transition-all ${
                      activeCategory === cat.id
                        ? "bg-white text-black"
                        : "border border-white/10 bg-white/[0.04] text-white/60 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    <CatIcon className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* ─── Resource Categories ─── */}
          <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="space-y-28">
              {filteredCategories.map((category) => {
                const CategoryIcon = category.icon;
                return (
                <div key={category.id}>
                  {/* Category Header */}
                  <div className="mb-12 text-left">
                    <div className="mb-6 flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                          category.accentColor === "blue"
                            ? "bg-tech-blue/10 text-tech-blue"
                            : "bg-neon-violet/10 text-neon-violet"
                        }`}
                      >
                        <CategoryIcon className="h-6 w-6" />
                      </div>
                      <span
                        className={`font-mono text-[11px] font-black tracking-[0.2em] uppercase ${
                          category.accentColor === "blue"
                            ? "text-tech-blue"
                            : "text-neon-violet"
                        }`}
                      >
                        {category.tagLabel}
                      </span>
                    </div>
                    <h2 className="font-manrope text-3xl font-extrabold tracking-tight text-white lg:text-5xl">
                      {category.label}
                    </h2>
                  </div>

                  {/* Resource Cards Grid */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {category.resources.map((resource) => (
                      <Link
                        key={resource.name}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`quantum-card group flex flex-col justify-between border p-8 text-left ${
                          category.accentColor === "blue"
                            ? "border-white/5 hover:border-tech-blue/30"
                            : "border-white/5 hover:border-neon-violet/30"
                        }`}
                      >
                        <div>
                          <div className="mb-6 flex items-center justify-between">
                            <h3 className="font-manrope text-lg font-extrabold tracking-tight text-white">
                              {resource.name}
                            </h3>
                            <ExternalLink className="h-4 w-4 flex-shrink-0 text-white/20 transition-all group-hover:text-white/60" />
                          </div>
                          <p className="font-sans text-sm font-normal leading-relaxed text-zinc-400">
                            {resource.description}
                          </p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/5">
                          <span
                            className={`font-mono text-[10px] font-black tracking-[0.2em] uppercase transition-colors ${
                              category.accentColor === "blue"
                                ? "text-white/30 group-hover:text-tech-blue"
                                : "text-white/30 group-hover:text-neon-violet"
                            }`}
                          >
                            OPEN_LINK →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                );
              })}
            </div>
          </section>

          {/* ─── CTA Section ─── */}
          <section className="mx-auto max-w-4xl px-6 py-20 text-center">
            <div className="quantum-card border border-white/5 p-12 lg:p-16">
              <h2 className="font-manrope text-3xl font-extrabold tracking-tight text-white lg:text-4xl">
                Have a resource to suggest?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl font-sans text-base font-normal text-zinc-400 leading-relaxed">
                We&apos;re always looking to expand this collection. If you know
                a great tool, course, or reference that should be here, reach
                out to us.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 font-manrope text-sm font-black text-black transition-all hover:scale-[1.02] active:scale-[0.98] focus-ring"
                >
                  SUGGEST A RESOURCE
                </Link>
                <Link
                  href="https://github.com/acmmjcet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 font-mono text-xs font-bold tracking-[0.2em] text-white/70 hover:text-white transition-colors focus-ring rounded-xl"
                >
                  VIEW_GITHUB <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        </main>
      </SpotlightBackground>

      <Footer />
    </>
  );
}
