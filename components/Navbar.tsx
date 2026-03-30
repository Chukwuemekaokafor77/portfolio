'use client';

import { useState } from 'react';
import { NAV_LINKS } from '@/lib/data';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setMobileOpen(false);
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Monogram */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 select-none"
        >
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center text-sm font-black text-white shadow-lg shadow-violet-900/40">
            MO
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium tracking-wide"
            >
              {link}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="text-sm font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 hover:from-violet-500 hover:to-indigo-400 text-white transition-all duration-200 shadow-lg shadow-violet-900/30 hover:shadow-violet-800/40"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-gray-300 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-300 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-300 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-black/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className="text-left py-3 px-4 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-semibold text-center transition-all duration-200"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
