import React, { useState } from 'react';
import { CheckCircle2, HeartHandshake, ShieldCheck, UserCheck, Sparkles } from 'lucide-react';

interface SignUpScreenProps {
  interactive?: boolean;
}

export const SignUpScreen: React.FC<SignUpScreenProps> = ({ interactive = false }) => {
  const [fullName, setFullName] = useState('Ayesha Khan');
  const [studentId, setStudentId] = useState('JUW-2023-CS-041');
  const [department, setDepartment] = useState('Software Engineering');
  const [selectedCommitment, setSelectedCommitment] = useState('4 hrs/week');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full h-full bg-[#fcfbf9] text-slate-800 rounded-xl overflow-hidden border border-slate-200/90 shadow-sm flex flex-col font-sans select-none">
      {/* Top Simulated App Header */}
      <div className="bg-white border-b border-slate-200 px-4 py-2.5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 font-bold tracking-tight text-slate-900">
          <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">
            J
          </div>
          <span>JUW IMPACT</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-500">
          <span className="hidden sm:inline">Fall 2025 Drive</span>
          <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Open Registration
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        {submitted ? (
          <div className="my-auto py-8 text-center animate-in fade-in duration-300">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Welcome to JUW Impact, {fullName}!</h4>
            <p className="text-xs text-slate-600 max-w-xs mx-auto mt-1">
              Your volunteer profile for <span className="font-semibold text-slate-800">{department}</span> is confirmed. A welcome packet was sent to your student portal.
            </p>
            {interactive && (
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                Reset Registration Form
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {/* Header banner */}
            <div className="border-b border-slate-200/80 pb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Student Volunteer Registration</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                Make a Difference. Start Here.
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Join our university student-led community support, peer mentorship, and STEM workshop outreach.
              </p>
            </div>

            {/* Simulated Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    disabled={!interactive}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rida Fatima"
                    className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-slate-900 transition-all font-medium"
                    required
                  />
                  <div className="absolute right-2.5 top-2.5 text-emerald-600">
                    <UserCheck className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Student Roll ID <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    disabled={!interactive}
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    placeholder="JUW-2023-CS-000"
                    className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-slate-900 font-mono text-[11px]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Department
                  </label>
                  <select
                    disabled={!interactive}
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-slate-900"
                  >
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Biotechnology">Biotechnology</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Weekly Commitment
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['2 hrs/week', '4 hrs/week', '6+ hrs/week'].map((hrs) => (
                    <button
                      type="button"
                      key={hrs}
                      disabled={!interactive}
                      onClick={() => setSelectedCommitment(hrs)}
                      className={`text-[11px] py-1.5 px-2 rounded-lg border text-center transition-all font-medium ${
                        selectedCommitment === hrs
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {hrs}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={!interactive}
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-all"
                >
                  <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Join Community Initiative</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Footer HCI Note */}
        <div className="mt-3 pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-slate-400" />
            WCAG 2.1 AAA Contrast Verified
          </span>
          <span className="font-mono text-[9px] text-slate-400">#001 FORM USABILITY</span>
        </div>
      </div>
    </div>
  );
};
