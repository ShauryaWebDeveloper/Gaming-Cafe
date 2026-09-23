import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  PhoneCall, 
  ExternalLink, 
  Copy, 
  Check, 
  Navigation, 
  Instagram, 
  AlertTriangle,
  Sparkles,
  Compass
} from 'lucide-react';
import { VENUE_INFO } from '../data/arenaData';

export const LocationAndContact: React.FC = () => {
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(VENUE_INFO.plusCode);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2000);
  };

  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#070410] border-t border-purple-950">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-yellow-400" />
            Find Your Way
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mb-3">
            LOCATION & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-purple-300 to-purple-400">TIMINGS</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Conveniently situated in Shastri Nagar, Jammu for gamers traveling from across Jammu city and neighboring districts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Venue Details, Timings, Advisory */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Primary Location Card */}
            <div className="bg-[#0f0923] border border-purple-900/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider block mb-1">
                  Official Venue Address
                </span>
                <h3 className="font-display font-black text-2xl text-white mb-2">
                  {VENUE_INFO.name}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0 mt-1" />
                  <span>{VENUE_INFO.address}</span>
                </p>
              </div>

              {/* Plus Code Quick Copy Strip */}
              <div className="p-3.5 bg-purple-950/40 rounded-2xl border border-purple-800/60 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase block font-semibold">Google Maps Plus Code</span>
                  <span className="font-mono font-bold text-yellow-300 text-sm">{VENUE_INFO.plusCode}</span>
                </div>
                <button
                  id="copy-plus-code-btn"
                  onClick={handleCopyCode}
                  className="px-3 py-1.5 rounded-lg bg-purple-900/80 hover:bg-purple-800 text-xs font-semibold text-zinc-200 border border-purple-700/60 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedPlusCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              {/* Operating Hours Grid */}
              <div className="pt-2">
                <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  Operating Hours (Everyday)
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-[#140b2a] border border-purple-900/50">
                    <span className="text-zinc-400 block text-[11px]">Monday – Sunday</span>
                    <span className="font-bold text-white text-sm">10:00 AM – 11:00 PM</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#140b2a] border border-purple-900/50">
                    <span className="text-zinc-400 block text-[11px]">Gaming Sessions</span>
                    <span className="font-bold text-yellow-300 text-sm">Day & Night Slots</span>
                  </div>
                </div>
              </div>

              {/* Contact Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${VENUE_INFO.phone}`}
                  className="p-3 rounded-xl bg-[#140b2a] hover:bg-purple-950/60 border border-purple-900/60 text-xs flex items-center gap-3 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-900 flex items-center justify-center text-yellow-300">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 block">Phone Support</span>
                    <span className="font-bold text-white">{VENUE_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={`https://instagram.com/${VENUE_INFO.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#140b2a] hover:bg-purple-950/60 border border-purple-900/60 text-xs flex items-center gap-3 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-pink-950 flex items-center justify-center text-pink-400">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 block">Official Instagram</span>
                    <span className="font-bold text-white">{VENUE_INFO.instagram}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Third-party Listing Advisory Note */}
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-600/40 text-xs text-amber-200/90 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300 block mb-0.5">Visitor Advisory Note:</strong>
                Some third-party web directories have shown slight variations in location descriptions. We strongly recommend using the Google Plus code <strong className="text-white">MVV6+83J</strong> or confirming active tournament schedules via our Instagram before visiting.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Card & Navigation Guide */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Visual Interactive Map Representation */}
            <div className="bg-[#0f0923] border border-purple-900/80 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-purple-400" />
                  Map Navigation Preview
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-400/20 text-yellow-300 border border-yellow-400/40">
                  JAMMU PIN: 180004
                </span>
              </div>

              {/* Styled Cyber Map Canvas */}
              <div className="relative h-64 sm:h-72 rounded-2xl bg-[#090514] border border-purple-800/60 overflow-hidden flex flex-col items-center justify-center p-6 text-center group">
                {/* Background grid */}
                <div className="absolute inset-0 bg-grid-cyber opacity-40 pointer-events-none" />
                
                {/* Decorative map radar lines */}
                <div className="absolute w-44 h-44 rounded-full border border-purple-500/20 animate-ping opacity-25 pointer-events-none" />
                <div className="absolute w-64 h-64 rounded-full border border-purple-500/10 pointer-events-none" />

                {/* Center Arena Pin Marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-900 border-2 border-yellow-400 flex items-center justify-center text-white shadow-xl shadow-purple-900/60 mb-2 transform group-hover:scale-110 transition-transform">
                    <MapPin className="w-7 h-7 text-yellow-300 fill-yellow-400/30" />
                  </div>
                  <h4 className="font-display font-black text-lg text-white">
                    HIVE The Gaming Arena
                  </h4>
                  <p className="text-xs text-yellow-300 font-mono">
                    MVV6+83J • Shastri Nagar, Jammu
                  </p>
                  <span className="text-[11px] text-zinc-400 mt-1 max-w-xs">
                    Located near Shastri Nagar residential & commercial hub.
                  </span>
                </div>

                {/* Direct Google Maps Action Floating */}
                <div className="relative z-10 mt-4">
                  <a
                    id="open-google-maps-btn"
                    href={VENUE_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-display font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-yellow-400/25 flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Transit & Arrival Tips */}
              <div className="space-y-2.5 text-xs text-zinc-300 pt-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span><strong>By Scooter / Bike / Car:</strong> Ample parking space available outside the venue entrance.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span><strong>By City Transit:</strong> Accessible from Gandhi Nagar, Nai Basti, and Jammu Tawi Railway corridor.</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
