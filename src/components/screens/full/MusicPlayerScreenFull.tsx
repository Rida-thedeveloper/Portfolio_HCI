import React, { useState, useEffect } from 'react';
import {
  ZoomIn,
  ZoomOut,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Repeat,
  Shuffle,
  Disc3,
  Heart,
  Share2,
  ListMusic,
  Radio,
  Sliders,
  Monitor,
  Bus,
  Watch,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const HOTLINK_MUSIC_IMAGE =
  'https://lh3.googleusercontent.com/aida/AEtjO1XVTfpsUmeU3wahPgwrrau7qPvJd09CqdRp_ERDPy7UbEtP0ZNVYzG20jx1dhtan3jq6_NENtOiwWmaJIX3sjB0puUUEu4ojvX2mUVGZv1cKGIdo3iGRZvu1IRdzb2ilk4IYM9moUEkeaxOJvtEMEpMMeb5yWqV1w7fJhJrQajN5Pdx1nZmQXlEnpEBJ7smZObY1TKo_jPYFkwsaigdxR38XeZqvU6GYnMwXDJJPAZM7Q=s2722';

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  durationSeconds: number;
  coverEmoji: string;
  genre: string;
}

const PLAYLIST: Track[] = [
  {
    id: 1,
    title: 'Midnight Orbit',
    artist: 'Stellaris',
    album: 'Neon Horizons',
    duration: '03:42',
    durationSeconds: 222,
    coverEmoji: '🌌',
    genre: 'Synthwave / Spatial',
  },
  {
    id: 2,
    title: 'Obsidian Echoes',
    artist: 'Vesper Systems',
    album: 'Atmospheric Obsidian',
    duration: '04:15',
    durationSeconds: 255,
    coverEmoji: '🪐',
    genre: 'Deep Ambient / Modular',
  },
  {
    id: 3,
    title: 'Pulseflow Resonance',
    artist: 'Nexus Audio Lab',
    album: 'Sub-Millisecond',
    duration: '02:58',
    durationSeconds: 178,
    coverEmoji: '⚡',
    genre: 'Electronic / Hi-Fi',
  },
  {
    id: 4,
    title: 'Velocita Dark Matter',
    artist: 'Elena Vance & Synthetix',
    album: 'Aura Collective',
    duration: '03:30',
    durationSeconds: 210,
    coverEmoji: '🔮',
    genre: 'Generative Soundscape',
  },
];

