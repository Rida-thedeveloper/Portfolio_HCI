import React, { useState } from 'react';
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Sliders,
  Sun,
  Moon,
  Monitor,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Bell,
  Eye,
  Key,
  Database,
  Search,
  Check
} from 'lucide-react';

export const SettingsScreenFull: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'image' | 'interactive'>('image');
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  // Interactive states
  const [autoDetectTz, setAutoDetectTz] = useState(true);
  const [compactMode, setCompactMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [desktopPush, setDesktopPush] = useState(true);
  const [productReleases, setProductReleases] = useState(false);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [savedBanner, setSavedBanner] = useState(false);

  return (
    <div className="w-full bg-[#f4f5f8] text-slate-800 font-sans min-h-screen py-6 sm:py-10 px-3 sm:px-6 flex flex-col items-center">
      {/* View Switcher & Action Bar */}
      <div className="w-full max-w-5xl mb-6 flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200/90 shadow-xs">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
            #007
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm tracking-tight leading-tight">
              Nexus Workspace & Security Settings
            </h3>
            <p className="text-[11px] text-slate-500">
              Enterprise Topology, Notifications & Crypto Security · Daily UI #007
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom Controls for Image View */}
          {activeTab === 'image' && (
            <div className="hidden sm:flex items-center bg-slate-100 rounded-xl p-0.5 border border-slate-200">
              <button
                onClick={() => setZoomLevel((z) => Math.max(70, z - 15))}
                className="p-1 text-slate-600 hover:text-slate-900 rounded-lg transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono px-2 text-slate-600">{zoomLevel}%</span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(140, z + 15))}
                className="p-1 text-slate-600 hover:text-slate-900 rounded-lg transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Toggle Full Image vs Live Interactive Component */}
          <div className="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200">
            <button
              onClick={() => setActiveTab('image')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'image'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Full Design Image
            </button>
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'interactive'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Live Prototype
            </button>
          </div>
        </div>
      </div>

      {/* Main Responsive Canvas */}
      {activeTab === 'image' ? (
        /* High-Definition Responsive Image View */
        <div className="w-full flex justify-center overflow-x-auto pb-10">
          <div
            className="w-full max-w-6xl transition-all duration-200 rounded-2xl overflow-hidden shadow-2xl border border-slate-300/80 bg-white"
            style={{ width: `${zoomLevel}%` }}
          >
            <img
              src="/assets/aistudio/screen_11ff2736.png"
              alt="Daily UI #007 - Settings by Rida Fatima"
              className="w-full h-auto block select-none"
              loading="eager"
            />
          </div>
        </div>
      ) : (
        /* Live Interactive Re-creation */
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col mb-10 text-xs sm:text-sm">
          {/* Top Bar */}
          <div className="px-6 py-3.5 border-b border-slate-200 flex items-center justify-between bg-white sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                N
              </div>
              <span className="font-extrabold text-slate-900 text-base tracking-tight">Nexus</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative hidden sm:block">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search settings..."
                  className="pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-48"
                  readOnly
                />
              </div>
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                  EV
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-[11px] font-bold text-slate-900 leading-none">Elena Vance</div>
                  <div className="text-[9px] text-slate-400 leading-none mt-0.5">Administrator</div>
                </div>
              </div>
            </div>
          </div>

          {/* Subheader */}
          <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-[#faf9f8]">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
                Workspace Ecosystem • Production Node
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950">Settings</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Manage your account, preferences, and enterprise security topology.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                All changes saved at 10:42 AM · AUTO-SYNC
              </span>
            </div>
          </div>

          {/* Interactive Panels Grid */}
          <div className="p-6 sm:p-8 space-y-8 bg-[#fafaf9]">
            {/* Row 1: General Preferences & Appearance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* General Preferences */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Sliders className="w-4 h-4 text-indigo-600" />
                    <span>General Preferences</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">
                    Region: NA-WEST
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Configure your localization, regional formats, and workspace entry point.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="text-[11px] font-medium text-slate-600 block mb-1">Display Language</label>
                    <select className="w-full p-2 rounded-xl border border-slate-200 bg-white font-medium text-slate-800">
                      <option>English (US) — ISO 639-1</option>
                      <option>Spanish (ES)</option>
                      <option>French (FR)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-slate-600 block mb-1">Time Zone</label>
                    <select className="w-full p-2 rounded-xl border border-slate-200 bg-white font-medium text-slate-800">
                      <option>(GMT-07:00) Pacific Time</option>
                      <option>(GMT+00:00) UTC</option>
                      <option>(GMT+05:00) PKT</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-slate-600 block mb-1">Date Format</label>
                    <select className="w-full p-2 rounded-xl border border-slate-200 bg-white font-medium text-slate-800">
                      <option>MM/DD/YYYY</option>
                      <option>DD/MM/YYYY</option>
                      <option>YYYY-MM-DD</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-slate-600 block mb-1">Default Launch Surface</label>
                    <select className="w-full p-2 rounded-xl border border-slate-200 bg-white font-medium text-slate-800">
                      <option>Dashboard Overview</option>
                      <option>Analytics Hub</option>
                      <option>Project Boards</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-medium">Auto-detect timezone upon IP geolocation shift</span>
                  <button
                    onClick={() => setAutoDetectTz(!autoDetectTz)}
                    className={`w-10 h-6 rounded-full transition-colors relative ${
                      autoDetectTz ? 'bg-indigo-600' : 'bg-slate-300'
                    }`}
                  >
                    <span
                      className={`block w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${
                        autoDetectTz ? 'left-5' : 'left-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Appearance */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Sun className="w-4 h-4 text-indigo-600" />
                  <span>Appearance</span>
                </div>
                <p className="text-xs text-slate-500">
                  Visual density and theme modes.
                </p>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-3 rounded-xl border-2 border-indigo-600 bg-indigo-50/40 cursor-pointer">
                    <div className="w-full h-10 rounded bg-white border border-slate-200 mb-2 flex items-center justify-center font-bold text-slate-700">
                      Light
                    </div>
                    <span className="font-bold text-indigo-900">Light Mode ✓</span>
                  </div>
                  <div className="p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 cursor-pointer">
                    <div className="w-full h-10 rounded bg-slate-900 border border-slate-800 mb-2 flex items-center justify-center font-bold text-white">
                      Dark
                    </div>
                    <span className="font-medium text-slate-600">Dark Mode</span>
                  </div>
                  <div className="p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 cursor-pointer">
                    <div className="w-full h-10 rounded bg-gradient-to-r from-slate-100 to-slate-900 mb-2 flex items-center justify-center font-bold text-slate-700">
                      Sys
                    </div>
                    <span className="font-medium text-slate-600">System</span>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="text-[11px] font-medium text-slate-600 block mb-1.5">
                    Interface Accent Tone
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 ring-2 ring-indigo-400 ring-offset-2 cursor-pointer" />
                    <span className="w-5 h-5 rounded-full bg-purple-600 cursor-pointer" />
                    <span className="w-5 h-5 rounded-full bg-cyan-600 cursor-pointer" />
                    <span className="w-5 h-5 rounded-full bg-emerald-600 cursor-pointer" />
                    <span className="w-5 h-5 rounded-full bg-rose-600 cursor-pointer" />
                    <span className="w-5 h-5 rounded-full bg-amber-500 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Security & Authentication */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Security & Authentication</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                  Compliance: SOC2 Type II Certified
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between font-bold">
                    <span>Two-Factor Auth</span>
                    <span className="text-[10px] text-emerald-600 font-semibold">Active</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Time-based one-time password (TOTP) enforced via Google Authenticator / YubiKey.
                  </p>
                  <button className="w-full py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-semibold hover:bg-slate-100 text-xs">
                    Manage 2FA Configuration
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between font-bold">
                    <span>Primary Password</span>
                    <span className="text-[10px] text-slate-400">Rotated 92d ago</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Protected by salted argon2id hashing with enterprise complexity standards.
                  </p>
                  <button className="w-full py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-semibold hover:bg-slate-100 text-xs">
                    Rotate Password
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between font-bold">
                    <span>Active Sessions</span>
                    <span className="text-[10px] text-indigo-600 font-semibold">3 Devices</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Current: Chrome on macOS • San Francisco, CA (192.0.2.45)
                  </p>
                  <button className="w-full py-1.5 bg-white border border-slate-200 rounded-lg text-rose-600 font-semibold hover:bg-rose-50 text-xs">
                    Revoke Remote Sessions
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Unsaved Modifications Toast */}
            <div className="p-4 rounded-2xl bg-slate-950 text-white flex flex-wrap items-center justify-between gap-4 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm">Unsaved Modifications Pending</h4>
                  <p className="text-[11px] text-slate-400">
                    Changes detected in General Preferences & Notifications.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-xl border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold">
                  Discard Changes
                </button>
                <button
                  onClick={() => {
                    setSavedBanner(true);
                    setTimeout(() => setSavedBanner(false), 2500);
                  }}
                  className="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-xs flex items-center gap-1.5"
                >
                  {savedBanner ? <Check className="w-3.5 h-3.5" /> : null}
                  <span>{savedBanner ? 'Saved Successfully!' : 'Save Changes'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
