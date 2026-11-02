import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  X,
  Bell,
  ArrowRight,
  Sparkles,
  RotateCcw
} from 'lucide-react';

interface FlashMessageScreenProps {
  interactive?: boolean;
}

export const FlashMessageScreen: React.FC<FlashMessageScreenProps> = ({ interactive = true }) => {
  const [activeTab, setActiveTab] = useState<'success' | 'error'>('success');
  const [dismissed, setDismissed] = useState(false);

  return (
    <div className="w-full h-full bg-[#fbf8fc] text-zinc-900 font-sans flex flex-col justify-between p-4 sm:p-5 select-none overflow-hidden relative border border-purple-100/60 rounded-xl">
      {/* Background lavender glow */}
      <div className="absolute top-0 left-0 w-44 h-44 bg-purple-200/25 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#630ed4] to-[#a855f7] flex items-center justify-center text-white shadow-xs">
            <Bell className="w-3.5 h-3.5" />
          </div>
          <span className="text-[11px] font-bold text-zinc-800 tracking-tight">
            Luma Alerts <span className="text-purple-600 font-medium">· Flash Toast Hub</span>
          </span>
        </div>

        {/* Tab switch */}
        <div className="flex items-center bg-purple-100/60 p-0.5 rounded-lg border border-purple-200/50 text-[10px] font-semibold">
          <button
            onClick={() => {
              setActiveTab('success');
              setDismissed(false);
            }}
            className={`px-2 py-0.5 rounded-md transition-all ${
              activeTab === 'success'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Success
          </button>
          <button
            onClick={() => {
              setActiveTab('error');
              setDismissed(false);
            }}
            className={`px-2 py-0.5 rounded-md transition-all ${
              activeTab === 'error'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Error
          </button>
        </div>
      </div>

      {/* Message Showcase Card */}
      <div className="my-auto z-10 w-full space-y-2.5">
        {!dismissed ? (
          activeTab === 'success' ? (
            /* Success Flash Toast */
            <div className="bg-white rounded-xl p-3 border border-emerald-200/90 shadow-sm flex items-start gap-2.5 animate-in fade-in duration-200 relative overflow-hidden">
              <div className="w-1.5 absolute left-0 top-0 bottom-0 bg-emerald-500" />
              <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0 pr-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-950">
                    Publication Dispatched
                  </span>
                  <span className="text-[9px] font-mono text-emerald-600">Just now</span>
                </div>
                <p className="text-[10px] text-zinc-600 mt-0.5 leading-snug">
                  Your essay has been formatted and published to the Luma network.
                </p>
              </div>
              <button
                onClick={() => setDismissed(true)}
                className="text-zinc-400 hover:text-zinc-700 p-0.5"
                title="Dismiss"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            /* Error Flash Toast */
            <div className="bg-white rounded-xl p-3 border border-rose-200/90 shadow-sm flex items-start gap-2.5 animate-in fade-in duration-200 relative overflow-hidden">
              <div className="w-1.5 absolute left-0 top-0 bottom-0 bg-rose-500" />
              <div className="w-6 h-6 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                <XCircle className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0 pr-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-rose-950">
                    Upload Boundary Exceeded
                  </span>
                  <span className="text-[9px] font-mono text-rose-600">Code 413</span>
                </div>
                <p className="text-[10px] text-zinc-600 mt-0.5 leading-snug">
                  Attachment exceeds 25MB threshold. Please compress high-res figures.
                </p>
              </div>
              <button
                onClick={() => setDismissed(true)}
                className="text-zinc-400 hover:text-zinc-700 p-0.5"
                title="Dismiss"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )
        ) : (
          <div className="bg-white/70 border border-dashed border-purple-200 rounded-xl p-3 text-center">
            <p className="text-[11px] text-zinc-500">Flash banner dismissed.</p>
            <button
              onClick={() => setDismissed(false)}
              className="mt-1 text-[10px] text-purple-700 font-bold hover:underline inline-flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Re-trigger alert
            </button>
          </div>
        )}

        {/* Small comparison pill */}
        <div className="bg-white/80 rounded-lg px-2.5 py-1.5 border border-purple-100 flex items-center justify-between text-[10px] text-zinc-600">
          <span className="font-medium">Nielsen Heuristic #1</span>
          <span className="text-purple-700 font-bold">Visibility of System Status</span>
        </div>
      </div>

      {/* Footer trigger bar */}
      <div className="z-10 flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-purple-100/60 font-mono">
        <span>Auto-dismiss in 4.0s</span>
        <span className="text-purple-600 font-bold">WCAG AAA Contrast</span>
      </div>
    </div>
  );
};
