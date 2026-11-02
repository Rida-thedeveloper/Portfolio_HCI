import React, { useState, useEffect } from 'react';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Bell,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  X,
  Play,
  RotateCw,
  Layers,
  Sparkles,
  ShieldCheck,
  UserPlus,
  UploadCloud,
  Crown,
  Volume2,
  VolumeX,
  Check,
  ArrowRight
} from 'lucide-react';

const HOTLINK_FLASH_MESSAGE_IMAGE =
  'https://lh3.googleusercontent.com/aida/AEtjO1XhCbs-ixsvBUd8ueUfp73LlvKpRHkzWvr_Q8IIKv2pWudza7PBE9dWcM2rcgn2qi34rMhz1R-_zxgnffmIPFqHi-c7d3OlaAd4qEWDRuv29JFq8xvyUFYiebwC09-bU7FjkuSczKVEN5YlzxI6YFG82Z46fCLX56FooxedZBskGe8bewYXoBswyXEq__ZHEU0bg5LfWi-czxerQS2VnzRpPo35K599-Hp9V24ITmmWfQ=s2560';

type ScenarioType = 'signup' | 'upload' | 'membership';
type AlertType = 'success' | 'error' | 'warning' | 'info';

interface FlashAlert {
  id: string;
  type: AlertType;
  title: string;
  message: string;
  actionText?: string;
  code?: string;
  timestamp: string;
}

