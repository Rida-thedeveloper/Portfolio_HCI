import React from 'react';
import { PROCESS_STEPS } from '../data/challengesData';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 lg:py-24 bg-[#faf9f7] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Learning & Design Process
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            A structured four-phase workflow applied across every challenge to translate raw prompts into coherent, human-centered digital experiences.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-extrabold text-indigo-600">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                    {step.phase}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-950 group-hover:text-indigo-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
