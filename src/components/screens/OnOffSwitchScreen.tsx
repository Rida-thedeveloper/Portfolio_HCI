import React, { useState } from 'react';
import { Power, Car, Refrigerator, Zap, Shield, Sparkles } from 'lucide-react';

interface OnOffSwitchScreenProps {
  interactive?: boolean;
}

export const OnOffSwitchScreen: React.FC<OnOffSwitchScreenProps> = ({
  interactive = true,
}) => {
  const [engineStarted, setEngineStarted] = useState(true);
  const [hvacActive, setHvacActive] = useState(true);
  const [fridgeSubZero, setFridgeSubZero] = useState(false);
  const [securityPerimeter, setSecurityPerimeter] = useState(true);

  return (
    <div className="w-full h-full bg-[#0b0d13] text-[#f1f5f9] font-sans flex flex-col justify-between p-3.5 sm:p-4 select-none overflow-hidden relative border border-[#252c3d] rounded-xl">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#252c3d] z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe]" />
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#00f2fe] block leading-none">
              NESTORA OBSIDIAN
            </span>
            <span className="text-[9px] text-[#64748b]">Spatial Living Control</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#171b26] border border-[#252c3d] text-[10px] font-mono text-[#67f4b7]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
          <span>Biometric Armed</span>
        </div>
      </div>

      {/* Main Switch Pods Cluster */}
      <div className="my-auto py-1 grid grid-cols-2 gap-2 z-10">
        {/* EV Push-to-Start Tactile Pod */}
        <div
          onClick={(e) => {
            if (!interactive) return;
            e.stopPropagation();
            setEngineStarted(!engineStarted);
          }}
          className={`p-2.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
            engineStarted
              ? 'bg-[#11141d]/90 border-[#00f2fe]/40 shadow-[0_0_16px_-4px_rgba(0,242,254,0.3)]'
              : 'bg-[#11141d]/50 border-[#252c3d] opacity-75'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <Car className={`w-3.5 h-3.5 ${engineStarted ? 'text-[#00f2fe]' : 'text-slate-500'}`} />
            <span
              className={`text-[8px] font-mono font-bold uppercase px-1.5 py-0.2 rounded-full ${
                engineStarted ? 'bg-[#00f2fe]/20 text-[#00f2fe]' : 'bg-slate-800 text-slate-500'
              }`}
            >
              {engineStarted ? 'EV Active' : 'Standby'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                engineStarted
                  ? 'border-[#00f2fe] bg-[#00f2fe]/10 shadow-[0_0_12px_#00f2fe]'
                  : 'border-[#252c3d] bg-[#171b26]'
              }`}
            >
              <Power className={`w-3.5 h-3.5 ${engineStarted ? 'text-[#00f2fe]' : 'text-slate-600'}`} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-white block leading-tight">
                Push-to-Start
              </span>
              <span className="text-[9px] text-[#64748b]">Cyber EV Drive</span>
            </div>
          </div>
        </div>

        {/* Smart Refrigerator Sub-Zero Pod */}
        <div
          onClick={(e) => {
            if (!interactive) return;
            e.stopPropagation();
            setFridgeSubZero(!fridgeSubZero);
          }}
          className={`p-2.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
            fridgeSubZero
              ? 'bg-[#11141d]/90 border-[#00f2fe]/40 shadow-[0_0_16px_-4px_rgba(0,242,254,0.3)]'
              : 'bg-[#11141d]/50 border-[#252c3d]'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px]">🧊</span>
            {/* Tactile Capsule Toggle Switch */}
            <div
              className={`w-8 h-4 rounded-full relative transition-colors duration-200 border ${
                fridgeSubZero
                  ? 'bg-[#00f2fe]/20 border-[#00f2fe]'
                  : 'bg-[#171b26] border-[#252c3d]'
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full absolute top-0.5 transition-all duration-200 ${
                  fridgeSubZero
                    ? 'left-[17px] bg-[#00f2fe] shadow-[0_0_6px_#00f2fe]'
                    : 'left-0.5 bg-[#64748b]'
                }`}
              />
            </div>
          </div>

          <div>
            <span className="text-[11px] font-bold text-white block leading-tight">
              InstaView Cryo
            </span>
            <span className="text-[9px] text-[#64748b]">
              {fridgeSubZero ? '-4°F Super-Chill' : '36°F Eco Hold'}
            </span>
          </div>
        </div>

        {/* Bioclimatic HVAC Switch */}
        <div
          onClick={(e) => {
            if (!interactive) return;
            e.stopPropagation();
            setHvacActive(!hvacActive);
          }}
          className="p-2.5 rounded-xl bg-[#11141d]/70 border border-[#252c3d] flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Zap className={`w-3.5 h-3.5 ${hvacActive ? 'text-[#6366f1]' : 'text-slate-600'}`} />
            <div>
              <span className="text-[11px] font-bold text-white block leading-none">
                HVAC Array
              </span>
              <span className="text-[9px] text-[#64748b]">71.5°F Ambient</span>
            </div>
          </div>

          <div
            className={`w-8 h-4 rounded-full relative transition-colors duration-200 border ${
              hvacActive
                ? 'bg-[#6366f1]/20 border-[#6366f1]'
                : 'bg-[#171b26] border-[#252c3d]'
            }`}
          >
            <div
              className={`w-3 h-3 rounded-full absolute top-0.5 transition-all duration-200 ${
                hvacActive
                  ? 'left-[17px] bg-[#6366f1] shadow-[0_0_6px_#6366f1]'
                  : 'left-0.5 bg-[#64748b]'
              }`}
            />
          </div>
        </div>

        {/* Security Perimeter Switch */}
        <div
          onClick={(e) => {
            if (!interactive) return;
            e.stopPropagation();
            setSecurityPerimeter(!securityPerimeter);
          }}
          className="p-2.5 rounded-xl bg-[#11141d]/70 border border-[#252c3d] flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Shield className={`w-3.5 h-3.5 ${securityPerimeter ? 'text-[#10b981]' : 'text-slate-600'}`} />
            <div>
              <span className="text-[11px] font-bold text-white block leading-none">
                Shield Grid
              </span>
              <span className="text-[9px] text-[#64748b]">Perimeter Lock</span>
            </div>
          </div>

          <div
            className={`w-8 h-4 rounded-full relative transition-colors duration-200 border ${
              securityPerimeter
                ? 'bg-[#10b981]/20 border-[#10b981]'
                : 'bg-[#171b26] border-[#252c3d]'
            }`}
          >
            <div
              className={`w-3 h-3 rounded-full absolute top-0.5 transition-all duration-200 ${
                securityPerimeter
                  ? 'left-[17px] bg-[#10b981] shadow-[0_0_6px_#10b981]'
                  : 'left-0.5 bg-[#64748b]'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="pt-2 border-t border-[#252c3d] flex items-center justify-between text-[10px] font-mono text-[#64748b] z-10">
        <span className="flex items-center gap-1.5 text-slate-300">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe]" />
          48px Capsule Toggles
        </span>
        <span className="text-[#00f2fe] font-semibold">16.1:1 AAA</span>
      </div>
    </div>
  );
};
