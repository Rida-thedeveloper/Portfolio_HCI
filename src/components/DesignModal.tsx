import React, { useEffect, useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Info,
  CheckCircle2,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { Challenge } from '../types/portfolio';
import { SignUpScreenFull } from './screens/full/SignUpScreenFull';
import { CheckoutScreenFull } from './screens/full/CheckoutScreenFull';
import { SaaSScreenFull } from './screens/full/SaaSScreenFull';
import { CalculatorScreenFull } from './screens/full/CalculatorScreenFull';
import { AppIconScreenFull } from './screens/full/AppIconScreenFull';

interface DesignModalProps {
  challenge: Challenge | null;
  allChallenges: Challenge[];
  onClose: () => void;
  onSelectChallenge: (challenge: Challenge) => void;
}

export const DesignModal: React.FC<DesignModalProps> = ({
  challenge,
  allChallenges,
  onClose,
  onSelectChallenge,
}) => {
  const [showNotes, setShowNotes] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && challenge) {
        const currentIndex = allChallenges.findIndex((c) => c.id === challenge.id);
        const nextIndex = (currentIndex + 1) % allChallenges.length;
        onSelectChallenge(allChallenges[nextIndex]);
      }
      if (e.key === 'ArrowLeft' && challenge) {
        const currentIndex = allChallenges.findIndex((c) => c.id === challenge.id);
        const prevIndex = (currentIndex - 1 + allChallenges.length) % allChallenges.length;
        onSelectChallenge(allChallenges[prevIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [challenge, allChallenges, onClose, onSelectChallenge]);

  if (!challenge) return null;

  const isDark = challenge.id === 'saas-landing-page';
  const currentIndex = allChallenges.findIndex((c) => c.id === challenge.id);
  const prevChallenge = allChallenges[(currentIndex - 1 + allChallenges.length) % allChallenges.length];
  const nextChallenge = allChallenges[(currentIndex + 1) % allChallenges.length];

  const renderFullDesign = () => {
    switch (challenge.id) {
      case 'sign-up-page':
        return <SignUpScreenFull />;
      case 'credit-card-checkout':
        return <CheckoutScreenFull />;
      case 'saas-landing-page':
        return <SaaSScreenFull />;
      case 'calculation-interface':
        return <CalculatorScreenFull />;
      case 'mobile-app-icon':
        return <AppIconScreenFull />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col ${isDark ? 'bg-[#080b11]' : 'bg-[#faf9f8]'} animate-in fade-in duration-150`}
      onClick={onClose}
    >
      {/* Top Header Control Bar */}
      <div
        className={`w-full px-4 sm:px-6 py-3 border-b flex items-center justify-between gap-4 shrink-0 z-30 transition-colors ${
          isDark
            ? 'bg-[#080b11]/95 text-white border-slate-800 backdrop-blur-md'
            : 'bg-[#faf9f8]/95 text-slate-900 border-slate-200/90 backdrop-blur-md'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Back button & challenge identifiers */}
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors ${
              isDark
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back to Portfolio</span>
            <span className="sm:hidden">Back</span>
          </button>

          <span
            className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
              isDark ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-white'
            }`}
          >
            {challenge.number}
          </span>

          <div>
            <div className="flex items-center gap-2">
              <span
                className={`text-[11px] font-bold uppercase tracking-wider ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {challenge.client}
              </span>
              <span className={isDark ? 'text-slate-600' : 'text-slate-300'}>·</span>
              <span
                className={`text-[11px] font-medium ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {challenge.category}
              </span>
            </div>
            <h3
              className={`text-sm sm:text-base font-bold leading-tight ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              {challenge.title}
            </h3>
          </div>
        </div>

        {/* Right: Prev / Next / Notes toggle / Close */}
        <div className="flex items-center gap-2">
          {/* Toggle HCI Notes */}
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              showNotes
                ? isDark
                  ? 'bg-indigo-600 text-white border-indigo-500'
                  : 'bg-slate-900 text-white border-slate-900'
                : isDark
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Info className="w-3.5 h-3.5" />
            <span>HCI Design Notes</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showNotes ? 'rotate-180' : ''}`} />
          </button>

          {/* Quick Prev / Next Arrows */}
          <div
            className={`flex items-center border rounded-xl p-0.5 ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <button
              onClick={() => onSelectChallenge(prevChallenge)}
              title="Previous Design (Left Arrow)"
              className={`p-1.5 rounded-lg transition-colors ${
                isDark
                  ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span
              className={`text-[11px] font-mono px-2 font-semibold ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {currentIndex + 1} / {allChallenges.length}
            </span>
            <button
              onClick={() => onSelectChallenge(nextChallenge)}
              title="Next Design (Right Arrow)"
              className={`p-1.5 rounded-lg transition-colors ${
                isDark
                  ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className={`p-2 rounded-xl border transition-colors ml-1 ${
              isDark
                ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50'
            }`}
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content Area: Seamless responsive full design */}
      <div
        className={`flex-1 w-full overflow-y-auto ${
          isDark ? 'bg-[#080b11]' : 'bg-[#faf9f8]'
        } relative transition-colors`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Full Responsive Design View */}
        <div className={`w-full min-h-full ${isDark ? 'bg-[#080b11]' : 'bg-[#faf9f8]'}`}>
          {renderFullDesign()}
        </div>

        {/* Collapsible HCI Notes & Heuristics Drawer at bottom */}
        {showNotes && (
          <div
            className={`w-full border-t p-6 sm:p-8 transition-colors ${
              isDark
                ? 'bg-[#0e131f] text-slate-200 border-slate-800'
                : 'bg-white text-slate-800 border-slate-200 shadow-lg'
            }`}
          >
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-500">
                    HCI Analysis & Cognitive Rationale
                  </span>
                  <h4 className="text-lg font-bold">
                    {challenge.number} — {challenge.title} ({challenge.client})
                  </h4>
                </div>
                <button
                  onClick={() => setShowNotes(false)}
                  className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1"
                >
                  Hide notes ✕
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                <div className="space-y-3">
                  <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Cognitive Objective & Rationale
                  </h5>
                  <p className="leading-relaxed opacity-90">{challenge.cognitiveRationale}</p>
                  <p className="text-xs opacity-75">
                    <strong>HCI Focus:</strong> {challenge.hciFocus}
                  </p>
                </div>

                <div className="space-y-3">
                  <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-indigo-500" />
                    Applied Nielsen Usability Heuristics
                  </h5>
                  <ul className="space-y-2">
                    {challenge.heuristics.map((h, i) => (
                      <li key={i} className="pl-3 border-l-2 border-indigo-400">
                        <strong className="block">{h.rule}</strong>
                        <span className="opacity-80 text-xs">{h.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
