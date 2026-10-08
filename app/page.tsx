'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <main className="flex flex-col min-h-screen">
      {/* Top Navigation */}
      <Navbar onOpenContactModal={openContactModal} />

      {/* Hero Section */}
      <Hero onOpenContactModal={openContactModal} />

      {/* Featured Projects Section */}
      <Projects />

      {/* Skills & Tech Stack Grid */}
      <Skills />

      {/* Experience & Background Section */}
      <Experience />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Global Contact & Hire Me Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </main>
  );
}
