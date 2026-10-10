import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle, BarChart3, Bot, Compass } from 'lucide-react';

interface SaaSScreenProps {
  interactive?: boolean;
}

export const SaaSScreen: React.FC<SaaSScreenProps> = ({ interactive = false }) => {
  const [activeTab, setActiveTab] = useState<'summarize' | 'plan' | 'audit'>('summarize');
  const [taskCompleted, setTaskCompleted] = useState(false);

  return (
    <div className="w-full h-full bg-[#0a0d14] text-slate-100 rounded-xl overflow-hidden border border-slate-800 shadow-md flex flex-col font-sans select-none relative">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-36 h-36 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Simulated Navbar */}
      <div className="relative z-10 border-b border-slate-800/80 px-4 py-2.5 flex items-center justify-between text-xs backdrop-blur-sm bg-slate-950/60">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-[10px] text-white">
            N
          </div>
          <span className="font-bold tracking-tight text-white text-xs">Nova AI</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px] text-slate-400">
          <span className="text-slate-200">Product</span>
          <span>Workflow</span>
          <span>Security</span>
        </div>
        <button
          disabled={!interactive}
          className="text-[10px] px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-full transition-colors"
        >
          Try Free
        </button>
      </div>

      {/* Main SaaS Hero */}
      <div className="relative z-10 p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-3.5">
          {/* Category Tag */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-[10px] font-semibold">
            <Sparkles className="w-3 h-3 text-indigo-400" />
            <span>Next-Gen Workday Co-Pilot</span>
          </div>

          {/* Big Hero Title */}
          <div>
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-white leading-snug">
              Your Workday, Powered by <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">Intelligence.</span>
            </h3>
            <p className="text-[11px] text-slate-400 mt-1 max-w-sm leading-relaxed">
              Automate lecture syntheses, sync research workflows, and eliminate fragmented cognitive context switching.
            </p>
          </div>

          {/* Interactive AI Prompt Demonstration */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 shadow-inner">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-2 text-[10px] text-slate-400">
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <Bot className="w-3.5 h-3.5 text-indigo-400" />
                Active Prompt Engine
              </span>
              <span className="text-emerald-400 font-mono text-[9px]">99.8% ACCURACY</span>
            </div>

            {/* Quick Filter Tabs */}
            <div className="flex gap-1.5 mb-2.5">
              {(['summarize', 'plan', 'audit'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  disabled={!interactive}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[9px] px-2 py-0.5 rounded capitalize transition-all ${
                    activeTab === tab
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab === 'summarize' ? 'Summarize Paper' : tab === 'plan' ? 'Sprint Plan' : 'HCI Audit'}
                </button>
              ))}
            </div>

            {/* Output Card */}
            <div className="bg-slate-950/70 rounded-lg p-2.5 border border-slate-800/70 text-[11px] font-mono text-slate-300">
              {activeTab === 'summarize' && (
                <div className="space-y-1">
                  <div className="text-indigo-300 font-semibold text-[10px]">✓ Key Findings Synthesized (4.2k words → 180 words)</div>
                  <div className="text-slate-400 text-[10px]">
                    1. Reduced cognitive load by 38% via tabular figure alignment.
                    <br />
                    2. Clear feedback loops accelerate student learning retention.
                  </div>
                </div>
              )}
              {activeTab === 'plan' && (
                <div className="space-y-1">
                  <div className="text-purple-300 font-semibold text-[10px]">✓ Sprint Backlog Automated</div>
                  <div className="text-slate-400 text-[10px]">
                    • 3 wireframes converted to tokens in 12s.
                    <br />
                    • WCAG contrast audits automatically passed.
                  </div>
                </div>
              )}
              {activeTab === 'audit' && (
                <div className="space-y-1">
                  <div className="text-emerald-300 font-semibold text-[10px]">✓ Nielsen Heuristics: 10/10 Invariants Met</div>
                  <div className="text-slate-400 text-[10px]">
                    • High recognition over recall verified.
                    <br />
                    • Predictable 8pt layout rhythm validated.
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Metrics preview mini bar */}
          <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-1.5">
              <span className="text-slate-400 block text-[9px]">Speed Increase</span>
              <span className="font-bold text-white text-xs font-mono">+4.2x Faster</span>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-1.5">
              <span className="text-slate-400 block text-[9px]">Focus Retention</span>
              <span className="font-bold text-emerald-400 text-xs font-mono">92% Deep Flow</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
          <span>Nova AI Workspace v2.4</span>
          <span className="font-mono text-[9px] text-indigo-400">#003 SAAS ARCHITECTURE</span>
        </div>
      </div>
    </div>
  );
};
