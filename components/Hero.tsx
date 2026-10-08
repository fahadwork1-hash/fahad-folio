'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface HeroProps {
  onOpenContactModal: () => void;
}

export default function Hero({ onOpenContactModal }: HeroProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full relative z-10 my-auto">
        
        {/* Main Grid: Left Typography & Stats + Right B&W Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Far Left Vertical Sub-tag (Like Dribbble shot: 'Product designer') */}
          <div className="hidden xl:flex lg:col-span-1 flex-col items-center justify-between self-stretch py-4 text-[#7B7B7B]">
            <span className="rotate-[-90deg] origin-center text-[11px] font-mono tracking-widest uppercase text-[#7B7B7B] whitespace-nowrap">
              Full-Stack Engineer
            </span>
            <div className="w-px h-16 bg-[#E5E5E5] my-4" />
            <span className="text-[10px] font-mono text-[#7B7B7B]">
              2026
            </span>
          </div>

          {/* Left Column: Stats & Giant 'Hello' Headline (Span 6) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            
            {/* Stats Row (Exact Dribbble Style: +200 Project completed  +50 Startup raised) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-6 sm:gap-10 mb-8 sm:mb-12"
            >
              <div>
                <span className="block text-3xl sm:text-4xl font-black text-[#222222] tracking-tight">
                  &lt;0.4s
                </span>
                <span className="text-xs font-medium text-[#7B7B7B] mt-0.5 block">
                  Sub-second latency
                </span>
              </div>

              <div>
                <span className="block text-3xl sm:text-4xl font-black text-[#222222] tracking-tight">
                  99%
                </span>
                <span className="text-xs font-medium text-[#7B7B7B] mt-0.5 block">
                  Lighthouse score
                </span>
              </div>

              <div>
                <span className="block text-3xl sm:text-4xl font-black text-[#222222] tracking-tight">
                  2.5x
                </span>
                <span className="text-xs font-medium text-[#7B7B7B] mt-0.5 block">
                  Rapid MVP speed
                </span>
              </div>
            </motion.div>

            {/* Giant 'Hello' Typography (Exact Dribbble Shot Style) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[-0.04em] text-[#222222] leading-[0.9]">
                Hello
              </h1>
              <p className="mt-4 text-base sm:text-xl font-medium text-[#7B7B7B] tracking-tight">
                — It&apos;s <strong className="text-[#222222] font-bold">{PORTFOLIO_DATA.personal.name}</strong>, a full-stack engineer &amp; builder
              </p>
            </motion.div>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-sm sm:text-base text-[#7B7B7B] leading-relaxed max-w-lg"
            >
              Architecting high-performance web applications, multi-tenant SaaS platforms, and AI-automated workflows with Next.js, TypeScript, and Supabase—bridging clean engineering with commercial growth.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#222222] px-7 py-3.5 text-xs font-bold text-white shadow-md hover:bg-black transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Work</span>
                <ArrowDown className="h-3.5 w-3.5" />
              </a>

              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 rounded-full border border-[#222222] bg-transparent px-7 py-3.5 text-xs font-bold text-[#222222] hover:bg-[#222222] hover:text-white transition-all active:scale-[0.98]"
              >
                <span>Book A Call</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </motion.div>

            {/* Bottom-left: Scroll down indicator */}
            <div className="mt-12 hidden sm:flex items-center gap-2 text-xs font-medium text-[#7B7B7B]">
              <span>Scroll down</span>
              <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
            </div>
          </div>

          {/* Right Column: High-Contrast B&W Portrait (Exact Dribbble Shot Style) */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="relative w-full max-w-[380px] sm:max-w-[420px]"
            >
              {/* Outer Minimal Frame with subtle drop shadow */}
              <div className="relative rounded-3xl overflow-hidden bg-[#FFFFFF] border border-[#E5E5E5] shadow-xl p-3">
                
                {/* Photo Container with Grayscale/High Contrast styling */}
                <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden bg-[#F0F0F0] flex items-center justify-center">
                  
                  {!imgError ? (
                    <img
                      src="/profile1.png"
                      alt={PORTFOLIO_DATA.personal.name}
                      onError={() => setImgError(true)}
                      className="h-full w-full object-cover object-top grayscale contrast-110 hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    />
                  ) : (
                    /* High-contrast Monochrome Fallback Artwork */
                    <div className="flex flex-col items-center justify-center p-8 text-center bg-[#F4F4F4] h-full w-full">
                      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#222222] text-white font-mono text-3xl font-black mb-4 shadow-lg">
                        {PORTFOLIO_DATA.personal.monogram}
                      </div>
                      <h3 className="text-xl font-black text-[#222222]">
                        {PORTFOLIO_DATA.personal.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#7B7B7B] mt-1">
                        Full-Stack Engineer &amp; Builder
                      </p>

                      <div className="mt-6 rounded-xl border border-[#E5E5E5] bg-white p-3 text-[11px] text-[#7B7B7B] shadow-sm flex items-center gap-2">
                        <Camera className="h-3.5 w-3.5 text-[#222222]" />
                        <span>Add your picture: <strong>public/profile1.png</strong></span>
                      </div>
                    </div>
                  )}

                  {/* Clean Bottom Floating Label */}
                  <div className="absolute bottom-4 inset-x-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E5E5E5] p-3 shadow-md flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-[#222222]">
                        {PORTFOLIO_DATA.personal.name}
                      </div>
                      <div className="text-[10px] text-[#7B7B7B]">
                        GCC / Worldwide Remote
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-[#222222] bg-[#F4F4F4] px-2 py-1 rounded-md">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Available
                    </span>
                  </div>
                </div>

                {/* Sub-bar below frame */}
                <div className="pt-3 px-2 flex items-center justify-between text-[11px] font-mono text-[#7B7B7B]">
                  <span>Verified Engineer</span>
                  <span>Full-Stack Builder</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Marquee Ticker */}
        <div className="mt-16 pt-8 border-t border-[#EBEBEB] overflow-hidden">
          <div className="flex gap-8 whitespace-nowrap animate-marquee text-xs font-mono font-bold text-[#7B7B7B] uppercase tracking-wider">
            {[
              'Next.js 14',
              'TypeScript',
              'Supabase Realtime',
              'Multi-Tenant Architecture',
              'Tailwind CSS',
              'Arabic RTL Systems',
              'AI Workflows',
              'PostgreSQL',
              'REST & WebSockets',
              'Next.js 14',
              'TypeScript',
              'Supabase Realtime',
              'Multi-Tenant Architecture',
              'Tailwind CSS',
              'Arabic RTL Systems',
              'AI Workflows',
              'PostgreSQL',
              'REST & WebSockets',
            ].map((skill, index) => (
              <span key={index} className="inline-flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#222222]" />
                <span className="text-[#222222]">{skill}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
