import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Monitor, 
  Gamepad2, 
  Glasses, 
  CircleDot, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  Send,
  MessageSquare,
  PhoneCall
} from 'lucide-react';
import { VENUE_INFO } from '../data/arenaData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialZone?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialZone = 'pc-battlestations'
}) => {
  const [zone, setZone] = useState(initialZone);
  const [players, setPlayers] = useState(2);
  const [duration, setDuration] = useState(2);
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('17:00');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'HIVE-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setConfirmed(true);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hi HIVE The Gaming Arena Jammu! I'd like to book:
• Zone: ${zone}
• Players: ${players}
• Date: ${date}
• Time: ${time}
• Duration: ${duration} hours
• Name: ${name || 'Gamer'}
• Phone: ${phone}`
    );
    return `https://wa.me/${VENUE_INFO.whatsapp}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0f0923] border border-yellow-400/80 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-zinc-100 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-purple-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-900/80 border border-purple-600 flex items-center justify-center text-yellow-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
                BOOK GAMING RIG / SLOT
              </h3>
              <span className="text-xs text-yellow-300 font-semibold">
                HIVE Arena • Shastri Nagar, Jammu
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-purple-900/40 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmed ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h4 className="font-display font-bold text-2xl text-white">
              Booking Request Received!
            </h4>

            <div className="p-4 bg-purple-950/60 rounded-2xl border border-purple-800/80 text-left text-xs space-y-2 text-zinc-300">
              <div className="flex justify-between font-mono text-yellow-300 pb-1 border-b border-purple-800">
                <span>Pass Reference:</span>
                <span className="font-bold">#{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Gamer:</span>
                <span className="font-semibold text-white">{name || 'Guest'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Date & Slot:</span>
                <span className="font-semibold text-white">{date} at {time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Stations:</span>
                <span className="font-semibold text-white">{players} Players ({duration}h)</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mx-auto">
              Please arrive 10 minutes prior to your slot in Shastri Nagar. You can also confirm via instant WhatsApp message below:
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="py-3 px-6 rounded-xl bg-purple-700 hover:bg-purple-600 text-white font-display font-bold text-xs uppercase"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            {/* Zone Picker */}
            <div>
              <label className="block text-zinc-300 font-semibold mb-1.5 uppercase text-[11px] tracking-wider">
                Select Gaming Experience:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'pc-battlestations', label: 'PC Battlestations', icon: Monitor },
                  { id: 'playstation-lounge', label: 'PlayStation 5', icon: Gamepad2 },
                  { id: 'vr-experience', label: 'VR Immersion Pods', icon: Glasses },
                  { id: 'pool-snooker', label: 'Pool & Snooker', icon: CircleDot }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setZone(item.id)}
                      className={`p-2.5 rounded-xl border text-left flex items-center gap-2 cursor-pointer transition-all ${
                        zone === item.id
                          ? 'bg-purple-900/80 border-yellow-400 text-white'
                          : 'bg-[#150d2e] border-purple-900/60 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                      <span className="font-semibold truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Players & Duration */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-zinc-300 font-semibold mb-1">
                  Players / Stations
                </label>
                <select
                  value={players}
                  onChange={(e) => setPlayers(Number(e.target.value))}
                  className="w-full bg-[#150d2e] border border-purple-800/80 rounded-xl p-2.5 text-zinc-100 outline-none focus:border-yellow-400"
                >
                  <option value={1}>1 Player (Solo)</option>
                  <option value={2}>2 Players (Duo)</option>
                  <option value={3}>3 Players (Trio)</option>
                  <option value={5}>5 Players (Full Squad Scrim)</option>
                  <option value={10}>10 Players (5v5 LAN Stage)</option>
                </select>
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">
                  Duration (Hours)
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full bg-[#150d2e] border border-purple-800/80 rounded-xl p-2.5 text-zinc-100 outline-none focus:border-yellow-400"
                >
                  <option value={1}>1 Hour</option>
                  <option value={2}>2 Hours (Most Popular Deal)</option>
                  <option value={3}>3 Hours (Ranked Grind)</option>
                  <option value={5}>5 Hours (All-Night Pass)</option>
                </select>
              </div>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-zinc-300 font-semibold mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#150d2e] border border-purple-800/80 rounded-xl p-2.5 text-zinc-100 outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">
                  Time Slot (10 AM – 11 PM)
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#150d2e] border border-purple-800/80 rounded-xl p-2.5 text-zinc-100 outline-none focus:border-yellow-400"
                >
                  <option value="10:30">10:30 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="18:00">06:00 PM (Prime)</option>
                  <option value="20:00">08:00 PM (Prime)</option>
                  <option value="21:30">09:30 PM (Late Night)</option>
                </select>
              </div>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-zinc-300 font-semibold mb-1">
                  Your Name / Tag
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sahil"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#150d2e] border border-purple-800/80 rounded-xl p-2.5 text-zinc-100 outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 94191 XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#150d2e] border border-purple-800/80 rounded-xl p-2.5 text-zinc-100 outline-none focus:border-yellow-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-zinc-300 font-semibold mb-1">
                Specific Game / Peripheral Requests (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Bring our own mice, want adjacent 5 PCs for Valorant"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#150d2e] border border-purple-800/80 rounded-xl p-2.5 text-zinc-100 outline-none focus:border-yellow-400"
              />
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-display font-bold uppercase tracking-wider shadow-md shadow-yellow-400/20"
              >
                Submit Slot Inquiry
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
