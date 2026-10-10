import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { CHALLENGES } from '../data/challengesData';
import { Challenge } from '../types/portfolio';

interface NavbarProps {
  onOpenChallenge: (challenge: Challenge) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChallenge }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#faf9f7]/90 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <a href="#home" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-full bg-slate-950 text-white font-bold flex items-center justify-center text-sm tracking-tight shadow-xs group-hover:scale-105 transition-transform">
            RF.
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 text-sm tracking-tight leading-tight">
              Rida Fatima
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              HCI Daily UI Portfolio
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-600">
          <a href="#home" className="hover:text-slate-950 transition-colors whitespace-nowrap">
            Home
          </a>
          <a href="#showcase" className="hover:text-slate-950 transition-colors whitespace-nowrap">
            Projects
          </a>
          <a href="#principles" className="hover:text-slate-950 transition-colors whitespace-nowrap">
            HCI Principles
          </a>
          <a href="#process" className="hover:text-slate-950 transition-colors whitespace-nowrap">
            Process
          </a>
          <a href="#about" className="hover:text-slate-950 transition-colors whitespace-nowrap">
            About
          </a>
          <a href="#contact" className="hover:text-slate-950 transition-colors whitespace-nowrap">
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary Action (View Projects Dropdown) */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold rounded-full shadow-xs transition-all active:scale-95"
              aria-expanded={isDropdownOpen}
            >
              <span>View Projects</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                onClick={() => setIsDropdownOpen(false)}
              >
                <div className="px-3.5 py-2 border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Select Daily UI Submission
                </div>
                {CHALLENGES.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => onOpenChallenge(ch)}
                    className="w-full text-left px-3.5 py-2.5 hover:bg-slate-50 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[10px] font-bold text-slate-400 group-hover:text-slate-900">
                          {ch.number}
                        </span>
                        <span className="text-xs font-bold text-slate-800">
                          {ch.title}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 block">
                        {ch.client} · {ch.category}
                      </span>
                    </div>
                    <span className="text-[11px] text-indigo-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Inspect →
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-950 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
          <nav className="flex flex-col gap-2.5 text-sm font-semibold text-slate-700">
            <a
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:bg-slate-50 rounded-lg"
            >
              Home
            </a>
            <a
              href="#showcase"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:bg-slate-50 rounded-lg"
            >
              Projects
            </a>
            <a
              href="#principles"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:bg-slate-50 rounded-lg"
            >
              HCI Principles
            </a>
            <a
              href="#process"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:bg-slate-50 rounded-lg"
            >
              Process
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:bg-slate-50 rounded-lg"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:bg-slate-50 rounded-lg"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
