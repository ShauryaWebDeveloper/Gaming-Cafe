import React, { useState } from 'react';
import { 
  Gamepad, 
  Search, 
  Monitor, 
  Glasses, 
  Smartphone, 
  Trophy, 
  Sparkles,
  Layers
} from 'lucide-react';
import { GAMES_LIBRARY } from '../data/arenaData';

interface GamesLibraryProps {
  onSelectGameForBooking?: (gameTitle: string) => void;
}

export const GamesLibrary: React.FC<GamesLibraryProps> = ({ onSelectGameForBooking }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');

  const filteredGames = GAMES_LIBRARY.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.tag.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedPlatform === 'All') return matchesSearch;
    if (selectedPlatform === 'Esports') return matchesSearch && game.esportsTitle;
    return matchesSearch && game.platform.includes(selectedPlatform as any);
  });

  const getPlatformBadge = (platform: string) => {
    switch (platform) {
      case 'PC':
        return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/50 text-[10px]"><Monitor className="w-3 h-3" /> PC</span>;
      case 'PlayStation 5':
        return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/50 text-[10px]"><Gamepad className="w-3 h-3" /> PS5</span>;
      case 'VR':
        return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-yellow-950/60 text-yellow-300 border border-yellow-800/50 text-[10px]"><Glasses className="w-3 h-3" /> VR</span>;
      case 'Mobile':
        return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/50 text-[10px]"><Smartphone className="w-3 h-3" /> Mobile</span>;
      default:
        return null;
    }
  };

  return (
    <section id="games" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#090516]">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-900/50 border border-purple-700/50 text-purple-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Gamepad className="w-3.5 h-3.5 text-yellow-400" />
              Titles & Playlists
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              ARENA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-300">GAMES</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              From global competitive FPS to fighting tournaments and casual co-op sessions.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="games-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Valorant, CS2, Tekken..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#130b24] border border-purple-800/70 text-zinc-100 placeholder-zinc-500 text-xs focus:border-yellow-400 outline-none transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {['All', 'Esports', 'PC', 'PlayStation 5', 'VR', 'Mobile'].map((plat) => (
            <button
              key={plat}
              id={`game-filter-${plat.toLowerCase().replace(' ', '-')}`}
              onClick={() => setSelectedPlatform(plat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-display tracking-wide transition-all cursor-pointer ${
                selectedPlatform === plat
                  ? 'bg-yellow-400 text-black shadow-md shadow-yellow-400/20 font-bold'
                  : 'bg-[#120a22] text-zinc-300 hover:bg-purple-950/60 border border-purple-900/60'
              }`}
            >
              {plat === 'Esports' ? '🏆 Tournament Titles' : plat}
            </button>
          ))}
          <span className="text-xs text-zinc-500 ml-auto hidden sm:inline">
            Showing {filteredGames.length} titles
          </span>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              id={`game-card-${game.id}`}
              className="group rounded-2xl bg-[#0f0923] border border-purple-900/60 hover:border-yellow-400/70 p-5 transition-all duration-300 flex flex-col justify-between hover:-translate-y-0.5 shadow-lg shadow-black/30"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-purple-950/80 text-purple-300 border border-purple-800/40">
                    {game.genre}
                  </span>
                  {game.esportsTitle && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 flex items-center gap-1">
                      <Trophy className="w-2.5 h-2.5" />
                      Esports
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-yellow-300 transition-colors mb-1.5">
                  {game.title}
                </h3>
                
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {game.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-3 pt-3 border-t border-purple-950">
                  {game.platform.map((p, i) => (
                    <React.Fragment key={i}>{getPlatformBadge(p)}</React.Fragment>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-2 border-t border-purple-900/40">
                  <span className="font-mono text-purple-300 text-[10px]">{game.tag}</span>
                  {onSelectGameForBooking && (
                    <button
                      onClick={() => onSelectGameForBooking(game.title)}
                      className="text-yellow-400 hover:text-yellow-300 font-semibold cursor-pointer"
                    >
                      Book Slot →
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bring Your Own Game / Request Account Banner */}
        <div className="mt-8 p-4 rounded-xl bg-purple-950/30 border border-purple-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-300">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-yellow-400 flex-shrink-0" />
            <span>
              <strong>Own your Steam, Riot, or Epic Games account?</strong> Log in seamlessly on our high-speed fiber machines or use arena-provided guest profiles.
            </span>
          </div>
          <span className="text-yellow-300 font-semibold flex-shrink-0">
            Pre-installed & Updated Daily
          </span>
        </div>

      </div>
    </section>
  );
};
