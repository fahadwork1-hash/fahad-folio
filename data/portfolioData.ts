export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  status: string;
  techStack: string[];
  highlights: string[];
  liveUrl: string;
  githubUrl?: string;
  isPrivate?: boolean;
  metrics?: string;
  color: string;
  badge: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  color: string;
  skills: {
    name: string;
    level: string;
    focus: string;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: string;
  description: string;
  bullets: string[];
  skills: string[];
  badgeColor: string;
}

export interface Metric {
  value: string;
  label: string;
  description: string;
  icon: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Fahad Rasheed",
    monogram: "FR",
    role: "Full-Stack Web Developer & Growth-Driven Builder",
    headline: "Architecting high-performance web applications, multi-tenant SaaS platforms, and AI-automated workflows with Next.js, TypeScript, and Supabase—bridging clean engineering with commercial growth.",
    tagline: "Full-Stack Web Developer & Systems Builder. Engineering high-performance web applications & scalable SaaS.",
    availability: "Ready for production contracts",
    email: "fahadrasheed.work1@gmail.com",
    whatsappNumber: "923150845311",
    whatsappDisplay: "+92 315 0845311",
    location: "GCC / Worldwide Remote",
    github: "https://github.com/fahadwork1-hash",
    linkedin: "https://www.linkedin.com/in/fahadrasheed-se",
    twitter: "https://x.com",
  },

  metrics: [
    {
      value: "<0.4s",
      label: "Sub-second latency",
      description: "Optimized server responses, edge caching, and instant DOM state rendering.",
      icon: "Zap",
    },
    {
      value: "99%",
      label: "Lighthouse score",
      description: "Sub-second load speeds, 99% Google Lighthouse scores, and conversion-focused user journeys.",
      icon: "TrendingUp",
    },
    {
      value: "2.5x",
      label: "Rapid MVP speed",
      description: "Rapid iteration cycles from UX wireframes to fully deployed cloud applications with clean architecture.",
      icon: "Layers",
    },
  ] as Metric[],

  projects: [
    {
      id: "apexdrive-rental",
      title: "ApexDrive UAE — Luxury Supercar Fleet & Rental Dispatch",
      subtitle: "High-performance Vanilla JavaScript luxury fleet dispatch platform with bidirectional Arabic RTL layout and dynamic AED/USD currency engine.",
      description:
        "High-end commercial fleet allocation platform for verified exotic supercars in Dubai (Porsche, Ferrari, Lamborghini, Rolls-Royce). Engineered with native JavaScript (ES6+) for zero runtime bloat and sub-second load times, dynamic client-side AED/USD currency conversion, bidirectional Arabic RTL layout, Dubai RTA compliance integration, and instant WhatsApp concierge routing.",
      category: "Commercial Fleet MVP",
      status: "Live Production",
      techStack: ["JavaScript (ES6+)", "Tailwind CSS", "HTML5", "Dynamic DOM", "WhatsApp API", "Vercel"],
      highlights: [
        "Pure Vanilla Architecture: Engineered with native JavaScript (ES6+) and direct DOM state manipulation for zero runtime overhead and sub-second page loads.",
        "Bidirectional RTL Layout: Full Arabic (dir='rtl') and English layout switching built with custom Tailwind CSS utility patterns and responsive touch ergonomics.",
        "Dynamic Currency Engine: Real-time client-side price conversion (AED/USD) powered by native state management without external framework dependencies.",
        "Commercial Compliance UI: Tailored for Dubai RTA commercial operator standards, featuring VIP airport handover flows and direct WhatsApp concierge booking.",
      ],
      liveUrl: "https://apexdrive-rental.vercel.app/",
      githubUrl: "https://github.com/fahadwork1-hash/Apexdrive-Rental",
      isPrivate: false,
      metrics: "Live in Production • UAE Market",
      color: "from-emerald-500/20 to-teal-500/5",
      badge: "Commercial Fleet MVP",
    },
    {
      id: "fresh-find",
      title: "FreshFind — Hyperlocal Produce & Farmers Market Discovery",
      subtitle: "Hyperlocal discovery platform connecting community shoppers with regional organic growers, engineered and deployed in a 72-hour global competition sprint.",
      description:
        "Community-driven local marketplace platform helping residents discover nearby farmers markets, operating schedules, certified organic produce, and seasonal farm guides. Built under tight hackathon deadlines by a 4-member cross-functional engineering team for the TechWiz 7 Global Competition, featuring zero-latency search indexing and mobile-first touch ergonomics.",
      category: "Marketplace Engine",
      status: "Live Production",
      techStack: ["React 18", "Vite", "Tailwind CSS", "Lucide Icons", "Git / GitHub", "Vercel"],
      highlights: [
        "72-Hour Rapid Sprint: Shipped a complete production web application under strict hackathon deadlines alongside a 4-member cross-functional engineering team for the TechWiz 7 Global Competition.",
        "Modular React Architecture: Architected with React 18 and Vite build tooling, featuring multi-variable category filtering and instant client-side search indexing.",
        "Cross-Functional Git Workflow: Maintained rigorous trunk-based Git branch strategies, code reviews, PR merging, and zero-conflict staging deployments.",
        "Mobile-First Touch UX: Built a seamless, touch-friendly discovery interface with interactive operating schedules, verified vendor profiles, and produce filters.",
      ],
      liveUrl: "https://fresh-find-bice.vercel.app/",
      githubUrl: "https://github.com/fahadwork1-hash/Fresh-Find",
      isPrivate: false,
      metrics: "TechWiz 7 Global Competition • 72-Hour Rapid Sprint",
      color: "from-teal-500/20 to-emerald-500/5",
      badge: "Marketplace Engine",
    },
    {
      id: "restaurant-os-saas",
      title: "Multi-Tenant Restaurant OS & Dynamic QR Ordering Platform",
      subtitle: "Cloud-based multi-tenant restaurant management portal with dynamic table QR provisioning, real-time kitchen sync, and server-side validated cart logic.",
      description:
        "Production-grade multi-tenant restaurant operating system engineered for dining establishments. Features strict tenant logical data isolation via Supabase PostgreSQL Row Level Security (RLS), automated dynamic batch table QR generation, tamper-proof Next.js Server Actions with zero client-side price trust, a zero-cost anti-fraud verbal verification protocol, and sub-second live kitchen order sync via WebSockets.",
      category: "B2B Hospitality SaaS",
      status: "In Development • SaaS MVP",
      techStack: ["Next.js (App Router)", "TypeScript", "Supabase (PostgreSQL & Realtime)", "Tailwind CSS", "shadcn/ui", "Vercel"],
      highlights: [
        "Strict Multi-Tenant Isolation: Single-codebase architecture logically partitioning tenant data by restaurant_id enforced through Supabase PostgreSQL Row Level Security (RLS).",
        "Dynamic Batch QR & Printable Engine: Automatically provisions unique table tokens, dynamic routing URLs, and bulk printable PDF stickers upon setting table capacity.",
        "Tamper-Proof Server Actions: Eliminates client-side price tampering by executing Next.js Server Actions that query verified database prices to compute checkout totals.",
        "Zero-Cost Anti-Fraud Protocol: Mitigates prank orders without recurring SMS OTP fees via an in-person staff verbal verification gate prior to kitchen dispatch.",
        "Sub-Second Realtime Kitchen Feed: Listens to Supabase Realtime WebSockets PostgreSQL replication slots, synchronizing order statuses (NEW → ACCEPTED → PREPARING → READY) with sub-second latency.",
      ],
      liveUrl: "#",
      isPrivate: false,
      metrics: "Active MVP Architecture",
      color: "from-amber-500/20 to-orange-500/5",
      badge: "B2B Hospitality SaaS",
    },
  ] as Project[],

  skillCategories: [
    {
      title: "Frontend Architecture",
      description: "Modern, performant, and responsive interface engineering",
      icon: "Code2",
      color: "emerald",
      skills: [
        { name: "Next.js (App Router)", level: "Expert", focus: "SSR, SSG, Server Actions, route handlers, performance optimization" },
        { name: "React.js", level: "Expert", focus: "Component architecture, custom hooks, complex state management" },
        { name: "Tailwind CSS", level: "Master", focus: "Custom design systems, utility patterns, responsive micro-interactions" },
        { name: "JavaScript (ES6+)", level: "Advanced", focus: "Async patterns, DOM APIs, modern ECMAScript standards" },
        { name: "Framer Motion", level: "Advanced", focus: "Spring physics, layout animations, scroll-triggered micro-interactions" },
        { name: "Responsive UI/UX", level: "Master", focus: "Mobile-first architecture, cross-device ergonomics, fluid layouts" },
      ],
    },
    {
      title: "Backend, Cloud & Database",
      description: "Reliable APIs, structured data models, and scalable architectures",
      icon: "Database",
      color: "cyan",
      skills: [
        { name: "Node.js & Express", level: "Advanced", focus: "RESTful API services, backend middleware, authentication" },
        { name: "Supabase", level: "Advanced", focus: "PostgreSQL, Row Level Security (RLS), Realtime subscriptions, Auth" },
        { name: "PHP", level: "Proficient", focus: "Clean REST endpoints, server-side data sanitization, custom business logic" },
        { name: "MySQL & PostgreSQL", level: "Proficient", focus: "Relational schema design, data normalization, indexing" },
      ],
    },
    {
      title: "Modern Tools, AI & Deployment",
      description: "Production tooling, automated testing, and accelerated workflows",
      icon: "Cpu",
      color: "teal",
      skills: [
        { name: "Git & GitHub", level: "Advanced", focus: "Branch strategies, pull requests, semantic versioning" },
        { name: "Vercel", level: "Advanced", focus: "Production deployments, edge functions, environment configs, analytics" },
        { name: "Postman", level: "Advanced", focus: "API testing, endpoint documentation, payload inspection" },
        { name: "AI & Accelerated Dev", level: "Specialist", focus: "LLM API integrations, prompt workflows, rapid boilerplate scaffolding" },
      ],
    },
    {
      title: "E-Commerce, Product & Business Systems",
      description: "High-converting storefronts, funnel engineering, and revenue mechanics",
      icon: "BarChart3",
      color: "blue",
      skills: [
        { name: "Full-Stack E-Commerce", level: "Expert", focus: "Custom storefronts, stateful cart engines, dynamic catalogs, secure checkout logic" },
        { name: "Shopify & COD Funnels", level: "Expert", focus: "High-converting landing pages, single-page Cash-on-Delivery checkout, localization" },
        { name: "WhatsApp & Business Automation", level: "Advanced", focus: "Direct WhatsApp order routing, lead capture webhooks, automated notifications" },
        { name: "Conversion Rate Optimization (CRO)", level: "Advanced", focus: "CTA placement, page speed tuning, layout hierarchy, friction removal" },
      ],
    },
  ] as SkillCategory[],

  experience: [
    {
      period: "2023 — Present",
      role: "Freelance Full-Stack Developer",
      organization: "Independent Client & SaaS Practice",
      location: "Remote / Global",
      type: "Full-Stack Development & Architecture",
      description:
        "Architecting and shipping production-ready web applications, SaaS MVPs, and custom internal business systems engineered for high performance, conversion, and zero operational friction.",
      bullets: [
        "Engineered ApexDrive UAE: High-performance luxury supercar fleet dispatch platform built with native Vanilla JavaScript DOM mechanics, full Arabic RTL (dir=\"rtl\") layout, and real-time AED/USD currency toggling.",
        "Shipped FreshFind (TechWiz 7): Hyperlocal farmers' market discovery platform engineered and deployed in a strict 72-hour sprint with a 4-member cross-functional team for the TechWiz 7 global competition.",
        "Architecting Multi-Tenant Restaurant SaaS: Building a cloud B2B QR-ordering platform featuring Supabase PostgreSQL RLS data isolation, sub-second WebSocket kitchen sync, and server-side validated cart pricing.",
        "Internal Tools & Lightweight ERP Systems: Engineered custom operational dashboards, inventory status toggles, and automated order dispatch modules to eliminate manual data entry.",
        "AI Workflows & Core Web Vitals: Integrated LLM API workflows and automated backend webhooks while delivering modular frontend architectures scoring 95+ on Google Lighthouse with zero layout shift.",
      ],
      skills: ["Next.js", "React", "Tailwind CSS", "Supabase", "TypeScript", "PostgreSQL", "Custom ERP Tools", "AI Automation", "Vercel"],
      badgeColor: "emerald",
    },
    {
      period: "2021 — 2023",
      role: "Operations & Growth Specialist",
      organization: "Commercial Growth & Digital Marketing",
      location: "Hybrid",
      type: "Operations, Sales Funnels & Growth",
      description:
        "Spearheaded outbound prospect qualification pipelines, internal CRM/ERP workflows, and performance marketing campaigns, bridging commercial sales psychology with digital execution.",
      bullets: [
        "B2B Pipeline Execution: Managed high-volume outbound discovery campaigns, qualifying high-intent business leads across multiple commercial verticals.",
        "CRM & ERP Workflow Systems: Designed structured lead tracking databases and managed internal operational pipelines to eliminate data leakage and streamline cross-team handoffs.",
        "Performance Media & Conversion Assets: Engineered high-converting performance visual creative assets and ad media to maximize organic click-through rates (CTR) and inbound capture.",
        "Conversion Psychology to UI/UX: Cultivated deep operational intuition for buyer objections and checkout friction—now directly informing modern web architecture, CTA placement, and product UX.",
      ],
      skills: ["B2B Outbound", "Lead Qualification", "Sales Funnels", "CRM & ERP Workflows", "Conversion UX", "Performance Marketing"],
      badgeColor: "cyan",
    },
  ] as ExperienceItem[],

  navLinks: [
    { label: "Projects", href: "#projects" },
    { label: "Stack", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};
