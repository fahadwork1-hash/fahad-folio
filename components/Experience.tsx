'use client';

import React from 'react';
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Rocket,
  Target,
} from 'lucide-react';
import { PORTFOLIO_DATA, ExperienceItem } from '@/data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#7B7B7B] block mb-2">
            Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#222222]">
            Experience &amp; Background
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#7B7B7B]">
            A career uniting full-stack software engineering with product strategy, conversion architecture, and scalable business systems.
          </p>
        </div>

        {/* Timeline Centered Container */}
        <div className="max-w-2xl lg:max-w-3xl mx-auto relative">
          
          {/* Continuous Vertical Timeline Line on Desktop */}
          <div className="hidden md:block absolute -left-7 top-10 bottom-10 border-l border-[#E5E5E5]" />

          {/* Timeline Items */}
          <div className="relative border-l border-[#E5E5E5] ml-4 md:ml-0 md:border-l-0 space-y-12 pl-6 sm:pl-8 md:pl-0">
            {PORTFOLIO_DATA.experience.map((item: ExperienceItem, idx) => (
              <div key={idx} className="relative group">
                
                {/* Timeline Node Bullet */}
                <div className="absolute -left-[39px] md:-left-11 top-6 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#222222] shadow-sm z-10">
                  <div className="h-2.5 w-2.5 rounded-full bg-white" />
                </div>

                {/* Date period label for desktop (offset to left) */}
                <div className="hidden md:block absolute -left-44 top-7 w-32 text-right">
                  <span className="font-mono text-xs font-bold text-[#222222] bg-white border border-[#E5E5E5] px-2.5 py-1 rounded-full shadow-sm">
                    {item.period}
                  </span>
                </div>

                {/* Experience Studio Card */}
                <div className="rounded-3xl bg-white border border-[#EBEBEB] p-7 sm:p-8 hover:border-[#222222] shadow-sm hover:shadow-xl transition-all duration-300">
                  
                  {/* Mobile Period */}
                  <div className="md:hidden inline-flex items-center gap-1.5 font-mono text-xs text-[#222222] mb-3 bg-[#F4F4F4] px-2.5 py-0.5 rounded-full">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{item.period}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0F0F0] pb-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5] text-[#222222]">
                      {idx === 0 ? <Rocket className="h-5 w-5" /> : <Target className="h-5 w-5" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#222222]">
                        {item.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-0.5 text-xs text-[#7B7B7B]">
                        <span className="font-semibold text-[#222222]">{item.organization}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-[#7B7B7B]" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="self-start sm:self-auto rounded-full bg-[#F8F8F8] border border-[#E5E5E5] px-3 py-1 text-xs font-mono font-bold text-[#222222]">
                    {item.type}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#495057] leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Bullets */}
                <div className="space-y-3 mb-6">
                  {item.bullets.map((bullet, bIdx) => {
                    const colonIndex = bullet.indexOf(':');
                    const hasPrefix = colonIndex !== -1;
                    const prefix = hasPrefix ? bullet.slice(0, colonIndex + 1) : '';
                    const body = hasPrefix ? bullet.slice(colonIndex + 1) : bullet;

                    return (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#495057]">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[#222222]" />
                        <span className="leading-relaxed">
                          {hasPrefix ? (
                            <>
                              <strong className="font-semibold text-[#222222]">{prefix}</strong>
                              {body}
                            </>
                          ) : (
                            bullet
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#F0F0F0]">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[#E5E5E5] bg-[#F8F8F8] px-2.5 py-1 text-[11px] font-mono text-[#495057]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
