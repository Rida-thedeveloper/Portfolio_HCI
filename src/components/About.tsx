import React from 'react';
import { GraduationCap, BookOpen, Award, Sparkles } from 'lucide-react';
import { ACADEMIC_PROFILE } from '../data/challengesData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#faf9f7] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Student Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
              Background
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              A little about me.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                I'm <strong className="font-semibold text-slate-900">{ACADEMIC_PROFILE.name}</strong>, a Software Engineering undergraduate at <strong className="font-semibold text-slate-900">{ACADEMIC_PROFILE.university}</strong>. My academic journey is centered around crafting software that is not only robust and scalable under the hood, but empathetic, intuitive, and delight-driven on the surface.
              </p>
              <p>
                This portfolio represents my design challenge collection for the <strong className="font-semibold text-slate-900">{ACADEMIC_PROFILE.course}</strong> course. Through seven consecutive Daily UI prompts, I explored how cognitive load, visual balance, typography, and feedback states intersect to create frictionless interfaces.
              </p>
              <p>
                Each challenge tackles a distinct practical problem—from student volunteer onboarding to precision budgeting calculators and scalable app icon semiotics.
              </p>
            </div>

            {/* Academic Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-2xs flex items-start gap-3">
                <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Degree Program</h4>
                  <p className="text-xs text-slate-500 mt-0.5">B.S. Software Engineering</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-2xs flex items-start gap-3">
                <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Focus Course</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Human–Computer Interaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Profile Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                    Academic Profile
                  </span>
                  <h3 className="text-lg font-bold text-slate-950">Student Record</h3>
                </div>
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {ACADEMIC_PROFILE.badgeYear}
                </span>
              </div>

              {/* Data Rows */}
              <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                <div className="py-3 flex justify-between items-center">
                  <span className="text-slate-500 text-xs font-medium">Student Name</span>
                  <strong className="text-slate-900 font-bold">{ACADEMIC_PROFILE.name}</strong>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <span className="text-slate-500 text-xs font-medium">Discipline</span>
                  <span className="font-semibold text-slate-800">{ACADEMIC_PROFILE.field}</span>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <span className="text-slate-500 text-xs font-medium">Institution</span>
                  <strong className="text-slate-900 font-bold">{ACADEMIC_PROFILE.university}</strong>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <span className="text-slate-500 text-xs font-medium">Department</span>
                  <span className="font-semibold text-slate-800 text-right">{ACADEMIC_PROFILE.department}</span>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <span className="text-slate-500 text-xs font-medium">Course</span>
                  <strong className="text-indigo-900 font-bold">{ACADEMIC_PROFILE.course}</strong>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <span className="text-slate-500 text-xs font-medium">Portfolio Scope</span>
                  <span className="font-medium text-slate-700">7 Daily UI Challenges</span>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <span className="text-slate-500 text-xs font-medium">Focus Area</span>
                  <span className="font-medium text-slate-700">{ACADEMIC_PROFILE.currentFocus}</span>
                </div>
              </div>

              {/* Verification Badge */}
              <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Jinnah University for Women</div>
                  <div className="text-[11px] text-slate-500">Department of Computer Science & Software Engineering</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
