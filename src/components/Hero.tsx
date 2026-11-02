import React, { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { CHALLENGES } from '../data/challengesData';
import { Challenge } from '../types/portfolio';
import { SignUpScreen } from './screens/SignUpScreen';
import { CheckoutScreen } from './screens/CheckoutScreen';
import { SaaSScreen } from './screens/SaaSScreen';
import { CalculatorScreen } from './screens/CalculatorScreen';
import { AppIconScreen } from './screens/AppIconScreen';
import { UserProfileScreen } from './screens/UserProfileScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { NotFoundScreen } from './screens/NotFoundScreen';
import { MusicPlayerScreen } from './screens/MusicPlayerScreen';
import { SocialShareScreen } from './screens/SocialShareScreen';
import { FlashMessageScreen } from './screens/FlashMessageScreen';

interface HeroProps {
  onOpenChallenge: (challenge: Challenge) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChallenge }) => {
  const [activePreviewIndex, setActivePreviewIndex] = useState(3); // PennyWise calculator (#004)
  const activeChallenge = CHALLENGES[activePreviewIndex];

  const renderScreen = (id: string) => {
    switch (id) {
      case 'sign-up-page':
        return <SignUpScreen interactive={false} />;
      case 'credit-card-checkout':
        return <CheckoutScreen interactive={false} />;
      case 'saas-landing-page':
        return <SaaSScreen interactive={false} />;
      case 'calculation-interface':
        return <CalculatorScreen interactive={false} />;
      case 'mobile-app-icon':
        return <AppIconScreen interactive={false} />;
      case 'user-profile':
        return <UserProfileScreen interactive={false} />;
      case 'settings':
        return <SettingsScreen interactive={false} />;
      case '404-page':
        return <NotFoundScreen interactive={false} />;
      case 'music-player':
        return <MusicPlayerScreen interactive={false} />;
      case 'social-share':
        return <SocialShareScreen interactive={false} />;
      case 'flash-message':
        return <FlashMessageScreen interactive={false} />;
      default:
        return null;
    }
  };

  return (
    <section id="home" className="relative pt-12 pb-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-6 space-y-6">
            {/* Kicker Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <span>HUMAN–COMPUTER INTERACTION · DAILY UI</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-950 tracking-tight leading-[1.08] text-balance">
              Designing digital experiences with{' '}
              <span className="text-[#6366f1]">purpose.</span>
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              I'm <strong className="font-semibold text-slate-900">Rida Fatima</strong>, a Software Engineering student at Jinnah University for Women. This portfolio documents my journey through Daily UI challenges, where I explore visual design, usability, and human-centered interfaces.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#showcase"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold rounded-full shadow-sm hover:shadow-md transition-all active:scale-98"
              >
                <span>Explore My Designs</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-sm font-semibold rounded-full transition-all active:scale-98"
              >
                About Me
              </a>
            </div>

            {/* Metadata Trust Strip */}
            <div className="pt-4 border-t border-slate-200/90 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-500 font-medium">
              <span className="inline-flex items-center gap-1.5 text-slate-800 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {CHALLENGES.length} Completed Challenges
              </span>
              <span className="text-slate-300">·</span>
              <span>Department of CS & Software Engineering</span>
              <span className="text-slate-300">·</span>
              <span>Jinnah University for Women</span>
            </div>
          </div>

          {/* Right Column: Hero Stage Preview Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-white p-3 sm:p-5 border border-slate-200 shadow-xl overflow-hidden group">
              {/* Top Mini Switcher Tabs */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-xs">
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                  {CHALLENGES.map((ch, idx) => (
                    <button
                      key={ch.id}
                      onClick={() => setActivePreviewIndex(idx)}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all whitespace-nowrap ${
                        activePreviewIndex === idx
                          ? 'bg-slate-950 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {ch.number} {ch.title.split(' ')[0]}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => onOpenChallenge(activeChallenge)}
                  className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-indigo-600 hover:text-indigo-800 transition-colors shrink-0 ml-2"
                >
                  <span>Inspect</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Embedded Screen Display */}
              <div className="h-[380px] sm:h-[420px] rounded-2xl overflow-hidden bg-[#faf9f7] relative">
                {renderScreen(activeChallenge.id)}
              </div>

              {/* Subtle caption bottom */}
              <div className="mt-3.5 flex items-center justify-between text-xs text-slate-500 px-1">
                <div>
                  <span className="font-semibold text-slate-800">{activeChallenge.title}</span>
                  <span className="text-slate-400"> — {activeChallenge.client}</span>
                </div>
                <button
                  onClick={() => onOpenChallenge(activeChallenge)}
                  className="text-xs font-semibold text-slate-900 hover:text-indigo-600 flex items-center gap-1"
                >
                  View Details & Heuristics →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
