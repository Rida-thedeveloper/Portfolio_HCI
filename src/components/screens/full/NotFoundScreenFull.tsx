import React, { useState } from 'react';
import {
  ZoomIn,
  ZoomOut,
  Search,
  Compass,
  Home,
  ArrowRight,
  Sparkles,
  Terminal,
  RotateCcw,
  ShieldAlert,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Radio,
  CheckCircle2,
  FileQuestion,
  Layers,
  ArrowLeft
} from 'lucide-react';

const HOTLINK_404_IMAGE =
  'https://lh3.googleusercontent.com/aida/AEtjO1X6EU3IIgnXNRUmGCkbzeWYmNSbhCsgyfpG4vjLdFIcBarI_10INQgSdSSnfgRLyVKmfSPl7OE2gOQaUWkbcrA-zLMUp-9k0vOOe_zejofj04wV8M949i1qBLNylgG-5ZFwo3waD9MpqONl3CmI_Z-eG0jruDGGf-TLM0B07U23N5SrVCAmc-YD4bWB7zkWzLuZlH3zSm0nwYnWirqqgcu3My2jb5Z_F9IO3UjdlS1SIw=s2650';

export const NotFoundScreenFull: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'image' | 'interactive'>('image');
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [imageError, setImageError] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [pinged, setPinged] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

  const popularRoutes = [
    { title: 'Elena Vance Profile', path: '/members/elena-vance', icon: '👤', tag: '#006 Design' },
    { title: 'Workspace Settings', path: '/nexus/settings', icon: '⚙️', tag: '#007 Design' },
    { title: 'JUW Impact Volunteer', path: '/initiatives/volunteer', icon: '🎓', tag: '#001 Design' },
    { title: 'PennyWise Calculator', path: '/finance/calculator', icon: '📊', tag: '#004 Design' },
  ];

  const filteredRoutes = searchQuery.trim() === ''
    ? popularRoutes
    : popularRoutes.filter((r) =>
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.path.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div className="w-full bg-[#f4f5f8] text-slate-800 font-sans min-h-screen py-6 sm:py-10 px-3 sm:px-6 flex flex-col items-center">
      {/* Top Switcher & Controls Bar */}
      <div className="w-full max-w-4xl mb-6 flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200/90 shadow-xs">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
            #008
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm tracking-tight leading-tight">
              404 Page — Not Boring Wayfinder
            </h3>
            <p className="text-[11px] text-slate-500">
              Aura Slate Brand System · Daily UI #008
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

          {/* Toggle Full Original Image vs Live Vector UI */}
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
        /* High-Definition Hotlink Image View */
        <div className="w-full flex justify-center overflow-x-auto pb-10">
          <div
            className="w-full max-w-4xl transition-all duration-200 rounded-2xl overflow-hidden shadow-2xl border border-slate-300/80 bg-white"
            style={{ width: `${zoomLevel}%` }}
          >
            <img
              src={HOTLINK_404_IMAGE}
              alt="Daily UI #008 - 404 Page by Rida Fatima"
              className="w-full h-auto block select-none"
              loading="eager"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
            />
            {imageError && (
              <div className="p-6 text-center text-xs text-slate-500 bg-slate-50 border-t border-slate-200">
                Switch to the "Live Prototype" tab above to explore the high-resolution vector interface.
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Live Interactive Re-creation (Aura Slate Theme) */
        <div className="w-full max-w-3xl bg-[#faf8ff] rounded-3xl shadow-xl border border-indigo-100 overflow-hidden flex flex-col mb-10 text-xs sm:text-sm relative">
          {/* Subtle Ambient Cosmic Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-200/50 via-purple-200/30 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-gradient-to-tr from-blue-200/40 via-indigo-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Navigation Bar */}
          <div className="px-6 py-4 border-b border-indigo-100/80 flex items-center justify-between bg-white/70 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                404
              </div>
              <span className="font-extrabold text-slate-900 text-base tracking-tight">
                Nexus Wayfinder
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Network Online
              </span>
              <button
                onClick={() => {
                  setPinged(true);
                  setTimeout(() => setPinged(false), 2500);
                }}
                className="px-3 py-1.5 rounded-xl border border-indigo-200 bg-white text-indigo-700 text-xs font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <Radio className="w-3.5 h-3.5" />
                <span>{pinged ? 'Signal Received!' : 'Ping Radar'}</span>
              </button>
            </div>
          </div>

          {/* Hero 404 Visual Content */}
          <div className="p-6 sm:p-10 flex flex-col items-center text-center relative z-10">
            {/* Visual Icon / Number */}
            <div className="relative mb-4">
              <div className="text-7xl sm:text-9xl font-black tracking-tighter text-indigo-950/90 font-mono select-none">
                4<span className="text-indigo-600 inline-block animate-pulse">0</span>4
              </div>
              <div className="absolute -top-3 -right-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center text-2xl shadow-lg transform rotate-12">
                🛰️
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100/70 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
              Wayfinder · Signal Lost
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight max-w-lg">
              Houston, we wandered off the charted trajectory.
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-md leading-relaxed">
              The page you are looking for may have been archived, renamed, or temporarily relocated into a parallel digital dimension.
            </p>

            {/* Interactive Search Box */}
            <div className="w-full max-w-md mt-6 relative">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Where did you want to go? Try 'Profile' or 'Settings'..."
                  className="w-full pl-11 pr-4 py-3 rounded-2xl border border-indigo-200 bg-white text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-sm transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 text-xs text-slate-400 hover:text-slate-600 font-bold px-1.5 py-0.5 rounded"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Quick Suggestions / Filtered Routes */}
            <div className="w-full max-w-md mt-4 text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2 px-1">
                {searchQuery ? 'Search Matches' : 'Popular Expeditions'}
              </span>
              <div className="space-y-1.5">
                {filteredRoutes.map((route) => (
                  <div
                    key={route.path}
                    onClick={() => setSelectedRoute(route.path)}
                    className={`p-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      selectedRoute === route.path
                        ? 'bg-indigo-50/90 border-indigo-300 ring-1 ring-indigo-400'
                        : 'bg-white/80 border-indigo-100 hover:bg-white hover:border-indigo-200 hover:shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base">{route.icon}</span>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                          {route.title}
                        </h4>
                        <p className="text-[11px] font-mono text-slate-500">{route.path}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100">
                        {route.tag}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Teleport Confirmation Toast */}
            {selectedRoute && (
              <div className="w-full max-w-md mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center justify-between animate-in fade-in">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Ready to navigate to <strong className="font-mono">{selectedRoute}</strong></span>
                </div>
                <button
                  onClick={() => setSelectedRoute(null)}
                  className="text-emerald-700 font-bold hover:underline text-[11px]"
                >
                  Dismiss
                </button>
              </div>
            )}

            {/* Technical Diagnostics Card (HCI Nielsen #9 Heuristic demonstration) */}
            <div className="w-full max-w-md mt-6 p-4 rounded-2xl bg-white border border-slate-200 text-left shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-600" />
                  Route Diagnostics
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  HTTP/3 Edge
                </span>
              </div>
              <div className="space-y-1 text-xs font-mono text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                <div className="flex justify-between">
                  <span className="text-slate-400">Path:</span>
                  <span className="text-slate-800">/space/portal/undefined</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Status:</span>
                  <span className="text-rose-600 font-bold">404 (Not Found)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">DNS Resolution:</span>
                  <span className="text-emerald-600">Active (0.42ms)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Suggested Action:</span>
                  <span className="text-indigo-600 font-semibold">Return to Home Directory</span>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setSelectedRoute('/portfolio/home')}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs sm:text-sm hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-md shadow-indigo-600/20"
              >
                <Home className="w-4 h-4" />
                <span>Return to Home Base</span>
              </button>
              <button
                onClick={() => setSearchQuery('')}
                className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Try Previous Step</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
