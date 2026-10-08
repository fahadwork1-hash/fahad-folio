'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface NavbarProps {
  onOpenContactModal: () => void;
}

export default function Navbar({ onOpenContactModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F8F8]/90 backdrop-blur-md border-b border-[#EBEBEB] py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Left: Minimal Studio Monogram Logo */}
        <a href="#" className="flex items-center gap-3 group" aria-label={`${PORTFOLIO_DATA.personal.name} - Home`}>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222222] text-white font-mono text-xs font-bold transition-transform group-hover:scale-105">
            {PORTFOLIO_DATA.personal.monogram}
          </div>
          <span className="font-bold text-sm tracking-tight text-[#222222]">
            {PORTFOLIO_DATA.personal.name}
          </span>
        </a>

        {/* Center: Clean Studio Navigation Links (Like Dribbble Shot: About Me, Portfolio, Services, Contact) */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold text-[#7B7B7B]">
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
        </nav>

        {/* Right: Book A Call ↗ + Year (Like Dribbble Shot 2024 / Book A Call) */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={onOpenContactModal}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#222222] hover:text-[#7B7B7B] transition-colors group underline decoration-1 underline-offset-4"
          >
            <span>Book A Call</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          
          <span className="text-xs font-bold font-mono text-[#222222] underline decoration-2 underline-offset-4">
            {currentYear}
          </span>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenContactModal}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#222222] underline underline-offset-2"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#222222]"
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#EBEBEB] bg-[#FFFFFF] px-6 py-6 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#222222]"
            >
              About Me
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#222222]"
            >
              Portfolio
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#222222]"
            >
              Services
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#222222]"
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#222222]"
            >
              Contact
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-[#222222] py-3 text-xs font-bold text-white shadow-md"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Book A Call / Hire Me</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