export const MusicPlayerScreenFull: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'image' | 'interactive'>('image');
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [imageError, setImageError] = useState<boolean>(false);

  // Audio player interactive states
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(138); // 02:18
  const [volume, setVolume] = useState<number>(75);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(true);
  const [isLiked, setIsLiked] = useState<boolean>(true);
  const [deviceMode, setDeviceMode] = useState<'browser' | 'tour-bus' | 'smartwatch'>('browser');

  const currentTrack = PLAYLIST[currentTrackIndex];

  // Simulated ticker when playing
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= currentTrack.durationSeconds) {
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrack.durationSeconds]);

  const formatSeconds = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const progressPercent = (currentTime / currentTrack.durationSeconds) * 100;

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    setCurrentTime(0);
  };

  const handlePrevTrack = () => {
    if (currentTime > 5) {
      setCurrentTime(0);
    } else {
      setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
      setCurrentTime(0);
    }
  };

  return (
    <div className="w-full bg-[#0a0b0e] text-slate-200 font-sans min-h-screen py-6 sm:py-10 px-3 sm:px-6 flex flex-col items-center">
      {/* Top Switcher & Controls Bar */}
      <div className="w-full max-w-5xl mb-6 flex flex-wrap items-center justify-between gap-3 bg-[#16171d] p-3 rounded-2xl border border-slate-800 shadow-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-xs">
            #009
          </div>
          <div>
            <h3 className="font-extrabold text-white text-xs sm:text-sm tracking-tight leading-tight">
              Music Player — Atmospheric Obsidian
            </h3>
            <p className="text-[11px] text-slate-400">
              Multi-Device Audio Interface · Daily UI #009
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom Controls for Image View */}
          {activeTab === 'image' && (
            <div className="hidden sm:flex items-center bg-[#1e1f26] rounded-xl p-0.5 border border-slate-700">
              <button
                onClick={() => setZoomLevel((z) => Math.max(70, z - 15))}
                className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono px-2 text-slate-300">{zoomLevel}%</span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(140, z + 15))}
                className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Toggle Full Original Image vs Live Vector UI */}
          <div className="flex items-center bg-[#1e1f26] rounded-xl p-1 border border-slate-700">
            <button
              onClick={() => setActiveTab('image')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'image'
                  ? 'bg-purple-600 text-white shadow-2xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full Design Image
            </button>
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'interactive'
                  ? 'bg-purple-600 text-white shadow-2xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Live Prototype
            </button>
          </div>
        </div>
      </div>

      {/* Main Responsive Canvas */}
      {activeTab === 'image' ? (
        /* High-Definition Hotlink Image View */
        <div className="w-full flex justify-center overflow-x-auto pb-10">
          <div
            className="w-full max-w-5xl transition-all duration-200 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-[#121318]"
            style={{ width: `${zoomLevel}%` }}
          >
            <img
              src={HOTLINK_MUSIC_IMAGE}
              alt="Daily UI #009 - Music Player by Rida Fatima"
              className="w-full h-auto block select-none"
              loading="eager"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
            />
            {imageError && (
              <div className="p-6 text-center text-xs text-slate-400 bg-[#1a1b21] border-t border-slate-800">
                Switch to the "Live Prototype" tab above to explore the interactive Atmospheric Obsidian music engine.
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Live Interactive Obsidian Player */
        <div className="w-full max-w-4xl bg-[#121318] text-[#e3e1e9] rounded-3xl shadow-2xl border border-slate-800/90 overflow-hidden flex flex-col mb-10 text-xs sm:text-sm relative">
          {/* Ambient Studio Lighting Glows */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar with Brand & Device Adaptability Switcher */}
          <div className="px-6 py-4 border-b border-slate-800/90 flex flex-wrap items-center justify-between gap-3 bg-[#121318]/90 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#d0bcff] to-[#a078ff] text-[#121318] flex items-center justify-center font-bold text-sm shadow-md">
                <Disc3 className={`w-4 h-4 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-sm sm:text-base tracking-tight font-mono">
                  OBSIDIAN · ACOUSTICS
                </h3>
                <p className="text-[11px] text-slate-400">
                  Hi-Res Audio Engine v2.4 Lossless
                </p>
              </div>
            </div>

            {/* Device Profile Consideration Toggle (Prompt Specific Requirement) */}
            <div className="flex items-center gap-1.5 bg-[#1a1b21] p-1 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-500 font-mono px-2 hidden sm:inline">DEVICE:</span>
              <button
                onClick={() => setDeviceMode('browser')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  deviceMode === 'browser'
                    ? 'bg-[#292a2f] text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5 text-[#7bd0ff]" />
                <span className="hidden sm:inline">Studio Web</span>
              </button>
              <button
                onClick={() => setDeviceMode('tour-bus')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  deviceMode === 'tour-bus'
                    ? 'bg-[#292a2f] text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Bus className="w-3.5 h-3.5 text-[#d0bcff]" />
                <span className="hidden sm:inline">Tour Bus Dashboard</span>
              </button>
              <button
                onClick={() => setDeviceMode('smartwatch')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  deviceMode === 'smartwatch'
                    ? 'bg-[#292a2f] text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Watch className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">Smartwatch</span>
              </button>
            </div>
          </div>

          {/* Main Player Staging Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
            {/* Left Column: Visual Album Showcase */}
            <div className="md:col-span-5 flex flex-col items-center">
              {/* Album Art Staging */}
              <div className="relative w-56 h-56 sm:w-64 sm:sm:h-64 rounded-3xl bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 border border-purple-500/30 p-2 shadow-2xl flex items-center justify-center overflow-hidden group">
                {/* Vinyl record preview edge */}
                <div
                  className={`absolute -right-10 w-44 h-44 rounded-full bg-slate-900 border-4 border-slate-800 shadow-xl opacity-60 pointer-events-none transition-transform duration-700 ${
                    isPlaying ? 'translate-x-3 rotate-180' : ''
                  }`}
                >
                  <div className="w-full h-full rounded-full border border-slate-700 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-purple-900 border border-purple-400" />
                  </div>
                </div>

                <div className="w-full h-full rounded-2xl bg-[#1a1b21] border border-slate-800/80 flex flex-col items-center justify-center relative z-10 text-center p-4">
                  <span className="text-5xl sm:text-6xl mb-2 select-none filter drop-shadow">
                    {currentTrack.coverEmoji}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#7bd0ff] font-bold">
                    {currentTrack.genre}
                  </span>
                  <span className="text-xs font-extrabold text-white mt-1">
                    {currentTrack.album}
                  </span>
                </div>
              </div>

              {/* Lossless Streaming Indicator Box */}
              <div className="w-full max-w-xs mt-5 p-3 rounded-2xl bg-[#1a1b21] border border-slate-800 text-center">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    DIRECT STREAM
                  </span>
                  <span className="text-[#d0bcff] font-bold">FLAC 24-bit / 96kHz</span>
                </div>
                <div className="mt-1 text-[10px] text-slate-500 flex justify-between">
                  <span>Bitrate: 3,211 kbps</span>
                  <span>DAC: Lossless DSD</span>
                </div>
              </div>
            </div>

            {/* Right Column: Track Telemetry, Waveform & Transport Controls */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                {/* Track Title, Artist, & Actions */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#7bd0ff] font-bold block mb-1">
                      Now Streaming · Track 0{currentTrack.id} of 0{PLAYLIST.length}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {currentTrack.title}
                    </h2>
                    <p className="text-sm text-slate-400 font-medium mt-1">
                      {currentTrack.artist}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className={`p-2 rounded-xl border transition-colors ${
                        isLiked
                          ? 'bg-rose-500/10 border-rose-500/40 text-rose-400'
                          : 'bg-[#1a1b21] border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard?.writeText(window.location.href);
                      }}
                      className="p-2 rounded-xl bg-[#1a1b21] border border-slate-800 text-slate-400 hover:text-white transition-colors"
                      title="Share Track"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Animated Audio Equalizer Spectrum */}
                <div className="mt-6 p-4 rounded-2xl bg-[#1a1b21] border border-slate-800/80">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                    <span className="text-[#d0bcff] font-semibold">DYNAMIC FREQUENCY SPECTRUM</span>
                    <span>{isPlaying ? 'ACTIVE ANALYZER' : 'PAUSED'}</span>
                  </div>
                  <div className="flex items-end justify-between h-14 gap-1 px-1">
                    {[35, 65, 85, 45, 95, 70, 100, 80, 50, 90, 60, 75, 40, 85, 95, 60, 80, 50, 90, 70, 45].map(
                      (val, i) => {
                        const dynamicHeight = isPlaying ? Math.min(100, val + (i % 3 === 0 ? 10 : -5)) : 15;
                        return (
                          <div
                            key={i}
                            className="flex-1 rounded-full transition-all duration-300"
                            style={{
                              height: `${dynamicHeight}%`,
                              background:
                                i % 2 === 0
                                  ? 'linear-gradient(to top, #00a6e0, #7bd0ff)'
                                  : 'linear-gradient(to top, #6d3bd7, #d0bcff)',
                            }}
                          />
                        );
                      }
                    )}
                  </div>
                </div>

                {/* Scrubbable Timeline Track */}
                <div className="mt-6">
                  <div className="relative w-full h-3 bg-slate-800/80 rounded-full cursor-pointer flex items-center group overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#7bd0ff] to-[#d0bcff] transition-all duration-100"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400 mt-2">
                    <span>{formatSeconds(currentTime)}</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                      {deviceMode === 'tour-bus' ? 'CABIN HIGH OUTPUT' : 'STUDIO MONITOR'}
                    </span>
                    <span>{currentTrack.duration}</span>
                  </div>
                </div>

                {/* Transport Audio Buttons */}
                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setIsShuffle(!isShuffle)}
                    className={`p-2 text-xs transition-colors ${
                      isShuffle ? 'text-[#7bd0ff]' : 'text-slate-500 hover:text-white'
                    }`}
                    title="Shuffle"
                  >
                    <Shuffle className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={handlePrevTrack}
                      className="p-3 rounded-2xl bg-[#1a1b21] border border-slate-800 text-slate-300 hover:text-white hover:bg-[#292a2f] transition-all"
                      title="Previous Track"
                    >
                      <SkipBack className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d0bcff] to-[#a078ff] text-[#121318] flex items-center justify-center shadow-lg shadow-purple-900/40 hover:scale-105 active:scale-95 transition-all"
                      title={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 fill-current" />
                      ) : (
                        <Play className="w-6 h-6 fill-current ml-1" />
                      )}
                    </button>

                    <button
                      onClick={handleNextTrack}
                      className="p-3 rounded-2xl bg-[#1a1b21] border border-slate-800 text-slate-300 hover:text-white hover:bg-[#292a2f] transition-all"
                      title="Next Track"
                    >
                      <SkipForward className="w-5 h-5" />
                    </button>
                  </div>

                  <button
                    onClick={() => setIsRepeat(!isRepeat)}
                    className={`p-2 text-xs transition-colors ${
                      isRepeat ? 'text-[#d0bcff]' : 'text-slate-500 hover:text-white'
                    }`}
                    title="Repeat"
                  >
                    <Repeat className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Volume Slider & Playlist Drawer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 flex-1 max-w-xs">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-4 h-4 text-rose-400" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => {
                      setVolume(Number(e.target.value));
                      if (isMuted) setIsMuted(false);
                    }}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#d0bcff]"
                  />
                  <span className="text-[10px] font-mono text-slate-400 w-8">
                    {isMuted ? '0%' : `${volume}%`}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <ListMusic className="w-4 h-4 text-[#7bd0ff]" />
                  <span>{PLAYLIST.length} Tracks in Queue</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Playlist Queue Drawer */}
          <div className="p-6 bg-[#16171d] border-t border-slate-800/80">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
              <span>Station Queue & Schedule</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 font-sans">
                Lossless Ready
              </span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PLAYLIST.map((track, idx) => (
                <div
                  key={track.id}
                  onClick={() => {
                    setCurrentTrackIndex(idx);
                    setCurrentTime(0);
                    setIsPlaying(true);
                  }}
                  className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    currentTrackIndex === idx
                      ? 'bg-purple-950/40 border-purple-500/50 text-white'
                      : 'bg-[#1a1b21] border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-[#202129]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-sm">{track.coverEmoji}</span>
                    <div className="truncate">
                      <p className="font-bold text-xs truncate text-white">
                        {track.title}
                      </p>
                      <p className="text-[10px] text-slate-400 truncate">
                        {track.artist}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {currentTrackIndex === idx && (
                      <span className="text-[10px] font-mono text-[#d0bcff] font-bold">
                        ACTIVE
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-slate-500">
                      {track.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
