import React from 'react';
import { Sliders, LayoutGrid, Eye, Zap } from 'lucide-react';
import { HCI_PRINCIPLES } from '../data/challengesData';

export const Principles: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'visual-hierarchy':
        return <Sliders className="w-5 h-5 text-indigo-600" />;
      case 'consistency':
        return <LayoutGrid className="w-5 h-5 text-indigo-600" />;
      case 'accessibility':
        return <Eye className="w-5 h-5 text-indigo-600" />;
      case 'feedback':
        return <Zap className="w-5 h-5 text-indigo-600" />;
      default:
        return <Eye className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="principles" className="py-16 lg:py-24 bg-[#faf9f7] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Foundational Theory
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Designing with the user in mind.
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Core Human-Computer Interaction principles applied across every challenge in this portfolio.
          </p>
        </div>

        {/* 4 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HCI_PRINCIPLES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-base font-bold text-slate-950 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.heuristicReference && (
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-mono text-indigo-700 font-medium block">
                    {item.heuristicReference}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
