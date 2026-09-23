import React, { useState } from 'react';
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  Coins, 
  Users, 
  Flame, 
  CheckCircle, 
  Award, 
  ExternalLink,
  ShieldCheck,
  Send,
  Zap,
  Sparkles
} from 'lucide-react';
import { TOURNAMENTS, VENUE_INFO } from '../data/arenaData';
import { Tournament } from '../types';

export const TournamentsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'fest' | 'valorant'>('all');
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);

  // Form states for tournament registration
  const [teamName, setTeamName] = useState('');
  const [captainName, setCaptainName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedGame, setSelectedGame] = useState('Valorant');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleOpenRegister = (tournament?: Tournament) => {
    setSelectedTournament(tournament || TOURNAMENTS[0]);
    setRegistrationSuccess(false);
    setRegisterModalOpen(true);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistrationSuccess(true);
  };

  return (
    <section id="tournaments" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#070410] border-t border-purple-950">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-purple-700/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-yellow-400" />
            Competitive Esports Hub
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mb-4">
            ESPORTS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-purple-300 to-purple-400">TOURNAMENTS</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            HIVE is Jammu&apos;s battleground for organized LAN competitions. We provide regional athletes with official tournament refereeing, synchronized LAN ping, and real cash prize pools.
          </p>
        </div>

        {/* Big Spotlight Banner: HIVE Gaming Fest 2026 */}
        <div className="rounded-3xl bg-gradient-to-br from-[#1b0d38] via-[#120826] to-[#080512] border-2 border-yellow-400/80 p-6 sm:p-10 mb-12 shadow-2xl shadow-purple-950/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-yellow-400 text-black font-display font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                FLAGSHIP ESPORTS SHOWCASE
              </span>
              <span className="px-3 py-1 rounded-md bg-purple-900/60 border border-purple-600/50 text-purple-200 text-xs font-semibold">
                April 2026 Season
              </span>
            </div>
            
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Free Entry (Sponsored by HIVE)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
                HIVE GAMING FEST <span className="text-yellow-400">2026</span>
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Jammu&apos;s biggest multi-game offline LAN celebration held across key dates in April 2026. Designed to unify PC, console, and mobile athletes into a single regional esports ecosystem with free entry and a massive prize pool.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-800/60">
                  <span className="text-[11px] text-zinc-400 block uppercase">Total Prize Pool</span>
                  <span className="font-display font-black text-xl text-yellow-300">₹60,000</span>
                </div>
                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-800/60">
                  <span className="text-[11px] text-zinc-400 block uppercase">Registration Fee</span>
                  <span className="font-display font-black text-xl text-emerald-400">FREE ENTRY</span>
                </div>
                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-800/60 col-span-2 sm:col-span-1">
                  <span className="text-[11px] text-zinc-400 block uppercase">Venue Stage</span>
                  <span className="font-display font-bold text-sm text-white truncate block">HIVE LAN Stage</span>
                </div>
              </div>

              {/* Tournament Games Breakdown */}
              <div className="pt-2">
                <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider block mb-2">
                  Featured 6 Tournament Titles:
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Tekken 8', 'FC26 (FIFA)', 'Valorant (5v5)', 'Counter-Strike 2', 'BGMI Mobile', 'Free Fire Max'].map((g, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 rounded-lg bg-black/60 border border-yellow-400/40 text-yellow-200 text-xs font-display font-semibold"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-black/50 border border-purple-800/80 rounded-2xl p-6 space-y-4">
              <h4 className="font-display font-bold text-sm text-yellow-300 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4 text-yellow-400" />
                Tournament Highlights & Format
              </h4>
              <ul className="space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Tekken 8 & FC26 1v1 console brackets on 4K big-screen stage with crowd shoutcasting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>5v5 offline PC LAN bracket for Valorant and CS2 on zero-ping arena servers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Mobile battle royale stations with dedicated arena Wi-Fi for BGMI & Free Fire squads.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Medals, trophies, and official HIVE Jammu Esports recognition for winners.</span>
                </li>
              </ul>

              <div className="pt-3 border-t border-purple-900/60">
                <button
                  id="register-fest-btn"
                  onClick={() => handleOpenRegister(TOURNAMENTS[0])}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black font-display font-black text-xs uppercase tracking-wider shadow-lg shadow-yellow-400/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Zap className="w-4 h-4" />
                  <span>Join Next Event Roster</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Tournaments Grid (Valorant 2025 LAN & Upcoming Series) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Valorant LAN Tournament June 2025 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0e081e] border border-purple-900/70 hover:border-purple-600 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-purple-900/60 border border-purple-600 text-purple-200 text-xs font-semibold">
                  14 – 15 June 2025
                </span>
                <span className="px-2.5 py-1 rounded bg-yellow-400/10 text-yellow-300 border border-yellow-400/30 text-xs font-bold font-display">
                  ₹10,000 Prize Pool
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Valorant 5v5 LAN Championship
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mb-4 leading-relaxed">
                The landmark offline 5v5 tournament that brought Jammu&apos;s tactical shooter community together. Featured dedicated 10-PC synchronized LAN setups, referee checks, and group stages into a best-of-three grand final.
              </p>

              <div className="space-y-2 mb-6 text-xs text-zinc-300 bg-purple-950/30 p-3.5 rounded-xl border border-purple-900/40">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Entry Option:</span>
                  <span className="font-semibold text-white">₹249 Solo / ₹999 Squad (5 Players)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Match Format:</span>
                  <span className="font-semibold text-white">5v5 Tournament Mode (Double Elimination)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Venue:</span>
                  <span className="font-semibold text-white">HIVE PC Battlestations, Shastri Nagar</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-purple-900/50">
              <span className="text-xs text-purple-300 font-medium">Archived Championship Record</span>
              <button
                onClick={() => handleOpenRegister(TOURNAMENTS[1])}
                className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-zinc-200 border border-purple-800/50 cursor-pointer"
              >
                View Tournament Info
              </button>
            </div>
          </div>

          {/* Card 2: Upcoming Autumn / Regular Community Cups */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0e081e] border border-yellow-400/40 hover:border-yellow-400/80 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-yellow-400 text-black text-xs font-display font-black uppercase">
                  Upcoming Series
                </span>
                <span className="px-2.5 py-1 rounded bg-purple-900/60 text-purple-200 border border-purple-600/50 text-xs font-bold font-display">
                  ₹25,000+ Prize Pool
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-2">
                HIVE Community LAN Cups
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mb-4 leading-relaxed">
                Regular weekend showdowns across Valorant, Counter-Strike 2, Tekken 8, and FC26. Open to all regional rosters, college squads, and free-agent players in Jammu.
              </p>

              <div className="space-y-2 mb-6 text-xs text-zinc-300 bg-purple-950/30 p-3.5 rounded-xl border border-purple-900/40">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Eligibility:</span>
                  <span className="font-semibold text-white">Open to all Jammu & Kashmir Gamers</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Team Size:</span>
                  <span className="font-semibold text-white">1v1 (Console/Fighting) or 5v5 (PC FPS)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Practice Perk:</span>
                  <span className="font-semibold text-yellow-300">Discounted Scrim Slots for Registered Teams</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-purple-900/50">
              <span className="text-xs text-yellow-300 font-semibold flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                Registrations Active
              </span>
              <button
                id="register-upcoming-btn"
                onClick={() => handleOpenRegister(TOURNAMENTS[2])}
                className="px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-display font-bold uppercase tracking-wider cursor-pointer transition-colors"
              >
                Register Squad
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Tournament Registration Modal */}
      {registerModalOpen && selectedTournament && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0f0923] border border-yellow-400/80 rounded-2xl max-w-lg w-full p-6 text-zinc-100 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-900/60">
              <div className="flex items-center gap-2.5">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <h3 className="font-display font-bold text-lg text-white">
                  Tournament Registration
                </h3>
              </div>
              <button
                onClick={() => setRegisterModalOpen(false)}
                className="text-zinc-400 hover:text-white p-1 rounded-md"
              >
                ✕
              </button>
            </div>

            {registrationSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-xl text-white">
                  Registration Inquiry Recorded!
                </h4>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-yellow-300">{captainName || 'Player'}</strong>. Your squad <strong className="text-white">({teamName || 'Free Agent'})</strong> has been submitted for <strong className="text-white">{selectedGame}</strong> at HIVE The Gaming Arena, Shastri Nagar, Jammu.
                </p>
                <div className="p-3 bg-purple-950/40 rounded-xl border border-purple-800/40 text-xs text-purple-300">
                  Our tournament director will contact you via WhatsApp / Phone to confirm bracket placement & check-in timings.
                </div>
                <button
                  onClick={() => setRegisterModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase font-display"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-4 text-xs">
                <div className="p-3 bg-purple-950/40 rounded-xl border border-purple-800/40">
                  <span className="text-[10px] text-zinc-400 block uppercase font-bold">Event</span>
                  <span className="font-display font-bold text-sm text-yellow-300">{selectedTournament.title}</span>
                  <div className="flex justify-between text-zinc-300 mt-1 text-[11px]">
                    <span>Prize: {selectedTournament.prizePool}</span>
                    <span>Venue: Shastri Nagar, Jammu</span>
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">
                    Select Tournament Game:
                  </label>
                  <select
                    value={selectedGame}
                    onChange={(e) => setSelectedGame(e.target.value)}
                    className="w-full bg-[#160d30] border border-purple-800/80 rounded-lg p-2.5 text-zinc-200 focus:border-yellow-400 outline-none"
                  >
                    <option value="Valorant (5v5 PC)">Valorant (5v5 PC)</option>
                    <option value="Counter-Strike 2 (5v5 PC)">Counter-Strike 2 (5v5 PC)</option>
                    <option value="Tekken 8 (1v1 PS5)">Tekken 8 (1v1 PS5)</option>
                    <option value="FC26 / FIFA (1v1 PS5)">FC26 / FIFA (1v1 PS5)</option>
                    <option value="BGMI (Squad Mobile)">BGMI (Squad Mobile)</option>
                    <option value="Free Fire (Squad Mobile)">Free Fire (Squad Mobile)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Team / Clan Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jammu Knights"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      className="w-full bg-[#160d30] border border-purple-800/80 rounded-lg p-2.5 text-zinc-200 focus:border-yellow-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Captain / Player Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name / IGN"
                      value={captainName}
                      onChange={(e) => setCaptainName(e.target.value)}
                      className="w-full bg-[#160d30] border border-purple-800/80 rounded-lg p-2.5 text-zinc-200 focus:border-yellow-400 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">WhatsApp / Contact Number (Jammu/India)</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 94191 XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#160d30] border border-purple-800/80 rounded-lg p-2.5 text-zinc-200 focus:border-yellow-400 outline-none"
                  />
                  <span className="text-[10px] text-zinc-400 mt-1 block">
                    We will send rules, bracket draw & reporting schedule to this number.
                  </span>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setRegisterModalOpen(false)}
                    className="flex-1 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black font-display font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-yellow-400/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Roster</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
