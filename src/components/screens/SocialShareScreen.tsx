import React, { useState } from 'react';
import {
  Share2,
  Copy,
  Check,
  Twitter,
  Linkedin,
  MessageCircle,
  Mail,
  ExternalLink,
  Quote,
  Sparkles,
  Bookmark
} from 'lucide-react';

interface SocialShareScreenProps {
  interactive?: boolean;
}

export const SocialShareScreen: React.FC<SocialShareScreenProps> = ({ interactive = true }) => {
  const [copied, setCopied] = useState(false);
  const [activePlatform, setActivePlatform] = useState<string | null>(null);

  const handleCopy = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const articleQuote =
    '“Design is not the ornamentation of an algorithm; it is the cognitive contract between human intentionality and machine execution.”';

  return (
    <div className="w-full h-full bg-[#fbf8fc] text-zinc-900 font-sans flex flex-col justify-between p-4 sm:p-5 select-none overflow-hidden relative border border-purple-100/60 rounded-xl">
      {/* Background lavender glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-purple-200/25 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#630ed4] to-[#a855f7] flex items-center justify-center text-white shadow-xs">
            <Share2 className="w-3.5 h-3.5" />
          </div>
          <span className="text-[11px] font-bold text-zinc-800 tracking-tight">
            Luma Editorial <span className="text-purple-600 font-medium">· Share Engine</span>
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-100/70 text-purple-700 font-semibold border border-purple-200/60">
          Snippet Mode
        </span>
      </div>

      {/* Main Snippet Card */}
      <div className="my-auto z-10 bg-white/90 backdrop-blur-xs rounded-xl p-3.5 sm:p-4 border border-purple-100 shadow-sm relative group">
        <div className="flex items-start gap-2.5 mb-2">
          <Quote className="w-4 h-4 text-purple-500 shrink-0 mt-0.5 opacity-80" />
          <p className="text-[12px] sm:text-[13px] text-zinc-800 font-serif italic leading-relaxed">
            {articleQuote}
          </p>
        </div>

        {/* Source citation */}
        <div className="flex items-center justify-between pt-2.5 border-t border-purple-50/80 text-[10px] text-zinc-500">
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full bg-purple-600 text-white text-[8px] font-bold flex items-center justify-center">
              R
            </div>
            <span className="font-medium text-zinc-700">Rida Fatima</span>
            <span>· Human-Centered AI</span>
          </div>
          <span className="text-zinc-400 font-mono">3 min read</span>
        </div>
      </div>

      {/* Social Trigger Row & Copy Action */}
      <div className="z-10 space-y-2">
        <div className="flex items-center justify-between gap-1.5 bg-white/95 rounded-xl p-1.5 border border-purple-100/80 shadow-2xs">
          {/* Quick Platform Chips */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActivePlatform('x')}
              title="Share on X"
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs transition-colors ${
                activePlatform === 'x'
                  ? 'bg-black text-white'
                  : 'text-zinc-600 hover:bg-purple-50 hover:text-purple-700'
              }`}
            >
              <Twitter className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setActivePlatform('linkedin')}
              title="Share on LinkedIn"
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs transition-colors ${
                activePlatform === 'linkedin'
                  ? 'bg-[#0077b5] text-white'
                  : 'text-zinc-600 hover:bg-purple-50 hover:text-purple-700'
              }`}
            >
              <Linkedin className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setActivePlatform('whatsapp')}
              title="Share on WhatsApp"
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs transition-colors ${
                activePlatform === 'whatsapp'
                  ? 'bg-[#25D366] text-white'
                  : 'text-zinc-600 hover:bg-purple-50 hover:text-purple-700'
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setActivePlatform('email')}
              title="Email Quote"
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs transition-colors ${
                activePlatform === 'email'
                  ? 'bg-purple-600 text-white'
                  : 'text-zinc-600 hover:bg-purple-50 hover:text-purple-700'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Copy Link Button */}
          <button
            onClick={handleCopy}
            className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 transition-all shadow-xs ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-[#630ed4] hover:bg-[#5209b5] text-white active:scale-95'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
