import React from 'react';
import { 
  Sparkles, 
  Trophy, 
  MapPin, 
  Clock, 
  Star, 
  Monitor, 
  Gamepad2, 
  Glasses, 
  CircleDot, 
  Coffee, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { VENUE_INFO } from '../data/arenaData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenLocation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenLocation }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-cyber">
      {/* Ambient Glows: Deep purple backdrop with cyber yellow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-400/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-900/25 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-200 text-xs font-semibold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
            <span className="font-display tracking-wide uppercase text-yellow-300">EST. APRIL 2025</span>
            <span className="text-zinc-500">•</span>
            <span>SHASTRI NAGAR, JAMMU</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/40 text-yellow-300 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span>4.6 / 5 Google Rating</span>
            <span className="text-yellow-200/70 font-normal">({VENUE_INFO.totalReviews} Reviews)</span>
          </div>
        </div>

        {/* Headline */}
        <div className="max-w-4xl">
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-[1.08] mb-6">
            ENTER <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-yellow-300">THE HIVE</span>
            <br />
            <span className="text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold">
              JAMMU&apos;S ESPORTS ARENA
            </span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-8 max-w-3xl">
            A dedicated gaming sanctuary built in Shastri Nagar, Jammu for casual squads and competitive esports athletes alike. Experience <strong className="text-white font-semibold">high-fps PC LAN rigs</strong>, <strong className="text-white font-semibold">PlayStation 5 duels</strong>, <strong className="text-white font-semibold">immersive VR</strong>, and <strong className="text-white font-semibold">tournament pool & snooker</strong> under one roof.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              id="hero-book-rig-btn"
              onClick={onOpenBooking}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 hover:from-purple-500 hover:to-purple-800 text-white font-display font-bold text-sm uppercase tracking-wider border-2 border-yellow-400 shadow-lg shadow-purple-900/50 hover:shadow-yellow-400/25 transition-all flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
            >
              <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span>Book Rig / Inquire Slots</span>
              <ArrowRight className="w-4 h-4 text-yellow-300" />
            </button>

            <a
              id="hero-explore-tournaments-btn"
              href="#tournaments"
              className="px-6 py-3.5 rounded-xl bg-[#120b22] hover:bg-[#1a1033] text-zinc-100 font-display font-bold text-sm uppercase tracking-wider border border-purple-700/60 hover:border-yellow-400/60 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span>Tournaments & Fest</span>
            </a>

            <button
              id="hero-get-directions-btn"
              onClick={onOpenLocation}
              className="px-5 py-3.5 rounded-xl bg-zinc-950/80 hover:bg-zinc-900 text-zinc-300 hover:text-white font-medium text-sm border border-zinc-800 hover:border-purple-600/60 transition-all flex items-center gap-2 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-yellow-400" />
              <span>Shastri Nagar Directions</span>
            </button>
          </div>
        </div>

        {/* Quick Features Bento Grid Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 pt-4 border-t border-purple-900/40">
          
          {/* Card 1: PC Battlestations */}
          <div className="p-4 rounded-xl bg-[#0f0921]/90 border border-purple-900/60 hover:border-yellow-400/60 transition-all group">
            <div className="w-9 h-9 rounded-lg bg-purple-950 flex items-center justify-center mb-3 text-purple-300 border border-purple-800/60 group-hover:text-yellow-300 group-hover:border-yellow-400/60 transition-colors">
              <Monitor className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="font-display font-bold text-sm text-white">PC Battlestation</h2>
              <span className="text-[10px] font-bold text-yellow-400 uppercase">180Hz+</span>
            </div>
            <p className="text-xs text-zinc-400 leading-snug">
              Competitive LAN rigs for Valorant, CS2 & Delta Force.
            </p>
          </div>

          {/* Card 2: PS5 Console */}
          <div className="p-4 rounded-xl bg-[#0f0921]/90 border border-purple-900/60 hover:border-yellow-400/60 transition-all group">
            <div className="w-9 h-9 rounded-lg bg-purple-950 flex items-center justify-center mb-3 text-purple-300 border border-purple-800/60 group-hover:text-yellow-300 group-hover:border-yellow-400/60 transition-colors">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="font-display font-bold text-sm text-white">PlayStation 5</h2>
              <span className="text-[10px] font-bold text-purple-300 uppercase">4K HDR</span>
            </div>
            <p className="text-xs text-zinc-400 leading-snug">
              FC/FIFA 26, Tekken 8 duels & Mortal Kombat with friends.
            </p>
          </div>

          {/* Card 3: VR Pods */}
          <div className="p-4 rounded-xl bg-[#0f0921]/90 border border-purple-900/60 hover:border-yellow-400/60 transition-all group">
            <div className="w-9 h-9 rounded-lg bg-purple-950 flex items-center justify-center mb-3 text-purple-300 border border-purple-800/60 group-hover:text-yellow-300 group-hover:border-yellow-400/60 transition-colors">
              <Glasses className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="font-display font-bold text-sm text-white">VR Experience</h2>
              <span className="text-[10px] font-bold text-yellow-400 uppercase">360°</span>
            </div>
            <p className="text-xs text-zinc-400 leading-snug">
              Beat Saber, Superhot & full motion room-scale gaming.
            </p>
          </div>

          {/* Card 4: Pool & Snooker */}
          <div className="p-4 rounded-xl bg-[#0f0921]/90 border border-purple-900/60 hover:border-yellow-400/60 transition-all group">
            <div className="w-9 h-9 rounded-lg bg-purple-950 flex items-center justify-center mb-3 text-purple-300 border border-purple-800/60 group-hover:text-yellow-300 group-hover:border-yellow-400/60 transition-colors">
              <CircleDot className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="font-display font-bold text-sm text-white">Pool & Snooker</h2>
              <span className="text-[10px] font-bold text-emerald-400 uppercase">Tables</span>
            </div>
            <p className="text-xs text-zinc-400 leading-snug">
              Regulation green baize tables to unwind between matches.
            </p>
          </div>

          {/* Card 5: Fuel & Cafe */}
          <div className="p-4 rounded-xl bg-[#0f0921]/90 border border-purple-900/60 hover:border-yellow-400/60 transition-all group col-span-2 sm:col-span-1">
            <div className="w-9 h-9 rounded-lg bg-purple-950 flex items-center justify-center mb-3 text-purple-300 border border-purple-800/60 group-hover:text-yellow-300 group-hover:border-yellow-400/60 transition-colors">
              <Coffee className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="font-display font-bold text-sm text-white">Fuel & Cafe</h2>
              <span className="text-[10px] font-bold text-yellow-400 uppercase">Snacks</span>
            </div>
            <p className="text-xs text-zinc-400 leading-snug">
              Chilled energy drinks, cold brews & gamer munchies.
            </p>
          </div>

        </div>

        {/* Live Operational Ribbon */}
        <div className="mt-8 py-3 px-4 rounded-xl bg-purple-950/40 border border-purple-800/40 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-300">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>
              <strong className="text-white">Operating Daily:</strong> 10:00 AM – 11:00 PM in Shastri Nagar, Jammu 180004
            </span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <span className="hidden sm:inline">Check social media before visiting for tournament practice alerts</span>
            <span className="text-purple-400 font-semibold">•</span>
            <span className="text-yellow-300 font-medium">Walk-ins Welcome</span>
          </div>
        </div>

      </div>
    </section>
  );
};
