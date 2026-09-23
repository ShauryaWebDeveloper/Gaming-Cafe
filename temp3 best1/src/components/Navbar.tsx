import React, { useState, useEffect } from 'react';
import { 
  Gamepad2, 
  MapPin, 
  Clock, 
  Trophy, 
  Users, 
  Menu, 
  X, 
  Sparkles,
  ChevronRight,
  PhoneCall,
  FileCode
} from 'lucide-react';
import { VENUE_INFO } from '../data/arenaData';

interface NavbarProps {
  onOpenBooking: (zoneId?: string) => void;
  onOpenLocation: () => void;
  onOpenCombinedCode?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenLocation, onOpenCombinedCode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if open (10:00 to 23:00)
    const now = new Date();
    const currentHour = now.getHours();
    setIsOpenNow(currentHour >= 10 && currentHour < 23);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div id="top-announcement-bar" className="bg-[#0b0617] border-b border-purple-900/40 text-xs py-1.5 px-4 text-zinc-300 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-yellow-400/10 text-yellow-300 border border-yellow-400/30">
              <span className={`w-1.5 h-1.5 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              {isOpenNow ? 'ARENA OPEN NOW' : 'OPENS AT 10:00 AM'}
            </span>
            <span className="hidden sm:inline text-zinc-400">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-purple-400" />
              10:00 AM – 11:00 PM Daily
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              id="top-bar-location-btn"
              onClick={onOpenLocation}
              className="inline-flex items-center gap-1 text-zinc-300 hover:text-yellow-300 transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-yellow-400" />
              <span>Shastri Nagar, Jammu (MVV6+83J)</span>
            </button>
            <span className="hidden md:inline text-zinc-500">•</span>
            <a 
              href={`tel:${VENUE_INFO.phone}`} 
              className="hidden md:inline-flex items-center gap-1 text-purple-300 hover:text-purple-200 transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-purple-400" />
              <span>{VENUE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header 
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#080511]/95 backdrop-blur-md border-b border-purple-900/60 shadow-lg shadow-purple-950/20 py-3' 
            : 'bg-[#080511]/80 backdrop-blur-sm border-b border-purple-900/20 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-purple-700 via-purple-900 to-black border border-purple-500/50 group-hover:border-yellow-400/80 transition-all shadow-md shadow-purple-900/30">
              <Gamepad2 className="w-6 h-6 text-yellow-300 group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping opacity-75" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-2xl tracking-wider text-white">
                  HIVE
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase rounded bg-yellow-400 text-black font-display tracking-tight">
                  ARENA
                </span>
              </div>
              <span className="text-[11px] tracking-wider text-purple-300/80 uppercase font-semibold">
                Jammu Esports Venue
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
            <a 
              href="#zones" 
              className="hover:text-yellow-300 transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-yellow-400"
            >
              Gaming Zones
            </a>
            <a 
              href="#tournaments" 
              className="hover:text-yellow-300 transition-colors py-1 flex items-center gap-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-yellow-400"
            >
              <Trophy className="w-3.5 h-3.5 text-yellow-400" />
              Tournaments
            </a>
            <a 
              href="#games" 
              className="hover:text-yellow-300 transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-yellow-400"
            >
              Games Library
            </a>
            <a 
              href="#community" 
              className="hover:text-yellow-300 transition-colors py-1 flex items-center gap-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-yellow-400"
            >
              <Users className="w-3.5 h-3.5 text-purple-400" />
              Community & Reviews
            </a>
            <a 
              href="#location" 
              className="hover:text-yellow-300 transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-yellow-400"
            >
              Location & Hours
            </a>
            <a 
              href="#faqs" 
              className="hover:text-yellow-300 transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-yellow-400"
            >
              FAQs
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenCombinedCode && (
              <button
                id="header-combined-code-btn"
                onClick={onOpenCombinedCode}
                className="px-3 py-2 text-xs font-bold text-yellow-300 hover:text-white rounded-lg border border-yellow-400/50 hover:border-yellow-400 bg-yellow-400/10 hover:bg-yellow-400/20 transition-all flex items-center gap-1.5 cursor-pointer"
                title="Single combined HTML + CSS + JS file"
              >
                <FileCode className="w-3.5 h-3.5 text-yellow-400" />
                <span>Combined HTML/CSS/JS</span>
              </button>
            )}
            <button
              id="header-check-directions-btn"
              onClick={onOpenLocation}
              className="px-3 py-2 text-xs font-semibold text-zinc-300 hover:text-white rounded-lg border border-purple-800/60 hover:border-purple-600 bg-purple-950/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Find Venue</span>
            </button>
            <button
              id="header-book-slot-btn"
              onClick={() => onOpenBooking()}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white border border-yellow-400/50 shadow-md shadow-purple-900/30 hover:shadow-yellow-400/20 transition-all flex items-center gap-1.5 cursor-pointer group"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300 group-hover:rotate-12 transition-transform" />
              <span>Book Rig / Slot</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-quick-book-btn"
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-purple-700 text-white border border-yellow-400/40"
            >
              Book
            </button>
            <button
              id="mobile-nav-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-purple-900/30 border border-purple-800/50"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-nav-menu" className="lg:hidden bg-[#0c081c] border-b border-purple-900/80 px-4 pt-3 pb-6 mt-2 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-purple-900/40">
              <button
                id="mobile-book-rig-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 px-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border border-yellow-400/40"
              >
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                Book Rig
              </button>
              <button
                id="mobile-directions-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLocation();
                }}
                className="w-full py-2.5 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-bold text-xs flex items-center justify-center gap-1.5 border border-purple-800/60"
              >
                <MapPin className="w-3.5 h-3.5 text-yellow-400" />
                Directions
              </button>
            </div>

            <nav className="flex flex-col space-y-2 text-sm font-medium text-zinc-200">
              <a 
                href="#zones" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-purple-900/30"
              >
                <span>Gaming Zones (PC, Console, VR, Pool)</span>
                <ChevronRight className="w-4 h-4 text-purple-400" />
              </a>
              <a 
                href="#tournaments" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-purple-900/30 text-yellow-300"
              >
                <span className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  Tournaments & LAN Fest
                </span>
                <ChevronRight className="w-4 h-4 text-yellow-400" />
              </a>
              <a 
                href="#games" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-purple-900/30"
              >
                <span>Games Library</span>
                <ChevronRight className="w-4 h-4 text-purple-400" />
              </a>
              <a 
                href="#calculator" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-purple-900/30"
              >
                <span>Price Calculator & Rates</span>
                <ChevronRight className="w-4 h-4 text-purple-400" />
              </a>
              <a 
                href="#community" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-purple-900/30"
              >
                <span>Community & Reviews (4.6 ★)</span>
                <ChevronRight className="w-4 h-4 text-purple-400" />
              </a>
              <a 
                href="#location" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-purple-900/30"
              >
                <span>Shastri Nagar Location & Hours</span>
                <ChevronRight className="w-4 h-4 text-purple-400" />
              </a>
              <a 
                href="#faqs" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-purple-900/30"
              >
                <span>FAQs</span>
                <ChevronRight className="w-4 h-4 text-purple-400" />
              </a>
              {onOpenCombinedCode && (
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCombinedCode();
                  }}
                  className="w-full mt-2 p-2.5 rounded-lg bg-yellow-400/10 border border-yellow-400/40 text-yellow-300 font-bold flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <FileCode className="w-4 h-4" />
                    Combined HTML/CSS/JS File
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </nav>

            <div className="pt-2 text-xs text-zinc-400 border-t border-purple-900/40 flex items-center justify-between">
              <span>Shastri Nagar, Jammu</span>
              <a href={`tel:${VENUE_INFO.phone}`} className="text-yellow-300 font-semibold">{VENUE_INFO.phone}</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
