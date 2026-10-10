import React, { useState } from 'react';
import {
  CheckCircle2,
  ShieldCheck,
  UserCheck,
  Award,
  Calendar,
  Code2,
  HeartHandshake,
  Star,
  Users,
  Eye,
  EyeOff,
  ArrowRight,
  ExternalLink,
  GraduationCap
} from 'lucide-react';

export const SignUpScreenFull: React.FC = () => {
  const [fullName, setFullName] = useState('Fatima Zahra');
  const [email, setEmail] = useState('fatima.zahra@juw.edu.pk');
  const [rollNo, setRollNo] = useState('2021/SE/BSCS-042');
  const [department, setDepartment] = useState('Software Engineering');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Coding & STEM Mentorship']);
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('••••••••••••');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#faf9f8] text-slate-800 font-sans min-h-screen text-xs sm:text-sm antialiased selection:bg-indigo-100">
      {/* 1. Global Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 px-4 sm:px-8 py-3.5 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs tracking-tight shadow-2xs">
            JUW
          </div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-900 text-sm tracking-tight">JUW Impact</span>
            <span className="hidden sm:inline-block text-[11px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full">
              Dept. of CS & SE Volunteer Initiative
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
          <span className="text-slate-900">Home</span>
          <span className="hover:text-slate-900 cursor-pointer">Initiatives & Drives</span>
          <span className="hover:text-slate-900 cursor-pointer">Student Stories</span>
        </div>

        <div className="flex items-center gap-2.5">
          <button className="px-3 py-1.5 text-xs font-semibold text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            Sign In
          </button>
          <button className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-2xs">
            Apply to Volunteer
          </button>
          <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-[11px]">
            FZ
          </div>
        </div>
      </nav>

      {/* 2. Sub-Header Metadata Banner */}
      <div className="bg-slate-100/70 border-b border-slate-200 px-4 sm:px-8 py-2 flex flex-wrap items-center justify-between text-[11px] text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-600" />
          <span className="font-semibold text-slate-800">Daily UI #001 • Sign Up</span>
          <span>/</span>
          <span>JUW Civic Engagement Platform</span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>HCI Usability Standard • WCAG 2.1 AAA Verified</span>
        </div>
      </div>

      {/* 3. Main Split Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[11px] font-semibold mb-3">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Jinnah University for Women • Dept. of CS & SE</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Make a Difference .<br />
                <span className="text-[#4338ca]">Start Here.</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                Join fellow undergraduate scholars in translating campus learning into civic action. Lead digital empowerment clinics, STEM mentorship for girls’ secondary schools, and verified community welfare drives across Karachi.
              </p>
            </div>

            {/* Photo Card with Volunteer Badge */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-gradient-to-tr from-slate-800 to-indigo-950 text-white min-h-[190px] flex flex-col justify-end p-4">
              <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, #4f46e5 0%, #0f172a 100%)` }} />
              <div className="relative z-10 bg-white/95 backdrop-blur-md text-slate-900 rounded-xl p-3 border border-white/60 shadow-md flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 text-xs block">1,240+ Active Volunteers</span>
                    <span className="text-[10px] text-slate-500">Across 18 civic partner organizations</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Fall 2024 Drive
                </span>
              </div>
            </div>

            {/* Why Register with JUW Impact? */}
            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 text-sm">Why Register with JUW Impact?</h3>

              <div className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-2xs flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">Skill & Leadership Accreditation</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                    Earn verified academic certificates co-signed by university faculty and industry partners.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-2xs flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700 shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">Tech for Community Clinics</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                    Teach coding basics, cybersecurity safety, and computational problem-solving in underserved schools.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-2xs flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700 shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">Curricular Schedule Compatibility</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                    Self-select weekend shifts and flexible sprint drives that align seamlessly with midterm exam periods.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/90 space-y-2.5">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-700 italic leading-relaxed">
                “Volunteering through JUW Impact transformed my degree. Building digital literacy toolkits for girls gave our capstone real purpose, and my logged hours directly boosted my final-year portfolio.”
              </p>
              <div className="flex items-center gap-2 pt-1 border-t border-slate-200/60">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-[10px] flex items-center justify-center">
                  AR
                </div>
                <div className="text-[11px]">
                  <strong className="text-slate-900 block font-semibold leading-tight">Ayesha Rehman</strong>
                  <span className="text-slate-500 text-[10px]">BS Software Engineering • Cohort 2021-2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full Student Volunteer Registration Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
              {/* Form Title & Intake Status */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    Student Volunteer Registration
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Create your verified student volunteer profile with JUW academic credentials.
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  ● Fall 2024 Intake Open
                </span>
              </div>

              {/* Progress Indicator */}
              <div className="my-5">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-1.5">
                  <span className="text-indigo-700">Step 1: Academic Identity</span>
                  <span>Step 1 of 3</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden flex gap-1">
                  <div className="h-full w-1/3 bg-indigo-600 rounded-full" />
                  <div className="h-full w-1/3 bg-slate-200 rounded-full" />
                  <div className="h-full w-1/3 bg-slate-200 rounded-full" />
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Registration Confirmed!</h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Welcome aboard, {fullName}! Your verification packet has been dispatched to {email}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800"
                  >
                    Modify Registration
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Field: Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Fatima Zahra"
                        className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-medium"
                        required
                      />
                      <div className="absolute right-3 top-3 text-slate-400">
                        <UserCheck className="w-4 h-4" />
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 block">
                      Enter your legal name as recorded in the JUW Academic Registrar system.
                    </span>
                  </div>

                  {/* Field: University Email Address */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-bold text-slate-700">
                        University Email Address <span className="text-rose-500">*</span>
                      </label>
                      <span className="text-[10px] font-semibold text-indigo-600">Institutional Domain Required</span>
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="yourname@juw.edu.pk"
                      className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-mono"
                      required
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block">
                      Must be an active student account ending with @juw.edu.pk for automatic verification.
                    </span>
                  </div>

                  {/* Grid: Student ID & Department */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Student ID / Roll No. <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={rollNo}
                        onChange={(e) => setRollNo(e.target.value)}
                        placeholder="E.G. 2021/SE/BSCS-042"
                        className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-mono"
                        required
                      />
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        Format: Year/Department/Roll
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Department Program <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-medium"
                      >
                        <option value="Software Engineering">Software Engineering</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Biotechnology">Biotechnology</option>
                      </select>
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        Select your current degree enrollment track.
                      </span>
                    </div>
                  </div>

                  {/* Primary Volunteer Interest */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Primary Volunteer Interest <span className="text-slate-400 font-normal">(Pick 1 or more)</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        'Coding & STEM Mentorship',
                        'Community Outreach',
                        'Creative Media & Design',
                        'Campus Welfare & Health',
                      ].map((item) => {
                        const isSelected = selectedInterests.includes(item);
                        return (
                          <button
                            type="button"
                            key={item}
                            onClick={() => toggleInterest(item)}
                            className={`p-2.5 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-all ${
                              isSelected
                                ? 'bg-indigo-50/80 border-indigo-600 text-indigo-900 font-bold'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <span>{item}</span>
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Password & Confirm */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="text-xs font-bold text-slate-700">
                          Password <span className="text-rose-500">*</span>
                        </label>
                        <span className="text-[10px] text-emerald-600 font-semibold">Strong: 8+ characters</span>
                      </div>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-mono"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      <div className="w-full h-1 bg-slate-100 rounded-full mt-1.5 overflow-hidden flex gap-1">
                        <div className="h-full w-1/3 bg-emerald-500 rounded-full" />
                        <div className="h-full w-1/3 bg-emerald-500 rounded-full" />
                        <div className="h-full w-1/3 bg-emerald-400 rounded-full" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Confirm Password <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-mono"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Agreement Checkbox */}
                  <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-[11px] text-slate-600 leading-relaxed">
                      I agree to the <span className="text-indigo-600 underline font-medium">JUW Volunteer Code of Conduct</span>, student integrity policy, and consent to semester activity tracking for academic transcript credit.
                    </span>
                  </label>

                  {/* Primary Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <span>Create Student Volunteer Profile</span>
                    <ArrowRight className="w-4 h-4 text-indigo-300" />
                  </button>

                  {/* Existing Account Link */}
                  <div className="text-center pt-1 text-xs text-slate-500">
                    Already registered in the JUW Volunteer Database?{' '}
                    <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
                      Sign In to Dashboard
                    </span>
                  </div>

                  {/* Privacy Footnote */}
                  <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl flex items-start gap-2 text-[10px] text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-700 block font-semibold">Institutional Privacy Protection</strong>
                      <span>
                        Your university credentials and participation logs are kept confidential under Jinnah University for Women Academic Data Protection Protocols. We never share student data externally.
                      </span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 4. Onboarding Workflow Section */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 block mb-1">
              Onboarding Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Your Volunteer Journey in 3 Simple Steps
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Transparent onboarding designed by the CS & SE department to get you verified and active without administrative delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs">
              <span className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 font-bold font-mono text-sm flex items-center justify-center mb-4">
                01
              </span>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Institutional Verification</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your @juw.edu.pk email and student roll number are authenticated against the CS & SE department roster within 24 hours.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Instant verification for active cohorts</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs">
              <span className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 font-bold font-mono text-sm flex items-center justify-center mb-4">
                02
              </span>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Drive & Clinic Matching</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Select drives based on your interests—whether that is running school robotics bootcamps, code clinics, or university charity galas.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] text-indigo-700 font-medium">
                <Award className="w-3.5 h-3.5" />
                <span>Customized based on your skills</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs">
              <span className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 font-bold font-mono text-sm flex items-center justify-center mb-4">
                03
              </span>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Verified Academic Hours</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Faculty mentors digitally sign off on your hours, automatically generating verifiable credentials for your graduate portfolio and LinkedIn.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Degree transcript recognition</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 flex flex-col md:flex-row items-start justify-between gap-6 text-xs text-slate-500">
          <div className="max-w-sm space-y-1">
            <strong className="text-slate-900 font-bold text-sm block">JUW Impact</strong>
            <p className="text-[11px] leading-relaxed">
              The civic engagement and volunteer mobilization platform for Jinnah University for Women. Connecting forward-thinking undergraduate scholars to verified community outreach.
            </p>
            <span className="text-[10px] text-slate-400 block pt-1">
              Department of Computer Science & Software Engineering (CS & SE) • HCI Portfolio Course Initiative
            </span>
          </div>

          <div className="flex gap-10 text-[11px]">
            <div>
              <span className="font-bold uppercase tracking-wider text-slate-900 block mb-2">Institutional Links</span>
              <div className="space-y-1 text-slate-600">
                <div className="hover:text-slate-900 cursor-pointer">Community Drives</div>
                <div className="hover:text-slate-900 cursor-pointer">Impact Testimonials</div>
                <div className="hover:text-slate-900 cursor-pointer">Student Onboarding</div>
                <div className="hover:text-slate-900 cursor-pointer">Hour Log Verification</div>
              </div>
            </div>

            <div>
              <span className="font-bold uppercase tracking-wider text-slate-900 block mb-2">Compliance & Ethics</span>
              <div className="space-y-1 text-slate-600">
                <div className="hover:text-slate-900 cursor-pointer">Institutional Privacy Policy</div>
                <div className="hover:text-slate-900 cursor-pointer">Accessibility Standards (WCAG 2.1)</div>
                <div className="hover:text-slate-900 cursor-pointer">Volunteer Code of Ethics</div>
                <div className="hover:text-slate-900 cursor-pointer">Faculty Supervisory Board</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-400">
          <span>© 2024 Jinnah University for Women. Department of Computer Science & Software Engineering. All rights reserved.</span>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <span>Student Privacy Statement</span>
            <span>Accessibility Commitment</span>
            <span>Terms of Participation</span>
          </div>
        </div>
      </div>
    </div>
  );
};
