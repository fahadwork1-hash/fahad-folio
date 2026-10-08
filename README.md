# Developer Portfolio Web Application

A high-converting, modern, and production-ready Developer Portfolio web application built with **Next.js (App Router)**, **Tailwind CSS**, **Lucide React**, and **Framer Motion**.

---

## 🎨 Visual Identity & Theme
- **Theme:** Clean Dark Mode (`#080c14` Slate-950/Zinc-900 background with crisp white typography and subtle emerald/cyan glow accents).
- **Design Style:** Modern minimal SaaS look, subtle frosted glass cards (`backdrop-blur`), thin borders (`border-white/10`), clean typography.
- **Responsive:** 100% mobile-friendly with a sleek mobile drawer/nav.

---

## 📂 Project Architecture

```
├── app/
│   ├── globals.css          # Dark theme styles, glassmorphism utilities & glowing accents
│   ├── layout.tsx           # App Router RootLayout with SEO meta tags & ambient glows
│   └── page.tsx             # Main page composing all modular sections & modals
├── components/
│   ├── Navbar.tsx           # Monogram brand badge, quick links, active scroll spy, mobile drawer
│   ├── Hero.tsx             # Availability badge, bold headline, primary/secondary CTAs, key metrics
│   ├── Projects.tsx         # Modern SaaS project cards, category filters, deep-dive modal
│   ├── Skills.tsx           # 4-panel categorized tech stack grid with badges & domain strengths
│   ├── Experience.tsx       # Vertical timeline highlighting development + outbound lead generation
│   ├── Contact.tsx          # Validated contact form, instant WhatsApp chat, copyable email
│   ├── Footer.tsx           # Dynamic copyright year, status indicator, social links, back-to-top
│   └── ContactModal.tsx     # Quick "Hire Me" contact & inquiry modal with Framer Motion spring physics
├── data/
│   └── portfolioData.ts     # Centralized TypeScript data for projects, skills, metrics, and bio
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## 🚀 Getting Started

1. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

2. **Production Build & Test:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🛠️ Customizing Your Data
All data is centralized in [`data/portfolioData.ts`](file:///Users/mac/Documents/MyProtfolio/data/portfolioData.ts):
- Update `personal` to change your name, monogram, WhatsApp number, email, and social profiles.
- Modify `projects` to showcase new client projects or SaaS apps.
- Adjust `skillCategories` to customize your technical competencies.
- Update `experience` to reflect your career milestones.
