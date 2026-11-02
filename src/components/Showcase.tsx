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

interface ShowcaseProps {
  onOpenChallenge: (challenge: Challenge) => void;
}

export const Showcase: React.FC<ShowcaseProps> = ({ onOpenChallenge }) => {
  const ch1 = CHALLENGES[0]; // SignUp
  const ch2 = CHALLENGES[1]; // Checkout
  const ch3 = CHALLENGES[2]; // SaaS
  const ch4 = CHALLENGES[3]; // Calculator
  const ch5 = CHALLENGES[4]; // App Icon
  const ch6 = CHALLENGES[5]; // User Profile
  const ch7 = CHALLENGES[6]; // Settings
  const ch8 = CHALLENGES[7]; // 404 Page
  const ch9 = CHALLENGES[8]; // Music Player
  const ch10 = CHALLENGES[9]; // Social Share
  const ch11 = CHALLENGES[10]; // Flash Message
  const ch12 = CHALLENGES[11]; // E-commerce Shop
  const ch13 = CHALLENGES[12]; // Direct Messaging

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
            Thirteen challenges. Thirteen opportunities to explore different aspects of digital interface design, from cognitive load reduction to precision financial calculation, multi-device developer profiles, enterprise security topology, compassionate 404 wayfinding, atmospheric Hi-Fi audio playback, mindful social citations, dual-state flash messages, haute e-commerce retail, and direct messaging. Click any card or button below to inspect full high-resolution mockups.
          </p>
        </div>

        {/* The 5 Cards Layout */}
        <div className="space-y-8">
          {/* Top Row: 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Sign Up Page (#001) */}
            <div
              onClick={() => onOpenChallenge(ch1)}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer group"
            >
              {/* Screen Preview Container */}
              <div className="p-3 bg-[#f7f6f3] border-b border-slate-100">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2 px-1">
                  <span className="font-bold text-slate-800">{ch1.number}</span>
                  <span className="text-slate-400 font-sans">{ch1.category}</span>
                </div>
                <div className="h-64 rounded-xl overflow-hidden pointer-events-none transform group-hover:scale-[1.01] transition-transform duration-300">
                  <SignUpScreen interactive={false} />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {ch1.client}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-indigo-600 transition-colors">
                    {ch1.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {ch1.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {ch1.tags.map((tag) => (
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
                      onOpenChallenge(ch1);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>View Full Design</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Credit Card Checkout (#002) */}
            <div
              onClick={() => onOpenChallenge(ch2)}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer group"
            >
              {/* Screen Preview Container */}
              <div className="p-3 bg-[#f7f6f3] border-b border-slate-100">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2 px-1">
                  <span className="font-bold text-slate-800">{ch2.number}</span>
                  <span className="text-slate-400 font-sans">{ch2.category}</span>
                </div>
                <div className="h-64 rounded-xl overflow-hidden pointer-events-none transform group-hover:scale-[1.01] transition-transform duration-300">
                  <CheckoutScreen interactive={false} />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {ch2.client}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-indigo-600 transition-colors">
                    {ch2.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {ch2.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {ch2.tags.map((tag) => (
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
                      onOpenChallenge(ch2);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>View Full Design</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: Nova AI Landing Page (#003) */}
            <div
              onClick={() => onOpenChallenge(ch3)}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer group"
            >
              {/* Screen Preview Container */}
              <div className="p-3 bg-[#f7f6f3] border-b border-slate-100">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2 px-1">
                  <span className="font-bold text-slate-800">{ch3.number}</span>
                  <span className="text-slate-400 font-sans">{ch3.category}</span>
                </div>
                <div className="h-64 rounded-xl overflow-hidden pointer-events-none transform group-hover:scale-[1.01] transition-transform duration-300">
                  <SaaSScreen interactive={false} />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {ch3.client}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-indigo-600 transition-colors">
                    {ch3.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {ch3.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {ch3.tags.map((tag) => (
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
                      onOpenChallenge(ch3);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>View Full Design</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Wide Card (#004) + App Icon Card (#005) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Wide Card: PennyWise Calculator (#004) - 7 cols on lg */}
            <div
              onClick={() => onOpenChallenge(ch4)}
              className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden cursor-pointer group flex flex-col md:flex-row"
            >
              {/* Left half: Calculator Interface preview */}
              <div className="md:w-1/2 p-3 bg-[#f7f6f3] border-b md:border-b-0 md:border-r border-slate-100 flex flex-col justify-center">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2 px-1">
                  <span className="font-bold text-slate-800">{ch4.number}</span>
                  <span className="text-slate-400 font-sans">{ch4.category}</span>
                </div>
                <div className="h-72 md:h-80 rounded-xl overflow-hidden pointer-events-none transform group-hover:scale-[1.01] transition-transform duration-300">
                  <CalculatorScreen interactive={false} />
                </div>
              </div>

              {/* Right half: Text & Sample Consistency Box */}
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {ch4.client}
                  </span>
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-indigo-600 transition-colors">
                    {ch4.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {ch4.summary}
                  </p>

                  {/* Sample Calculation Consistency Highlight Box */}
                  <div className="mt-4 p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Sample Calculation Consistency
                    </span>
                    <div className="grid grid-cols-2 gap-y-1 text-xs">
                      <div className="text-slate-600">
                        Income: <span className="font-mono font-semibold text-slate-900">$2,000</span>
                      </div>
                      <div className="text-slate-600">
                        Expenses: <span className="font-mono font-semibold text-slate-900">$1,400</span>
                      </div>
                      <div className="text-emerald-700">
                        Savings: <span className="font-mono font-bold">$600</span>
                      </div>
                      <div className="text-emerald-700">
                        Savings Rate: <span className="font-mono font-bold">30%</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {ch4.tags.map((tag) => (
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
                      onOpenChallenge(ch4);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>View Full Design</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 5: Mobile App Icon (#005) - 5 cols on lg */}
            <div
              onClick={() => onOpenChallenge(ch5)}
              className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer group"
            >
              {/* Screen Preview Container */}
              <div className="p-3 bg-[#0a1a15] border-b border-emerald-950/80">
                <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 mb-2 px-1">
                  <span className="font-bold">{ch5.number}</span>
                  <span className="text-emerald-300/80 font-sans">{ch5.category}</span>
                </div>
                <div className="h-60 rounded-xl overflow-hidden pointer-events-none transform group-hover:scale-[1.01] transition-transform duration-300">
                  <AppIconScreen interactive={false} />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {ch5.client}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-indigo-600 transition-colors">
                    {ch5.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {ch5.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {ch5.tags.map((tag) => (
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
                      onOpenChallenge(ch5);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>View Full Design</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Third Row: User Profile (#006) & Settings (#007) Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-2">
            {/* Card 6: User Profile (#006) */}
            <div
              onClick={() => onOpenChallenge(ch6)}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer group"
            >
              {/* Screen Preview Container */}
              <div className="p-3 bg-[#eef2ff] border-b border-indigo-100/70">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2 px-1">
                  <span className="font-bold text-slate-800">{ch6.number}</span>
                  <span className="text-indigo-600 font-sans font-medium">{ch6.category}</span>
                </div>
                <div className="h-64 rounded-xl overflow-hidden pointer-events-none transform group-hover:scale-[1.01] transition-transform duration-300">
                  <UserProfileScreen interactive={false} />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {ch6.client}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-indigo-600 transition-colors">
                    {ch6.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {ch6.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {ch6.tags.map((tag) => (
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
                      onOpenChallenge(ch6);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>View Full Design</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 7: Settings (#007) */}
            <div
              onClick={() => onOpenChallenge(ch7)}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer group"
            >
              {/* Screen Preview Container */}
              <div className="p-3 bg-[#f1f5f9] border-b border-slate-200">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2 px-1">
                  <span className="font-bold text-slate-800">{ch7.number}</span>
                  <span className="text-slate-600 font-sans font-medium">{ch7.category}</span>
                </div>
                <div className="h-64 rounded-xl overflow-hidden pointer-events-none transform group-hover:scale-[1.01] transition-transform duration-300">
                  <SettingsScreen interactive={false} />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {ch7.client}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-indigo-600 transition-colors">
                    {ch7.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {ch7.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {ch7.tags.map((tag) => (
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
                      onOpenChallenge(ch7);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>View Full Design</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: 2 Cards Grid for #008 (404 Page) and #009 (Music Player) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 8: 404 Page (#008) */}
            <div
              onClick={() => onOpenChallenge(ch8)}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer group"
            >
              {/* Screen Preview Container */}
              <div className="p-3 bg-[#faf8ff] border-b border-indigo-100">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2 px-1">
                  <span className="font-bold text-slate-800">{ch8.number}</span>
                  <span className="text-indigo-600 font-sans font-medium">{ch8.category}</span>
                </div>
                <div className="h-64 rounded-xl overflow-hidden pointer-events-none transform group-hover:scale-[1.01] transition-transform duration-300">
                  <NotFoundScreen interactive={false} />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {ch8.client}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-indigo-600 transition-colors">
                    {ch8.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {ch8.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {ch8.tags.map((tag) => (
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
                      onOpenChallenge(ch8);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>View Full Design</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 9: Music Player (#009) */}
            <div
              onClick={() => onOpenChallenge(ch9)}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer group"
            >
              {/* Screen Preview Container */}
              <div className="p-3 bg-[#0d0e13] border-b border-slate-800">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2 px-1">
                  <span className="font-bold text-white">{ch9.number}</span>
                  <span className="text-[#7bd0ff] font-sans font-medium">{ch9.category}</span>
                </div>
                <div className="h-64 rounded-xl overflow-hidden pointer-events-none transform group-hover:scale-[1.01] transition-transform duration-300">
                  <MusicPlayerScreen interactive={false} />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {ch9.client}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-purple-600 transition-colors">
                    {ch9.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {ch9.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {ch9.tags.map((tag) => (
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
                      onOpenChallenge(ch9);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>View Full Design</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Row 5: 2 Cards Grid for #010 (Social Share) and #011 (Flash Message) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 10: Social Share (#010) */}
            <div
              onClick={() => onOpenChallenge(ch10)}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer group"
            >
              {/* Screen Preview Container */}
              <div className="p-3 bg-[#fbf8fc] border-b border-purple-100">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2 px-1">
                  <span className="font-bold text-purple-900">{ch10.number}</span>
                  <span className="text-[#630ed4] font-sans font-medium">{ch10.category}</span>
                </div>
                <div className="h-64 rounded-xl overflow-hidden pointer-events-none transform group-hover:scale-[1.01] transition-transform duration-300">
                  <SocialShareScreen interactive={false} />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {ch10.client}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-[#630ed4] transition-colors">
                    {ch10.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {ch10.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {ch10.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 font-medium border border-purple-100"
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
                      onOpenChallenge(ch10);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold group-hover:bg-[#630ed4] group-hover:text-white group-hover:border-[#630ed4] transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>View Full Design</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 11: Flash Message (#011) */}
            <div
              onClick={() => onOpenChallenge(ch11)}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer group"
            >
              {/* Screen Preview Container */}
              <div className="p-3 bg-[#fbf8fc] border-b border-purple-100">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2 px-1">
                  <span className="font-bold text-purple-900">{ch11.number}</span>
                  <span className="text-[#630ed4] font-sans font-medium">{ch11.category}</span>
                </div>
                <div className="h-64 rounded-xl overflow-hidden pointer-events-none transform group-hover:scale-[1.01] transition-transform duration-300">
                  <FlashMessageScreen interactive={false} />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {ch11.client}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-[#630ed4] transition-colors">
                    {ch11.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {ch11.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {ch11.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 font-medium border border-purple-100"
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
                      onOpenChallenge(ch11);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold group-hover:bg-[#630ed4] group-hover:text-white group-hover:border-[#630ed4] transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>View Full Design</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Row 6: 2 Cards Grid for #012 (E-commerce Shop) and #013 (Direct Messaging) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 12: E-commerce Shop (#012) */}
            <div
              onClick={() => onOpenChallenge(ch12)}
              className="bg-white rounded-none border border-[#e8e2d9] shadow-sm hover:shadow-xl hover:border-[#191919] transition-all duration-300 flex flex-col overflow-hidden cursor-pointer group"
            >
              {/* Screen Preview Container */}
              <div className="p-3 bg-[#fcf9f4] border-b border-[#e8e2d9]">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2 px-1">
                  <span className="font-bold text-[#191919]">{ch12.number}</span>
                  <span className="text-[#9e836a] font-sans font-medium">{ch12.category}</span>
                </div>
                <div className="h-64 rounded-none overflow-hidden pointer-events-none transform group-hover:scale-[1.01] transition-transform duration-300">
                  <EcommerceScreen interactive={false} />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9e836a] block mb-1 font-mono">
                    {ch12.client}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-slate-950 group-hover:text-[#9e836a] transition-colors">
                    {ch12.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {ch12.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {ch12.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded-none bg-[#f5f0ea] text-[#191919] font-medium border border-[#e8e2d9]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 pt-4 border-t border-[#e8e2d9]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenChallenge(ch12);
                    }}
                    className="w-full py-2.5 px-4 rounded-none border border-[#191919] text-[#191919] text-xs font-mono font-semibold uppercase tracking-wider group-hover:bg-[#191919] group-hover:text-white transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>View Full Design</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 13: Direct Messaging (#013) */}
            <div
              onClick={() => onOpenChallenge(ch13)}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer group"
            >
              {/* Screen Preview Container */}
              <div className="p-3 bg-[#f8fafc] border-b border-[#e2e8f0]">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2 px-1">
                  <span className="font-bold text-[#4648d4]">{ch13.number}</span>
                  <span className="text-[#6366f1] font-sans font-medium">{ch13.category}</span>
                </div>
                <div className="h-64 rounded-xl overflow-hidden pointer-events-none transform group-hover:scale-[1.01] transition-transform duration-300">
                  <DirectMessagingScreen interactive={false} />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {ch13.client}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-[#4648d4] transition-colors">
                    {ch13.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {ch13.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {ch13.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 font-medium border border-indigo-100"
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
                      onOpenChallenge(ch13);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold group-hover:bg-[#4648d4] group-hover:text-white group-hover:border-[#4648d4] transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>View Full Design</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
