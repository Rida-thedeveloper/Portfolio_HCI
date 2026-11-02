import React from 'react';
import {
  Sliders,
  Moon,
  Sun,
  ShieldCheck,
  CheckCircle2,
  Lock
} from 'lucide-react';

interface SettingsScreenProps {
  interactive?: boolean;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = () => {
  return (
    <div className="w-full h-full bg-[#f8f9fc] text-slate-800 rounded-xl overflow-hidden border border-slate-200/90 shadow-sm flex flex-col font-sans select-none text-left">
      {/* Top Navbar */}
      <div className="bg-white border-b border-slate-200 px-3 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-indigo-600 text-white flex items-center justify-center font-bold text-[10px]">
            N
          </div>
          <span className="font-extrabold text-slate-900 text-xs tracking-tight">Nexus Settings</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] text-slate-500 font-medium">Auto-Sync 10:42 AM</span>
        </div>
      </div>

      {/* Main Body Preview */}
      <div className="p-3.5 flex-1 flex flex-col justify-between text-xs">
        <div className="space-y-3">
          {/* Quick Row: Preferences */}
          <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-800">
              <span className="flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-indigo-600" /> General & Locale
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">NA-WEST</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-500">
              <div className="bg-slate-50 p-1.5 rounded-md border border-slate-200/50">
                <span className="block text-[8px] text-slate-400">Language</span>
                <span className="font-medium text-slate-800">English (US)</span>
              </div>
              <div className="bg-slate-50 p-1.5 rounded-md border border-slate-200/50">
                <span className="block text-[8px] text-slate-400">Time Zone</span>
                <span className="font-medium text-slate-800">GMT-07:00 Pacific</span>
              </div>
            </div>
          </div>

          {/* Quick Row: Appearance & Theme */}
          <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 rounded border border-blue-500 bg-blue-50 flex items-center justify-center text-blue-600 text-[10px]">
                  <Sun className="w-3 h-3" />
                </div>
                <div className="w-5 h-5 rounded border border-slate-300 bg-slate-900 flex items-center justify-center text-slate-300 text-[10px]">
                  <Moon className="w-3 h-3" />
                </div>
              </div>
              <span className="text-[11px] font-semibold text-slate-800">Density & Colors</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 ring-2 ring-blue-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            </div>
          </div>

          {/* Security Row */}
          <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-semibold text-slate-800">2FA & SOC2 Type II</span>
            </div>
            <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
              Active
            </span>
          </div>
        </div>

        {/* Floating Unsaved Toast indicator */}
        <div className="mt-3 p-2 rounded-xl bg-slate-950 text-white flex items-center justify-between text-[10px] shadow-sm">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="font-medium text-slate-300">Unsaved Changes</span>
          </span>
          <span className="bg-blue-600 text-white px-2 py-0.5 rounded-md font-semibold text-[9px]">
            Save Changes
          </span>
        </div>
      </div>
    </div>
  );
};
