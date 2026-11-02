import React from 'react';
import {
  MapPin,
  Mail,
  CheckCircle2,
  Bookmark,
  Share2,
  Sparkles
} from 'lucide-react';

interface UserProfileScreenProps {
  interactive?: boolean;
}

export const UserProfileScreen: React.FC<UserProfileScreenProps> = () => {
  return (
    <div className="w-full h-full bg-[#f8f9fc] text-slate-800 rounded-xl overflow-hidden border border-slate-200/90 shadow-sm flex flex-col font-sans select-none text-left">
      {/* Top Banner with Advisory Badge */}
      <div className="relative h-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-2.5 flex justify-end items-start">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/95 text-indigo-950 font-semibold text-[10px] shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Available for advisory
        </span>

        {/* Profile Avatar overlay */}
        <div className="absolute -bottom-7 left-4">
          <div className="relative w-14 h-14 rounded-full ring-3 ring-white bg-slate-900 overflow-hidden shadow-md flex items-center justify-center text-white font-bold text-sm">
            <img
              src="https://lh3.googleusercontent.com/aida/AEtjO1XYi52IC-5nKbO4x4OOwT4FWgc8s3ttf8gc-WiJxXLm5PJTcYJU9QwiMT9DfulXu_lOYh-z6ODIuoBPKsW3qrS_gjJpRkjn7hQ22SFalFpYcxfQj7gphkpr9dP64QPCaqAoZefFtGJPylBZ3ODamTigzh8vXL_Q4VygVxhWX2TQftORWRQWg1xLQmA2ncNl-ZxjYssdTRzeeWDr8F-aghzLQWTG216mO7XiGmhqhFl4Ww=s6308"
              alt="Elena Vance"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/aistudio/screen_825238e1.png';
              }}
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-indigo-600 rounded-full border border-white flex items-center justify-center text-white text-[8px]">
              ⚡
            </div>
          </div>
        </div>
      </div>

      {/* Profile Header Details */}
      <div className="pt-9 px-4 pb-3 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-extrabold text-slate-900 text-sm tracking-tight leading-tight">
                  Elena Vance
                </h4>
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 fill-blue-600 text-white" />
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Follow '24
                </span>
              </div>
              <p className="text-[11px] text-slate-600 font-medium line-clamp-1 mt-0.5">
                Senior Full-Stack Engineer | UI/UX Enthusiast
              </p>
            </div>
            <div className="flex items-center gap-1">
              <div className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-500">
                <Share2 className="w-3 h-3" />
              </div>
              <div className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-500">
                <Bookmark className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Quick Meta */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-slate-500 mt-2">
            <span className="flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5 text-slate-400" /> San Francisco, CA
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-2.5 h-2.5 text-slate-400" /> elena.vance@nexus.dev
            </span>
          </div>

          {/* 4 Mini Stat Boxes */}
          <div className="grid grid-cols-4 gap-1.5 mt-3">
            <div className="p-1.5 rounded-lg bg-white border border-slate-200/80">
              <span className="text-[8px] text-slate-400 uppercase font-mono block">Views</span>
              <span className="text-[11px] font-bold text-slate-900">14.2k</span>
            </div>
            <div className="p-1.5 rounded-lg bg-white border border-slate-200/80">
              <span className="text-[8px] text-slate-400 uppercase font-mono block">Network</span>
              <span className="text-[11px] font-bold text-slate-900">1,840</span>
            </div>
            <div className="p-1.5 rounded-lg bg-white border border-slate-200/80">
              <span className="text-[8px] text-slate-400 uppercase font-mono block">Projects</span>
              <span className="text-[11px] font-bold text-slate-900">38</span>
            </div>
            <div className="p-1.5 rounded-lg bg-white border border-slate-200/80">
              <span className="text-[8px] text-emerald-600 uppercase font-mono block">Success</span>
              <span className="text-[11px] font-bold text-emerald-700">99.4%</span>
            </div>
          </div>
        </div>

        {/* Bottom Nexus Standing Strip */}
        <div className="mt-3 pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-[10px]">
          <span className="text-slate-500 font-medium flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-indigo-600" /> Top 1% Contributor
          </span>
          <span className="font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">
            2,940 / 3,000 pts
          </span>
        </div>
      </div>
    </div>
  );
};
