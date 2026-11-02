import React, { useState } from 'react';
import {
  Compass,
  Home,
  Search,
  ArrowRight,
  Sparkles,
  Terminal,
  RotateCcw
} from 'lucide-react';

interface NotFoundScreenProps {
  interactive?: boolean;
}

export const NotFoundScreen: React.FC<NotFoundScreenProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full h-full bg-[#faf8ff] text-slate-800 rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col font-sans select-none text-left p-4 justify-between relative">
      {/* Background soft cosmic aura */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-200/40 via-purple-200/30 to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Top Header Bar */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold">
            404
          </div>
          <span className="text-[11px] font-bold text-slate-900 tracking-tight">Nexus Wayfinder</span>
        </div>
        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-semibold">
          HTTP 404
        </span>
      </div>

      {/* Main Visual Center */}
      <div className="my-auto py-2 flex flex-col items-center text-center z-10">
        <div className="relative mb-2">
          <div className="text-4xl font-black tracking-tighter text-indigo-950 font-mono">
            4<span className="text-indigo-600 inline-block animate-pulse">0</span>4
          </div>
          <div className="absolute -top-1.5 -right-3 text-xs">🚀</div>
        </div>
        <h4 className="text-xs font-bold text-slate-900 leading-tight">
          Lost in Digital Space
        </h4>
        <p className="text-[10px] text-slate-500 max-w-[200px] mt-0.5 line-clamp-2">
          The requested route drifted into deep orbit. Let's get you back on track.
        </p>

        {/* Quick Search Preview */}
        <div className="w-full max-w-[220px] mt-2.5 relative">
          <Search className="w-3 h-3 text-slate-400 absolute left-2.5 top-2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search destination..."
            className="w-full pl-7 pr-2 py-1.5 rounded-lg border border-slate-200 bg-white text-[10px] text-slate-800 placeholder-slate-400 shadow-2xs"
            readOnly
          />
        </div>
      </div>

      {/* Bottom Nav Action Row */}
      <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[10px] z-10">
        <span className="inline-flex items-center gap-1 text-indigo-600 font-semibold">
          <Home className="w-3 h-3" />
          Return Home
        </span>
        <span className="text-slate-400 font-mono text-[9px]">
          route://unknown
        </span>
      </div>
    </div>
  );
};
