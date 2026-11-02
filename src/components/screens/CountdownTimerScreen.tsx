import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Rocket, Flame, Gauge, Bell } from 'lucide-react';

interface CountdownTimerScreenProps {
  interactive?: boolean;
}

export const CountdownTimerScreen: React.FC<CountdownTimerScreenProps> = ({
  interactive = true,
}) => {
  const [mode, setMode] = useState<'launch' | 'oven' | 'f1'>('launch');
  const [secondsLeft, setSecondsLeft] = useState(145);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: any;
    if (isRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, secondsLeft]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const total = mode === 'launch' ? 300 : mode === 'oven' ? 900 : 60;
  const progressPercent = Math.min(100, Math.max(0, ((total - secondsLeft) / total) * 100));

  return (
    <div className="w-full h-full bg-[#0a0d14] text-[#f1f5f9] font-sans flex flex-col justify-between p-3.5 sm:p-4 select-none overflow-hidden relative border border-[#1e293b] rounded-xl">
      {/* Top Header Mode Pills */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 z-10">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400">
            {mode === 'launch' ? 'T-Minus Sequence' : mode === 'oven' ? 'Thermal Cavity' : 'Pit Window'}
          </span>
        </div>

        <div className="flex items-center gap-1 bg-slate-900/90 p-0.5 rounded-lg border border-slate-800">
          <button
            type="button"
            disabled={!interactive}
            onClick={() => {
              setMode('launch');
              setSecondsLeft(145);
            }}
            className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold transition-colors ${
              mode === 'launch' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Aero
          </button>
          <button
            type="button"
            disabled={!interactive}
            onClick={() => {
              setMode('oven');
              setSecondsLeft(540);
            }}
            className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold transition-colors ${
              mode === 'oven' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Oven
          </button>
          <button
            type="button"
            disabled={!interactive}
            onClick={() => {
              setMode('f1');
              setSecondsLeft(24);
            }}
            className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold transition-colors ${
              mode === 'f1' ? 'bg-rose-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            F1
          </button>
        </div>
      </div>

      {/* Main Countdown Display Gauge */}
      <div className="my-auto flex flex-col items-center justify-center py-2 relative z-10">
        {/* Glow Halo */}
        <div
          className={`absolute w-36 h-36 rounded-full blur-2xl opacity-20 pointer-events-none ${
            mode === 'launch' ? 'bg-cyan-400' : mode === 'oven' ? 'bg-amber-500' : 'bg-rose-500'
          }`}
        />

        {/* Circular Progress Frame */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="42"
              className="stroke-slate-800/80 fill-none"
              strokeWidth="5"
            />
            <circle
              cx="50"
              cy="50"
              r="42"
              className={`fill-none transition-all duration-500 ${
                mode === 'launch'
                  ? 'stroke-cyan-400'
                  : mode === 'oven'
                  ? 'stroke-amber-400'
                  : 'stroke-rose-500'
              }`}
              strokeWidth="5"
              strokeDasharray="264"
              strokeDashoffset={264 - (264 * progressPercent) / 100}
              strokeLinecap="round"
            />
          </svg>

          {/* Time Readout Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-mono text-2xl font-black tracking-tight text-white">
              {formatTime(secondsLeft)}
            </span>
            <span
              className={`text-[9px] font-mono uppercase tracking-widest mt-0.5 ${
                mode === 'launch'
                  ? 'text-cyan-400'
                  : mode === 'oven'
                  ? 'text-amber-400'
                  : 'text-rose-400'
              }`}
            >
              {mode === 'launch' ? 'Stage II Ignition' : mode === 'oven' ? '425°F Convection' : 'Sector 3 Split'}
            </span>
          </div>
        </div>
      </div>

      {/* Transport Trigger Dock */}
      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between z-10">
        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Sync: 1000Hz</span>
        </div>

        <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            disabled={!interactive}
            onClick={() => setSecondsLeft(mode === 'launch' ? 145 : mode === 'oven' ? 540 : 24)}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-colors"
            title="Reset"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
          <button
            type="button"
            disabled={!interactive}
            onClick={() => setIsRunning(!isRunning)}
            className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs ${
              isRunning
                ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950'
            }`}
          >
            {isRunning ? (
              <>
                <Pause className="w-3 h-3" />
                <span>Hold</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3" />
                <span>Start</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
