"use client";
import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const servicesLinks: FooterLink[] = [
    { label: 'AI Automation', href: '/services' },
    { label: 'AI Chatbots', href: '/services' },
    { label: 'AI Voice Agents', href: '/services' },
    { label: 'Custom Software', href: '/services' },
    { label: 'Web & Mobile Apps', href: '/services' },
  ];

  const companyLinks: FooterLink[] = [
    { label: 'About Us', href: '/about' },
    { label: 'Case Studies / Work', href: '/work' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialLinks: SocialLink[] = [
    { icon: <FaWhatsapp className="h-5 w-5" />, href: 'https://wa.me/message/2CWY2OYVHRFGM1', label: 'WhatsApp' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/neuromark.agency', label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/company/neuromark1/?viewAsMember=true', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative mt-20 border-t border-neutral-800 bg-neutral-950 text-neutral-100 pb-20 pt-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 text-left">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 text-left">
            <Link href="/" className="mb-10 inline-block group focus-ring rounded-lg">
              <div className="flex flex-col text-left">
                <span className="font-manrope text-2xl font-extrabold tracking-tight leading-none text-left text-white">NeuroMark</span>
                <span className="font-mono text-xs text-neutral-400 font-bold uppercase tracking-[0.2em] leading-none mt-2.5 text-left">DIGITAL & AI AGENCY</span>
              </div>
            </Link>
            <p className="mb-12 max-w-md font-sans text-base font-normal leading-relaxed text-neutral-400 text-left">
              NeuroMark builds high-performance websites, custom software, and intelligent AI automation solutions for growing businesses.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/40 transition-all hover:border-tech-blue/50 hover:bg-tech-blue/10 hover:text-tech-blue focus-ring active:scale-95"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 text-left">
            <h3 className="mb-10 font-mono text-[11px] font-black tracking-[0.4em] text-tech-blue uppercase text-left">Services</h3>
            <ul className="space-y-5">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-mono text-xs font-bold text-neutral-400 transition-colors hover:text-white hover:text-tech-blue py-2 px-1 -ml-1 text-left"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 text-left">
            <h3 className="mb-10 font-mono text-[11px] font-black tracking-[0.4em] text-tech-blue uppercase text-left">Company & Resources</h3>
            <ul className="space-y-5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-mono text-xs font-bold text-neutral-400 transition-colors hover:text-white hover:text-tech-blue py-2 px-1 text-left"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-neutral-800">
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
            <div className="flex flex-col gap-3 text-center md:text-left">
              <p className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] text-left">© 2026 NeuroMark Agency. All rights reserved.</p>
              <div className="flex items-center justify-center gap-6 md:justify-start">
                <Link href="/contact" className="font-mono text-[10px] font-black text-neutral-400 hover:text-white transition-colors uppercase">Privacy Policy</Link>
                <span className="text-neutral-600">|</span>
                <Link href="/contact" className="font-mono text-[10px] font-black text-neutral-400 hover:text-white transition-colors uppercase">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;