export const FlashMessageScreenFull: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'image' | 'interactive'>('image');
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [imageError, setImageError] = useState<boolean>(false);

  // Prototype scenario state
  const [scenario, setScenario] = useState<ScenarioType>('signup');
  const [position, setPosition] = useState<'top' | 'floating' | 'bottom'>('top');
  const [autoDismiss, setAutoDismiss] = useState<boolean>(true);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(100);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Active flash message stack
  const [currentAlert, setCurrentAlert] = useState<FlashAlert | null>({
    id: '1',
    type: 'success',
    title: 'Verification Link Dispatched',
    message: 'We have dispatched an activation token to rida.fatima@juw.edu.pk. Please check your inbox.',
    actionText: 'Resend Email',
    code: 'AUTH-200',
    timestamp: 'Just now',
  });

  // Countdown timer for auto-dismiss
  useEffect(() => {
    if (!autoDismiss || !currentAlert || isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          setCurrentAlert(null);
          return 100;
        }
        return prev - 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [autoDismiss, currentAlert, isPaused]);

  const triggerAlert = (type: AlertType) => {
    setProgress(100);
    const dateStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (scenario === 'signup') {
      if (type === 'success') {
        setCurrentAlert({
          id: Date.now().toString(),
          type: 'success',
          title: 'Account Registered Successfully!',
          message: 'Welcome to Luma Academic Workspace. Your profile has been initialized with JUW credentials.',
          actionText: 'Go to Profile',
          code: 'AUTH-201-CREATED',
          timestamp: dateStr,
        });
      } else if (type === 'error') {
        setCurrentAlert({
          id: Date.now().toString(),
          type: 'error',
          title: 'Registration Blocked: Duplicate Email',
          message: 'The email address "rida.fatima@juw.edu.pk" is already bound to an active student seat.',
          actionText: 'Recover Password',
          code: 'AUTH-409-CONFLICT',
          timestamp: dateStr,
        });
      } else if (type === 'warning') {
        setCurrentAlert({
          id: Date.now().toString(),
          type: 'warning',
          title: 'Weak Password Pattern Detected',
          message: 'Your chosen passphrase does not meet campus security standards. Add at least 1 symbol.',
          actionText: 'Adjust Password',
          code: 'SEC-422-UNPROCESSABLE',
          timestamp: dateStr,
        });
      } else {
        setCurrentAlert({
          id: Date.now().toString(),
          type: 'info',
          title: 'SSO Authentication Recommended',
          message: 'You can link your university Google Workspace credentials for single-click federated sign-in.',
          actionText: 'Link JUW SSO',
          code: 'AUTH-100-INFO',
          timestamp: dateStr,
        });
      }
    } else if (scenario === 'upload') {
      if (type === 'success') {
        setCurrentAlert({
          id: Date.now().toString(),
          type: 'success',
          title: 'Dataset Synchronized & Indexed',
          message: 'File "spring_cohort_2025.csv" (4.8 MB) uploaded with 100% hash checksum integrity.',
          actionText: 'View Insights',
          code: 'SYNC-200-OK',
          timestamp: dateStr,
        });
      } else if (type === 'error') {
        setCurrentAlert({
          id: Date.now().toString(),
          type: 'error',
          title: 'Upload Failed: Payload Limit Exceeded',
          message: 'The attached dataset exceeds the 25 MB campus quota boundary. Please compress or paginate.',
          actionText: 'Compress File',
          code: 'STORAGE-413-PAYLOAD',
          timestamp: dateStr,
        });
      } else if (type === 'warning') {
        setCurrentAlert({
          id: Date.now().toString(),
          type: 'warning',
          title: 'Network Packet Jitter Encountered',
          message: 'Upload speed slowed due to connection latency. Resuming transmission automatically...',
          actionText: 'Pause Sync',
          code: 'NET-206-PARTIAL',
          timestamp: dateStr,
        });
      } else {
        setCurrentAlert({
          id: Date.now().toString(),
          type: 'info',
          title: 'Background Sync Active',
          message: 'Your documents are syncing in the background. You can navigate away safely.',
          actionText: 'Sync Manager',
          code: 'BG-102-PROCESSING',
          timestamp: dateStr,
        });
      }
    } else {
      // membership
      if (type === 'success') {
        setCurrentAlert({
          id: Date.now().toString(),
          type: 'success',
          title: 'Upgraded to Pro Research Tier!',
          message: 'Congratulations! You now have unrestricted access to unlimited AI queries and 50GB cloud storage.',
          actionText: 'Explore Pro Tools',
          code: 'BILLING-200-ACTIVE',
          timestamp: dateStr,
        });
      } else if (type === 'error') {
        setCurrentAlert({
          id: Date.now().toString(),
          type: 'error',
          title: 'Billing Authorization Declined',
          message: 'Your bank declined the transaction. Check your available balance or use a different card.',
          actionText: 'Update Payment',
          code: 'PAY-402-DECLINED',
          timestamp: dateStr,
        });
      } else if (type === 'warning') {
        setCurrentAlert({
          id: Date.now().toString(),
          type: 'warning',
          title: 'Student Discount Verification Expiring',
          message: 'Your academic discount expires in 3 days. Re-verify with your official JUW student ID.',
          actionText: 'Renew Verification',
          code: 'STUDENT-301-EXPIRING',
          timestamp: dateStr,
        });
      } else {
        setCurrentAlert({
          id: Date.now().toString(),
          type: 'info',
          title: 'Annual Plan: Save 35%',
          message: 'Switching from monthly to annual billing saves $96/year on your research subscription.',
          actionText: 'Switch & Save',
          code: 'PROMO-SAVE35',
          timestamp: dateStr,
        });
      }
    }
  };

  return (
    <div className="w-full bg-[#fbf8fc] text-zinc-900 font-sans min-h-screen py-6 sm:py-10 px-3 sm:px-6 flex flex-col items-center">
      {/* Top Switcher & Controls Bar */}
      <div className="w-full max-w-4xl mb-6 flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-purple-100 shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#630ed4] to-[#7c3aed] text-white flex items-center justify-center font-bold text-xs shadow-xs">
            #011
          </div>
          <div>
            <h3 className="font-extrabold text-zinc-950 text-xs sm:text-sm tracking-tight leading-tight">
              Flash Message System (Error & Success)
            </h3>
            <p className="text-[11px] text-zinc-500">
              Luma Editorial Alerts · Daily UI Challenge #011
            </p>
          </div>
        </div>

        {/* Tab & Zoom Controls */}
        <div className="flex items-center gap-2">
          {/* Mode Tabs */}
          <div className="flex items-center bg-purple-50 p-1 rounded-xl border border-purple-100/80">
            <button
              onClick={() => setActiveTab('image')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'image'
                  ? 'bg-white text-[#630ed4] shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Full Design Image
            </button>
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'interactive'
                  ? 'bg-white text-[#630ed4] shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Live Prototype
            </button>
          </div>

          {/* Zoom controls for Image view */}
          {activeTab === 'image' && (
            <div className="flex items-center gap-1 bg-white border border-purple-100 rounded-xl px-2 py-1 shadow-2xs">
              <button
                onClick={() => setZoomLevel((z) => Math.max(z - 20, 50))}
                className="p-1 hover:bg-purple-50 rounded-lg text-zinc-600"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-[11px] font-mono font-bold text-zinc-700 min-w-10 text-center">
                {zoomLevel}%
              </span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(z + 20, 200))}
                className="p-1 hover:bg-purple-50 rounded-lg text-zinc-600"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(100)}
                className="p-1 hover:bg-purple-50 rounded-lg text-zinc-500 ml-1 border-l border-zinc-200"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-4xl flex flex-col items-center">
        {activeTab === 'image' ? (
          /* High-Resolution Design Image View */
          <div className="w-full bg-white rounded-3xl p-4 sm:p-8 border border-purple-100/80 shadow-md flex flex-col items-center">
            <div className="w-full overflow-auto max-h-[82vh] flex justify-center rounded-2xl bg-[#fbf8fc] p-3 sm:p-6 border border-purple-100/50">
              {!imageError ? (
                <img
                  src={HOTLINK_FLASH_MESSAGE_IMAGE}
                  alt="Daily UI #011 Flash Message Design Full Mockup"
                  style={{ width: `${zoomLevel}%`, maxWidth: 'none', transition: 'width 0.2s ease' }}
                  className="rounded-xl shadow-lg object-contain"
                  onError={() => setImageError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="py-20 text-center">
                  <p className="text-sm text-zinc-500">Image preview failed to load.</p>
                  <button
                    onClick={() => setActiveTab('interactive')}
                    className="mt-3 px-4 py-2 bg-[#630ed4] text-white rounded-xl text-xs font-bold"
                  >
                    Open Live Interactive Prototype
                  </button>
                </div>
              )}
            </div>

            {/* Design Metadata Footer */}
            <div className="w-full mt-6 pt-4 border-t border-purple-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <span className="text-[10px] uppercase font-bold text-zinc-400 block font-mono">
                  Challenge
                </span>
                <span className="text-xs font-bold text-zinc-900">#011 Flash Message</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-zinc-400 block font-mono">
                  States Explored
                </span>
                <span className="text-xs font-bold text-[#630ed4]">Error & Success</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-zinc-400 block font-mono">
                  Heuristic
                </span>
                <span className="text-xs font-bold text-emerald-600">Status Visibility (#1)</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-zinc-400 block font-mono">
                  Use Cases
                </span>
                <span className="text-xs font-bold text-zinc-800">Auth, Upload, Membership</span>
              </div>
            </div>
          </div>
        ) : (
          /* Live Interactive Prototype */
          <div className="w-full bg-white rounded-3xl p-5 sm:p-8 border border-purple-100 shadow-md space-y-6">
            {/* Scenario Switcher Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-[#faf8fc] rounded-2xl border border-purple-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-zinc-700">Test Scenario:</span>
                <div className="flex items-center bg-white p-1 rounded-xl border border-purple-100 text-xs font-semibold">
                  <button
                    onClick={() => {
                      setScenario('signup');
                      triggerAlert('success');
                    }}
                    className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
                      scenario === 'signup'
                        ? 'bg-[#630ed4] text-white shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    <UserPlus className="w-3.5 h-3.5" /> Sign-Up Form
                  </button>
                  <button
                    onClick={() => {
                      setScenario('upload');
                      triggerAlert('success');
                    }}
                    className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
                      scenario === 'upload'
                        ? 'bg-[#630ed4] text-white shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    <UploadCloud className="w-3.5 h-3.5" /> File Upload / Sync
                  </button>
                  <button
                    onClick={() => {
                      setScenario('membership');
                      triggerAlert('success');
                    }}
                    className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
                      scenario === 'membership'
                        ? 'bg-[#630ed4] text-white shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    <Crown className="w-3.5 h-3.5" /> Membership Plan
                  </button>
                </div>
              </div>

              {/* Position and Sound Toggles */}
              <div className="flex items-center gap-2 text-xs font-medium text-zinc-600">
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={`p-2 rounded-xl border transition-all ${
                    soundEnabled
                      ? 'bg-purple-50 text-[#630ed4] border-purple-200'
                      : 'bg-white text-zinc-400 border-zinc-200'
                  }`}
                  title="Toggle Audio Feedback"
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Live Flash Message Stage Container */}
            <div className="relative min-h-[220px] bg-[#fbf8fc] rounded-2xl border-2 border-dashed border-purple-200/80 p-6 flex flex-col justify-center items-center overflow-hidden">
              {currentAlert ? (
                <div
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className={`w-full max-w-xl bg-white rounded-2xl border shadow-xl p-4 sm:p-5 relative overflow-hidden transition-all duration-300 animate-in slide-in-from-top-3 ${
                    currentAlert.type === 'success'
                      ? 'border-emerald-300'
                      : currentAlert.type === 'error'
                      ? 'border-rose-300'
                      : currentAlert.type === 'warning'
                      ? 'border-amber-300'
                      : 'border-blue-300'
                  }`}
                >
                  {/* Countdown Progress Bar */}
                  {autoDismiss && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-100">
                      <div
                        className={`h-full transition-all duration-100 ${
                          currentAlert.type === 'success'
                            ? 'bg-emerald-500'
                            : currentAlert.type === 'error'
                            ? 'bg-rose-500'
                            : currentAlert.type === 'warning'
                            ? 'bg-amber-500'
                            : 'bg-blue-500'
                        }`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}

                  <div className="flex items-start gap-3.5 pt-1">
                    {/* Status Icon */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                        currentAlert.type === 'success'
                          ? 'bg-emerald-50 text-emerald-600'
                          : currentAlert.type === 'error'
                          ? 'bg-rose-50 text-rose-600'
                          : currentAlert.type === 'warning'
                          ? 'bg-amber-50 text-amber-600'
                          : 'bg-blue-50 text-blue-600'
                      }`}
                    >
                      {currentAlert.type === 'success' && <CheckCircle2 className="w-5 h-5" />}
                      {currentAlert.type === 'error' && <XCircle className="w-5 h-5" />}
                      {currentAlert.type === 'warning' && <AlertTriangle className="w-5 h-5" />}
                      {currentAlert.type === 'info' && <Info className="w-5 h-5" />}
                    </div>

                    {/* Alert Message Body */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4
                          className={`text-sm font-bold tracking-tight ${
                            currentAlert.type === 'success'
                              ? 'text-emerald-950'
                              : currentAlert.type === 'error'
                              ? 'text-rose-950'
                              : currentAlert.type === 'warning'
                              ? 'text-amber-950'
                              : 'text-blue-950'
                          }`}
                        >
                          {currentAlert.title}
                        </h4>
                        <span className="text-[10px] font-mono text-zinc-400 shrink-0">
                          {currentAlert.timestamp}
                        </span>
                      </div>

                      <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                        {currentAlert.message}
                      </p>

                      {/* Action triggers */}
                      <div className="mt-3.5 flex items-center gap-3">
                        {currentAlert.actionText && (
                          <button
                            onClick={() => {
                              alert(`Executing action: ${currentAlert.actionText}`);
                            }}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-2xs ${
                              currentAlert.type === 'success'
                                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                                : currentAlert.type === 'error'
                                ? 'bg-rose-600 hover:bg-rose-700 text-white'
                                : currentAlert.type === 'warning'
                                ? 'bg-amber-600 hover:bg-amber-700 text-white'
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                            }`}
                          >
                            {currentAlert.actionText}
                          </button>
                        )}

                        <span className="text-[10px] font-mono text-zinc-400">
                          {currentAlert.code}
                        </span>

                        {isPaused && (
                          <span className="text-[10px] text-zinc-400 italic">
                            (Timer paused on hover)
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Manual Dismiss */}
                    <button
                      onClick={() => setCurrentAlert(null)}
                      className="p-1 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
                      title="Dismiss Alert"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6">
                  <Bell className="w-8 h-8 text-zinc-300 mx-auto mb-2" />
                  <p className="text-xs text-zinc-500 font-medium">No active flash banner visible.</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    Click any trigger button below to fire an error or success alert.
                  </p>
                </div>
              )}
            </div>

            {/* Alert Trigger Control Board */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-900">
                  Trigger Interactive Flash States:
                </span>
                <label className="flex items-center gap-2 text-xs text-zinc-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={autoDismiss}
                    onChange={(e) => setAutoDismiss(e.target.checked)}
                    className="w-4 h-4 rounded text-[#630ed4] focus:ring-[#630ed4]"
                  />
                  <span>Auto-dismiss (5.0s countdown)</span>
                </label>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  onClick={() => triggerAlert('success')}
                  className="p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-left transition-all group flex items-start gap-2.5 active:scale-98"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs font-bold text-emerald-950">Success Flash</div>
                    <div className="text-[10px] text-emerald-700">Positive outcome</div>
                  </div>
                </button>

                <button
                  onClick={() => triggerAlert('error')}
                  className="p-3 rounded-2xl bg-rose-50 hover:bg-rose-100/80 border border-rose-200 text-left transition-all group flex items-start gap-2.5 active:scale-98"
                >
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs font-bold text-rose-950">Error Flash</div>
                    <div className="text-[10px] text-rose-700">Recovery action required</div>
                  </div>
                </button>

                <button
                  onClick={() => triggerAlert('warning')}
                  className="p-3 rounded-2xl bg-amber-50 hover:bg-amber-100/80 border border-amber-200 text-left transition-all group flex items-start gap-2.5 active:scale-98"
                >
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs font-bold text-amber-950">Warning Flash</div>
                    <div className="text-[10px] text-amber-700">Cautionary alert</div>
                  </div>
                </button>

                <button
                  onClick={() => triggerAlert('info')}
                  className="p-3 rounded-2xl bg-blue-50 hover:bg-blue-100/80 border border-blue-200 text-left transition-all group flex items-start gap-2.5 active:scale-98"
                >
                  <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs font-bold text-blue-950">Informational</div>
                    <div className="text-[10px] text-blue-700">System notice</div>
                  </div>
                </button>
              </div>
            </div>

            {/* HCI Design Principles & Usability Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                <div className="text-[11px] font-mono font-bold uppercase text-[#630ed4]">
                  Nielsen Heuristic #1
                </div>
                <h6 className="font-bold text-xs text-zinc-900 mt-1">
                  Visibility of System Status
                </h6>
                <p className="text-[11px] text-zinc-600 mt-1 leading-relaxed">
                  Communicates asynchronous operations immediately. Eliminates user uncertainty over whether a form was submitted, dataset processed, or payment finalized.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                <div className="text-[11px] font-mono font-bold uppercase text-[#630ed4]">
                  Nielsen Heuristic #9
                </div>
                <h6 className="font-bold text-xs text-zinc-900 mt-1">
                  Help Users Recognize & Recover
                </h6>
                <p className="text-[11px] text-zinc-600 mt-1 leading-relaxed">
                  Error messages state the precise cause in plain language (e.g. 25MB boundary or existing email) with direct remediation buttons right inside the banner.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                <div className="text-[11px] font-mono font-bold uppercase text-[#630ed4]">
                  Anti-Frustration Architecture
                </div>
                <h6 className="font-bold text-xs text-zinc-900 mt-1">
                  Pause-on-Hover & Countdown
                </h6>
                <p className="text-[11px] text-zinc-600 mt-1 leading-relaxed">
                  Respects reading speed by pausing auto-dismissal when hovered, preventing premature disappearing before the user finishes reading complex diagnostic text.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
