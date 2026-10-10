import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CHALLENGES } from '../data/challengesData';
import { Challenge } from '../types/portfolio';
import { SignUpScreen } from './screens/SignUpScreen';
import { CheckoutScreen } from './screens/CheckoutScreen';
import { SaaSScreen } from './screens/SaaSScreen';
import { CalculatorScreen } from './screens/CalculatorScreen';
import { AppIconScreen } from './screens/AppIconScreen';

interface ShowcaseProps {
  onOpenChallenge: (challenge: Challenge) => void;
}

export const Showcase: React.FC<ShowcaseProps> = ({ onOpenChallenge }) => {
  const ch1 = CHALLENGES[0]; // SignUp
  const ch2 = CHALLENGES[1]; // Checkout
  const ch3 = CHALLENGES[2]; // SaaS
  const ch4 = CHALLENGES[3]; // Calculator
  const ch5 = CHALLENGES[4]; // App Icon

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
            Five challenges. Five opportunities to explore a different aspect of digital interface design, from cognitive load reduction to precision financial calculation. Click any card or button below to inspect full high-resolution mockups.
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
        </div>
      </div>
    </section>
  );
};
