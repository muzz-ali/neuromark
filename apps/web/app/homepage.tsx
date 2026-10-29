"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-20 text-center lg:pb-32 lg:pt-52">
          <div className="absolute inset-0 -z-10 bg-concentric-grid bg-grid-md opacity-[0.04] mask-radial" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <h1 className="font-manrope text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-9xl">
              Your business deserves<br />
              <span className="block text-tech-blue">a better first impression.</span>
            </h1>

            <p className="mx-auto mt-12 max-w-3xl font-sans text-lg font-normal text-zinc-300 md:text-xl md:leading-relaxed">
              NeuroMark builds modern, high-performance websites for businesses ready to look as good online as they do offline.
            </p>

            <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-4 rounded-2xl bg-white px-10 py-5 font-manrope text-sm font-black text-black transition-all hover:scale-[1.02] active:scale-[0.98] focus-ring"
              >
                Get a Free Demo
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </a>
              <a
                href="/work"
                className="inline-flex items-center px-6 py-4 font-mono text-xs font-bold tracking-[0.2em] text-white/70 hover:text-white transition-colors focus-rounded-xl"
              >
                See Our Work
              </a>
            </div>
          </div>
        </section>

        {/* Services Section - clean card style replacing horizontal slider */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="relative px-6">
            <h2 className="font-manrope text-4xl font-extrabold text-white mb-12 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div
                className="rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-8 hover:border-tech-blue/30 transition-all duration-300 cursor-pointer"
              >
                <div className="h-12 w-12 rounded-2xl bg-tech-blue/10 flex items-center justify-center mb-6 group-hover:bg-tech-blue/20 transition-colors">
                  <svg className="h-6 w-6 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="3" y1="9" x2="21" y2="9"/>
                    <line x1="9" y1="21" x2="21" y2="21"/>
                  </svg>
                </div>
                <h3 className="font-manrope font-bold text-xl mb-3 text-white">Websites</h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Professional websites for local and growing businesses that establish credibility and drive growth.
                </p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-tech-blue text-sm font-medium hover:underline">
                  Learn More
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <div
                className="rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-8 hover:border-tech-blue/30 transition-all duration-300 cursor-pointer"
              >
                <div className="h-12 w-12 rounded-2xl bg-tech-blue/10 flex items-center justify-center mb-6 group-hover:bg-tech-blue/20 transition-colors">
                  <svg className="h-6 w-6 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 5v14M5 12h14"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 className="font-manrope font-bold text-xl mb-3 text-white">Landing Pages</h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Focused pages designed around a specific campaign, service, or offer for maximum conversion.
                </p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-tech-blue text-sm font-medium hover:underline">
                  Learn More
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <div
                className="rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-8 hover:border-tech-blue/30 transition-all duration-300 cursor-pointer"
              >
                <div className="h-12 w-12 rounded-2xl bg-tech-blue/10 flex items-center justify-center mb-6 group-hover:bg-tech-blue/20 transition-colors">
                  <svg className="h-6 w-6 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="3" y1="9" x2="21" y2="9"/>
                    <line x1="9" y1="21" x2="21" y2="21"/>
                  </svg>
                </div>
                <h3 className="font-manrope font-bold text-xl mb-3 text-white">E-Commerce</h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Modern online stores for businesses ready to sell online with secure checkout and great UX.
                </p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-tech-blue text-sm font-medium hover:underline">
                  Learn More
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <div
                className="rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-8 hover:border-tech-blue/30 transition-all duration-300 cursor-pointer"
              >
                <div className="h-12 w-12 rounded-2xl bg-tech-blue/10 flex items-center justify-center mb-6 group-hover:bg-tech-blue/20 transition-colors">
                  <svg className="h-6 w-6 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 5v14M5 12h14"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 className="font-manrope font-bold text-xl mb-3 text-white">Redesigns</h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Transform outdated websites into modern digital experiences that engage and convert visitors.
                </p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-tech-blue text-sm font-medium hover:underline">
                  Learn More
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <div
                className="rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-8 hover:border-tech-blue/30 transition-all duration-300 cursor-pointer"
              >
                <div className="h-12 w-12 rounded-2xl bg-tech-blue/10 flex items-center justify-center mb-6 group-hover:bg-tech-blue/20 transition-colors">
                  <svg className="h-6 w-6 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 5v14M5 12h14"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 className="font-manrope font-bold text-xl mb-3 text-white">Business Websites</h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Professional websites for local and growing businesses that establish credibility and drive growth.
                </p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-tech-blue text-sm font-medium hover:underline">
                  Learn More
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <div
                className="rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-8 hover:border-tech-blue/30 transition-all duration-300 cursor-pointer"
              >
                <div className="h-12 w-12 rounded-2xl bg-tech-blue/10 flex items-center justify-center mb-6 group-hover:bg-tech-blue/20 transition-colors">
                  <svg className="h-6 w-6 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 5v14M5 12h14"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 className="font-manrope font-bold text-xl mb-3 text-white">SEO-Ready Builds</h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Websites built with structure and technical foundations for search engine visibility.
                </p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-tech-blue text-sm font-medium hover:underline">
                  Learn More
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Problem / Positioning Section */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative px-6">
            <div className="flex items-center justify-center mb-12">
              <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center mb-6 lg:mb-0">
                <svg className="h-6 w-6 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="15" y1="9" x2="9" y2="15"/>
                  <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
              </div>
            </div>
            <h2 className="font-manrope text-4xl font-extrabold text-white mb-6 text-center">
              Your customers are already looking you up.
            </h2>
            <ol className="mt-4 max-w-2xl mx-auto space-y-2 text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-tech-blue uppercase tracking-[0.2em]">01</span>
                <span>No website</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-tech-blue uppercase tracking-[0.2em]">02</span>
                <span>Outdated website</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-tech-blue uppercase tracking-[0.2em]">03</span>
                <span>Slow website</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-tech-blue uppercase tracking-[0.2em]">04</span>
                <span>Confusing website</span>
              </li>
            </ol>
            <p className="mt-6 font-medium text-white text-center">
              And that can cost you trust. NeuroMark is the solution.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="mx-auto max-w-7xl px-6 py-24 bg-neutral-950">
          <div className="relative px-6">
            <h2 className="font-manrope text-4xl font-extrabold text-white mb-12 text-center">
              Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service 01 */}
              <div
                className="group rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-8 hover:border-tech-blue/30 transition-all duration-300 cursor-pointer"
              >
                <div className="h-12 w-12 rounded-2xl bg-tech-blue/10 flex items-center justify-center mb-6 group-hover:bg-tech-blue/20 transition-colors">
                  <svg className="h-6 w-6 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="3" y1="9" x2="21" y2="9"/>
                    <line x1="9" y1="21" x2="21" y2="21"/>
                  </svg>
                </div>
                <h3 className="font-manrope font-bold text-xl mb-3 text-white">Business Websites</h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Professional websites for local and growing businesses that establish credibility and drive growth.
                </p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-tech-blue text-sm font-medium hover:underline">
                  Learn More
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              {/* Service 02 */}
              <div className="group rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-8 hover:border-tech-blue/30 transition-all duration-300 cursor-pointer">
                <div className="h-12 w-12 rounded-2xl bg-tech-blue/10 flex items-center justify-center mb-6 group-hover:bg-tech-blue/20 transition-colors">
                  <svg className="h-6 w-6 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 5v14M5 12h14"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 className="font-manrope font-bold text-xl mb-3 text-white">Website Redesigns</h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Transform outdated websites into modern digital experiences that engage and convert visitors.
                </p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-tech-blue text-sm font-medium hover:underline">
                  Learn More
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              {/* Service 03 */}
              <div className="group rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-8 hover:border-tech-blue/30 transition-all duration-300 cursor-pointer">
                <div className="h-12 w-12 rounded-2xl bg-tech-blue/10 flex items-center justify-center mb-6 group-hover:bg-tech-blue/20 transition-colors">
                  <svg className="h-6 w-6 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="3" y1="9" x2="21" y2="9"/>
                    <line x1="9" y1="21" x2="21" y2="21"/>
                  </svg>
                </div>
                <h3 className="font-manrope font-bold text-xl mb-3 text-white">Landing Pages</h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Focused pages designed around a specific campaign, service, or offer for maximum conversion.
                </p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-tech-blue text-sm font-medium hover:underline">
                  Learn More
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              {/* Service 04 */}
              <div className="group rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-8 hover:border-tech-blue/30 transition-all duration-300 cursor-pointer">
                <div className="h-12 w-12 rounded-2xl bg-tech-blue/10 flex items-center justify-center mb-6 group-hover:bg-tech-blue/20 transition-colors">
                  <svg className="h-6 w-6 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 5v14M5 12h14"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 className="font-manrope font-bold text-xl mb-3 text-white">E-Commerce</h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Modern online stores for businesses ready to sell online with secure checkout and great UX.
                </p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-tech-blue text-sm font-medium hover:underline">
                  Learn More
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              {/* Service 05 */}
              <div className="group rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-8 hover:border-tech-blue/30 transition-all duration-300 cursor-pointer">
                <div className="h-12 w-12 rounded-2xl bg-tech-blue/10 flex items-center justify-center mb-6 group-hover:bg-tech-blue/20 transition-colors">
                  <svg className="h-6 w-6 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="3" y1="9" x2="21" y2="9"/>
                    <line x1="9" y1="21" x2="21" y2="21"/>
                  </svg>
                </div>
                <h3 className="font-manrope font-bold text-xl mb-3 text-white">Website Maintenance</h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Hosting, updates, improvements and ongoing support to keep your website running smoothly.
                </p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-tech-blue text-sm font-medium hover:underline">
                  Learn More
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              {/* Service 06 */}
              <div className="group rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-8 hover:border-tech-blue/30 transition-all duration-300 cursor-pointer">
                <div className="h-12 w-12 rounded-2xl bg-tech-blue/10 flex items-center justify-center mb-6 group-hover:bg-tech-blue/20 transition-colors">
                  <svg className="h-6 w-6 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 5v14M5 12h14"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 className="font-manrope font-bold text-xl mb-3 text-white">Digital Presence</h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Help businesses establish a consistent and credible online presence across all platforms.
                </p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-tech-blue text-sm font-medium hover:underline">
                  Learn More
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why NeuroMark Section */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative px-6">
            <h2 className="font-manrope text-4xl font-extrabold text-white mb-12 text-center">
              Why Choose NeuroMark?
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-2xl mx-auto">
              <div
                className="rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-6 hover:border-tech-blue/30 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-2xl bg-tech-blue/10 flex items-center justify-center mb-4">
                  <svg className="h-5 w-5 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </div>
                <h3 className="font-manrope font-bold text-xl mb-2 text-white">Built Around Your Business</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We take the time to understand your business goals, customers, and brand personality before writing a single line of code.
                </p>
              </div>
              <div
                className="rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-6 hover:border-tech-blue/30 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-2xl bg-tech-blue/10 flex items-center justify-center mb-4">
                  <svg className="h-5 w-5 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </div>
                <h3 className="font-manrope font-bold text-xl mb-2 text-white">Mobile-First</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Every website we build looks stunning and works perfectly on phones, tablets, and desktops.
                </p>
              </div>
              <div
                className="rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-6 hover:border-tech-blue/30 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-2xl bg-tech-blue/10 flex items-center justify-center mb-4">
                  <svg className="h-5 w-5 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </div>
                <h3 className="font-manrope font-bold text-xl mb-2 text-white">Fast Loading</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We optimize every website for speed. Fast loading means better user experience and improved SEO.
                </p>
              </div>
            </div>
            <div className="mt-8 max-w-2xl mx-auto">
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-4 rounded-2xl bg-white px-10 py-5 font-manrope text-sm font-black text-black transition-all hover:scale-[1.02] active:scale-[0.98] focus-ring"
              >
                Get a Free Demo
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Before / After Section */}
        <section className="mx-auto max-w-7xl px-6 py-24 bg-neutral-950">
          <div className="relative px-6">
            <h2 className="font-manrope text-4xl font-extrabold text-white mb-12 text-center">
              See the Difference
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-manrope text-2xl font-bold mb-4 text-white">Before</h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Outdated design, slow loading, poor mobile experience, no clear calls-to-action.
                  Your business looks invisible online.
                </p>
              </div>
              <div>
                <h3 className="font-manrope text-2xl font-bold mb-4 text-white">After</h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Modern, professional website that converts visitors into customers. Fast, mobile-friendly,
                  with clear calls-to-action and a strong online presence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative px-6">
            <h2 className="font-manrope text-4xl font-extrabold text-white mb-12 text-center">
              Our Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-6 text-center relative overflow-hidden"
                >
                  <div className="absolute -top-1 -right-1 rounded-full bg-tech-blue/20 w-12 h-12 flex items-center justify-center text-tech-blue text-xs font-bold">0{i + 1}</div>
                  <h3 className="font-manrope font-bold text-xl mb-3 text-white">Step {i + 1}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {['Discover', 'Design', 'Build', 'Refine', 'Launch'][i]}:
                    {['Understand the business, customers and goals.', 'Create the visual direction and user experience.', 'Develop the responsive website.', 'Review, test and polish.', 'Connect the domain, hosting and launch the website.'][i]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Work With Section */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative px-6">
            <h2 className="font-manrope text-4xl font-extrabold text-white mb-12 text-center">
              Who We Work With
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              <button
                className="group rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-4 text-left hover:border-tech-blue/30 transition-all duration-300"
              >
                <span className="font-manrope font-medium text-white">Restaurants & Cafés</span>
              </button>
              <button
                className="group rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-4 text-left hover:border-tech-blue/30 transition-all duration-300"
              >
                <span className="font-manrope font-medium text-white">Clinics & Healthcare</span>
              </button>
              <button
                className="group rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-4 text-left hover:border-tech-blue/30 transition-all duration-300"
              >
                <span className="font-manrope font-medium text-white">Fitness & Wellness</span>
              </button>
              <button
                className="group rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-4 text-left hover:border-tech-blue/30 transition-all duration-300"
              >
                <span className="font-manrope font-medium text-white">Interior Designers</span>
              </button>
              <button
                className="group rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-4 text-left hover:border-tech-blue/30 transition-all duration-300"
              >
                <span className="font-manrope font-medium text-white">Real Estate</span>
              </button>
              <button
                className="group rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-4 text-left hover:border-tech-blue/30 transition-all duration-300"
              >
                <span className="font-manrope font-medium text-white">Salons & Beauty</span>
              </button>
              <button
                className="group rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-4 text-left hover:border-tech-blue/30 transition-all duration-300"
              >
                <span className="font-manrope font-medium text-white">Professional Services</span>
              </button>
              <button
                className="group rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-4 text-left hover:border-tech-blue/30 transition-all duration-300"
              >
                <span className="font-manrope font-medium text-white">Education & Coaching</span>
              </button>
              <button
                className="group rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-4 text-left hover:border-tech-blue/30 transition-all duration-300"
              >
                <span className="font-manrope font-medium text-white">Growing Local Businesses</span>
              </button>
            </div>
          </div>
        </section>

        {/* Pricing / Packages Section */}
        <section className="mx-auto max-w-7xl px-6 py-24 bg-neutral-950">
          <div className="relative px-6">
            <h2 className="font-manrope text-4xl font-extrabold text-white mb-12 text-center">
              Pricing / Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* STARTER Card */}
              <div
                className="rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-8 hover:border-tech-blue/30 transition-all duration-300 cursor-pointer"
              >
                <div className="h-12 w-12 rounded-2xl bg-tech-blue/10 flex items-center justify-center mb-6">
                  <svg className="h-6 w-6 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="3" y1="9" x2="21" y2="9"/>
                    <line x1="9" y1="21" x2="21" y2="21"/>
                  </svg>
                </div>
                <h3 className="font-manrope font-bold text-xl mb-4 text-white">STARTER</h3>
                <p className="font-manrope text-5xl font-extrabold text-tech-blue mb-2">₹15,000</p>
                <p className="text-zinc-400 text-sm mb-8">
                  For businesses that need a professional online presence.
                </p>
                <ul className="space-y-3 text-zinc-400 text-sm mb-8">
                  <li>Up to 5 pages</li>
                  <li>Professional, mobile-responsive website</li>
                  <li>Custom domain and hosting for the first year</li>
                  <li>WhatsApp and click-to-call integration</li>
                  <li>Contact form and Google Maps integration</li>
                  <li>Basic on-page SEO setup</li>
                  <li>SSL and launch testing</li>
                  <li>2 rounds of revisions</li>
                </ul>
                <a
                  href="/contact"
                  className="group relative inline-flex items-center gap-4 rounded-2xl bg-white px-6 py-3 font-manrope text-sm font-black text-black transition-all hover:scale-[1.02] active:scale-[0.98] focus-ring w-full"
                >
                  Get Started
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </a>
              </div>

              {/* GROWTH Card - recommended */}
              <div
                className="rounded-2xl bg-tech-blue/10 p-8 hover:bg-tech-blue/20 transition-all duration-300 cursor-pointer"
              >
                <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center mb-6">
                  <svg className="h-6 w-6 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="3" y1="9" x2="21" y2="9"/>
                    <line x1="9" y1="21" x2="21" y2="21"/>
                  </svg>
                </div>
                <h3 className="font-manrope font-bold text-xl mb-4 text-white">GROWTH</h3>
                <p className="font-manrope text-5xl font-extrabold text-white mb-2">₹30,000</p>
                <p className="text-zinc-400 text-sm mb-8">
                  For businesses that want a stronger website and better lead generation.
                </p>
                <ul className="space-y-3 text-zinc-400 text-sm mb-8">
                  <li>Up to 8–10 pages</li>
                  <li>More customized visual design</li>
                  <li>Custom sections and polished animations</li>
                  <li>Project gallery or portfolio</li>
                  <li>Lead-generation forms and WhatsApp integration</li>
                  <li>Analytics integration and SEO foundations</li>
                  <li>Domain and hosting for the first year</li>
                  <li>3 rounds of revisions</li>
                  <li>30 days of post-launch bug support</li>
                </ul>
                <a
                  href="/contact"
                  className="group relative inline-flex items-center gap-4 rounded-2xl bg-white px-6 py-3 font-manrope text-sm font-black text-black transition-all hover:scale-[1.02] active:scale-[0.98] focus-ring w-full"
                >
                  Get Started
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </a>
              </div>

              {/* PREMIUM Card */}
              <div
                className="rounded-2xl bg-neutral-950/50 backdrop-blur border border-white/10 p-8 hover:border-tech-blue/30 transition-all duration-300 cursor-pointer"
              >
                <div className="h-12 w-12 rounded-2xl bg-tech-blue/10 flex items-center justify-center mb-6">
                  <svg className="h-6 w-6 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="3" y1="9" x2="21" y2="9"/>
                    <line x1="9" y1="21" x2="21" y2="21"/>
                  </svg>
                </div>
                <h3 className="font-manrope font-bold text-xl mb-4 text-white">PREMIUM</h3>
                <p className="font-manrope text-5xl font-extrabold text-tech-blue mb-2">₹40,000+</p>
                <p className="text-zinc-400 text-sm mb-8">
                  For businesses that need a more advanced/custom digital presence.
                </p>
                <ul className="space-y-3 text-zinc-400 text-sm mb-8">
                  <li>Bespoke design and a distinctive brand experience</li>
                  <li>Advanced interactions and animations where appropriate</li>
                  <li>Larger portfolio, service catalogue, or case-study sections</li>
                  <li>Additional integrations based on requirements</li>
                  <li>More extensive SEO and performance setup</li>
                  <li>Domain and hosting for the first year</li>
                  <li>3 rounds of revisions</li>
                  <li>60 days of post-launch bug support</li>
                </ul>
                <a
                  href="/contact"
                  className="group relative inline-flex items-center gap-4 rounded-2xl bg-white px-6 py-3 font-manrope text-sm font-black text-black transition-all hover:scale-[1.02] active:scale-[0.98] focus-ring w-full"
                >
                  Get Started
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative px-6">
            <h2 className="font-manrope text-4xl font-extrabold text-white mb-12 text-center">
              FAQ
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                <details className="border border-white/10 rounded-2xl p-6 bg-neutral-950/50">
                  <summary className="font-manrope font-bold text-white cursor-pointer flex items-center justify-between">
                    How much does a website cost?
                    <svg className="h-4 w-4 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 5l7 7-7 7"/>
                    </svg>
                  </summary>
                  <p className="mt-3 text-zinc-400 text-sm">
                    Professional websites from ₹15,000. The final cost depends on complexity, features, and customization requirements.
                  </p>
                </details>

                <details className="border border-white/10 rounded-2xl p-6 bg-neutral-950/50">
                  <summary className="font-manrope font-bold text-white cursor-pointer flex items-center justify-between">
                    How long does a website take?
                    <svg className="h-4 w-4 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 5l7 7-7 7"/>
                    </svg>
                  </summary>
                  <p className="mt-3 text-zinc-400 text-sm">
                    Typical timeline is 4-8 weeks depending on the scope and complexity of the project.
                  </p>
                </details>

                <details className="border border-white/10 rounded-2xl p-6 bg-neutral-950/50">
                  <summary className="font-manrope font-bold text-white cursor-pointer flex items-center justify-between">
                    Is hosting included?
                    <svg className="h-4 w-4 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 5l7 7-7 7"/>
                    </svg>
                  </summary>
                  <p className="mt-3 text-zinc-400 text-sm">
                    Yes, domain and hosting setup are included for the first year as part of our launch package.
                  </p>
                </details>

                <details className="border border-white/10 rounded-2xl p-6 bg-neutral-950/50">
                  <summary className="font-manrope font-bold text-white cursor-pointer flex items-center justify-between">
                    Is the domain included?
                    <svg className="h-4 w-4 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 5l7 7-7 7"/>
                    </svg>
                  </summary>
                  <p className="mt-3 text-zinc-400 text-sm">
                    Yes, a custom domain is included for the first year. We can also work with your existing domain.
                  </p>
                </details>

                <details className="border border-white/10 rounded-2xl p-6 bg-neutral-950/50">
                  <summary className="font-manrope font-bold text-white cursor-pointer flex items-center justify-between">
                    Can you redesign my existing website?
                    <svg className="h-4 w-4 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 5l7 7-7 7"/>
                    </svg>
                  </summary>
                  <p className="mt-3 text-zinc-400 text-sm">
                    Yes, we specialize in website redesigns that transform outdated sites into modern digital experiences.
                  </p>
                </details>

                <details className="border border-white/10 rounded-2xl p-6 bg-neutral-950/50">
                  <summary className="font-manrope font-bold text-white cursor-pointer flex items-center justify-between">
                    Will the website work on mobile?
                    <svg className="h-4 w-4 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 5l7 7-7 7"/>
                    </svg>
                  </summary>
                  <p className="mt-3 text-zinc-400 text-sm">
                    Yes, all NeuroMark websites are mobile-first and look great on all devices.
                  </p>
                </details>

                <details className="border border-white/10 rounded-2xl p-6 bg-neutral-950/50">
                  <summary className="font-manrope font-bold text-white cursor-pointer flex items-center justify-between">
                    Can customers contact me through WhatsApp?
                    <svg className="h-4 w-4 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 5l7 7-7 7"/>
                    </svg>
                  </summary>
                  <p className="mt-3 text-zinc-400 text-sm">
                    Yes, we can integrate WhatsApp Business API for direct customer communication.
                  </p>
                </details>

                <details className="border border-white/10 rounded-2xl p-6 bg-neutral-950/50">
                  <summary className="font-manrope font-bold text-white cursor-pointer flex items-center justify-between">
                    Can I update the website later?
                    <svg className="h-4 w-4 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 5l7 7-7 7"/>
                    </svg>
                  </summary>
                  <p className="mt-3 text-zinc-400 text-sm">
                    Yes, all websites are built on CMS platforms so you can easily update content yourself.
                  </p>
                </details>

                <details className="border border-white/10 rounded-2xl p-6 bg-neutral-950/50">
                  <summary className="font-manrope font-bold text-white cursor-pointer flex items-center justify-between">
                    Do you provide maintenance?
                    <svg className="h-4 w-4 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 5l7 7-7 7"/>
                    </svg>
                  </summary>
                  <p className="mt-3 text-zinc-400 text-sm">
                    Yes, we offer ongoing maintenance and support packages for all websites we build.
                  </p>
                </details>

                <details className="border border-white/10 rounded-2xl p-6 bg-neutral-950/50">
                  <summary className="font-manrope font-bold text-white cursor-pointer flex items-center justify-between">
                    Do you work with businesses outside Hyderabad?
                    <svg className="h-4 w-4 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 5l7 7-7 7"/>
                    </svg>
                  </summary>
                  <p className="mt-3 text-zinc-400 text-sm">
                    Yes, we work with businesses across India and can help with remote setup and configuration.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="mx-auto max-w-7xl px-6 py-24 bg-neutral-950/80 backdrop-blur-lg">
          <div className="relative px-6">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/10 to-neutral-950 rounded-2xl opacity-80" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto text-center px-8 py-16">
              <h2 className="font-manrope text-3xl font-bold mb-4 text-white">
                Ready to look better online?
              </h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                Tell us about your business and we'll show you what your website could look like.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center gap-4 rounded-2xl bg-white px-10 py-5 font-manrope text-sm font-black text-black transition-all hover:scale-[1.02] active:scale-[0.98] focus-ring"
                >
                  Get a Free Demo
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </a>
                <a
                  href="mailto:info@neuromark.agency"
                  className="inline-flex items-center gap-2 px-6 py-4 font-mono text-xs font-bold tracking-[0.2em] text-white/70 hover:text-white transition-colors focus-rounded-xl"
                >
                  Talk to NeuroMark
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}