'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#EBEBEB] bg-[#F8F8F8] py-14 text-[#7B7B7B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#222222] font-mono text-xs font-bold text-white">
                {PORTFOLIO_DATA.personal.monogram}
              </span>
              <span className="text-sm font-bold text-[#222222] tracking-tight">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
            <p className="mt-1.5 text-xs text-[#7B7B7B] max-w-sm">
              Full-Stack Web Developer &amp; Systems Builder. Engineering high-performance web applications &amp; scalable SaaS.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-[#7B7B7B]">
            <a href="#about" className="hover:text-[#222222] transition-colors">
              About Me
            </a>
            <a href="#projects" className="hover:text-[#222222] transition-colors">
              Portfolio
            </a>
            <a href="#skills" className="hover:text-[#222222] transition-colors">
              Services
            </a>
            <a href="#experience" className="hover:text-[#222222] transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-[#222222] transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E5E5] bg-white text-[#222222] hover:border-[#222222] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E5E5] bg-white text-[#222222] hover:border-[#222222] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E5E5] bg-white text-[#222222] hover:border-[#222222] transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222222] text-white hover:bg-black transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Copyright */}
        <div className="mt-8 pt-8 border-t border-[#EBEBEB] flex flex-col sm:flex-row items-center justify-between text-xs text-[#7B7B7B] gap-3">
          <div>
            © {currentYear} {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="h-2 w-2 rounded-full bg-[#1E7E34] animate-pulse" />
            <span className="text-[#222222] font-semibold">Ready for production contracts</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
