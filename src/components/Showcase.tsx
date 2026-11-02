import React from 'react';
import { ArrowRight } from 'lucide-react';
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
import { EcommerceScreen } from './screens/EcommerceScreen';
import { DirectMessagingScreen } from './screens/DirectMessagingScreen';
import { CountdownTimerScreen } from './screens/CountdownTimerScreen';
import { OnOffSwitchScreen } from './screens/OnOffSwitchScreen';

interface ShowcaseProps {
  onOpenChallenge: (challenge: Challenge) => void;
}

const CARD_THEMES: Record<
  string,
  { bg: string; border: string; numColor: string; catColor: string; hoverBtn: string }
> = {
  'sign-up-page': {
    bg: 'bg-[#f7f6f3]',
    border: 'border-slate-100',
    numColor: 'text-slate-800',
    catColor: 'text-slate-500',
    hoverBtn: 'group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950',
  },
  'credit-card-checkout': {
    bg: 'bg-[#f7f6f3]',
    border: 'border-slate-100',
    numColor: 'text-slate-800',
    catColor: 'text-slate-500',
    hoverBtn: 'group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950',
  },
  'saas-landing-page': {
    bg: 'bg-[#0f172a]',
    border: 'border-slate-800',
    numColor: 'text-cyan-400',
    catColor: 'text-cyan-300',
    hoverBtn: 'group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600',
  },
  'calculation-interface': {
    bg: 'bg-[#f7f6f3]',
    border: 'border-slate-100',
    numColor: 'text-slate-800',
    catColor: 'text-slate-500',
    hoverBtn: 'group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950',
  },
  'mobile-app-icon': {
    bg: 'bg-[#0a1a15]',
    border: 'border-emerald-950/80',
    numColor: 'text-emerald-400',
    catColor: 'text-emerald-300',
    hoverBtn: 'group-hover:bg-emerald-700 group-hover:text-white group-hover:border-emerald-700',
  },
  'user-profile': {
    bg: 'bg-[#eef2ff]',
    border: 'border-indigo-100/70',
    numColor: 'text-indigo-900',
    catColor: 'text-indigo-600',
    hoverBtn: 'group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600',
  },
  settings: {
    bg: 'bg-[#f1f5f9]',
    border: 'border-slate-200',
    numColor: 'text-slate-800',
    catColor: 'text-slate-600',
    hoverBtn: 'group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950',
  },
  '404-page': {
    bg: 'bg-[#faf8ff]',
    border: 'border-indigo-100',
    numColor: 'text-slate-800',
    catColor: 'text-indigo-600',
    hoverBtn: 'group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950',
  },
  'music-player': {
    bg: 'bg-[#0d0e13]',
    border: 'border-slate-800',
    numColor: 'text-white',
    catColor: 'text-[#7bd0ff]',
    hoverBtn: 'group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600',
  },
  'social-share': {
    bg: 'bg-[#fbf8fc]',
    border: 'border-purple-100',
    numColor: 'text-purple-900',
    catColor: 'text-[#630ed4]',
    hoverBtn: 'group-hover:bg-[#630ed4] group-hover:text-white group-hover:border-[#630ed4]',
  },
  'flash-message': {
    bg: 'bg-[#fbf8fc]',
    border: 'border-purple-100',
    numColor: 'text-purple-900',
    catColor: 'text-[#630ed4]',
    hoverBtn: 'group-hover:bg-[#630ed4] group-hover:text-white group-hover:border-[#630ed4]',
  },
  'ecommerce-shop': {
    bg: 'bg-[#fcf9f4]',
    border: 'border-[#e8e2d9]',
    numColor: 'text-[#191919]',
    catColor: 'text-[#9e836a]',
    hoverBtn: 'group-hover:bg-[#191919] group-hover:text-white group-hover:border-[#191919]',
  },
  'direct-messaging': {
    bg: 'bg-[#f8fafc]',
    border: 'border-[#e2e8f0]',
    numColor: 'text-[#4648d4]',
    catColor: 'text-[#6366f1]',
    hoverBtn: 'group-hover:bg-[#4648d4] group-hover:text-white group-hover:border-[#4648d4]',
  },
  'countdown-timer': {
    bg: 'bg-[#0a0d14]',
    border: 'border-slate-800',
    numColor: 'text-cyan-400',
    catColor: 'text-cyan-300',
    hoverBtn: 'group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600',
  },
  'on-off-switch': {
    bg: 'bg-[#0b0d13]',
    border: 'border-[#252c3d]',
    numColor: 'text-[#00f2fe]',
    catColor: 'text-[#67f4b7]',
    hoverBtn: 'group-hover:bg-[#0b0d13] group-hover:text-[#00f2fe] group-hover:border-[#00f2fe]',
  },
};

