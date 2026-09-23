import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GamingZones } from './components/GamingZones';
import { TournamentsSection } from './components/TournamentsSection';
import { GamesLibrary } from './components/GamesLibrary';
import { BookingSimulator } from './components/BookingSimulator';
import { CommunityAndReviews } from './components/CommunityAndReviews';
import { LocationAndContact } from './components/LocationAndContact';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { CombinedCodeModal } from './components/CombinedCodeModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [combinedModalOpen, setCombinedModalOpen] = useState(false);
  const [selectedZoneForBooking, setSelectedZoneForBooking] = useState<string>('pc-battlestations');

  const handleOpenBooking = (zoneId?: string) => {
    if (zoneId) {
      setSelectedZoneForBooking(zoneId);
    }
    setBookingModalOpen(true);
  };

  const handleOpenLocation = () => {
    const locElement = document.getElementById('location');
    if (locElement) {
      locElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectZoneFromList = (zoneId: string) => {
    setSelectedZoneForBooking(zoneId);
    // Scroll smoothly to the booking simulator or open modal
    const calc = document.getElementById('calculator');
    if (calc) {
      calc.scrollIntoView({ behavior: 'smooth' });
    } else {
      setBookingModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#070411] text-zinc-100 flex flex-col font-['Outfit',sans-serif]">
      {/* Top Navbar */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenLocation={handleOpenLocation} 
        onOpenCombinedCode={() => setCombinedModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenLocation={handleOpenLocation} 
        />

        {/* Gaming Zones: PC, PS5, VR, Pool & Snooker, Cafe */}
        <GamingZones 
          onSelectZone={handleSelectZoneFromList} 
        />

        {/* Tournaments & LAN Festivities */}
        <TournamentsSection />

        {/* Games Library with Filters */}
        <GamesLibrary 
          onSelectGameForBooking={(game) => handleOpenBooking('pc-battlestations')} 
        />

        {/* Interactive Booking & Rate Calculator */}
        <BookingSimulator 
          preselectedZone={selectedZoneForBooking} 
        />

        {/* Verified Reviews (4.6★ Google rating) & Community LFG Board */}
        <CommunityAndReviews />

        {/* Shastri Nagar, Jammu Location, Plus Code, Hours & Directions */}
        <LocationAndContact />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenLocation={handleOpenLocation} 
      />

      {/* Floating Booking Modal */}
      <BookingModal 
        isOpen={bookingModalOpen} 
        onClose={() => setBookingModalOpen(false)} 
        initialZone={selectedZoneForBooking} 
      />

      {/* Standalone Combined Single-File HTML/CSS/JS Modal */}
      <CombinedCodeModal
        isOpen={combinedModalOpen}
        onClose={() => setCombinedModalOpen(false)}
      />
    </div>
  );
}
