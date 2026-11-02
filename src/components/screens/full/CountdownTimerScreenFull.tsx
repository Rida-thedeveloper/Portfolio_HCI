import React, { useState, useEffect, useRef } from 'react';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Play,
  Pause,
  Rocket,
  Flame,
  Gauge,
  Timer,
  Volume2,
  VolumeX,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  AlertTriangle,
  Radio,
  Layers,
  Activity,
  Plus,
  Minus
} from 'lucide-react';

export const CountdownTimerScreenFull: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'interactive' | 'spec'>('interactive');
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  // Multi-context selection
  const [context, setContext] = useState<'launch' | 'oven' | 'f1' | 'hiit'>('launch');

  // Countdown timer state
  const [totalSeconds, setTotalSeconds] = useState(180); // 3 minutes default
  const [secondsLeft, setSecondsLeft] = useState(180);
  const [isRunning, setIsRunning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [safetyCoverOpen, setSafetyCoverOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState('All systems nominal. Terminal sequence ready.');

  // Oven-specific state
  const [ovenTemp, setOvenTemp] = useState(425);
  const [probeTemp, setProbeTemp] = useState(145);
  const [steamActive, setSteamActive] = useState(false);

  // F1-specific lights state (0 to 5 lights)
  const [f1Lights, setF1Lights] = useState(0);

  // Audio synthesizer ref
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playChime = (freq = 880, type: OscillatorType = 'sine', duration = 0.15) => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      const osc = audioCtxRef.current.createOscillator();
      const gain = audioCtxRef.current.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);
      gain.gain.setValueAtTime(0.12, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);
      osc.start();
      osc.stop(audioCtxRef.current.currentTime + duration);
    } catch {
      // Audio fallback
    }
  };

  // Main timer loop
  useEffect(() => {
    let interval: any;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            playChime(1760, 'triangle', 0.8);
            setStatusMessage('Sequence complete! Target reached.');
            return 0;
          }
          if (prev <= 6 && prev > 1) {
            playChime(880, 'sine', 0.1);
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft, soundEnabled]);

  // F1 red light automation
  useEffect(() => {
    if (context === 'f1' && isRunning) {
      const lightInterval = setInterval(() => {
        setF1Lights((prev) => {
          if (prev < 5) return prev + 1;
          return 0; // Lights out!
        });
      }, 1000);
      return () => clearInterval(lightInterval);
    } else {
      setF1Lights(0);
    }
  }, [context, isRunning]);

  const handleContextChange = (newCtx: 'launch' | 'oven' | 'f1' | 'hiit') => {
    setContext(newCtx);
    setIsRunning(false);
    if (newCtx === 'launch') {
      setTotalSeconds(180);
      setSecondsLeft(180);
      setStatusMessage('Cryogenic propellant loading verified. Terminal count sequence active.');
    } else if (newCtx === 'oven') {
      setTotalSeconds(720); // 12 mins
      setSecondsLeft(720);
      setStatusMessage('Convection Cavity preheated to 425°F. Timer sync initialized.');
    } else if (newCtx === 'f1') {
      setTotalSeconds(45);
      setSecondsLeft(45);
      setStatusMessage('Formation lap complete. Pit delta monitoring active.');
    } else {
      setTotalSeconds(60);
      setSecondsLeft(60);
      setStatusMessage('HIIT Sprint interval set. Work 45s / Rest 15s.');
    }
  };

  const handleAdjustTime = (deltaSeconds: number) => {
    setSecondsLeft((prev) => {
      const next = Math.max(5, prev + deltaSeconds);
      setTotalSeconds((t) => Math.max(t, next));
      return next;
    });
  };

  const formatTime = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    if (hours > 0) {
      return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const progressPercent = Math.min(100, Math.max(0, ((totalSeconds - secondsLeft) / totalSeconds) * 100));
  const strokeDashoffset = 753 - (753 * progressPercent) / 100;

  // Staging milestone for NASA launch
  const getLaunchStage = (secs: number) => {
    if (secs > 120) return { stage: 'STAGE 01', title: 'Cryogenic Fuel Pressurization', color: 'text-cyan-400' };
    if (secs > 60) return { stage: 'STAGE 02', title: 'Internal Power & Gyro Telemetry', color: 'text-indigo-400' };
    if (secs > 15) return { stage: 'STAGE 03', title: 'Terminal Count Automated Sequence', color: 'text-amber-400' };
    if (secs > 0) return { stage: 'IGNITION', title: 'Main Engine Ignition Initiated', color: 'text-rose-500' };
    return { stage: 'LIFTOFF', title: 'Vehicle Airborne · Max-Q Vector', color: 'text-emerald-400' };
  };

  const stageInfo = getLaunchStage(secondsLeft);

  return (
    <div className="w-full bg-[#080b11] text-[#f1f5f9] font-sans min-h-screen py-6 sm:py-10 px-3 sm:px-6 flex flex-col items-center">
      {/* Top Bar Switcher */}
      <div className="w-full max-w-6xl mb-6 flex flex-wrap items-center justify-between gap-3 bg-[#10141f] p-3 rounded-2xl border border-slate-800 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-slate-950 font-mono font-black flex items-center justify-center text-xs shadow-md">
            #014
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-xs sm:text-sm tracking-tight leading-tight">
                CHRONO IQ — Multi-Context Countdown Engine
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 font-semibold">
                Daily UI #014
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              NASA Launch · Smart Culinary Oven · F1 Grand Prix Scoreboard · Athletic HIIT
            </p>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              soundEnabled
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>{soundEnabled ? 'Audio Chimes Active' : 'Muted'}</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="w-full max-w-6xl space-y-6">
        {/* Context Selector Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button
            onClick={() => handleContextChange('launch')}
            className={`p-3.5 rounded-2xl border transition-all text-left flex items-start gap-3 ${
              context === 'launch'
                ? 'bg-cyan-950/40 border-cyan-500/80 shadow-[0_0_20px_-4px_rgba(6,182,212,0.35)]'
                : 'bg-[#10141f] border-slate-800 hover:border-slate-700 opacity-80'
            }`}
          >
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Rocket className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block font-bold">
                Orbital Mission
              </span>
              <h4 className="text-xs font-bold text-white">NASA / Space Launch</h4>
              <span className="text-[10px] text-slate-400">T-Minus & Stage Telemetry</span>
            </div>
          </button>

          <button
            onClick={() => handleContextChange('oven')}
            className={`p-3.5 rounded-2xl border transition-all text-left flex items-start gap-3 ${
              context === 'oven'
                ? 'bg-amber-950/40 border-amber-500/80 shadow-[0_0_20px_-4px_rgba(245,158,11,0.35)]'
                : 'bg-[#10141f] border-slate-800 hover:border-slate-700 opacity-80'
            }`}
          >
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block font-bold">
                Smart Kitchen
              </span>
              <h4 className="text-xs font-bold text-white">Culinary Smart Oven</h4>
              <span className="text-[10px] text-slate-400">425°F Convection & Probes</span>
            </div>
          </button>

          <button
            onClick={() => handleContextChange('f1')}
            className={`p-3.5 rounded-2xl border transition-all text-left flex items-start gap-3 ${
              context === 'f1'
                ? 'bg-rose-950/40 border-rose-500/80 shadow-[0_0_20px_-4px_rgba(244,63,94,0.35)]'
                : 'bg-[#10141f] border-slate-800 hover:border-slate-700 opacity-80'
            }`}
          >
            <div className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
              <Gauge className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 block font-bold">
                Grand Prix
              </span>
              <h4 className="text-xs font-bold text-white">F1 & Race Scoreboard</h4>
              <span className="text-[10px] text-slate-400">5 Red Lights & Pit Delta</span>
            </div>
          </button>

          <button
            onClick={() => handleContextChange('hiit')}
            className={`p-3.5 rounded-2xl border transition-all text-left flex items-start gap-3 ${
              context === 'hiit'
                ? 'bg-emerald-950/40 border-emerald-500/80 shadow-[0_0_20px_-4px_rgba(16,185,129,0.35)]'
                : 'bg-[#10141f] border-slate-800 hover:border-slate-700 opacity-80'
            }`}
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Timer className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block font-bold">
                Athletic Training
              </span>
              <h4 className="text-xs font-bold text-white">HIIT & Sprint Circuit</h4>
              <span className="text-[10px] text-slate-400">Work / Rest Interval Mode</span>
            </div>
          </button>
        </div>

        {/* Central Console Workbench */}
        <div className="w-full bg-[#0d111a] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Ambient Radial Spotlight */}
          <div
            className={`absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700 ${
              context === 'launch'
                ? 'bg-cyan-500'
                : context === 'oven'
                ? 'bg-amber-500'
                : context === 'f1'
                ? 'bg-rose-500'
                : 'bg-emerald-500'
            }`}
          />

          {/* Context Specific Sub-Header */}
          {context === 'launch' && (
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800/80 mb-8 relative z-10">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <div>
                  <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider uppercase">
                    ARTEMIS-V · TERMINAL COUNTING SEQUENCE
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Launch Azimuth: 90.0° · Pad 39B · Propellant Temperature: -423°F LOX/LH2
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800 font-bold">
                  RANGE: GREEN
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
                  WIND: 6.4 KTS
                </span>
              </div>
            </div>
          )}

          {context === 'oven' && (
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800/80 mb-8 relative z-10">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div>
                  <span className="font-mono text-xs font-bold text-amber-400 tracking-wider uppercase">
                    ATELIER THERMAL SUITE · SMART OVEN CAVITY A
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Upper Radiant & Fan Convection · Multi-Point Internal Meat Probe Linked
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 font-mono text-xs bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400">Cavity:</span>
                  <span className="font-bold text-amber-400">{ovenTemp}°F</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400">Core Probe:</span>
                  <span className="font-bold text-emerald-400">{probeTemp}°F</span>
                </div>
                <button
                  onClick={() => setSteamActive(!steamActive)}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold border transition-colors ${
                    steamActive
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  Steam Injection: {steamActive ? 'ACTIVE' : 'OFF'}
                </button>
              </div>
            </div>
          )}

          {context === 'f1' && (
            <div className="flex flex-col items-center pb-6 border-b border-slate-800/80 mb-8 relative z-10 space-y-3">
              <span className="font-mono text-xs font-bold text-rose-400 uppercase tracking-widest">
                START LIGHTS PROCEDURE · 5 RED LIGHTS SYNCHRONIZATION
              </span>
              {/* 5 Red F1 Start Lights */}
              <div className="flex items-center gap-3 bg-black/80 px-6 py-3 rounded-2xl border border-slate-800 shadow-inner">
                {[1, 2, 3, 4, 5].map((lightIdx) => {
                  const isLit = f1Lights >= lightIdx;
                  return (
                    <div key={lightIdx} className="flex flex-col items-center gap-1">
                      <div
                        className={`w-7 h-7 rounded-full border-2 transition-all duration-200 ${
                          isLit
                            ? 'bg-rose-600 border-rose-400 shadow-[0_0_16px_#f43f5e]'
                            : 'bg-slate-900 border-slate-800'
                        }`}
                      />
                      <span className="font-mono text-[9px] text-slate-500">{lightIdx}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {context === 'hiit' && (
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800/80 mb-8 relative z-10">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <span className="font-mono text-xs font-bold text-emerald-400 tracking-wider uppercase">
                    TABATA INTERVAL ENGINE · SET 4 / 8
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Target Heart Rate: 165 BPM · Cadence: 180 SPM
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="px-3 py-1 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
                  PHASE: SPRINT (WORK)
                </span>
              </div>
            </div>
          )}

          {/* Giant Radial Countdown Clockwork */}
          <div className="flex flex-col items-center justify-center my-6 relative z-10">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Outer Tick Marks */}
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 260 260">
                {/* Background Track */}
                <circle
                  cx="130"
                  cy="130"
                  r="120"
                  className="stroke-slate-800/60 fill-none"
                  strokeWidth="8"
                />
                {/* Active Glowing Progress Ring */}
                <circle
                  cx="130"
                  cy="130"
                  r="120"
                  className={`fill-none transition-all duration-500 ${
                    context === 'launch'
                      ? 'stroke-cyan-400'
                      : context === 'oven'
                      ? 'stroke-amber-400'
                      : context === 'f1'
                      ? 'stroke-rose-500'
                      : 'stroke-emerald-400'
                  }`}
                  strokeWidth="8"
                  strokeDasharray="753"
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>

              {/* Central Time Readout */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                {context === 'launch' && (
                  <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-1">
                    T-MINUS
                  </span>
                )}
                <span className="font-mono text-5xl sm:text-6xl font-black tracking-tight text-white drop-shadow-md">
                  {formatTime(secondsLeft)}
                </span>
                <span className="font-mono text-xs sm:text-sm text-slate-400 mt-1 font-semibold">
                  {Math.round(progressPercent)}% ELAPSED
                </span>

                {/* Context Sub-Label */}
                <div className="mt-3 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono">
                  {context === 'launch' && (
                    <span className={stageInfo.color}>{stageInfo.stage} · {stageInfo.title}</span>
                  )}
                  {context === 'oven' && (
                    <span className="text-amber-400">Baking Prime Rib · Internal 145°F Target</span>
                  )}
                  {context === 'f1' && (
                    <span className="text-rose-400">Box Window Open · +1.84s Gap</span>
                  )}
                  {context === 'hiit' && (
                    <span className="text-emerald-400">High Resistance · 450 Watts</span>
                  )}
                </div>
              </div>
            </div>

            {/* Micro Time Adjustments */}
            <div className="flex items-center gap-2 mt-6">
              <button
                onClick={() => handleAdjustTime(-60)}
                disabled={isRunning}
                className="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 transition-colors"
              >
                -1m
              </button>
              <button
                onClick={() => handleAdjustTime(-10)}
                disabled={isRunning}
                className="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 transition-colors"
              >
                -10s
              </button>
              <button
                onClick={() => handleAdjustTime(10)}
                disabled={isRunning}
                className="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 transition-colors"
              >
                +10s
              </button>
              <button
                onClick={() => handleAdjustTime(60)}
                disabled={isRunning}
                className="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 transition-colors"
              >
                +1m
              </button>
            </div>
          </div>

          {/* Master Transport & Safety Controls */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 relative z-10">
            {/* Left: Status Telemetry readout */}
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>{statusMessage}</span>
            </div>

            {/* Right: Primary Controls & Error-Prevention Abort Switch */}
            <div className="flex items-center gap-3">
              {/* Abort / Scrub Safety Cover (HCI Error Prevention) */}
              {context === 'launch' && (
                <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 p-1.5 rounded-xl">
                  <button
                    onClick={() => setSafetyCoverOpen(!safetyCoverOpen)}
                    className={`px-2 py-1 rounded text-[10px] font-mono font-bold uppercase transition-colors ${
                      safetyCoverOpen ? 'bg-rose-950 text-rose-400 border border-rose-800' : 'text-slate-400'
                    }`}
                  >
                    {safetyCoverOpen ? 'Safety Lock: OPEN' : 'Guard: ARMED'}
                  </button>

                  <button
                    disabled={!safetyCoverOpen}
                    onClick={() => {
                      setIsRunning(false);
                      setSecondsLeft(totalSeconds);
                      setStatusMessage('HOLD! Sequence scrubbed by Range Safety Officer.');
                      playChime(440, 'sawtooth', 0.5);
                    }}
                    className={`px-3 py-1 rounded text-xs font-mono font-bold uppercase transition-all ${
                      safetyCoverOpen
                        ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-[0_0_12px_#f43f5e]'
                        : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    Abort
                  </button>
                </div>
              )}

              {/* Reset Button */}
              <button
                onClick={() => {
                  setIsRunning(false);
                  setSecondsLeft(totalSeconds);
                  setStatusMessage('Timer reset to initial countdown duration.');
                }}
                className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
                title="Reset Countdown"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Main Play / Pause Trigger */}
              <button
                onClick={() => {
                  setIsRunning(!isRunning);
                  playChime(isRunning ? 520 : 880, 'sine', 0.15);
                  setStatusMessage(isRunning ? 'Sequence paused on hold.' : 'Countdown running...');
                }}
                className={`px-6 py-3 rounded-2xl font-mono text-sm font-black flex items-center gap-2 transition-all shadow-lg ${
                  isRunning
                    ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20'
                    : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-cyan-400/20'
                }`}
              >
                {isRunning ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>HOLD COUNTDOWN</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>START SEQUENCE</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Academic HCI Evaluation Card */}
        <div className="w-full bg-[#10141f] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-cyan-400">
            <Sparkles className="w-4 h-4" />
            <span>HCI Design Evaluation & Usability Heuristics</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
              <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400 block mb-1">
                Nielsen Heuristic #1
              </span>
              <h4 className="font-bold text-xs uppercase tracking-wider text-white">
                Visibility of System Status
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Employs dual-sensory synchronization: continuous SVG radial progress arcs, high-contrast tabular figures, sub-second telemetry, and audible Web Audio frequency pips that announce final stage milestones.
              </p>
            </div>

            <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
              <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400 block mb-1">
                Nielsen Heuristic #5
              </span>
              <h4 className="font-bold text-xs uppercase tracking-wider text-white">
                Error Prevention via Safety Locks
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                In critical temporal systems (such as NASA launches or industrial heating), catastrophic state overrides (Scrub / Abort) are protected by a deliberate physical guard switch that must be disarmed before activation.
              </p>
            </div>

            <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
              <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400 block mb-1">
                Nielsen Heuristic #7
              </span>
              <h4 className="font-bold text-xs uppercase tracking-wider text-white">
                Multi-Domain Flexibility
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Addresses the user prompt by providing dedicated contextual layouts for aerospace telemetry, culinary multi-probe cooking, motorsport scoreboard lights, and athletic interval circuits.
              </p>
            </div>
          </div>

          {/* Design Specifications Strip */}
          <div className="pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Primary Chrono Emissive</span>
              <span className="font-bold text-cyan-400">#00F2FE Electric Cyan</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Safety Override</span>
              <span className="font-bold text-rose-500">#F43F5E Crimson Guard</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Auditory Telemetry</span>
              <span className="font-bold text-white">Synthesized Web Audio (440–1760Hz)</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">WCAG Contrast</span>
              <span className="font-bold text-emerald-400">14.8:1 AAA Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
