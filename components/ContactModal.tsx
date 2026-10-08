'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Mail, Check, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }, 900);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ${PORTFOLIO_DATA.personal.name}! I reviewed your portfolio and would like to discuss a project with you.`
  );
  const whatsappUrl = `https://wa.me/${PORTFOLIO_DATA.personal.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl bg-white p-7 sm:p-9 shadow-2xl border border-[#E5E5E5]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute right-5 top-5 rounded-full border border-[#E5E5E5] p-2 text-[#7B7B7B] hover:text-[#222222] hover:border-[#222222] transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EBF7EE] border border-[#C3E6CB] px-3 py-1 text-xs font-mono font-bold text-[#1E7E34] mb-3">
                <span className="h-2 w-2 rounded-full bg-[#1E7E34] animate-ping" />
                <span>Currently Available</span>
              </span>
              <h2 className="text-2xl font-black tracking-tight text-[#222222]">
                Book A Call &bull; Let&apos;s Build
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#7B7B7B]">
                Open for senior contracts, freelance projects, and full-time systems engineering roles.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-[#C3E6CB] bg-[#EBF7EE] p-3.5 text-xs font-bold text-[#1E7E34] transition hover:bg-[#DFF0D8] group"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp Chat</span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center justify-between rounded-2xl border border-[#E5E5E5] bg-[#F8F8F8] p-3.5 text-xs font-bold text-[#222222] transition hover:border-[#222222] group"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4" />
                  <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
                </div>
                {copiedEmail ? <Check className="h-3.5 w-3.5 text-[#1E7E34]" /> : <ExternalLink className="h-3.5 w-3.5 opacity-70" />}
              </button>
            </div>

            {/* Quick Form */}
            {submitted ? (
              <div className="rounded-2xl border border-[#C3E6CB] bg-[#EBF7EE] p-6 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#1E7E34] text-white">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#1E7E34]">Inquiry Dispatched!</h3>
                <p className="text-xs text-[#495057] mt-1">Thank you. I typically respond within 2-4 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-bold text-[#222222] mb-1">
                    Your Name
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA] px-4 py-2.5 text-xs sm:text-sm text-[#222222] focus:border-[#222222] focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-bold text-[#222222] mb-1">
                    Email Address
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA] px-4 py-2.5 text-xs sm:text-sm text-[#222222] focus:border-[#222222] focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="modal-message" className="block text-xs font-bold text-[#222222] mb-1">
                    Scope / Message
                  </label>
                  <textarea
                    id="modal-message"
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your product requirements..."
                    className="w-full rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA] px-4 py-2.5 text-xs sm:text-sm text-[#222222] focus:border-[#222222] focus:bg-white focus:outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-[#222222] py-3 text-xs font-bold text-white shadow-md transition hover:bg-black active:scale-[0.99] disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>Sending inquiry...</span>
                    </>
                  ) : (
                    <span>Send Direct Inquiry</span>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
