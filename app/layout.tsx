import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fahad Rasheed — Personal Portfolio & Systems Builder',
  description:
    'Full-Stack Web Developer & Growth-Driven Builder. Portfolio of Fahad Rasheed — specializing in high-performance web applications, luxury SaaS platforms, and conversion-focused architectures.',
  icons: {
    icon: '/fr-icon.png?v=5',
    shortcut: '/fr-icon.ico?v=5',
    apple: '/fr-icon.png?v=5',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" sizes="64x64" href="/fr-icon.png?v=5" />
        <link rel="icon" type="image/svg+xml" href="/fr-icon.svg?v=5" />
        <link rel="shortcut icon" href="/fr-icon.ico?v=5" />
        <link rel="apple-touch-icon" href="/fr-icon.png?v=5" />
      </head>
      <body className="min-h-screen bg-[#F8F8F8] text-[#222222] antialiased selection:bg-[#222222] selection:text-white relative">
        {/* Subtle Background Watermark 'PORTFOLIO' */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
          <span className="watermark-text select-none">
            PORTFOLIO
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
