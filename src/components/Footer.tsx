import React, { useState } from 'react';
import { ArrowUp, Linkedin, Mail, Check, Copy } from 'lucide-react';
import { ACADEMIC_PROFILE } from '../data/challengesData';

export const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('ridathedeveloper@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer id="contact" className="bg-[#faf9f7] border-t border-slate-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Heading and narrative */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Let's connect.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Thank you for exploring this Human-Computer Interaction portfolio. I'm open to design feedback, collaboration, and learning opportunities in software engineering and UX.
            </p>
          </div>

          {/* Right Column: Interactive Contact Pills */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
            {/* LinkedIn Profile */}
            <a
              href={ACADEMIC_PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0a66c2]/10 text-[#0a66c2] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                    LinkedIn
                  </span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    /{ACADEMIC_PROFILE.linkedinHandle}
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold text-indigo-600 group-hover:translate-x-0.5 transition-transform">
                Connect →
              </span>
            </a>

            {/* Email Copy Card */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                    Email
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 font-mono">
                    ridathedeveloper@gmail.com
                  </span>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors flex items-center gap-1.5"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Designed & engineered by <strong className="font-semibold text-slate-800">{ACADEMIC_PROFILE.name}</strong> · {ACADEMIC_PROFILE.university}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-950 font-semibold transition-colors py-1 px-2 rounded-lg hover:bg-slate-100"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
