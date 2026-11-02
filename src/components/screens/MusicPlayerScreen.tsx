import React from 'react';
import {
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  Disc3,
  Radio,
  SlidersHorizontal
} from 'lucide-react';

interface MusicPlayerScreenProps {
  interactive?: boolean;
}

export const MusicPlayerScreen: React.FC<MusicPlayerScreenProps> = () => {
  return (
    <div className="w-full h-full bg-[#121318] text-[#e3e1e9] rounded-xl overflow-hidden border border-slate-800 shadow-sm flex flex-col font-sans select-none text-left p-3.5 justify-between relative">
      {/* Ambient neon backdrop glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-purple-600/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-cyan-600/15 rounded-full blur-2xl pointer-events-none" />

      {/* Top Bar: Device & Lossless Badge */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5">
          <Disc3 className="w-3.5 h-3.5 text-[#d0bcff] animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-[10px] font-bold text-slate-200 tracking-wider uppercase font-mono">
            Obsidian Hi-Fi
          </span>
        </div>
        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#1e1f25] border border-purple-500/30 text-[#d0bcff] font-semibold">
          FLAC 24-bit
        </span>
      </div>

      {/* Middle: Album Cover & Track Info */}
      <div className="my-auto py-1 flex items-center gap-3 z-10">
        {/* Album Artwork Squircle */}
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 border border-purple-500/30 flex items-center justify-center shrink-0 shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-radial from-cyan-500/20 via-transparent to-transparent opacity-80" />
          <span className="text-xl">🌌</span>
        </div>

        {/* Track Title and Artist */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-mono uppercase tracking-widest text-[#7bd0ff] font-semibold">
              Now Playing
            </span>
          </div>
          <h4 className="text-xs font-bold text-white truncate tracking-tight">
            Midnight Orbit
          </h4>
          <p className="text-[10px] text-slate-400 truncate">
            Stellaris · Neon Horizons
          </p>
        </div>
      </div>

      {/* Interactive Waveform / Progress preview */}
      <div className="space-y-1.5 z-10">
        {/* Animated mini frequency bars */}
        <div className="flex items-end justify-between h-4 px-1 gap-1">
          {[40, 75, 55, 90, 60, 100, 70, 85, 45, 95, 65, 80, 50, 85, 40].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-[#7bd0ff] to-[#d0bcff] rounded-full opacity-80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        {/* Timeline Bar */}
        <div className="relative w-full h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-[64%] bg-gradient-to-r from-[#7bd0ff] to-[#d0bcff] rounded-full" />
        </div>

        {/* Playback Controls Row */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-[9px] font-mono text-slate-400">02:18</span>
          <div className="flex items-center gap-2">
            <button className="text-slate-400 hover:text-white transition-colors">
              <SkipBack className="w-3 h-3" />
            </button>
            <div className="w-6 h-6 rounded-full bg-[#d0bcff] text-[#121318] flex items-center justify-center shadow-md shadow-purple-900/40">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </div>
            <button className="text-slate-400 hover:text-white transition-colors">
              <SkipForward className="w-3 h-3" />
            </button>
          </div>
          <span className="text-[9px] font-mono text-slate-400">03:42</span>
        </div>
      </div>
    </div>
  );
};
