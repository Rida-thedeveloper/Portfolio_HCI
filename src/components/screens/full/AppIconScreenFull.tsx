import React, { useState } from 'react';
import {
  ShieldCheck,
  Grid,
  Maximize2,
  Smartphone,
  Layers,
  Sparkles,
  CheckCircle2,
  Sliders,
  Phone,
  Compass,
  MessageCircle,
  Book,
  Mail,
  Camera,
  LineChart,
  Video,
  Music,
  Calendar
} from 'lucide-react';

export const AppIconScreenFull: React.FC = () => {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <div className="w-full bg-[#faf9f8] text-slate-800 font-sans min-h-screen text-xs sm:text-sm antialiased selection:bg-emerald-100">
      {/* 1. Global Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 px-4 sm:px-8 py-3.5 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#002f2a] text-white flex items-center justify-center font-bold text-xs">
            P
          </div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-900 text-sm tracking-tight">PennyWise</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              DAILY UI #005
            </span>
          </div>
          <span className="hidden sm:inline-block text-xs text-slate-400">
            · Dept. of CS & SE • Jinnah University for Women
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="flex items-center gap-1.5 text-emerald-700 font-medium bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            HCI Visual Symbolism & Scalability Spec
          </span>
          <span className="hidden md:inline-block font-mono text-[10px] text-slate-400">
            1024 × 1024 px Master
          </span>
        </div>
      </nav>

      {/* 2. Main Stage: Icon & Design Concept */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Master App Icon Frame (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-[380px] bg-[#f8f7f4] rounded-3xl border border-slate-200 p-8 flex flex-col items-center justify-center shadow-xs">
              {/* Construction guide overlay toggle */}
              <button
                onClick={() => setShowGrid(!showGrid)}
                className={`absolute top-4 right-4 text-[10px] px-2.5 py-1 rounded-full border transition-all flex items-center gap-1 z-10 ${
                  showGrid
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Grid className="w-3 h-3" />
                <span>{showGrid ? 'Guides Active' : 'Toggle Grid'}</span>
              </button>

              {/* Master App Icon Squircle */}
              <div className="relative w-64 h-64 rounded-[22.3%] bg-gradient-to-br from-[#0b2e25] via-[#004a3e] to-[#041a14] p-8 shadow-2xl flex items-center justify-center border border-emerald-500/20">
                {/* Gloss / Specular highlight */}
                <div className="absolute inset-0 rounded-[22.3%] bg-gradient-to-t from-transparent via-white/5 to-white/10 pointer-events-none" />

                {/* Grid Overlay if active */}
                {showGrid && (
                  <div className="absolute inset-4 rounded-[18%] border border-dashed border-emerald-400/40 pointer-events-none flex items-center justify-center">
                    <div className="w-full h-[1px] bg-emerald-400/30" />
                    <div className="h-full w-[1px] bg-emerald-400/30 absolute" />
                    <div className="w-36 h-36 rounded-full border border-emerald-400/40 absolute" />
                  </div>
                )}

                {/* The SVG Monogram */}
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]">
                  {/* Stem of 'p' */}
                  <rect x="25" y="24" width="13" height="54" rx="6.5" fill="#ffffff" />
                  {/* Loop of 'p' */}
                  <path
                    d="M31 24 C 58 20, 75 34, 75 50 C 75 66, 56 73, 35 69"
                    stroke="#ffffff"
                    strokeWidth="13"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Botanical Leaf Sprout / Upward trend */}
                  <circle cx="70" cy="27" r="8.5" fill="#18b981" />
                  <path
                    d="M58 35 Q 68 28, 70 27"
                    stroke="#18b981"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <circle cx="70" cy="27" r="4" fill="#6ee7b7" />
                </svg>
              </div>

              {/* Squircle Specs Badge */}
              <div className="mt-5 text-center space-y-1">
                <span className="text-[11px] font-mono font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                  iOS / Android Squircle (22.3% r) • WCAG AAA Contrast Ratio
                </span>
                <span className="text-[10px] text-slate-400 block pt-1 font-mono">
                  Master Vector Asset: pennywise-app-icon-1024.svg
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Concept Narrative & Design Tokens (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 inline-block mb-3">
                Core Design Concept
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                The Growth Sprout & Penny Monogram .
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                PennyWise combines three distinct mental models into one unified visual mark: the lowercase letter <strong className="text-slate-900 font-semibold">‘p’</strong>, an ascending <strong className="text-slate-900 font-semibold">growth leaf</strong>, and a dynamic financial <strong className="text-slate-900 font-semibold">upward trendline</strong>.
              </p>
            </div>

            {/* 3 Callout Cards */}
            <div className="space-y-3">
              <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  P
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">Brand Letterform (‘p’)</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                    Anchors the PennyWise identity with a clean, grounded vertical stem and friendly organic rounded terminals.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  🌱
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">Sprout / Savings Seed</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                    The loop organically branches into an ascending botanical leaf, symbolizing compound savings and student wealth gestation.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  📈
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">Upward Financial Vector</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                    The terminal leaf tip shoots upwards at an energetic 45-degree angle, signifying positive monthly balance trajectory.
                  </p>
                </div>
              </div>
            </div>

            {/* Color Tokens Palette */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Chromatic Restraint & Tokens
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="h-8 rounded-lg bg-[#0b2e25] mb-1.5" />
                  <span className="text-[10px] font-bold text-slate-800 block">Forest Deep</span>
                  <span className="font-mono text-[9px] text-slate-400">#0B2E25</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="h-8 rounded-lg bg-[#18b981] mb-1.5" />
                  <span className="text-[10px] font-bold text-slate-800 block">Mint Growth</span>
                  <span className="font-mono text-[9px] text-slate-400">#18B981</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="h-8 rounded-lg bg-[#6ee7b7] mb-1.5" />
                  <span className="text-[10px] font-bold text-slate-800 block">Luminous Mint</span>
                  <span className="font-mono text-[9px] text-slate-400">#6EE7B7</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="h-8 rounded-lg bg-[#ffffff] border border-slate-200 mb-1.5" />
                  <span className="text-[10px] font-bold text-slate-800 block">Warm White</span>
                  <span className="font-mono text-[9px] text-slate-400">#FFFFFF</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Scalability & Reduction Benchmark (5 Scale Cards) */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                Scalability & Reduction Benchmark (Nielsen Usability)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Verification of optical silhouette legibility at standard operating system viewport sizes.
              </p>
            </div>
            <span className="font-mono text-[10px] text-slate-400">
              Threshold Tested: 1024px → 512px → 128px → 64px → 32px
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {/* 256x256 */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex flex-col items-center justify-between min-h-[160px]">
              <div className="w-16 h-16 rounded-[22%] bg-gradient-to-br from-[#0b2e25] via-[#004a3e] to-[#041a14] p-2 flex items-center justify-center my-auto shadow-md">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
                  <rect x="25" y="24" width="13" height="54" rx="6.5" fill="#ffffff" />
                  <path d="M31 24 C 58 20, 75 34, 75 50 C 75 66, 56 73, 35 69" stroke="#ffffff" strokeWidth="13" strokeLinecap="round" fill="none" />
                  <circle cx="70" cy="27" r="8.5" fill="#18b981" />
                </svg>
              </div>
              <div className="text-center pt-2 border-t border-slate-100 w-full">
                <span className="font-mono font-bold text-xs text-slate-800 block">256 × 256</span>
                <span className="text-[10px] text-slate-400">App Store Card</span>
              </div>
            </div>

            {/* 128x128 */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex flex-col items-center justify-between min-h-[160px]">
              <div className="w-12 h-12 rounded-[22%] bg-gradient-to-br from-[#0b2e25] via-[#004a3e] to-[#041a14] p-1.5 flex items-center justify-center my-auto shadow-sm">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
                  <rect x="25" y="24" width="13" height="54" rx="6.5" fill="#ffffff" />
                  <path d="M31 24 C 58 20, 75 34, 75 50 C 75 66, 56 73, 35 69" stroke="#ffffff" strokeWidth="13" strokeLinecap="round" fill="none" />
                  <circle cx="70" cy="27" r="8.5" fill="#18b981" />
                </svg>
              </div>
              <div className="text-center pt-2 border-t border-slate-100 w-full">
                <span className="font-mono font-bold text-xs text-slate-800 block">128 × 128</span>
                <span className="text-[10px] text-slate-400">Tablet Grid</span>
              </div>
            </div>

            {/* 64x64 */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex flex-col items-center justify-between min-h-[160px]">
              <div className="w-8 h-8 rounded-[22%] bg-gradient-to-br from-[#0b2e25] via-[#004a3e] to-[#041a14] p-1 flex items-center justify-center my-auto shadow-xs">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
                  <rect x="25" y="24" width="13" height="54" rx="6.5" fill="#ffffff" />
                  <path d="M31 24 C 58 20, 75 34, 75 50 C 75 66, 56 73, 35 69" stroke="#ffffff" strokeWidth="13" strokeLinecap="round" fill="none" />
                  <circle cx="70" cy="27" r="8.5" fill="#18b981" />
                </svg>
              </div>
              <div className="text-center pt-2 border-t border-slate-100 w-full">
                <span className="font-mono font-bold text-xs text-slate-800 block">64 × 64</span>
                <span className="text-[10px] text-slate-400">Mobile Home</span>
              </div>
            </div>

            {/* 32x32 */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex flex-col items-center justify-between min-h-[160px]">
              <div className="w-6 h-6 rounded-[22%] bg-gradient-to-br from-[#0b2e25] via-[#004a3e] to-[#041a14] p-0.5 flex items-center justify-center my-auto">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
                  <rect x="25" y="24" width="13" height="54" rx="6.5" fill="#ffffff" />
                  <path d="M31 24 C 58 20, 75 34, 75 50 C 75 66, 56 73, 35 69" stroke="#ffffff" strokeWidth="13" strokeLinecap="round" fill="none" />
                  <circle cx="70" cy="27" r="8.5" fill="#18b981" />
                </svg>
              </div>
              <div className="text-center pt-2 border-t border-slate-100 w-full">
                <span className="font-mono font-bold text-xs text-emerald-700 block">32 × 32 •</span>
                <span className="text-[10px] text-slate-400">Spotlight / Quick Search</span>
              </div>
            </div>

            {/* 16x16 */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex flex-col items-center justify-between min-h-[160px]">
              <div className="w-4 h-4 rounded-[22%] bg-[#0b2e25] flex items-center justify-center my-auto">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              <div className="text-center pt-2 border-t border-slate-100 w-full">
                <span className="font-mono font-bold text-xs text-slate-800 block">16 × 16</span>
                <span className="text-[10px] text-slate-400">Favicon / Status</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. In-Situ Smartphone Mockup */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Secondary Presentation
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
              In-Situ Smartphone Home Screen Environment
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Evaluating visual saliency, distinctiveness, and cognitive recognition alongside standard iOS/Android application neighbors.
            </p>
          </div>

          {/* Smartphone Frame */}
          <div className="max-w-[340px] mx-auto bg-slate-950 p-4 rounded-[48px] shadow-2xl border-4 border-slate-800 relative">
            <div className="rounded-[36px] bg-gradient-to-b from-[#111827] via-[#0f172a] to-[#020617] p-5 text-white overflow-hidden min-h-[580px] flex flex-col justify-between relative">
              {/* Dynamic Island & Status Bar */}
              <div>
                <div className="flex justify-between items-center text-[11px] font-semibold text-slate-400 px-3 pt-1">
                  <span>9:41</span>
                  {/* Dynamic Island */}
                  <div className="w-20 h-5 bg-black rounded-full mx-auto" />
                  <div className="flex items-center gap-1">
                    <span>5G</span>
                    <div className="w-4 h-2.5 border border-slate-400 rounded-xs" />
                  </div>
                </div>

                {/* Date & Time Widget */}
                <div className="text-center my-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                    Wednesday, March 26
                  </span>
                  <span className="text-4xl font-extrabold tracking-tight font-sans">09:41</span>
                </div>

                {/* 4x2 App Grid */}
                <div className="grid grid-cols-4 gap-4 px-1 text-center">
                  {/* Row 1 */}
                  <div>
                    <div className="w-12 h-12 rounded-[22%] bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center mx-auto shadow-md">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] text-slate-300 block mt-1">Photos</span>
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-[22%] bg-blue-500 flex items-center justify-center mx-auto shadow-md">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] text-slate-300 block mt-1">Mail</span>
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-[22%] bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center mx-auto shadow-md">
                      <LineChart className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] text-slate-300 block mt-1">Stocks</span>
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-[22%] bg-slate-700 flex items-center justify-center mx-auto shadow-md">
                      <Sliders className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] text-slate-300 block mt-1">Settings</span>
                  </div>

                  {/* Row 2: PennyWise Highlighted */}
                  <div className="scale-105">
                    <div className="w-12 h-12 rounded-[22%] bg-gradient-to-br from-[#0b2e25] via-[#004a3e] to-[#041a14] p-1 flex items-center justify-center mx-auto shadow-lg ring-2 ring-emerald-400">
                      <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
                        <rect x="25" y="24" width="13" height="54" rx="6.5" fill="#ffffff" />
                        <path d="M31 24 C 58 20, 75 34, 75 50 C 75 66, 56 73, 35 69" stroke="#ffffff" strokeWidth="13" strokeLinecap="round" fill="none" />
                        <circle cx="70" cy="27" r="8.5" fill="#18b981" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 block mt-1">PennyWise</span>
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-[22%] bg-purple-600 flex items-center justify-center mx-auto shadow-md">
                      <Video className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] text-slate-300 block mt-1">FaceTime</span>
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-[22%] bg-gradient-to-tr from-pink-500 to-rose-500 flex items-center justify-center mx-auto shadow-md">
                      <Music className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] text-slate-300 block mt-1">Music</span>
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-[22%] bg-teal-500 flex items-center justify-center mx-auto shadow-md">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] text-slate-300 block mt-1">Calendar</span>
                  </div>
                </div>
              </div>

              {/* Dock */}
              <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-2.5 mx-1 flex justify-around items-center border border-white/10">
                <div className="w-10 h-10 rounded-[22%] bg-emerald-500 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="w-10 h-10 rounded-[22%] bg-blue-500 flex items-center justify-center">
                  <Compass className="w-4 h-4 text-white" />
                </div>
                <div className="w-10 h-10 rounded-[22%] bg-emerald-600 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div className="w-10 h-10 rounded-[22%] bg-purple-600 flex items-center justify-center">
                  <Book className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. HCI Usability & Cognitive Recognition Evaluation */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <h3 className="font-bold text-slate-950 text-sm sm:text-base">
                HCI Usability & Cognitive Recognition Evaluation
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-slate-900 text-xs mb-1.5">
                  Visual Saliency & Hick-Hyman Law
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The deep forest-green backdrop (<code className="text-[11px] text-slate-800 font-mono">#0F3D32</code> to <code className="text-[11px] text-slate-800 font-mono">#061C16</code>) creates an immediately distinguishable luminescent contrast against standard iOS and Android system wallpapers without producing ocular strain or over-saturated distraction.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-xs mb-1.5">
                  Pre-attentive Optical Gestalt
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The continuous bezier curve unites the stem and ascending leaf in a single perceptual closure. The user perceives both the letter “p” and an organic growth sprout simultaneously within the first 50 milliseconds of fixation.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-xs mb-1.5">
                  Extreme Resolution Fidelity (32px)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  By eliminating extraneous skeuomorphic clutter, thin strokes, and small typography, the geometric silhouettes retain crisp recognition down to low-DPI task switchers, notifications, and search results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Footer */}
        <footer className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <span>© 2025 PennyWise Design Spec • HCI Design Challenge Portfolio Series • Department of Computer Science & Software Engineering, JUW</span>
          <span className="font-mono text-[10px] text-slate-400">Daily UI #005 • Mobile App Icon Master</span>
        </footer>
      </div>
    </div>
  );
};
