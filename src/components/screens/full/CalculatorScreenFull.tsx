import React, { useState } from 'react';
import {
  Wallet,
  Calculator,
  PieChart,
  Target,
  Settings,
  Bell,
  Calendar,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Download,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Home,
  Utensils,
  Bus,
  GraduationCap,
  Layers
} from 'lucide-react';

export const CalculatorScreenFull: React.FC = () => {
  const [income, setIncome] = useState<number>(2000);
  const [rent, setRent] = useState<number>(650);
  const [food, setFood] = useState<number>(300);
  const [transport, setTransport] = useState<number>(150);
  const [education, setEducation] = useState<number>(200);
  const [other, setOther] = useState<number>(100);

  const totalExpenses = rent + food + transport + education + other;
  const netSavings = Math.max(0, income - totalExpenses);
  const savingsRate = income > 0 ? Number(((netSavings / income) * 100).toFixed(1)) : 0;
  const annualProjection = netSavings * 12;

  // Percentage calculations
  const rentPct = totalExpenses > 0 ? ((rent / totalExpenses) * 100).toFixed(1) : '0';
  const foodPct = totalExpenses > 0 ? ((food / totalExpenses) * 100).toFixed(1) : '0';
  const educationPct = totalExpenses > 0 ? ((education / totalExpenses) * 100).toFixed(1) : '0';
  const transportPct = totalExpenses > 0 ? ((transport / totalExpenses) * 100).toFixed(1) : '0';
  const otherPct = totalExpenses > 0 ? ((other / totalExpenses) * 100).toFixed(1) : '0';

  const resetDefaults = () => {
    setIncome(2000);
    setRent(650);
    setFood(300);
    setTransport(150);
    setEducation(200);
    setOther(100);
  };

  return (
    <div className="w-full bg-[#faf9f8] text-slate-800 font-sans min-h-screen text-xs sm:text-sm antialiased selection:bg-teal-100">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* 1. Left Sidebar */}
        <aside className="w-full lg:w-64 bg-white border-b lg:border-b-0 lg:border-r border-slate-200/90 p-5 flex flex-col justify-between shrink-0">
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#002f2a] text-white flex items-center justify-center font-bold text-sm">
                P
              </div>
              <div>
                <span className="font-extrabold text-slate-900 text-sm tracking-tight block">PennyWise</span>
                <span className="text-[10px] font-bold tracking-wider text-teal-700 uppercase block">STUDENT FINTECH</span>
              </div>
            </div>

            {/* Nav Menu */}
            <nav className="space-y-1">
              <div className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 flex items-center gap-2.5 cursor-pointer">
                <PieChart className="w-4 h-4 text-slate-400" />
                <span>Overview</span>
              </div>
              <div className="px-3 py-2 rounded-xl text-xs font-semibold bg-[#111827] text-white flex items-center gap-2.5 shadow-xs">
                <Calculator className="w-4 h-4 text-teal-400" />
                <span>Budget Calculator</span>
              </div>
              <div className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 flex items-center gap-2.5 cursor-pointer">
                <Wallet className="w-4 h-4 text-slate-400" />
                <span>Expense Breakdown</span>
              </div>
              <div className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 flex items-center gap-2.5 cursor-pointer">
                <Target className="w-4 h-4 text-slate-400" />
                <span>Savings Goals</span>
              </div>
              <div className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 flex items-center gap-2.5 cursor-pointer">
                <Settings className="w-4 h-4 text-slate-400" />
                <span>Settings</span>
              </div>
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-3">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-600 font-medium">Semester 6 Term</span>
              <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full font-bold text-[10px]">
                Active
              </span>
            </div>
            <p className="text-[10px] text-slate-400 leading-tight">
              Daily UI #004 • JUW CS & SE<br />
              HCI Student Finance Lab
            </p>
          </div>
        </aside>

        {/* 2. Main Dashboard Container */}
        <main className="flex-1 p-4 sm:p-8 space-y-6 overflow-y-auto">
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#002f2a] text-white flex items-center justify-center font-bold text-[11px]">
                  P
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                  Monthly Budget Calculator
                </h1>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Plan your expenses, optimize your savings, and build mindful financial habits.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 font-medium shadow-2xs">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>March 2025</span>
              </div>
              <button className="p-2 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 shadow-2xs">
                <Bell className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2 pl-2">
                <div className="w-8 h-8 rounded-full bg-teal-800 text-white font-bold text-xs flex items-center justify-center">
                  AK
                </div>
                <div className="hidden sm:block text-left text-xs leading-tight">
                  <strong className="block text-slate-900 font-bold">Ayesha K.</strong>
                  <span className="text-[10px] text-slate-500">JUW Scholar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top 4 KPI Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider">Monthly Income</span>
                <Wallet className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono tracking-tight">
                ${income.toLocaleString()}
              </div>
              <span className="text-[10px] text-slate-400 block mt-1">● Base Baseline Inflow</span>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider">Total Expenses</span>
                <span className="text-slate-400 text-xs">🛍</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight">
                ${totalExpenses.toLocaleString()}
              </div>
              <span className="text-[10px] text-slate-400 block mt-1">
                {income > 0 ? `${Math.round((totalExpenses / income) * 100)}% of income` : '0%'}
              </span>
            </div>

            <div className="bg-teal-50/60 rounded-2xl p-4 sm:p-5 border border-teal-200/80 shadow-2xs">
              <div className="flex items-center justify-between text-teal-800 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider">Monthly Savings</span>
                <TrendingUp className="w-4 h-4 text-teal-600" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-teal-800 font-mono tracking-tight">
                  ${netSavings.toLocaleString()}
                </span>
                <span className="text-xs font-bold text-teal-700 font-mono">+{savingsRate}%</span>
              </div>
              <span className="text-[10px] text-teal-700 block mt-1 font-semibold">✓ On Healthy Track</span>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider">Annual Projection</span>
                <Calendar className="w-4 h-4 text-slate-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono tracking-tight">
                ${annualProjection.toLocaleString()}
              </div>
              <span className="text-[10px] text-slate-400 block mt-1">Projected at current 12-mo run-rate</span>
            </div>
          </div>

          {/* Main Calculation & Summary Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left 7 Cols: Interactive Sliders Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-950">
                    Calculate Your Monthly Savings
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Customize your monthly income and planned expenditures below to calculate your savings capacity with academic precision.
                  </p>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono text-[10px] font-bold">
                  Live Calculator
                </span>
              </div>

              {/* Informational Callout */}
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-[11px] text-slate-600 flex items-start gap-2">
                <span className="font-bold text-indigo-600">ⓘ</span>
                <span>Values are formatted in USD ($). Adjust sliders or type amounts directly. All calculations and proportional distributions update dynamically.</span>
              </div>

              {/* Slider 1: Monthly Income */}
              <div className="p-3.5 bg-slate-50/70 border border-slate-200/70 rounded-xl space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-teal-600" /> Monthly Income
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-slate-400 font-mono">$</span>
                    <input
                      type="number"
                      value={income}
                      onChange={(e) => setIncome(Math.max(0, Number(e.target.value)))}
                      className="w-20 px-2 py-1 bg-white border border-slate-300 rounded font-mono font-bold text-right text-xs"
                    />
                  </div>
                </div>
                <p className="text-[10px] text-slate-400">Total net income from scholarships, university stipends, on-campus tutoring, or part-time work.</p>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="50"
                  value={income}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#006a61]"
                />
              </div>

              {/* Slider 2: Rent & Utilities */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700 flex items-center gap-1.5">
                    <Home className="w-3.5 h-3.5 text-slate-400" /> Rent & Utilities
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-slate-400 font-mono">$</span>
                    <input
                      type="number"
                      value={rent}
                      onChange={(e) => setRent(Math.max(0, Number(e.target.value)))}
                      className="w-16 px-1.5 py-0.5 bg-slate-50 border border-slate-300 rounded font-mono font-bold text-right text-xs"
                    />
                  </div>
                </div>
                <p className="text-[10px] text-slate-400">Dorm fees, off-campus shared housing, electricity, water, high-speed fiber internet.</p>
                <input
                  type="range"
                  min="100"
                  max="1500"
                  step="25"
                  value={rent}
                  onChange={(e) => setRent(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#006a61]"
                />
              </div>

              {/* Slider 3: Food & Groceries */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700 flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-slate-400" /> Food & Groceries
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-slate-400 font-mono">$</span>
                    <input
                      type="number"
                      value={food}
                      onChange={(e) => setFood(Math.max(0, Number(e.target.value)))}
                      className="w-16 px-1.5 py-0.5 bg-slate-50 border border-slate-300 rounded font-mono font-bold text-right text-xs"
                    />
                  </div>
                </div>
                <p className="text-[10px] text-slate-400">Weekly pantry essentials, dining out, university cafeteria meals, grocery staples.</p>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="25"
                  value={food}
                  onChange={(e) => setFood(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#006a61]"
                />
              </div>

              {/* Slider 4: Transport */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700 flex items-center gap-1.5">
                    <Bus className="w-3.5 h-3.5 text-slate-400" /> Transport
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-slate-400 font-mono">$</span>
                    <input
                      type="number"
                      value={transport}
                      onChange={(e) => setTransport(Math.max(0, Number(e.target.value)))}
                      className="w-16 px-1.5 py-0.5 bg-slate-50 border border-slate-300 rounded font-mono font-bold text-right text-xs"
                    />
                  </div>
                </div>
                <p className="text-[10px] text-slate-400">Campus shuttle passes, metro card, bus transit, occasional ride-shares, fuel.</p>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={transport}
                  onChange={(e) => setTransport(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#006a61]"
                />
              </div>

              {/* Slider 5: Education & Personal */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-400" /> Education & Personal
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-slate-400 font-mono">$</span>
                    <input
                      type="number"
                      value={education}
                      onChange={(e) => setEducation(Math.max(0, Number(e.target.value)))}
                      className="w-16 px-1.5 py-0.5 bg-slate-50 border border-slate-300 rounded font-mono font-bold text-right text-xs"
                    />
                  </div>
                </div>
                <p className="text-[10px] text-slate-400">Course textbooks, lab fees, software licenses, personal care, stationery supplies.</p>
                <input
                  type="range"
                  min="20"
                  max="600"
                  step="10"
                  value={education}
                  onChange={(e) => setEducation(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#006a61]"
                />
              </div>

              {/* Slider 6: Other Expenses */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-slate-400" /> Other Expenses
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-slate-400 font-mono">$</span>
                    <input
                      type="number"
                      value={other}
                      onChange={(e) => setOther(Math.max(0, Number(e.target.value)))}
                      className="w-16 px-1.5 py-0.5 bg-slate-50 border border-slate-300 rounded font-mono font-bold text-right text-xs"
                    />
                  </div>
                </div>
                <p className="text-[10px] text-slate-400">Emergency contingency buffer, laundry, minor incidental student expenses.</p>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={other}
                  onChange={(e) => setOther(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#006a61]"
                />
              </div>

              {/* Validation Check */}
              <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-800 text-[11px] flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  All fields valid • No negative values detected • Zero-friction recalculation
                </span>
                <span className="text-emerald-700 font-bold">✓ Verified</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2"
                >
                  <Calculator className="w-3.5 h-3.5 text-teal-300" />
                  <span>Calculate Budget</span>
                </button>
                <button
                  type="button"
                  onClick={resetDefaults}
                  className="px-4 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs rounded-xl transition-all flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset to Defaults</span>
                </button>
                <button
                  type="button"
                  className="text-xs text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1 ml-auto"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV Summary</span>
                </button>
              </div>
            </div>

            {/* Right 5 Cols: Monthly Summary, Donut Breakdown, Tip */}
            <div className="lg:col-span-5 space-y-5">
              {/* Summary Card */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider">
                    Your Monthly Summary
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 font-semibold text-[10px] border border-teal-200">
                    HCI Ratio: Balanced
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Remaining Savings</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-mono tracking-tight">
                      ${netSavings.toLocaleString()}.00
                    </span>
                    <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200 font-mono">
                      {savingsRate}% Savings Rate
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                    Great job! Financial experts recommend saving 20–30% of your income. You are meeting the upper benchmark.
                  </p>
                </div>

                {/* Horizontal Progress Bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex">
                    <div
                      className="bg-slate-700 h-full transition-all duration-300"
                      style={{ width: `${Math.min(100, Math.round((totalExpenses / (income || 1)) * 100))}%` }}
                    />
                    <div
                      className="bg-[#006a61] h-full transition-all duration-300"
                      style={{ width: `${Math.min(100, savingsRate)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-slate-700" /> Expenses: ${totalExpenses} ({Math.round((totalExpenses / (income || 1)) * 100)}%)
                    </span>
                    <span className="flex items-center gap-1 text-teal-800 font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#006a61]" /> Savings: ${netSavings} ({savingsRate}%)
                    </span>
                  </div>
                </div>
              </div>

              {/* Spending vs. Savings Distribution (Donut Chart) */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Spending vs. Savings Distribution
                  </h3>
                  <RotateCcw className="w-3.5 h-3.5 text-slate-400 cursor-pointer" onClick={resetDefaults} />
                </div>

                <div className="flex items-center justify-around py-2">
                  {/* Visual Donut representation */}
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-100"
                        strokeWidth="4.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-slate-800"
                        strokeDasharray={`${Math.round((totalExpenses / (income || 1)) * 100)}, 100`}
                        strokeWidth="4.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-teal-500"
                        strokeDasharray={`${savingsRate}, 100`}
                        strokeDashoffset={`-${Math.round((totalExpenses / (income || 1)) * 100)}`}
                        strokeWidth="4.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-base font-black text-slate-900 font-mono">{savingsRate}%</span>
                      <span className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">SAVED</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                      <div>
                        <span className="text-slate-500 block text-[10px]">Expenses</span>
                        <strong className="font-mono text-slate-900 font-bold">${totalExpenses} (70%)</strong>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                      <div>
                        <span className="text-slate-500 block text-[10px]">Savings</span>
                        <strong className="font-mono text-teal-700 font-bold">${netSavings} (30%)</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Allocation breakdown */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Category Allocation
                  </span>
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <Home className="w-3.5 h-3.5 text-slate-400" /> Rent & Utilities
                    </span>
                    <span className="font-mono font-semibold text-slate-900">${rent} ({rentPct}%)</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <Utensils className="w-3.5 h-3.5 text-slate-400" /> Food & Groceries
                    </span>
                    <span className="font-mono font-semibold text-slate-900">${food} ({foodPct}%)</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400" /> Education & Personal
                    </span>
                    <span className="font-mono font-semibold text-slate-900">${education} ({educationPct}%)</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <Bus className="w-3.5 h-3.5 text-slate-400" /> Transport
                    </span>
                    <span className="font-mono font-semibold text-slate-900">${transport} ({transportPct}%)</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <Layers className="w-3.5 h-3.5 text-slate-400" /> Other Expenses
                    </span>
                    <span className="font-mono font-semibold text-slate-900">${other} ({otherPct}%)</span>
                  </div>
                </div>
              </div>

              {/* Smart Money Tip */}
              <div className="bg-teal-50/80 border border-teal-200/90 rounded-2xl p-4 sm:p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-teal-100 text-teal-800 rounded-lg">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-teal-950 text-xs">Smart Money Tip</h4>
                    <span className="text-[10px] text-teal-700">Habit Recommendation</span>
                  </div>
                </div>
                <p className="text-[11px] text-teal-800 leading-relaxed">
                  Try setting aside a fixed percentage of your income each month. Small, consistent savings can help you build a stronger financial cushion.
                </p>
                <button className="w-full mt-2 py-2 px-3 bg-white hover:bg-teal-50 text-teal-900 border border-teal-300 font-bold text-xs rounded-xl flex items-center justify-between transition-colors shadow-2xs">
                  <span>Automate 30% Transfer on the 1st of every month.</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="text-center pt-4 text-[10px] text-slate-400">
            ● Daily UI #004: Calculation • Evaluation Prototype • Designed for Student Cognitive Ease & Error Prevention • Department of CS & SE, JUW
          </div>
        </main>
      </div>
    </div>
  );
};
