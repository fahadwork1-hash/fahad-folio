'use client';

import React, { useState } from 'react';
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle,
  Copy,
  Check,
  Github,
  Linkedin,
  Clock,
  MapPin,
  AlertCircle,
  ArrowUpRight,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Commercial SaaS System',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypes = [
    'Commercial SaaS System',
    'E-Commerce Architecture',
    'Freelance Client Platform',
    'Full-Time Contract',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name (min 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a brief message (min 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        projectType: 'Commercial SaaS System',
        message: '',
      });
      setErrors({});
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ${PORTFOLIO_DATA.personal.name}! I reviewed your portfolio and would like to discuss a project with you.`
  );
  const whatsappUrl = `https://wa.me/${PORTFOLIO_DATA.personal.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#7B7B7B] block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#222222]">
            Book A Call &amp; Let&apos;s Build
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#7B7B7B]">
            Have a project, SaaS idea, or full-time opportunity? Reach out via WhatsApp for immediate response, or drop a note below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct WhatsApp & Details */}
          {/* Left Column: Direct WhatsApp & Details */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            
            {/* WhatsApp Card */}
            <div className="rounded-3xl bg-white border border-[#EBEBEB] p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBF7EE] text-[#1E7E34] border border-[#C3E6CB]">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#222222]">Instant WhatsApp Concierge</h3>
                  <p className="text-[11px] text-[#1E7E34] font-medium">Replies within &lt; 30 mins</p>
                </div>
              </div>

              <div className="rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] p-3 mb-3.5 text-left">
                <div className="text-[10px] font-mono text-[#7B7B7B] mb-0.5 flex items-center justify-between">
                  <span>Pre-filled direct prompt:</span>
                  <span>12:42 PM</span>
                </div>
                <p className="text-xs text-[#222222] italic leading-relaxed">
                  &ldquo;Hello {PORTFOLIO_DATA.personal.name}! I reviewed your portfolio and would like to discuss a project with you.&rdquo;
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#222222] py-3 text-xs font-bold text-white shadow-sm hover:bg-black transition-all"
              >
                <span>Launch WhatsApp Conversation</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Direct Details Card */}
            <div className="rounded-3xl bg-white border border-[#EBEBEB] p-5 sm:p-6 shadow-sm">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#7B7B7B] mb-3 font-bold">
                Official Channels
              </h3>

              <div className="space-y-2.5">
                {/* Copy Email */}
                <div className="flex items-center justify-between rounded-xl border border-[#F0F0F0] bg-[#FAFAFA] p-2.5 sm:p-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-[#E5E5E5] text-[#222222]">
                      <Mail className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                        className="block text-xs font-mono font-bold text-[#222222] hover:underline"
                        title="Open in email client"
                      >
                        {PORTFOLIO_DATA.personal.email}
                      </a>
                      <span className="block text-[10px] text-[#7B7B7B]">Official Inbox</span>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="rounded-full border border-[#E5E5E5] bg-white px-2.5 py-1 text-xs font-semibold text-[#222222] hover:border-[#222222] transition-colors flex items-center gap-1"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3 w-3 text-[#1E7E34]" />
                        <span className="text-[10px] text-[#1E7E34]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span className="text-[10px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* SLA */}
                <div className="flex items-center gap-2.5 rounded-xl border border-[#F0F0F0] bg-[#FAFAFA] p-2.5 sm:p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-[#E5E5E5] text-[#222222]">
                    <Clock className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#222222]">
                      Response Guarantee
                    </span>
                    <span className="block text-[10px] text-[#7B7B7B]">Inquiries answered within 2–4 business hours</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2.5 rounded-xl border border-[#F0F0F0] bg-[#FAFAFA] p-2.5 sm:p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-[#E5E5E5] text-[#222222]">
                    <MapPin className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#222222]">
                      GCC &amp; Global Remote Available
                    </span>
                    <span className="block text-[10px] text-[#7B7B7B]">Overlapping Dubai (GST), Europe (GMT), &amp; US timezones</span>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-4 pt-3.5 border-t border-[#F0F0F0] flex items-center justify-center gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-4 py-1.5 text-xs font-bold text-[#222222] hover:border-[#222222] transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-4 py-1.5 text-xs font-bold text-[#222222] hover:border-[#222222] transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="rounded-3xl bg-white border border-[#EBEBEB] p-7 sm:p-8 shadow-sm flex-1 flex flex-col">
              <h3 className="text-2xl font-black text-[#222222] mb-1">Send a Message</h3>
              <p className="text-xs sm:text-sm text-[#7B7B7B] mb-6">
                Tell me about your product, requirements, and target timeline.
              </p>

              {isSubmitted ? (
                <div className="rounded-2xl border border-[#C3E6CB] bg-[#EBF7EE] p-8 text-center animate-fadeIn flex-1 flex flex-col items-center justify-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#1E7E34] text-white">
                    <CheckCircle className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1E7E34]">Message Dispatched!</h4>
                  <p className="text-xs sm:text-sm text-[#495057] mt-2 max-w-md mx-auto leading-relaxed">
                    Thank you. I have received your message and will review your scope promptly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 rounded-full border border-[#1E7E34] bg-white px-6 py-2.5 text-xs font-bold text-[#1E7E34] hover:bg-[#1E7E34] hover:text-white transition"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 flex-1 flex flex-col justify-between">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-[#222222] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="e.g. Sarah Connor"
                        className={`w-full rounded-2xl border bg-[#FAFAFA] px-4 py-3 text-xs sm:text-sm text-[#222222] placeholder-[#7B7B7B] transition focus:outline-none focus:bg-white ${
                          errors.name ? 'border-rose-500' : 'border-[#E5E5E5] focus:border-[#222222]'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 flex items-center gap-1 text-[11px] text-rose-500">
                          <AlertCircle className="h-3 w-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-[#222222] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="sarah@company.com"
                        className={`w-full rounded-2xl border bg-[#FAFAFA] px-4 py-3 text-xs sm:text-sm text-[#222222] placeholder-[#7B7B7B] transition focus:outline-none focus:bg-white ${
                          errors.email ? 'border-rose-500' : 'border-[#E5E5E5] focus:border-[#222222]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 flex items-center gap-1 text-[11px] text-rose-500">
                          <AlertCircle className="h-3 w-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Type Pills */}
                  <div>
                    <label className="block text-xs font-bold text-[#222222] mb-2">
                      Inquiry Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`rounded-xl px-2.5 py-2 text-[11px] font-bold border text-center transition ${
                            formData.projectType === type
                              ? 'border-[#222222] bg-[#222222] text-white'
                              : 'border-[#E5E5E5] bg-white text-[#7B7B7B] hover:text-[#222222]'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-[#222222] mb-1.5">
                      Scope &amp; Details *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Describe what you want to build, key objectives, or timeline..."
                      className={`w-full rounded-2xl border bg-[#FAFAFA] px-4 py-3 text-xs sm:text-sm text-[#222222] placeholder-[#7B7B7B] transition focus:outline-none focus:bg-white resize-none ${
                        errors.message ? 'border-rose-500' : 'border-[#E5E5E5] focus:border-[#222222]'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 flex items-center gap-1 text-[11px] text-rose-500">
                        <AlertCircle className="h-3 w-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#222222] py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-black active:scale-[0.99] disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Project Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
