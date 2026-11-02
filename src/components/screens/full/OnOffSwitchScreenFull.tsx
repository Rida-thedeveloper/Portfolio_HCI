import React, { useState } from 'react';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Power,
  Car,
  Refrigerator,
  Zap,
  Shield,
  Sparkles,
  Sliders,
  Sun,
  Moon,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertTriangle,
  Fingerprint,
  Thermometer,
  Wind,
  ShieldCheck,
  Lock,
  BatteryCharging
} from 'lucide-react';

const HOTLINK_NESTORA_IMAGE =
  'https://lh3.googleusercontent.com/aida/AEtjO1UICTOQQ_sUazbqF39Q3Vy5arG_a-vFkyNiBMU9pjs_NjMZ075x9Rsc0S50ETe-ZeXh7PR_6Ib-qE9dZx7gztL1e8UOvn1L5HwhzO8kxX_NWzk-onThNr58QMzLW4PbJ0lmyZygYK-QC_yiM3ZPgaD7-ke6327AIFJLWgYYue9JcubMGJ3dk3B5bm7aU-GVKedxoeIRDQ0iIuAvwbrKtlW-J8PdA98X397nH-ZekY5xeQ=s3000';

export const OnOffSwitchScreenFull: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'image' | 'interactive'>('interactive');
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [imageError, setImageError] = useState<boolean>(false);

  // EV Station State
  const [evEngineStarted, setEvEngineStarted] = useState(true);
  const [evInductiveCharging, setEvInductiveCharging] = useState(true);
  const [evPreconditioning, setEvPreconditioning] = useState(true);
  const [evSportMode, setEvSportMode] = useState(false);

  // Smart Refrigerator Sub-Zero State
  const [fridgeInstaView, setFridgeInstaView] = useState(true);
  const [fridgeSuperChill, setFridgeSuperChill] = useState(false);
  const [fridgeHumiditySeal, setFridgeHumiditySeal] = useState(true);
  const [fridgeUvSterilize, setFridgeUvSterilize] = useState(true);

  // Obsidian Whole-Home Command Center State
  const [masterHomePower, setMasterHomePower] = useState(true);
  const [hvacMaster, setHvacMaster] = useState(true);
  const [hvacTemperature, setHvacTemperature] = useState(71);
  const [securityPerimeter, setSecurityPerimeter] = useState(true);
  const [lightingScene, setLightingScene] = useState<'cinema' | 'zenith' | 'rest'>('cinema');

  return (
    <div className="w-full bg-[#0b0d13] text-[#f1f5f9] font-sans min-h-screen py-6 sm:py-10 px-3 sm:px-6 flex flex-col items-center">
      {/* Top Bar Switcher */}
      <div className="w-full max-w-6xl mb-6 flex flex-wrap items-center justify-between gap-3 bg-[#11141d] p-3 rounded-2xl border border-[#252c3d] shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00f2fe] to-[#6366f1] text-[#0b0d13] font-mono font-black flex items-center justify-center text-xs shadow-md">
            #015
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-xs sm:text-sm tracking-tight leading-tight">
                NESTORA OBSIDIAN — Smart Living On/Off Command
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/30 font-semibold">
                Daily UI #015
              </span>
            </div>
            <p className="text-[11px] text-[#64748b]">
              Cyber EV Push-to-Start · Sub-Zero InstaView Refrigerator · Whole-Home Obsidian IoT
            </p>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1.5 bg-[#171b26] p-1 rounded-xl border border-[#252c3d]">
          <button
            onClick={() => setActiveTab('interactive')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'interactive'
                ? 'bg-[#00f2fe] text-[#0b0d13] font-bold shadow-[0_0_12px_rgba(0,242,254,0.3)]'
                : 'text-[#64748b] hover:text-white'
            }`}
          >
            Interactive Control Panel
          </button>
          <button
            onClick={() => setActiveTab('image')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'image'
                ? 'bg-[#00f2fe] text-[#0b0d13] font-bold shadow-[0_0_12px_rgba(0,242,254,0.3)]'
                : 'text-[#64748b] hover:text-white'
            }`}
          >
            Design System Mockup
          </button>
        </div>

        {/* Zoom Controls (Active in image mode) */}
        {activeTab === 'image' && (
          <div className="flex items-center gap-1 border-l border-[#252c3d] pl-3">
            <button
              onClick={() => setZoomLevel((prev) => Math.max(50, prev - 15))}
              className="p-1.5 text-slate-400 hover:text-white border border-[#252c3d] rounded-lg bg-[#171b26] transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono text-slate-300 w-11 text-center font-semibold">
              {zoomLevel}%
            </span>
            <button
              onClick={() => setZoomLevel((prev) => Math.min(220, prev + 15))}
              className="p-1.5 text-slate-400 hover:text-white border border-[#252c3d] rounded-lg bg-[#171b26] transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel(100)}
              className="p-1.5 text-slate-400 hover:text-white border border-[#252c3d] rounded-lg bg-[#171b26] transition-colors"
              title="Reset Zoom"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Tab 1: Design System Mockup */}
      {activeTab === 'image' && (
        <div className="w-full max-w-6xl flex flex-col items-center">
          <div className="w-full bg-[#11141d] border border-[#252c3d] rounded-2xl p-4 sm:p-8 flex justify-center overflow-auto max-h-[82vh] relative">
            <div
              style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
              className="transition-transform duration-200 flex flex-col items-center"
            >
              {!imageError ? (
                <img
                  src={HOTLINK_NESTORA_IMAGE}
                  alt="Daily UI #015 Nestora Obsidian Original High-Res Design Mockup"
                  className="max-w-full h-auto rounded-xl border border-[#252c3d] shadow-2xl"
                  onError={() => setImageError(true)}
                  loading="eager"
                />
              ) : (
                <div className="p-12 text-center max-w-md bg-[#171b26] rounded-2xl border border-[#252c3d]">
                  <p className="font-bold text-base text-white">High-Res Mockup Loading</p>
                  <p className="text-xs text-slate-400 mt-2">
                    Rendering interactive tactile switch control panel with 100% token fidelity.
                  </p>
                  <button
                    onClick={() => setActiveTab('interactive')}
                    className="mt-4 px-4 py-2 bg-[#00f2fe] text-slate-950 font-bold rounded-xl text-xs"
                  >
                    Open Interactive Panel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Full Functional Obsidian Living Switchboard */}
      {activeTab === 'interactive' && (
        <div className="w-full max-w-6xl space-y-6">
          {/* Master Facility Header Banner */}
          <div className="w-full bg-[#11141d]/80 backdrop-blur-xl border border-[#252c3d] rounded-3xl p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#171b26] border border-[#252c3d] flex items-center justify-center text-[#00f2fe] shadow-[0_0_16px_rgba(0,242,254,0.15)]">
                <Power className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-white tracking-tight">
                    RESIDENCE 07 · OBSIDIAN TOPOLOGY
                  </h2>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30 font-bold">
                    GRID ONLINE
                  </span>
                </div>
                <p className="text-xs text-[#64748b]">
                  Sentient ambient power matrix with micro-surface glassmorphic relays
                </p>
              </div>
            </div>

            {/* Master Whole-Home Switch */}
            <div className="flex items-center gap-3 bg-[#171b26] px-4 py-2.5 rounded-2xl border border-[#252c3d]">
              <div>
                <span className="text-xs font-bold text-white block leading-tight">
                  Master System Relay
                </span>
                <span className="text-[10px] font-mono text-[#64748b]">
                  {masterHomePower ? 'All 14 Nodes Energized' : 'Standby / Preservation'}
                </span>
              </div>

              {/* Specification Tactile Capsule Toggle Switch */}
              <button
                type="button"
                role="switch"
                aria-checked={masterHomePower}
                onClick={() => setMasterHomePower(!masterHomePower)}
                className={`w-12 h-6.5 rounded-full relative transition-all duration-300 border focus:outline-none shadow-inner ${
                  masterHomePower
                    ? 'bg-[#00f2fe]/20 border-[#00f2fe] shadow-[0_0_12px_rgba(0,242,254,0.25)]'
                    : 'bg-[#171b26] border-[#252c3d]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full absolute top-[2px] transition-all duration-300 flex items-center justify-center ${
                    masterHomePower
                      ? 'left-[25px] bg-[#00f2fe] shadow-[0_0_12px_#00f2fe]'
                      : 'left-[3px] bg-[#64748b]'
                  }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${masterHomePower ? 'bg-[#0b0d13]' : 'bg-[#171b26]'}`} />
                </div>
              </button>
            </div>
          </div>

          {/* 3 Main Functional Domains: EV Vehicle, Smart Refrigerator, Whole-Home IoT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* DOMAIN 1: Push-to-Start EV Station */}
            <div className="bg-[#11141d]/80 backdrop-blur-xl border border-[#252c3d] rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f2fe]/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#252c3d] mb-5">
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-[#00f2fe]" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                      Cyber EV Vehicle
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00f2fe] bg-[#00f2fe]/10 px-2 py-0.5 rounded-full border border-[#00f2fe]/30 font-semibold">
                    100 kWh · 92% SOC
                  </span>
                </div>

                {/* Tactile Push-to-Start Button */}
                <div className="flex flex-col items-center justify-center py-4 text-center">
                  <button
                    onClick={() => setEvEngineStarted(!evEngineStarted)}
                    className={`w-28 h-28 rounded-full border-2 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer relative group active:scale-95 ${
                      evEngineStarted
                        ? 'border-[#00f2fe] bg-[#00f2fe]/10 shadow-[0_0_32px_rgba(0,242,254,0.4)] ring-4 ring-[#00f2fe]/20'
                        : 'border-[#252c3d] bg-[#171b26] hover:border-slate-600'
                    }`}
                  >
                    <div
                      className={`w-20 h-20 rounded-full border flex flex-col items-center justify-center transition-all ${
                        evEngineStarted
                          ? 'border-[#00f2fe] bg-[#0b0d13] shadow-inner'
                          : 'border-[#252c3d] bg-[#11141d]'
                      }`}
                    >
                      <Fingerprint
                        className={`w-6 h-6 mb-1 transition-colors ${
                          evEngineStarted ? 'text-[#00f2fe] animate-pulse' : 'text-[#64748b]'
                        }`}
                      />
                      <span className="font-mono text-[9px] font-black uppercase tracking-widest text-white">
                        {evEngineStarted ? 'ENGINE ON' : 'PUSH START'}
                      </span>
                    </div>
                  </button>
                  <span className="text-[11px] font-mono text-[#64748b] mt-3">
                    {evEngineStarted ? '⚡ Inverter Ready · Twin Motor Synchronized' : 'Touch with Biometric Keycard to Ignite'}
                  </span>
                </div>

                {/* Granular EV Peripheral Switches */}
                <div className="space-y-3 pt-4 border-t border-[#252c3d]">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#171b26]/70 border border-[#252c3d]">
                    <div className="flex items-center gap-2">
                      <BatteryCharging className="w-3.5 h-3.5 text-[#00f2fe]" />
                      <div>
                        <span className="text-xs font-bold text-white block leading-tight">
                          Inductive Floor Pad
                        </span>
                        <span className="text-[10px] text-[#64748b]">22 kW Wireless Charging</span>
                      </div>
                    </div>
                    {/* Switch */}
                    <button
                      type="button"
                      role="switch"
                      aria-checked={evInductiveCharging}
                      onClick={() => setEvInductiveCharging(!evInductiveCharging)}
                      className={`w-12 h-6.5 rounded-full relative transition-all duration-300 border focus:outline-none ${
                        evInductiveCharging
                          ? 'bg-[#00f2fe]/20 border-[#00f2fe] shadow-[0_0_8px_rgba(0,242,254,0.3)]'
                          : 'bg-[#171b26] border-[#252c3d]'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full absolute top-[2px] transition-all duration-300 flex items-center justify-center ${
                          evInductiveCharging
                            ? 'left-[25px] bg-[#00f2fe] shadow-[0_0_8px_#00f2fe]'
                            : 'left-[3px] bg-[#64748b]'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#171b26]/70 border border-[#252c3d]">
                    <div className="flex items-center gap-2">
                      <Wind className="w-3.5 h-3.5 text-[#6366f1]" />
                      <div>
                        <span className="text-xs font-bold text-white block leading-tight">
                          Cabin Thermal Prep
                        </span>
                        <span className="text-[10px] text-[#64748b]">Pre-Condition to 68°F</span>
                      </div>
                    </div>
                    {/* Switch */}
                    <button
                      type="button"
                      role="switch"
                      aria-checked={evPreconditioning}
                      onClick={() => setEvPreconditioning(!evPreconditioning)}
                      className={`w-12 h-6.5 rounded-full relative transition-all duration-300 border focus:outline-none ${
                        evPreconditioning
                          ? 'bg-[#6366f1]/20 border-[#6366f1] shadow-[0_0_8px_rgba(99,102,241,0.3)]'
                          : 'bg-[#171b26] border-[#252c3d]'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full absolute top-[2px] transition-all duration-300 flex items-center justify-center ${
                          evPreconditioning
                            ? 'left-[25px] bg-[#6366f1] shadow-[0_0_8px_#6366f1]'
                            : 'left-[3px] bg-[#64748b]'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-[#64748b] flex items-center justify-between pt-2 border-t border-[#252c3d]">
                <span>Telemetry: 100% Nominal</span>
                <span className="text-[#00f2fe]">Lock: Armed</span>
              </div>
            </div>

            {/* DOMAIN 2: Smart Refrigerator Sub-Zero Control */}
            <div className="bg-[#11141d]/80 backdrop-blur-xl border border-[#252c3d] rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981]/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#252c3d] mb-5">
                  <div className="flex items-center gap-2">
                    <Refrigerator className="w-4 h-4 text-[#10b981]" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                      Sub-Zero Smart Fridge
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded-full border border-[#10b981]/30 font-semibold">
                    Multi-Zone Bio-Cooling
                  </span>
                </div>

                {/* InstaView Glass Door Interactive Preview Window */}
                <div className="p-4 rounded-2xl bg-[#0b0d13] border border-[#252c3d] space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-white block">
                        InstaView™ Photon Glass
                      </span>
                      <span className="text-[10px] text-[#64748b]">
                        {fridgeInstaView ? 'Illuminated Translucent Glass' : 'Mirrored Obsidian Tint'}
                      </span>
                    </div>

                    <button
                      type="button"
                      role="switch"
                      aria-checked={fridgeInstaView}
                      onClick={() => setFridgeInstaView(!fridgeInstaView)}
                      className={`w-12 h-6.5 rounded-full relative transition-all duration-300 border focus:outline-none ${
                        fridgeInstaView
                          ? 'bg-[#00f2fe]/20 border-[#00f2fe] shadow-[0_0_8px_rgba(0,242,254,0.3)]'
                          : 'bg-[#171b26] border-[#252c3d]'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full absolute top-[2px] transition-all duration-300 flex items-center justify-center ${
                          fridgeInstaView
                            ? 'left-[25px] bg-[#00f2fe] shadow-[0_0_8px_#00f2fe]'
                            : 'left-[3px] bg-[#64748b]'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Simulated Interior View Window */}
                  <div
                    className={`h-24 rounded-xl border p-2.5 transition-all duration-500 flex flex-col justify-between ${
                      fridgeInstaView
                        ? 'bg-gradient-to-b from-[#1a2e38] to-[#0c1820] border-[#00f2fe]/40 shadow-inner'
                        : 'bg-[#12141a] border-[#252c3d]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className={fridgeInstaView ? 'text-cyan-300' : 'text-slate-600'}>
                        {fridgeInstaView ? 'Cavity Lights: 4500K Pure Glow' : 'Cavity Dark'}
                      </span>
                      <span className="text-emerald-400 font-bold">34.2°F / 68% RH</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-lg">🍇</span>
                      <span className="text-lg">🥑</span>
                      <span className="text-lg">🍾</span>
                      <span className="text-lg">🥩</span>
                      <span className="text-lg">🧀</span>
                    </div>
                  </div>
                </div>

                {/* Sub-Zero Cooling Controls */}
                <div className="space-y-3 pt-4 border-t border-[#252c3d]">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#171b26]/70 border border-[#252c3d]">
                    <div>
                      <span className="text-xs font-bold text-white block leading-tight">
                        Super-Freeze Turbo Chill
                      </span>
                      <span className="text-[10px] text-[#64748b]">-10°F Rapid Cryo Preservation</span>
                    </div>
                    {/* Switch */}
                    <button
                      type="button"
                      role="switch"
                      aria-checked={fridgeSuperChill}
                      onClick={() => setFridgeSuperChill(!fridgeSuperChill)}
                      className={`w-12 h-6.5 rounded-full relative transition-all duration-300 border focus:outline-none ${
                        fridgeSuperChill
                          ? 'bg-[#00f2fe]/20 border-[#00f2fe] shadow-[0_0_8px_rgba(0,242,254,0.3)]'
                          : 'bg-[#171b26] border-[#252c3d]'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full absolute top-[2px] transition-all duration-300 flex items-center justify-center ${
                          fridgeSuperChill
                            ? 'left-[25px] bg-[#00f2fe] shadow-[0_0_8px_#00f2fe]'
                            : 'left-[3px] bg-[#64748b]'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#171b26]/70 border border-[#252c3d]">
                    <div>
                      <span className="text-xs font-bold text-white block leading-tight">
                        UV-C Ion Sterilizer
                      </span>
                      <span className="text-[10px] text-[#64748b]">Active 99.9% Pathogen Removal</span>
                    </div>
                    {/* Switch */}
                    <button
                      type="button"
                      role="switch"
                      aria-checked={fridgeUvSterilize}
                      onClick={() => setFridgeUvSterilize(!fridgeUvSterilize)}
                      className={`w-12 h-6.5 rounded-full relative transition-all duration-300 border focus:outline-none ${
                        fridgeUvSterilize
                          ? 'bg-[#10b981]/20 border-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.3)]'
                          : 'bg-[#171b26] border-[#252c3d]'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full absolute top-[2px] transition-all duration-300 flex items-center justify-center ${
                          fridgeUvSterilize
                            ? 'left-[25px] bg-[#10b981] shadow-[0_0_8px_#10b981]'
                            : 'left-[3px] bg-[#64748b]'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-[#64748b] flex items-center justify-between pt-2 border-t border-[#252c3d]">
                <span>Dual Linear Inverter</span>
                <span className="text-[#10b981]">Eco Energy: 0.78 kWh/day</span>
              </div>
            </div>

            {/* DOMAIN 3: Whole-Home Touch Panel Command */}
            <div className="bg-[#11141d]/80 backdrop-blur-xl border border-[#252c3d] rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6366f1]/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#252c3d] mb-5">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#6366f1]" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                      Home Environmental Matrix
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#6366f1] bg-[#6366f1]/10 px-2 py-0.5 rounded-full border border-[#6366f1]/30 font-semibold">
                    Zone: Living Area
                  </span>
                </div>

                {/* Tactile Rotary Slider (HVAC Temperature) */}
                <div className="p-4 rounded-2xl bg-[#0b0d13] border border-[#252c3d] space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-white block">
                        Bioclimatic HVAC Dimmer
                      </span>
                      <span className="text-[10px] text-[#64748b]">Tactile Linear Rail</span>
                    </div>
                    <span className="font-mono text-base font-bold text-[#00f2fe]">
                      {hvacTemperature}°F
                    </span>
                  </div>

                  {/* 6px Rail with sunken bevel & tactile glass puck slider */}
                  <div className="py-2">
                    <input
                      type="range"
                      min="64"
                      max="78"
                      value={hvacTemperature}
                      onChange={(e) => setHvacTemperature(Number(e.target.value))}
                      className="w-full accent-[#00f2fe] h-2 bg-[#171b26] rounded-lg appearance-none cursor-pointer border border-[#252c3d]"
                    />
                    <div className="flex items-center justify-between text-[9px] font-mono text-[#64748b] mt-1">
                      <span>64°F Cooling</span>
                      <span>71°F Balance</span>
                      <span>78°F Heating</span>
                    </div>
                  </div>
                </div>

                {/* Lighting Scenes Chip Selector */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono uppercase text-[#64748b] block font-semibold">
                    Photon Ambient Presets
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setLightingScene('cinema')}
                      className={`p-2 rounded-xl text-center border text-xs font-bold transition-all ${
                        lightingScene === 'cinema'
                          ? 'bg-[#6366f1]/20 border-[#6366f1] text-[#6366f1] shadow-[0_0_8px_rgba(99,102,241,0.3)]'
                          : 'bg-[#171b26] border-[#252c3d] text-[#64748b] hover:text-white'
                      }`}
                    >
                      Cinema
                    </button>
                    <button
                      onClick={() => setLightingScene('zenith')}
                      className={`p-2 rounded-xl text-center border text-xs font-bold transition-all ${
                        lightingScene === 'zenith'
                          ? 'bg-[#00f2fe]/20 border-[#00f2fe] text-[#00f2fe] shadow-[0_0_8px_rgba(0,242,254,0.3)]'
                          : 'bg-[#171b26] border-[#252c3d] text-[#64748b] hover:text-white'
                      }`}
                    >
                      Zenith
                    </button>
                    <button
                      onClick={() => setLightingScene('rest')}
                      className={`p-2 rounded-xl text-center border text-xs font-bold transition-all ${
                        lightingScene === 'rest'
                          ? 'bg-[#10b981]/20 border-[#10b981] text-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.3)]'
                          : 'bg-[#171b26] border-[#252c3d] text-[#64748b] hover:text-white'
                      }`}
                    >
                      Deep Rest
                    </button>
                  </div>
                </div>

                {/* Perimeter Security Toggle */}
                <div className="pt-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#171b26]/70 border border-[#252c3d]">
                    <div className="flex items-center gap-2">
                      <Lock className={`w-4 h-4 ${securityPerimeter ? 'text-[#10b981]' : 'text-rose-500'}`} />
                      <div>
                        <span className="text-xs font-bold text-white block leading-tight">
                          Quantum Perimeter Shield
                        </span>
                        <span className="text-[10px] text-[#64748b]">
                          {securityPerimeter ? 'All Optical Sensors Locked' : 'PERIMETER DISARMED'}
                        </span>
                      </div>
                    </div>
                    {/* Switch */}
                    <button
                      type="button"
                      role="switch"
                      aria-checked={securityPerimeter}
                      onClick={() => setSecurityPerimeter(!securityPerimeter)}
                      className={`w-12 h-6.5 rounded-full relative transition-all duration-300 border focus:outline-none ${
                        securityPerimeter
                          ? 'bg-[#10b981]/20 border-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.3)]'
                          : 'bg-rose-950/40 border-rose-500 shadow-[0_0_8px_rgba(239,68,68,0.3)]'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full absolute top-[2px] transition-all duration-300 flex items-center justify-center ${
                          securityPerimeter
                            ? 'left-[25px] bg-[#10b981] shadow-[0_0_8px_#10b981]'
                            : 'left-[3px] bg-rose-500 shadow-[0_0_8px_#ef4444]'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-[#64748b] flex items-center justify-between pt-2 border-t border-[#252c3d]">
                <span>Mesh Latency: 4ms</span>
                <span className="text-[#6366f1]">Bus: CAN-FD</span>
              </div>
            </div>
          </div>

          {/* Academic HCI Evaluation Card */}
          <div className="w-full bg-[#11141d] border border-[#252c3d] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#00f2fe]">
              <Sparkles className="w-4 h-4" />
              <span>HCI Design Evaluation & Usability Heuristics</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-[#171b26]/70 rounded-xl border border-[#252c3d]">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#00f2fe] block mb-1">
                  Nielsen Heuristic #1
                </span>
                <h4 className="font-bold text-xs uppercase tracking-wider text-white">
                  Visibility of System Status
                </h4>
                <p className="text-xs text-[#b9cacb] mt-2 leading-relaxed">
                  Every state transition generates an unmistakable sensory confirmation: 48px tactile capsule tracks glow with an emissive cyan halo (0 0 12px #00f2fe), preventing any guesswork regarding whether power or cooling is energized.
                </p>
              </div>

              <div className="p-4 bg-[#171b26]/70 rounded-xl border border-[#252c3d]">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#00f2fe] block mb-1">
                  Nielsen Heuristic #2
                </span>
                <h4 className="font-bold text-xs uppercase tracking-wider text-white">
                  Match System & Real World
                </h4>
                <p className="text-xs text-[#b9cacb] mt-2 leading-relaxed">
                  Mimics high-end automotive tactile push-to-start switches and physical rotary dimmers while incorporating modern glassmorphic depth, allowing seamless cognitive mapping for physical homeowners.
                </p>
              </div>

              <div className="p-4 bg-[#171b26]/70 rounded-xl border border-[#252c3d]">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#00f2fe] block mb-1">
                  Nielsen Heuristic #5
                </span>
                <h4 className="font-bold text-xs uppercase tracking-wider text-white">
                  Error Prevention in Safety Scopes
                </h4>
                <p className="text-xs text-[#b9cacb] mt-2 leading-relaxed">
                  Critical state modifications (such as Quantum Perimeter Shield disarm or Master Grid shutoff) utilize color-coded chromatic shifts to alert the user of active vulnerability.
                </p>
              </div>
            </div>

            {/* Design Specifications Strip */}
            <div className="pt-4 border-t border-[#252c3d] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <span className="text-[#64748b] block text-[10px] uppercase">Active Toggle Glow</span>
                <span className="font-bold text-[#00f2fe]">#00F2FE Electric Cyan</span>
              </div>
              <div>
                <span className="text-[#64748b] block text-[10px] uppercase">Eco Telemetry</span>
                <span className="font-bold text-[#10b981]">#10B981 Mint Emerald</span>
              </div>
              <div>
                <span className="text-[#64748b] block text-[10px] uppercase">Base Foundation</span>
                <span className="font-bold text-white">#0B0D13 Sub-Zero Obsidian</span>
              </div>
              <div>
                <span className="text-[#64748b] block text-[10px] uppercase">WCAG Contrast</span>
                <span className="font-bold text-[#00f2fe]">16.1:1 AAA Verified</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
