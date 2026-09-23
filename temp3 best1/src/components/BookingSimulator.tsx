import React, { useState } from 'react';
import { 
  Calculator, 
  Monitor, 
  Gamepad2, 
  Glasses, 
  CircleDot, 
  Clock, 
  Users, 
  Calendar, 
  Check, 
  PhoneCall, 
  Share2, 
  Sparkles, 
  Receipt, 
  AlertCircle,
  MessageSquare
} from 'lucide-react';
import { VENUE_INFO } from '../data/arenaData';

interface BookingSimulatorProps {
  preselectedZone?: string;
}

export const BookingSimulator: React.FC<BookingSimulatorProps> = ({ preselectedZone }) => {
  const [selectedZone, setSelectedZone] = useState<string>(preselectedZone || 'pc');
  const [players, setPlayers] = useState<number>(2);
  const [durationHours, setDurationHours] = useState<number>(2);
  const [date, setDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState<string>('16:00');
  const [addSnacks, setAddSnacks] = useState<boolean>(false);
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [generatedTicket, setGeneratedTicket] = useState<{
    id: string;
    zoneName: string;
    totalEst: number;
    createdAt: string;
  } | null>(null);

  // Rate calculations
  const getHourlyRatePerPlayer = (zone: string) => {
    switch (zone) {
      case 'pc':
        // Ref: ₹250 for 2 hours => ₹125/hr
        return 125;
      case 'console':
        return 150;
      case 'vr':
        return 250;
      case 'cue':
        return 200; // Flat table rate roughly
      default:
        return 125;
    }
  };

  const baseRate = getHourlyRatePerPlayer(selectedZone);
  const zoneMultiplier = selectedZone === 'cue' ? 1 : players; // pool table is usually per table
  const subtotal = baseRate * durationHours * zoneMultiplier;
  const snackCombo = addSnacks ? 120 * players : 0;
  const estimatedTotal = subtotal + snackCombo;

  const zoneNames: Record<string, string> = {
    pc: 'High-End PC Battlestation',
    console: 'PlayStation 5 Console Lounge',
    vr: 'VR Immersion Pod',
    cue: 'Pool & Snooker Table'
  };

  const handleGenerateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketId = 'HIVE-' + Math.floor(100000 + Math.random() * 900000);
    setGeneratedTicket({
      id: ticketId,
      zoneName: zoneNames[selectedZone] || 'Gaming Zone',
      totalEst: estimatedTotal,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
  };

  const getWhatsAppMessage = () => {
    const msg = `Hi HIVE The Gaming Arena Jammu! I would like to reserve:
• Zone: ${zoneNames[selectedZone]}
• Players: ${players}
• Date: ${date}
• Time: ${timeSlot}
• Duration: ${durationHours} hour(s)
• Name: ${customerName || 'Gamer'}
• Phone: ${phone || 'Provided at counter'}`;
    return encodeURIComponent(msg);
  };

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#070411]">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-yellow-400" />
            Interactive Planning
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mb-3">
            SLOT & RATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-purple-400">CALCULATOR</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Estimate session costs for your squad and generate an instant reservation inquiry for HIVE Arena, Shastri Nagar, Jammu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 bg-[#0e0821] border border-purple-900/70 rounded-3xl p-6 sm:p-8 space-y-6">
            
            {/* Step 1: Zone Selection */}
            <div>
              <label className="text-xs font-bold uppercase text-zinc-300 tracking-wider flex items-center gap-1.5 mb-3">
                <span className="w-5 h-5 rounded-full bg-purple-700 text-white flex items-center justify-center text-[10px]">1</span>
                Select Arena Zone
              </label>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'pc', label: 'PC LAN', icon: Monitor, tag: '180Hz+' },
                  { id: 'console', label: 'PS5 Lounge', icon: Gamepad2, tag: '4K HDR' },
                  { id: 'vr', label: 'VR Pod', icon: Glasses, tag: '360°' },
                  { id: 'cue', label: 'Pool Table', icon: CircleDot, tag: 'Billiards' },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = selectedZone === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      id={`calc-zone-${item.id}`}
                      onClick={() => setSelectedZone(item.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-purple-900/60 border-yellow-400 text-white shadow-md shadow-purple-950'
                          : 'bg-[#140b2a] border-purple-900/50 text-zinc-400 hover:text-white hover:border-purple-700'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-yellow-300' : 'text-purple-400'}`} />
                        <span className="text-[9px] font-mono text-zinc-400">{item.tag}</span>
                      </div>
                      <span className="font-display font-bold text-xs text-white block">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Players and Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase text-zinc-300 tracking-wider flex items-center justify-between mb-2">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-yellow-400" />
                    Number of Players
                  </span>
                  <span className="font-display font-bold text-yellow-300 text-sm">{players} {players === 1 ? 'Player' : 'Players'}</span>
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 5, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setPlayers(num)}
                      className={`flex-1 py-2 rounded-lg text-xs font-display font-bold transition-all cursor-pointer ${
                        players === num
                          ? 'bg-yellow-400 text-black shadow-sm'
                          : 'bg-[#150c2e] text-zinc-300 border border-purple-900/60 hover:bg-purple-950'
                      }`}
                    >
                      {num === 5 ? '5 (Team)' : num === 10 ? '10 (5v5)' : num}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-zinc-300 tracking-wider flex items-center justify-between mb-2">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    Session Duration
                  </span>
                  <span className="font-display font-bold text-purple-300 text-sm">{durationHours} Hours</span>
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 5].map((hrs) => (
                    <button
                      key={hrs}
                      type="button"
                      onClick={() => setDurationHours(hrs)}
                      className={`flex-1 py-2 rounded-lg text-xs font-display font-bold transition-all cursor-pointer ${
                        durationHours === hrs
                          ? 'bg-purple-600 text-white shadow-sm border border-yellow-400/50'
                          : 'bg-[#150c2e] text-zinc-300 border border-purple-900/60 hover:bg-purple-950'
                      }`}
                    >
                      {hrs}h {hrs === 2 && '🔥'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Date & Preferred Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase text-zinc-300 tracking-wider flex items-center gap-1.5 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-yellow-400" />
                  Select Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#150c2e] border border-purple-800/80 rounded-xl p-2.5 text-xs text-zinc-200 focus:border-yellow-400 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-zinc-300 tracking-wider flex items-center gap-1.5 mb-2">
                  <Clock className="w-3.5 h-3.5 text-yellow-400" />
                  Preferred Slot (10 AM – 11 PM)
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-[#150c2e] border border-purple-800/80 rounded-xl p-2.5 text-xs text-zinc-200 focus:border-yellow-400 outline-none"
                >
                  <option value="11:00">11:00 AM (Morning Grind)</option>
                  <option value="13:00">01:00 PM (Afternoon)</option>
                  <option value="15:00">03:00 PM (Casual Warmup)</option>
                  <option value="17:00">05:00 PM (Prime Ranked Hours)</option>
                  <option value="19:00">07:00 PM (Evening Squad Scrims)</option>
                  <option value="21:00">09:00 PM (Late Night Matchmaking)</option>
                </select>
              </div>
            </div>

            {/* Gamer Combo Add-on */}
            <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-900/60 flex items-center justify-between cursor-pointer" onClick={() => setAddSnacks(!addSnacks)}>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={addSnacks}
                  onChange={(e) => setAddSnacks(e.target.checked)}
                  className="w-4 h-4 rounded text-purple-600 focus:ring-yellow-400 accent-purple-600 cursor-pointer"
                />
                <div>
                  <span className="text-xs font-bold text-white block">
                    Add HIVE Fuel Snack & Energy Drink Combo
                  </span>
                  <span className="text-[11px] text-zinc-400">
                    Chilled energy drink / brew + loaded nachos combo (+₹120 / player)
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-yellow-300">+₹{120 * players}</span>
            </div>

            {/* Gamer Contact Details */}
            <form onSubmit={handleGenerateTicket} className="space-y-3 pt-2 border-t border-purple-900/50">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name / Gamer Tag"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-[#150c2e] border border-purple-800/80 rounded-xl p-2.5 text-xs text-zinc-200 placeholder-zinc-500 focus:border-yellow-400 outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#150c2e] border border-purple-800/80 rounded-xl p-2.5 text-xs text-zinc-200 placeholder-zinc-500 focus:border-yellow-400 outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <button
                  type="submit"
                  id="calc-generate-ticket-btn"
                  className="flex-1 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-display font-bold text-xs uppercase tracking-wider border border-yellow-400/50 shadow-md shadow-purple-950 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Receipt className="w-4 h-4 text-yellow-300" />
                  <span>Generate Booking Inquiry</span>
                </button>

                <a
                  href={`https://wa.me/${VENUE_INFO.whatsapp}?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquire</span>
                </a>
              </div>
            </form>

          </div>

          {/* Right Column: Price Estimate Breakdown & Ticket Preview */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Live Calculation Receipt Card */}
            <div className="bg-[#100926] border-2 border-purple-800/80 rounded-3xl p-6 relative overflow-hidden shadow-xl shadow-black/50">
              <div className="flex items-center justify-between pb-4 border-b border-purple-900/60 mb-4">
                <div className="flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-yellow-400" />
                  <span className="font-display font-bold text-sm text-white uppercase tracking-wider">
                    ESTIMATED SUMMARY
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/50">
                  SHASTRI NAGAR
                </span>
              </div>

              <div className="space-y-3 text-xs text-zinc-300 mb-6">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Selected Zone:</span>
                  <span className="font-semibold text-white">{zoneNames[selectedZone]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Setup Scope:</span>
                  <span className="font-semibold text-white">
                    {players} {players === 1 ? 'Station' : 'Stations'} × {durationHours}h
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Date & Slot:</span>
                  <span className="font-semibold text-white">{date} @ {timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Reference Hourly Base:</span>
                  <span className="font-mono text-zinc-300">₹{baseRate} / player/hr</span>
                </div>
                {addSnacks && (
                  <div className="flex justify-between text-yellow-300">
                    <span>HIVE Fuel Snack Pack:</span>
                    <span className="font-mono font-bold">+₹{snackCombo}</span>
                  </div>
                )}

                <div className="pt-3 border-t border-purple-900/60 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-zinc-400 block uppercase font-bold">Estimated Cost</span>
                    <span className="text-[10px] text-zinc-500">Subject to active packages</span>
                  </div>
                  <div className="text-right">
                    <span className="font-display font-black text-3xl text-yellow-300">
                      ₹{estimatedTotal}
                    </span>
                    <span className="text-[10px] text-zinc-400 block">
                      (Approx ₹{Math.round(estimatedTotal / players)} / player)
                    </span>
                  </div>
                </div>
              </div>

              {/* Rate Transparency Disclaimer Note */}
              <div className="p-3 bg-purple-950/40 rounded-xl border border-purple-900/50 text-[11px] text-zinc-400 leading-snug flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Notice:</strong> Rates are based on publicly reported pricing (e.g. ₹250 for 2h PC gaming from Sep 2025). Special student discounts, day passes, and seasonal tournament rates are finalized directly at the HIVE arena reception desk.
                </span>
              </div>
            </div>

            {/* Generated Ticket Box */}
            {generatedTicket && (
              <div className="bg-gradient-to-br from-purple-950 to-[#0e0821] border border-yellow-400/80 rounded-2xl p-5 shadow-lg relative animate-in fade-in slide-in-from-bottom-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded bg-yellow-400 text-black font-display font-black text-[10px] uppercase">
                    INQUIRY PASS READY
                  </span>
                  <span className="text-[11px] font-mono text-yellow-300 font-bold">
                    #{generatedTicket.id}
                  </span>
                </div>
                <h4 className="font-display font-bold text-base text-white mb-1">
                  {customerName ? `${customerName}'s Reservation` : 'Gamer Pass'}
                </h4>
                <p className="text-xs text-zinc-300 mb-3">
                  Show this pass or reference number when arriving at HIVE in Shastri Nagar, Jammu for swift check-in.
                </p>
                <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 border-t border-purple-800/60">
                  <span>Generated at {generatedTicket.createdAt}</span>
                  <a
                    href={`tel:${VENUE_INFO.phone}`}
                    className="text-yellow-300 hover:underline font-semibold flex items-center gap-1"
                  >
                    <PhoneCall className="w-3 h-3" />
                    Call Reception
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
