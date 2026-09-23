import React, { useState } from 'react';
import { 
  Monitor, 
  Gamepad2, 
  Glasses, 
  CircleDot, 
  Coffee, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Flame, 
  Info,
  Clock,
  Layers
} from 'lucide-react';
import { GAMING_ZONES } from '../data/arenaData';
import { GamingZone } from '../types';

interface GamingZonesProps {
  onSelectZone: (zoneId: string) => void;
}

export const GamingZones: React.FC<GamingZonesProps> = ({ onSelectZone }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedModalZone, setSelectedModalZone] = useState<GamingZone | null>(null);

  const filteredZones = activeCategory === 'all' 
    ? GAMING_ZONES 
    : GAMING_ZONES.filter(z => z.category === activeCategory);

  const getZoneIcon = (category: string) => {
    switch (category) {
      case 'pc':
        return <Monitor className="w-5 h-5 text-yellow-300" />;
      case 'console':
        return <Gamepad2 className="w-5 h-5 text-purple-300" />;
      case 'vr':
        return <Glasses className="w-5 h-5 text-yellow-300" />;
      case 'cue':
        return <CircleDot className="w-5 h-5 text-emerald-400" />;
      case 'cafe':
        return <Coffee className="w-5 h-5 text-amber-400" />;
      default:
        return <Monitor className="w-5 h-5 text-yellow-300" />;
    }
  };

  return (
    <section id="zones" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#090514]">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-900/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-900/50 border border-purple-700/50 text-purple-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-yellow-400" />
              Arena Facilities
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              THE GAMING <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-300">ZONES</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Engineered from the ground up for esports athletes and social gaming groups. Choose your battleground.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#120b24] border border-purple-900/60 rounded-xl self-start md:self-end">
            {[
              { id: 'all', label: 'All Zones' },
              { id: 'pc', label: 'PC LAN Rigs' },
              { id: 'console', label: 'PlayStation 5' },
              { id: 'vr', label: 'VR Pods' },
              { id: 'cue', label: 'Pool & Snooker' },
              { id: 'cafe', label: 'Cafe Bar' }
            ].map((cat) => (
              <button
                key={cat.id}
                id={`zone-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-display font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-sm shadow-purple-950 border border-yellow-400/50'
                    : 'text-zinc-400 hover:text-white hover:bg-purple-950/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredZones.map((zone) => (
            <div
              key={zone.id}
              id={`zone-card-${zone.id}`}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#0e081f] border border-purple-900/60 hover:border-yellow-400/70 transition-all duration-300 p-6 shadow-xl shadow-black/40 hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle card glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-yellow-400/10 transition-colors pointer-events-none" />

              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-700/60 group-hover:border-yellow-400/60 transition-colors">
                    {getZoneIcon(zone.category)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide bg-yellow-400/10 text-yellow-300 border border-yellow-400/30 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-yellow-400" />
                    {zone.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display font-bold text-xl text-white group-hover:text-yellow-300 transition-colors mb-2">
                  {zone.name}
                </h3>
                <p className="text-xs text-purple-300/90 font-medium mb-3">
                  {zone.tagline}
                </p>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5">
                  {zone.description}
                </p>

                {/* Hardware Specs Bullet points */}
                <div className="space-y-2 mb-5 pt-3 border-t border-purple-900/40">
                  <div className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <Flame className="w-3.5 h-3.5 text-yellow-400" />
                    Key Hardware & Setup
                  </div>
                  {zone.specs.slice(0, 3).map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Popular Games Tag Strip */}
                <div className="mb-6">
                  <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-2">
                    Popular Titles & Activities
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {zone.popularGames.map((game, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-purple-950/60 text-purple-200 border border-purple-800/40 text-[11px] font-medium"
                      >
                        {game}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Pricing & Action */}
              <div className="pt-4 border-t border-purple-900/50 flex flex-col gap-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-400 block uppercase">Reference Rate</span>
                    <span className="font-display font-bold text-base text-yellow-300">
                      {zone.referencePricing}
                    </span>
                  </div>
                  <span className="text-[11px] text-purple-300/80 font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    10 AM – 11 PM
                  </span>
                </div>

                {zone.pricingNote && (
                  <p className="text-[10px] text-zinc-400 italic leading-tight">
                    * {zone.pricingNote}
                  </p>
                )}

                <div className="grid grid-cols-2 gap-2 mt-1">
                  <button
                    id={`zone-details-btn-${zone.id}`}
                    onClick={() => setSelectedModalZone(zone)}
                    className="py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold border border-purple-900/60 flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-purple-400" />
                    <span>View Specs</span>
                  </button>
                  <button
                    id={`zone-book-btn-${zone.id}`}
                    onClick={() => onSelectZone(zone.id)}
                    className="py-2 px-3 rounded-lg bg-purple-700 hover:bg-purple-600 text-white text-xs font-bold font-display uppercase tracking-wider border border-yellow-400/50 flex items-center justify-center gap-1 transition-all shadow-md shadow-purple-950 hover:shadow-yellow-400/20 cursor-pointer"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3 h-3 text-yellow-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Callout: Full LAN Scrim & Team Bookings */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-purple-950 via-[#150a2e] to-black border border-purple-700/60 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-yellow-400 text-black font-display uppercase tracking-wider">
              Esports Squad Special
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Planning a 5v5 Team Scrim or Private LAN Party?
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Book synchronized adjacent battlestations with dedicated team comms and low-latency servers in Jammu. Perfect for Valorant, CS2, or Delta Force tournament bootcamps.
            </p>
          </div>
          <button
            id="lan-party-inquiry-btn"
            onClick={() => onSelectZone('pc-battlestations')}
            className="px-6 py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-display font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-yellow-400/20 transition-all flex items-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <span>Book 5-Man / 10-Man Stage</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Detail Specs Modal */}
      {selectedModalZone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0f0923] border border-purple-600 rounded-2xl max-w-lg w-full p-6 text-zinc-100 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-900/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-900/60 border border-purple-500/50 flex items-center justify-center">
                  {getZoneIcon(selectedModalZone.category)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white">{selectedModalZone.name}</h4>
                  <span className="text-xs text-yellow-300 font-semibold">{selectedModalZone.tagline}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedModalZone(null)}
                className="text-zinc-400 hover:text-white p-1 rounded-md hover:bg-purple-900/40"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-zinc-300 mb-5 leading-relaxed">
              {selectedModalZone.description}
            </p>

            <div className="mb-5">
              <h5 className="text-xs font-bold uppercase text-yellow-400 tracking-wider mb-2.5">
                Complete Setup & Equipment Checklist
              </h5>
              <div className="space-y-2 bg-[#090514] p-3.5 rounded-xl border border-purple-900/50">
                {selectedModalZone.specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6 p-3 rounded-lg bg-purple-950/40 border border-purple-800/40 text-xs text-zinc-300">
              <strong className="text-white block mb-0.5">Rates & Timings:</strong>
              {selectedModalZone.referencePricing} • {selectedModalZone.pricingNote || 'Subject to current front-desk updates.'}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedModalZone(null)}
                className="flex-1 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium text-xs border border-zinc-800"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const id = selectedModalZone.id;
                  setSelectedModalZone(null);
                  onSelectZone(id);
                }}
                className="flex-1 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-display font-bold text-xs uppercase tracking-wider border border-yellow-400/50 shadow-md shadow-purple-950"
              >
                Reserve Slot
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