export const Showcase: React.FC<ShowcaseProps> = ({ onOpenChallenge }) => {
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
      case 'ecommerce-shop':
        return <EcommerceScreen interactive={false} />;
      case 'direct-messaging':
        return <DirectMessagingScreen interactive={false} />;
      case 'countdown-timer':
        return <CountdownTimerScreen interactive={false} />;
      case 'on-off-switch':
        return <OnOffSwitchScreen interactive={false} />;
      default:
        return null;
    }
  };

  return (
    <section id="showcase" className="py-16 lg:py-24 bg-[#faf9f7] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Curated Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Daily UI Challenges
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Fifteen challenges displayed across a balanced 3-column architecture (5 rows × 3 designs). Explore diverse aspects of human-computer interaction, from cognitive load reduction to precision financial calculation, multi-device developer profiles, enterprise security topology, compassionate 404 wayfinding, atmospheric Hi-Fi audio playback, mindful social citations, dual-state flash messages, haute e-commerce retail, direct messaging, multi-context countdown telemetry, and tactile glassmorphic IoT switches. Click any card to inspect full high-resolution mockups.
          </p>
        </div>

        {/* 3 Designs Per Row Grid (15 items = 5 rows x 3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CHALLENGES.map((ch) => {
            const theme = CARD_THEMES[ch.id] || {
              bg: 'bg-[#f7f6f3]',
              border: 'border-slate-100',
              numColor: 'text-slate-800',
              catColor: 'text-slate-500',
              hoverBtn: 'group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950',
            };

            return (
              <div
                key={ch.id}
                onClick={() => onOpenChallenge(ch)}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer group"
              >
                {/* Screen Preview Container */}
                <div className={`p-3 ${theme.bg} border-b ${theme.border}`}>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2 px-1">
                    <span className={`font-bold ${theme.numColor}`}>{ch.number}</span>
                    <span className={`font-sans font-medium ${theme.catColor}`}>{ch.category}</span>
                  </div>
                  <div className="h-64 rounded-xl overflow-hidden pointer-events-none transform group-hover:scale-[1.01] transition-transform duration-300">
                    {renderScreen(ch.id)}
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      {ch.client}
                    </span>
                    <h3 className="text-lg font-bold text-slate-950 group-hover:text-indigo-600 transition-colors">
                      {ch.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {ch.summary}
                    </p>

                    {/* Sample Calculation highlight for Calculator */}
                    {ch.sampleCalculation && (
                      <div className="mt-3 p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-[11px]">
                        <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                          <span className="text-slate-600">
                            Income: <strong className="text-slate-900 font-mono">${ch.sampleCalculation.income}</strong>
                          </span>
                          <span className="text-slate-600">
                            Expenses: <strong className="text-slate-900 font-mono">${ch.sampleCalculation.expenses}</strong>
                          </span>
                          <span className="text-emerald-700">
                            Savings: <strong className="font-mono">${ch.sampleCalculation.savings}</strong>
                          </span>
                          <span className="text-emerald-700">
                            Rate: <strong className="font-mono">{ch.sampleCalculation.savingsRate}%</strong>
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {ch.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium border border-slate-200/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenChallenge(ch);
                      }}
                      className={`w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold ${theme.hoverBtn} transition-all flex items-center justify-center gap-1.5 shadow-2xs`}
                    >
                      <span>View Full Design</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
