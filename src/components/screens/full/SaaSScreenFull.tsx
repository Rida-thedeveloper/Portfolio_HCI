import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  BookOpen,
  PieChart,
  Bot,
  Zap,
  Clock,
  Layers,
  Star,
  ShieldCheck,
  Send,
  ExternalLink
} from 'lucide-react';

export const SaaSScreenFull: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="w-full bg-[#080b11] text-slate-100 font-sans min-h-screen text-xs sm:text-sm antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* 1. Global Navigation Bar */}
      <nav className="border-b border-slate-800/80 px-4 sm:px-8 py-3.5 flex items-center justify-between sticky top-0 z-30 bg-[#080b11]/85 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-sm text-white shadow-lg shadow-indigo-500/20">
            N
          </div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white text-base tracking-tight">NOVA AI</span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              BETA
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-400">
          <span className="hover:text-white cursor-pointer transition-colors">Product</span>
          <span className="hover:text-white cursor-pointer transition-colors">Features</span>
          <span className="hover:text-white cursor-pointer transition-colors">How It Works</span>
          <span className="hover:text-white cursor-pointer transition-colors">Pricing</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block text-xs font-medium text-slate-400 hover:text-white cursor-pointer">
            Sign In
          </span>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-indigo-600/25 transition-all flex items-center gap-1.5 active:scale-98">
            <span>Get Started Free</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <div className="relative pt-12 sm:pt-16 pb-12 overflow-hidden text-center max-w-5xl mx-auto px-4 sm:px-6">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Spec Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs text-indigo-300 font-semibold mb-6 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Meet your new AI productivity partner</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-400">HCI SPEC</span>
        </div>

        {/* Display Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-4xl mx-auto">
          Your Workday, Powered by{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            Intelligence.
          </span>
        </h1>

        <p className="text-xs sm:text-base text-slate-400 mt-5 max-w-2xl mx-auto leading-relaxed">
          Organize your tasks, turn notes into insights, and focus on what matters most — all in one intelligent workspace built for deep cognitive flow.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xl shadow-indigo-600/30 transition-all flex items-center gap-2">
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/80 font-bold text-xs sm:text-sm rounded-xl transition-all">
            Explore Features
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-500 mt-6">
          <span>✓ No credit card required</span>
          <span>•</span>
          <span>✓ Free 14-day trial</span>
          <span>•</span>
          <span>✓ Student-friendly plans</span>
        </div>
      </div>

      {/* 3. Central Workspace Window Mockup */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="rounded-2xl border border-slate-800 bg-[#0e131d] shadow-2xl overflow-hidden">
          {/* Window Chrome Header */}
          <div className="bg-slate-950/80 border-b border-slate-800/80 px-4 py-2.5 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-slate-500 text-[11px] font-mono ml-2">
                NOVA OS • Cognitive Workspace v2.4-HCI
              </span>
            </div>
            <div className="text-[11px] font-mono text-indigo-400 flex items-center gap-1.5">
              <span>Quick Prompt (⌘K)</span>
            </div>
          </div>

          {/* 3 Column Grid inside the workspace */}
          <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Panel 1: Smart Task Planning (4 Cols) */}
            <div className="lg:col-span-4 bg-[#131926] border border-slate-800/80 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    <span className="font-bold text-white text-xs">Smart Task Planning</span>
                  </div>
                  <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 border border-indigo-700/50 px-2 py-0.5 rounded">
                    Auto-Rank
                  </span>
                </div>

                <div className="flex gap-2 text-[10px] text-slate-400 mb-3">
                  <span className="bg-slate-800 px-2 py-0.5 rounded text-white font-mono">Inbox: 3</span>
                  <span className="bg-slate-800 px-2 py-0.5 rounded text-white font-mono">Today: 8</span>
                </div>

                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-slate-200">Fitts’ Law Heuristic Review</span>
                      <span className="text-[9px] px-1.5 py-0.2 bg-rose-500/20 text-rose-300 rounded font-bold">Urgent</span>
                    </div>
                    <div className="text-[10px] text-slate-400">#HCI - Project • Due 4:00 PM</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-slate-200">Dynamic Programming Trees</span>
                      <span className="text-[9px] px-1.5 py-0.2 bg-amber-500/20 text-amber-300 rounded font-bold">High</span>
                    </div>
                    <div className="text-[10px] text-slate-400">#Algo: L.11m - Prep</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-slate-200">Literature Review: JUW HCI Lab</span>
                      <span className="text-[9px] px-1.5 py-0.2 bg-indigo-500/20 text-indigo-300 rounded font-bold">Normal</span>
                    </div>
                    <div className="text-[10px] text-slate-400">#Thesis - Paper • Tomorrow</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between text-[10px] text-slate-400">
                <span>Auto-rescheduling on</span>
                <span className="text-emerald-400">All caught up</span>
              </div>
            </div>

            {/* Panel 2: AI Note Synthesis (5 Cols) */}
            <div className="lg:col-span-5 bg-[#131926] border border-slate-800/80 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-purple-400" />
                    <span className="font-bold text-white text-xs">AI Note Synthesis</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                    Confidence: 96.4%
                  </span>
                </div>

                <div className="bg-slate-900/90 rounded-lg p-3 border border-slate-800 text-xs space-y-2.5">
                  <div>
                    <h5 className="font-bold text-purple-300 text-xs">Lecture 14: Cognitive Load & Fitts’ Law Summary</h5>
                    <span className="text-[10px] text-slate-400">Synthesized from 18-minute audio recording</span>
                  </div>

                  <div className="text-[11px] text-slate-300 space-y-1.5 font-mono">
                    <p className="bg-slate-950 p-2 rounded border border-slate-800/80">
                      <strong>Index of Difficulty (ID):</strong> Proportional to log2(2D/W). Pin key submit targets to prominent edges.
                    </p>
                    <p className="bg-slate-950 p-2 rounded border border-slate-800/80">
                      <strong>Extraneous Load:</strong> Drop decorative micro-borders to conserve visual attention buffers.
                    </p>
                  </div>

                  <div className="pt-1">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Generated Actions:</span>
                    <span className="text-[11px] text-slate-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Refactor submit button sizes for accessibility standard (min 48px).
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between text-[10px] text-slate-400">
                <span>Condensed from 3,240 words</span>
                <span className="text-indigo-400 hover:underline cursor-pointer">Export to Notion ↗</span>
              </div>
            </div>

            {/* Panel 3: Focus Metrics (3 Cols) */}
            <div className="lg:col-span-3 bg-[#131926] border border-slate-800/80 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <PieChart className="w-4 h-4 text-emerald-400" />
                    <span className="font-bold text-white text-xs">Focus Metrics</span>
                  </div>
                  <span className="text-[10px] text-slate-400">This Week</span>
                </div>

                {/* Circular Gauge */}
                <div className="py-2 text-center">
                  <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-indigo-500"
                        strokeDasharray="87, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-base font-bold text-white font-mono">87%</span>
                      <span className="text-[9px] text-slate-400">Focus Ratio</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-2 font-mono">
                    Peak state: 09:30 AM – 12:45 PM
                  </span>
                </div>

                <div className="bg-slate-900 rounded-lg p-2.5 border border-slate-800 text-[10px] text-slate-400 space-y-1">
                  <strong className="text-slate-200 block font-semibold">Cognitive Insight:</strong>
                  <span>You achieve <strong className="text-emerald-400">34% higher retention</strong> during morning sessions. Automated quiet hours recommended.</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between text-[10px] text-slate-400">
                <span className="text-emerald-400">● Focus Shield Active</span>
                <span>2h 15m left</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Capabilities Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-800/80">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 block mb-1">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Everything You Need to Do Your Best Work
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Designed to minimize cognitive friction and amplify focus for modern students, researchers, and early-career operators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#101522] rounded-2xl p-6 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-2">Smart Task Planning</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automatically organize complex coursework by priority, deadlines, and personal cognitive rhythms. Say goodbye to paralyzing backlog syndrome.
            </p>
            <div className="mt-6 pt-3 border-t border-slate-800/60 text-[11px] text-indigo-400 flex items-center gap-1">
              <span>Auto-scheduled before 5 PM</span>
            </div>
          </div>

          <div className="bg-[#101522] rounded-2xl p-6 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-2">AI Notes & Summaries</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Turn multi-page lecture notes, academic PDFs, and audio recordings into crystal-clear synthesis cards with zero manual formatting overhead.
            </p>
            <div className="mt-6 pt-3 border-t border-slate-800/60 text-[11px] text-purple-400 flex items-center gap-1">
              <span>3-page PDF condensed to 4 takeaways</span>
            </div>
          </div>

          <div className="bg-[#101522] rounded-2xl p-6 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center mb-4">
              <PieChart className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-2">Focus Insights</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Understand your distinct personal productivity patterns, identify mental energy drains, and align your most demanding tasks to peak focus hours.
            </p>
            <div className="mt-6 pt-3 border-t border-slate-800/60 text-[11px] text-pink-400 flex items-center gap-1">
              <span>Distraction score reduced by 42%</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. 3-Step Workflow Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-800/80">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 block mb-1">
            Simple 3-Step Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            From Chaos to Clarity in Minutes
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            A frictionless flow designed through rigorous Human–Computer Interaction principles to eliminate mental friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#101522] rounded-2xl p-6 border border-slate-800/80">
            <span className="font-mono text-sm font-bold text-indigo-400 mb-3 block">01</span>
            <h3 className="font-bold text-white text-sm mb-1.5">Add Your Tasks</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bring your coursework, lecture recordings, assignments, and spontaneous ideas into one unified workspace via voice, text, or calendar sync.
            </p>
            <div className="mt-5 pt-3 border-t border-slate-800/60 text-[10px] text-slate-500">
              Single-key capture enabled
            </div>
          </div>

          <div className="bg-[#101522] rounded-2xl p-6 border border-slate-800/80">
            <span className="font-mono text-sm font-bold text-purple-400 mb-3 block">02</span>
            <h3 className="font-bold text-white text-sm mb-1.5">Let AI Organize</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get clean executive summaries, prioritized timelines, and dynamic daily queues tailored seamlessly around your exam milestones.
            </p>
            <div className="mt-5 pt-3 border-t border-slate-800/60 text-[10px] text-slate-500">
              Real-time priority recalibration
            </div>
          </div>

          <div className="bg-[#101522] rounded-2xl p-6 border border-slate-800/80">
            <span className="font-mono text-sm font-bold text-pink-400 mb-3 block">03</span>
            <h3 className="font-bold text-white text-sm mb-1.5">Make Progress</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Execute your daily workload with unwavering calm. Deep focus mode silences unnecessary notifications so you finish work earlier.
            </p>
            <div className="mt-5 pt-3 border-t border-slate-800/60 text-[10px] text-slate-500">
              Ready for review submissions
            </div>
          </div>
        </div>
      </div>

      {/* 6. Testimonial */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-center">
        <div className="p-8 rounded-3xl bg-[#0f1422] border border-slate-800 space-y-4">
          <div className="text-4xl text-indigo-400 font-serif leading-none">“</div>
          <p className="text-base sm:text-lg text-slate-200 font-medium italic leading-relaxed">
            NOVA helps me turn a chaotic to-do list into a plan I can actually follow.
          </p>
          <div className="flex justify-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <div>
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center mx-auto mb-1.5">
              AK
            </div>
            <strong className="text-white block text-xs">Ayesha K.</strong>
            <span className="text-[11px] text-slate-400">University Student • CS & Software Engineering, JUW</span>
            <span className="text-[10px] text-slate-500 block">Daily UI Challenge Student Feedback</span>
          </div>
        </div>
      </div>

      {/* 7. Bottom CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#131929] to-[#0c101a] border border-slate-800 shadow-2xl space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Make Space for Your Best Ideas.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
            Start building a more organized and focused workday with NOVA AI today. Designed for mindful pacing and cognitive ease.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-3">
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter university email..."
              className="flex-1 text-xs px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
              required
            />
            <button
              type="submit"
              className="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5"
            >
              <span>{subscribed ? 'Invite Sent!' : 'Get Started'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] text-slate-500 pt-2">
            <span>Free for students with .edu / academic email</span>
            <span>•</span>
            <span>Instant setup</span>
            <span>•</span>
            <span>No-spam guarantee</span>
          </div>
        </div>
      </div>

      {/* 8. Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-[11px] text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">NOVA AI</span>
            <span>•</span>
            <span>© 2025 NOVA AI Inc. HCI Design Challenge Portfolio — Dept. of CS & SE, Jinnah University for Women</span>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
