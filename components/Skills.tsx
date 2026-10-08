'use client';

import React from 'react';
import {
  Code2,
  Database,
  Cpu,
  BarChart3,
  Layers,
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillCategory } from '@/data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="h-5 w-5 text-[#222222]" />;
      case 'Database':
        return <Database className="h-5 w-5 text-[#222222]" />;
      case 'Cpu':
        return <Cpu className="h-5 w-5 text-[#222222]" />;
      case 'BarChart3':
        return <BarChart3 className="h-5 w-5 text-[#222222]" />;
      default:
        return <Layers className="h-5 w-5 text-[#222222]" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#7B7B7B] block mb-2">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#222222]">
              Services &amp; Technical Stack
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#7B7B7B] max-w-xl">
              Clean Neo-Grotesk architecture uniting modern frontend engineering, low-latency databases, and conversion psychology.
            </p>
          </div>
        </div>

        {/* 4 Categorized Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.skillCategories.map((category: SkillCategory, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-[#EBEBEB] p-7 sm:p-8 hover:border-[#222222] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5]">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#222222] tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-xs text-[#7B7B7B] mt-0.5">{category.description}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#7B7B7B]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Skills list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="rounded-2xl border border-[#F0F0F0] bg-[#FAFAFA] p-3.5 hover:border-[#222222] transition-colors"
                    >
                      <div className="mb-1.5">
                        <span className="text-xs font-bold text-[#222222] block">
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#7B7B7B] leading-relaxed">
                        {skill.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub status */}
              <div className="mt-6 pt-4 border-t border-[#F0F0F0] flex items-center justify-between text-xs text-[#7B7B7B] font-mono">
                <span>Production Ready</span>
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Impact Metric Banner (Inspired by Dribbble Shot 2: '120% Average increase in client engagement') */}
        <div className="mt-8 rounded-3xl bg-white border border-[#EBEBEB] p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7B7B7B] block mb-2">
              Commercial Impact
            </span>
            <h4 className="text-2xl font-black text-[#222222] tracking-tight">
              Engineering Built for Measurable Revenue
            </h4>
            <p className="text-sm text-[#7B7B7B] mt-2 leading-relaxed">
              Every interface is architected around friction elimination, sub-second LCP load performance, and intuitive buyer conversion journeys.
            </p>
          </div>

          <div className="rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5] p-6 text-center min-w-[200px]">
            <span className="block text-4xl font-black text-[#222222] tracking-tight">
              120%
            </span>
            <span className="block text-xs font-medium text-[#7B7B7B] mt-1">
              Average increase in client lead turnaround
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
