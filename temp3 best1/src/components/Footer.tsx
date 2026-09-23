import React from 'react';
import { Gamepad2, MapPin, Clock, PhoneCall, Instagram, ArrowUp, Heart } from 'lucide-react';
import { VENUE_INFO } from '../data/arenaData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenLocation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenLocation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#05030a] border-t border-purple-900/60 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-purple-950">
          
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-900 border border-purple-500/60 text-yellow-300">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-black text-xl text-white tracking-wider">
                  HIVE <span className="text-yellow-400">ARENA</span>
                </span>
                <span className="block text-[10px] text-purple-300 font-semibold uppercase tracking-wider">
                  Shastri Nagar, Jammu
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Jammu&apos;s dedicated esports and multiplayer entertainment arena. Providing competitive PC battlestations, PlayStation 5 consoles, VR immersion, pool & snooker, and regional LAN tournaments since April 2025.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-yellow-400/10 text-yellow-300 border border-yellow-400/30 text-[11px] font-bold">
                ⭐ 4.6 Google Rating (72+ Reviews)
              </span>
              <span className="px-2.5 py-1 rounded bg-purple-950 text-purple-300 border border-purple-800/50 text-[11px] font-semibold">
                LAN Ready
              </span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Arena Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#zones" className="hover:text-yellow-300 transition-colors">Gaming Zones (PC, PS5, VR, Pool)</a>
              </li>
              <li>
                <a href="#tournaments" className="hover:text-yellow-300 transition-colors">Esports & LAN Fest</a>
              </li>
              <li>
                <a href="#games" className="hover:text-yellow-300 transition-colors">Games Library</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-yellow-300 transition-colors">Price & Rig Calculator</a>
              </li>
              <li>
                <a href="#community" className="hover:text-yellow-300 transition-colors">Gamer Reviews & LFG</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Venue Info */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Hours & Access
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-zinc-300">
                <Clock className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>10:00 AM – 11:00 PM (Daily)</span>
              </div>
              <div className="flex items-start gap-2 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>MVV6+83J, Shastri Nagar, Jammu 180004</span>
              </div>
              <div className="flex items-start gap-2 text-zinc-300">
                <PhoneCall className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <a href={`tel:${VENUE_INFO.phone}`} className="hover:text-yellow-300">{VENUE_INFO.phone}</a>
              </div>
            </div>
          </div>

          {/* Col 5: Actions & Back to top */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Connect & Book
            </h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2 px-3 rounded-lg bg-purple-700 hover:bg-purple-600 text-white font-display font-bold text-xs uppercase tracking-wider border border-yellow-400/40 text-center cursor-pointer"
              >
                Book Rig Slot
              </button>
              <button
                onClick={onOpenLocation}
                className="w-full py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-semibold border border-purple-900/60 text-center cursor-pointer"
              >
                Venue Directions
              </button>
              <button
                onClick={scrollToTop}
                className="w-full py-2 px-3 rounded-lg bg-transparent hover:bg-purple-950/40 text-zinc-400 hover:text-white text-xs flex items-center justify-center gap-1 border border-zinc-900 cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5 text-yellow-400" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>
            © {new Date().getFullYear()} HIVE The Gaming Arena • Shastri Nagar, Jammu, Jammu & Kashmir 180004.
          </p>
          <p className="flex items-center gap-1">
            Built for the Jammu Esports & Gaming Community
          </p>
        </div>

      </div>
    </footer>
  );
};
