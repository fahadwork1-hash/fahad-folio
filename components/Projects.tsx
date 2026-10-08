'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  CheckCircle2,
  Layers,
  Car,
  Apple,
  UtensilsCrossed,
  Check,
  ChevronRight,
  X,
  Lock,
  ArrowUpRight,
  Zap,
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['All', 'Live Production', 'B2B SaaS MVP'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PORTFOLIO_DATA.projects
      : selectedCategory === 'Live Production'
      ? PORTFOLIO_DATA.projects.filter((p) => p.status === 'Live Production')
      : PORTFOLIO_DATA.projects.filter((p) => p.status.includes('Active') || p.status.includes('SaaS') || p.id === 'restaurant-os-saas');

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'apexdrive-rental':
        return <Car className="h-4 w-4 text-[#222222]" />;
      case 'fresh-find':
        return <Apple className="h-4 w-4 text-[#222222]" />;
      case 'restaurant-os-saas':
        return <UtensilsCrossed className="h-4 w-4 text-[#222222]" />;
      default:
        return <Layers className="h-4 w-4 text-[#222222]" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#7B7B7B] block mb-2">
              Selected Works
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#222222]">
              Featured Client &amp; SaaS Systems
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#7B7B7B] max-w-xl">
              Real production platforms and private enterprise software engineered for speed, conversion, and luxury user journeys.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#222222] text-white shadow-sm'
                    : 'bg-[#FFFFFF] border border-[#E5E5E5] text-[#7B7B7B] hover:text-[#222222] hover:border-[#222222]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid (2x2 Layout) */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const isWide =
                project.id === 'restaurant-os-saas' &&
                (filteredProjects.length === 3 || filteredProjects.length === 1);

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`group relative flex flex-col justify-between rounded-3xl bg-[#FFFFFF] border border-[#EBEBEB] hover:border-[#222222] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    isWide ? 'lg:col-span-2' : ''
                  }`}
                >
                {/* Visual UI Mockup Screen Header */}
                <div className="relative border-b border-[#EBEBEB] bg-[#FAFAFA] p-5">
                  <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-[#7B7B7B] gap-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5] shrink-0" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5] shrink-0" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5] shrink-0" />
                      <span className="ml-1 text-[11px] font-medium text-[#7B7B7B] truncate max-w-[160px] sm:max-w-[220px]">
                        {project.id === 'restaurant-os-saas'
                          ? 'restaurant-os.internal'
                          : project.isPrivate
                          ? 'confidential-client.internal'
                          : project.liveUrl.replace('https://', '')}
                      </span>
                    </div>

                    {/* Status Badge */}
                    <span
                      className={`text-[10px] px-2.5 py-0.5 rounded-full font-mono font-bold flex items-center gap-1.5 border whitespace-nowrap shrink-0 ${
                        project.status === 'Live Production'
                          ? 'bg-[#EBF7EE] text-[#1E7E34] border-[#C3E6CB]'
                          : project.status.includes('Active') || project.status.includes('Development')
                          ? 'bg-[#FFF8E6] text-[#B7791F] border-[#FEEBC8]'
                          : 'bg-[#F2F2F2] text-[#495057] border-[#D6D8DB]'
                      }`}
                    >
                      {project.status === 'Live Production' && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#1E7E34] animate-pulse" />
                      )}
                      {(project.status.includes('Active') || project.status.includes('Development')) && (
                        <Zap className="h-2.5 w-2.5 text-[#B7791F]" />
                      )}
                      {project.status}
                    </span>
                  </div>

                  {/* 1. ApexDrive UAE Simulated Screen */}
                  {project.id === 'apexdrive-rental' && (
                    <div className="rounded-2xl border border-[#E5E5E5] bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between border-b border-[#F0F0F0] pb-2.5 mb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="h-6 w-6 rounded-lg bg-[#222222] flex items-center justify-center font-black text-[10px] text-white">
                            AD
                          </span>
                          <span className="text-xs font-bold text-[#222222]">ApexDrive UAE Supercars</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-mono">
                          <span className="bg-[#F4F4F4] px-2 py-0.5 rounded text-[#222222] font-semibold">
                            English / العربية
                          </span>
                          <span className="bg-[#F4F4F4] px-2 py-0.5 rounded text-[#222222] font-semibold">
                            AED / USD
                          </span>
                        </div>
                      </div>

                      <div className="rounded-xl bg-[#F8F8F8] p-3 flex items-center justify-between mb-2">
                        <div>
                          <div className="text-xs font-bold text-[#222222]">Porsche 911 GT3 RS / Ferrari F8</div>
                          <div className="text-[10px] text-[#7B7B7B] mt-0.5">Dubai RTA Operator Compliance • Instant Dispatch</div>
                        </div>
                        <span className="rounded-lg bg-white border border-[#E5E5E5] text-[#222222] text-[10px] font-mono px-2 py-1 font-bold">
                          Verified Fleet
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] pt-1">
                        <span className="text-[#7B7B7B] text-[10px]">VIP Terminal Handover</span>
                        <span className="text-[#222222] font-mono text-[10px] font-bold">
                          WhatsApp Concierge &bull; Instant
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 2. FreshFind Simulated Screen */}
                  {project.id === 'fresh-find' && (
                    <div className="rounded-2xl border border-[#E5E5E5] bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between border-b border-[#F0F0F0] pb-2.5 mb-2.5">
                        <div className="flex items-center gap-1.5">
                          <Apple className="h-4 w-4 text-[#222222]" />
                          <span className="text-xs font-bold text-[#222222]">FreshFind Marketplace</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#1E7E34] bg-[#EBF7EE] border border-[#C3E6CB] px-2 py-0.5 rounded font-bold">
                          🏆 TechWiz 7 Finalist Build
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                        <div className="rounded-xl bg-[#F8F8F8] p-2.5">
                          <div className="text-[11px] font-bold text-[#222222]">Farmers Market Near Me</div>
                          <div className="text-[10px] text-[#222222] font-medium mt-0.5">Sat &bull; 8:00 AM – 2:00 PM</div>
                          <div className="text-[9px] text-[#7B7B7B] mt-0.5">Operating schedules &amp; map</div>
                        </div>
                        <div className="rounded-xl bg-[#F8F8F8] p-2.5">
                          <div className="text-[11px] font-bold text-[#222222]">Organic Harvest Guide</div>
                          <div className="text-[10px] text-[#222222] font-medium mt-0.5">Farm-fresh seasonal picks</div>
                          <div className="text-[9px] text-[#7B7B7B] mt-0.5">0ms search latency</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-[#7B7B7B] pt-1">
                        <span>72-Hour Rapid Sprint &bull; React 18</span>
                        <span className="text-[#222222] font-mono font-bold">Mobile-first touch UX &rarr;</span>
                      </div>
                    </div>
                  )}

                  {/* 3. Multi-Tenant Restaurant OS & Dynamic QR Ordering Platform */}
                  {project.id === 'restaurant-os-saas' && (
                    <div className="rounded-2xl border border-[#E5E5E5] bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between border-b border-[#F0F0F0] pb-2.5 mb-2.5">
                        <div className="flex items-center gap-1.5">
                          <UtensilsCrossed className="h-4 w-4 text-[#222222]" />
                          <span className="text-xs font-bold text-[#222222]">Restaurant OS Cloud Portal</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#B7791F] bg-[#FFF8E6] border border-[#FEEBC8] px-2 py-0.5 rounded font-bold">
                          ⚡ Supabase RLS &amp; Realtime
                        </span>
                      </div>

                      <div className={`grid gap-2 text-xs mb-2 ${isWide ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2'}`}>
                        <div className="rounded-xl bg-[#F8F8F8] p-2.5">
                          <div className="text-[11px] font-bold text-[#222222]">Dynamic Batch QR</div>
                          <div className="text-[10px] text-[#222222] font-medium mt-0.5">Unique tokens &amp; printable PDF</div>
                          <div className="text-[9px] text-[#7B7B7B] mt-0.5">Dynamic table routing URLs</div>
                        </div>
                        <div className="rounded-xl bg-[#F8F8F8] p-2.5">
                          <div className="text-[11px] font-bold text-[#222222]">Kitchen Stream</div>
                          <div className="text-[10px] text-[#222222] font-medium mt-0.5">Sub-second WebSockets</div>
                          <div className="text-[9px] text-[#7B7B7B] mt-0.5">NEW &rarr; PREP &rarr; READY</div>
                        </div>
                        <div className={`rounded-xl bg-[#F8F8F8] p-2.5 ${isWide ? 'block' : 'hidden'}`}>
                          <div className="text-[11px] font-bold text-[#222222]">Tamper-Proof Logic</div>
                          <div className="text-[10px] text-[#222222] font-medium mt-0.5">Next.js Server Actions</div>
                          <div className="text-[9px] text-[#7B7B7B] mt-0.5">Zero client-side price trust</div>
                        </div>
                      </div>

                      <div className="rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] p-2 text-[10px] text-[#495057] flex items-center justify-between">
                        <span className="font-mono text-[#222222] font-semibold">Staff Verbal Gate (PENDING_CONFIRMATION)</span>
                        <span className="text-[#B7791F] font-bold">Zero Client-Side Trust</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Content & Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-[#222222] flex items-center gap-1.5">
                      {getProjectIcon(project.id)}
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-mono text-[#7B7B7B]">
                      {project.metrics}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold tracking-tight text-[#222222] group-hover:underline transition-all">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#7B7B7B] leading-relaxed">
                    {project.subtitle}
                  </p>

                  {/* Highlights List */}
                  <div
                    className={`mt-5 space-y-2 border-t border-[#F0F0F0] pt-4 ${
                      isWide ? 'sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 sm:gap-y-2.5' : ''
                    }`}
                  >
                    {(isWide ? project.highlights : project.highlights.slice(0, 3)).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#495057]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#222222] shrink-0 mt-0.5" />
                        <span className="leading-tight">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="mt-5 pt-3 border-t border-[#F0F0F0]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[#E5E5E5] bg-[#F8F8F8] px-2 py-0.5 font-mono text-[11px] text-[#495057]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions Bar */}
                <div className="p-6 sm:p-7 pt-0 mt-auto flex items-center gap-3">
                  {project.id === 'restaurant-os-saas' ? (
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#222222] px-4 py-3 text-xs font-bold text-white shadow-sm hover:bg-black transition-all hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <span>View Architecture Specs</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  ) : !project.isPrivate ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#222222] px-4 py-3 text-xs font-bold text-white shadow-sm hover:bg-black transition-all hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <span>Visit Live Platform</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <div className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-[#D6D8DB] bg-[#F8F8F8] px-4 py-3 text-xs font-mono font-bold text-[#495057] cursor-default">
                      <Lock className="h-3.5 w-3.5" />
                      <span>Private Client (NDA Protected)</span>
                    </div>
                  )}

                  {project.githubUrl && !project.isPrivate && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#E5E5E5] bg-[#FFFFFF] px-4 py-3 text-xs font-bold text-[#222222] hover:border-[#222222] transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="h-4 w-4" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  )}

                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="inline-flex items-center justify-center rounded-full border border-[#E5E5E5] bg-[#FFFFFF] p-3 text-[#222222] hover:border-[#222222] transition-colors"
                    aria-label="View Project Architecture Details"
                    title="Deep Dive Modal"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Deep-Dive Project Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProjectModal(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#E5E5E5] bg-white p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-flex items-center rounded-full bg-[#F4F4F4] border border-[#E5E5E5] px-3 py-1 text-xs font-mono font-bold text-[#222222] mb-2">
                    {activeProjectModal.category}
                  </span>
                  <h3 className="text-2xl font-bold text-[#222222]">{activeProjectModal.title}</h3>
                  <p className="text-sm text-[#7B7B7B] mt-1">{activeProjectModal.subtitle}</p>
                </div>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="rounded-full border border-[#E5E5E5] p-2 text-[#7B7B7B] hover:text-[#222222] hover:border-[#222222]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="text-sm text-[#495057] leading-relaxed mt-4">
                {activeProjectModal.description}
              </p>

              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#222222] mb-3 font-bold">
                  Architecture &amp; Core Highlights
                </h4>
                <ul className="space-y-2.5">
                  {activeProjectModal.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#495057]">
                      <Check className="h-4 w-4 text-[#222222] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#7B7B7B] mb-2 font-bold">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[#E5E5E5] bg-[#F8F8F8] px-3 py-1 text-xs font-mono font-semibold text-[#222222]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5E5E5] flex items-center justify-end gap-3">
                {activeProjectModal.githubUrl && !activeProjectModal.isPrivate && (
                  <a
                    href={activeProjectModal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-5 py-2.5 text-xs font-bold text-[#222222] hover:border-[#222222]"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub Code</span>
                  </a>
                )}
                {activeProjectModal.id === 'restaurant-os-saas' ? (
                  <span className="text-xs font-mono font-bold text-[#B7791F] bg-[#FFF8E6] px-4 py-2 rounded-full border border-[#FEEBC8] flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5" />
                    <span>In Active Development / SaaS MVP</span>
                  </span>
                ) : !activeProjectModal.isPrivate ? (
                  <a
                    href={activeProjectModal.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#222222] px-6 py-2.5 text-xs font-bold text-white hover:bg-black"
                  >
                    <span>Open Live Site</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-[#7B7B7B] bg-[#F8F8F8] px-3 py-1.5 rounded-full border border-[#E5E5E5]">
                    🔒 Protected under Client NDA
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
