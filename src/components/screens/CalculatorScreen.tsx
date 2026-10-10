import React, { useState } from 'react';
import { DollarSign, PieChart, TrendingUp, Sparkles, ArrowUpRight, ShieldCheck, Wallet } from 'lucide-react';

interface CalculatorScreenProps {
  interactive?: boolean;
}

export const CalculatorScreen: React.FC<CalculatorScreenProps> = ({ interactive = true }) => {
  const [income, setIncome] = useState<number>(2000);
  const [rent, setRent] = useState<number>(600);
  const [food, setFood] = useState<number>(400);
  const [transport, setTransport] = useState<number>(200);
  const [supplies, setSupplies] = useState<number>(200);

  const totalExpenses = rent + food + transport + supplies;
  const netSavings = Math.max(0, income - totalExpenses);
  const savingsRate = income > 0 ? Math.round((netSavings / income) * 100) : 0;

  // Percentage calculations for breakdown
  const rentPct = totalExpenses > 0 ? Math.round((rent / totalExpenses) * 100) : 0;
  const foodPct = totalExpenses > 0 ? Math.round((food / totalExpenses) * 100) : 0;
  const transportPct = totalExpenses > 0 ? Math.round((transport / totalExpenses) * 100) : 0;
  const suppliesPct = totalExpenses > 0 ? Math.max(0, 100 - rentPct - foodPct - transportPct) : 0;

  return (
    <div className="w-full h-full bg-[#fcfbf9] text-slate-800 rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col font-sans select-none">
      {/* App Header */}
      <div className="bg-white border-b border-slate-200/90 px-4 py-2.5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-[#006a61] text-white flex items-center justify-center font-bold text-[10px]">
            P
          </div>
          <span className="font-bold tracking-tight text-slate-900 text-xs">PennyWise</span>
          <span className="hidden sm:inline-block text-[11px] text-slate-400">· Monthly Budget Calculator</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
            {savingsRate}% Target Met
          </span>
        </div>
      </div>

      {/* Main calculation space */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        {/* KPI Strip */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
          <div className="bg-white border border-slate-200/80 rounded-xl p-2.5 shadow-xs">
            <span className="text-[10px] font-semibold text-slate-500 block uppercase tracking-wider">Income</span>
            <span className="text-sm sm:text-base font-bold text-slate-900 font-mono tabular-nums">
              ${income.toLocaleString()}
            </span>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-xl p-2.5 shadow-xs">
            <span className="text-[10px] font-semibold text-slate-500 block uppercase tracking-wider">Expenses</span>
            <span className="text-sm sm:text-base font-bold text-slate-700 font-mono tabular-nums">
              ${totalExpenses.toLocaleString()}
            </span>
          </div>
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-2.5 shadow-xs">
            <span className="text-[10px] font-semibold text-emerald-700 block uppercase tracking-wider">Savings</span>
            <span className="text-sm sm:text-base font-bold text-emerald-700 font-mono tabular-nums">
              ${netSavings.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Sliders Grid & Visual Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Sliders (Left 7 cols) */}
          <div className="md:col-span-7 space-y-2.5 bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs">
            <div className="text-[11px] font-bold text-slate-700 flex justify-between items-center mb-1">
              <span>Adjust Monthly Spending</span>
              <span className="text-[10px] font-normal text-slate-400">Interactive Model</span>
            </div>

            {/* Slider 1: Rent */}
            <div>
              <div className="flex justify-between text-[11px] text-slate-600 font-medium mb-1">
                <span>Rent & Utilities</span>
                <span className="font-mono font-semibold text-slate-900 tabular-nums">${rent}</span>
              </div>
              <input
                type="range"
                min="200"
                max="1200"
                step="25"
                disabled={!interactive}
                value={rent}
                onChange={(e) => setRent(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#006a61]"
              />
            </div>

            {/* Slider 2: Food */}
            <div>
              <div className="flex justify-between text-[11px] text-slate-600 font-medium mb-1">
                <span>Food & Groceries</span>
                <span className="font-mono font-semibold text-slate-900 tabular-nums">${food}</span>
              </div>
              <input
                type="range"
                min="150"
                max="800"
                step="25"
                disabled={!interactive}
                value={food}
                onChange={(e) => setFood(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#006a61]"
              />
            </div>

            {/* Slider 3: Transport */}
            <div>
              <div className="flex justify-between text-[11px] text-slate-600 font-medium mb-1">
                <span>Campus Transport</span>
                <span className="font-mono font-semibold text-slate-900 tabular-nums">${transport}</span>
              </div>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                disabled={!interactive}
                value={transport}
                onChange={(e) => setTransport(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#006a61]"
              />
            </div>

            {/* Slider 4: Supplies */}
            <div>
              <div className="flex justify-between text-[11px] text-slate-600 font-medium mb-1">
                <span>Tech & Supplies</span>
                <span className="font-mono font-semibold text-slate-900 tabular-nums">${supplies}</span>
              </div>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                disabled={!interactive}
                value={supplies}
                onChange={(e) => setSupplies(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#006a61]"
              />
            </div>
          </div>

          {/* Visual Doughnut Breakdown (Right 5 cols) */}
          <div className="md:col-span-5 bg-white p-3 rounded-xl border border-slate-200/70 shadow-xs flex flex-col items-center justify-center text-center">
            {/* Visual Doughnut Representation */}
            <div className="relative w-24 h-24 my-1 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                {/* Background Ring */}
                <path
                  className="text-slate-100"
                  strokeWidth="4"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                {/* Rent slice */}
                <path
                  className="text-[#006a61]"
                  strokeDasharray={`${rentPct}, 100`}
                  strokeWidth="4"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                {/* Food slice */}
                <path
                  className="text-teal-500"
                  strokeDasharray={`${foodPct}, 100`}
                  strokeDashoffset={`-${rentPct}`}
                  strokeWidth="4"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                {/* Transport slice */}
                <path
                  className="text-indigo-400"
                  strokeDasharray={`${transportPct}, 100`}
                  strokeDashoffset={`-${rentPct + foodPct}`}
                  strokeWidth="4"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-[10px] text-slate-400 font-medium">Savings</span>
                <span className="text-sm font-bold text-slate-900 font-mono">{savingsRate}%</span>
              </div>
            </div>

            {/* Tiny Legend */}
            <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[9px] text-slate-600 font-medium mt-1 w-full text-left">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#006a61]"></span> Rent ({rentPct}%)
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span> Food ({foodPct}%)
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span> Trans ({transportPct}%)
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-slate-300"></span> Other ({suppliesPct}%)
              </span>
            </div>
          </div>
        </div>

        {/* Smart Money Tip Callout */}
        <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-2.5 text-xs flex items-start gap-2">
          <div className="p-1 bg-emerald-100 text-emerald-700 rounded-md shrink-0 mt-0.5">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-bold text-emerald-950 text-[11px] block">Smart Budget Analysis</span>
            <p className="text-[11px] text-emerald-800 leading-relaxed mt-0.5">
              Saving <span className="font-semibold font-mono">${netSavings}</span> ({savingsRate}% of income) satisfies the student buffer heuristic. 
              {savingsRate >= 20 ? ' Excellent resilience for unexpected campus expenses.' : ' Try reducing dining expenses to build your buffer.'}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-500">
          <span className="flex items-center gap-1 font-medium">
            <ShieldCheck className="w-3 h-3 text-[#006a61]" />
            Nielsen Heuristic: Instant Visual Feedback
          </span>
          <span className="font-mono text-[9px] text-slate-400">#004 FINANCIAL MODEL</span>
        </div>
      </div>
    </div>
  );
};
