import React, { useState } from 'react';
import { Grid, Eye, Maximize2, ShieldCheck, Sparkles, Layers } from 'lucide-react';

interface AppIconScreenProps {
  interactive?: boolean;
}

export const AppIconScreen: React.FC<AppIconScreenProps> = ({ interactive = false }) => {
  const [showGrid, setShowGrid] = useState(false);
  const [scaleSize, setScaleSize] = useState<'128' | '64' | '32'>('128');

  return (
    <div className="w-full h-full bg-[#07130e] text-slate-100 rounded-xl overflow-hidden border border-emerald-950/80 shadow-md flex flex-col font-sans select-none relative">
      {/* Top Bar */}
      <div className="relative z-10 border-b border-emerald-900/40 px-4 py-2.5 flex items-center justify-between text-xs backdrop-blur-sm bg-black/40">
        <div className="flex items-center gap-1.5 font-bold tracking-tight text-white text-xs">
          <span className="text-emerald-400">#005</span>
          <span className="text-slate-400">·</span>
          <span>PennyWise Icon</span>
        </div>
        <div className="flex items-center gap-2">
          {interactive && (
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`text-[10px] px-2 py-0.5 rounded border transition-colors flex items-center gap-1 ${
                showGrid
                  ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                  : 'bg-emerald-950/40 border-emerald-900/50 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Grid className="w-3 h-3" />
              <span>{showGrid ? 'Hide Grid' : 'Golden Grid'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Icon Showcase Stage */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col items-center justify-center relative">
        {/* Ambient Glow */}
        <div className="absolute w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* The Icon Frame */}
        <div className="relative flex items-center justify-center my-auto transition-all duration-300">
          {/* Squircle App Icon */}
          <div
            className={`relative rounded-[26%] bg-gradient-to-br from-[#00382b] via-[#005a48] to-[#00281e] p-6 shadow-2xl border border-emerald-400/20 flex items-center justify-center transition-all ${
              scaleSize === '128' ? 'w-36 h-36' : scaleSize === '64' ? 'w-24 h-24' : 'w-16 h-16'
            }`}
          >
            {/* Specular highlight */}
            <div className="absolute inset-0 rounded-[26%] bg-gradient-to-t from-transparent via-white/5 to-white/15 pointer-events-none" />

            {/* Simulated Grid Overlay */}
            {showGrid && (
              <div className="absolute inset-2 rounded-[22%] border border-dashed border-emerald-400/30 pointer-events-none flex items-center justify-center">
                <div className="w-full h-[1px] bg-emerald-400/20" />
                <div className="h-full w-[1px] bg-emerald-400/20 absolute" />
                <div className="w-16 h-16 rounded-full border border-emerald-400/30 absolute" />
              </div>
            )}

            {/* The PennyWise 'p' + Sprout Glyph */}
            <svg
              viewBox="0 0 100 100"
              className={`w-full h-full fill-none transition-all drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] ${
                scaleSize === '32' ? 'scale-90' : 'scale-100'
              }`}
            >
              {/* Ascending Stem / Backbone of 'p' */}
              <rect x="26" y="24" width="13" height="54" rx="6.5" fill="#ffffff" />
              
              {/* Sprout Loop of 'p' */}
              <path
                d="M32 24 C 58 20, 74 34, 74 50 C 74 65, 56 72, 36 68"
                stroke="#ffffff"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />

              {/* Luminous Organic Growth Bud / Coin Leaf */}
              <circle cx="70" cy="27" r="8" fill="#4edea3" className="drop-shadow-[0_0_8px_rgba(78,222,163,0.8)]" />

              {/* Upward accent notch */}
              <path
                d="M58 35 Q 68 28, 70 27"
                stroke="#4edea3"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Micro Scale Legibility Inspector */}
        {interactive && (
          <div className="flex items-center gap-3 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1.5 rounded-full text-[10px] text-slate-300 mt-3">
            <span className="text-slate-400 font-medium">Render Scale:</span>
            {(['128', '64', '32'] as const).map((size) => (
              <button
                key={size}
                onClick={() => setScaleSize(size)}
                className={`px-2 py-0.5 rounded font-mono ${
                  scaleSize === size
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {size}px
              </button>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="w-full mt-4 pt-2 border-t border-emerald-950/80 flex items-center justify-between text-[10px] text-emerald-600/80">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-500" />
            Adaptive Vector Geometry
          </span>
          <span className="font-mono text-[9px] text-emerald-400">#005 SQUIRCLE FORM</span>
        </div>
      </div>
    </div>
  );
};
