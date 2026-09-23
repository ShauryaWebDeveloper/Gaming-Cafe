import React, { useState } from 'react';
import { 
  Users, 
  Star, 
  MessageSquare, 
  ThumbsUp, 
  PlusCircle, 
  Send, 
  CheckCircle, 
  ShieldCheck, 
  Sparkles,
  Search,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { VERIFIED_REVIEWS, INITIAL_LFG_POSTS, VENUE_INFO } from '../data/arenaData';
import { GamerReview, CommunityLFG } from '../types';

export const CommunityAndReviews: React.FC = () => {
  const [reviews, setReviews] = useState<GamerReview[]>(VERIFIED_REVIEWS);
  const [lfgPosts, setLfgPosts] = useState<CommunityLFG[]>(INITIAL_LFG_POSTS);
  const [activeTab, setActiveTab] = useState<'reviews' | 'lfg'>('reviews');

  // New review form
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newGame, setNewGame] = useState('Valorant');
  const [newComment, setNewComment] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // New LFG form
  const [showLfgForm, setShowLfgForm] = useState(false);
  const [lfgAuthor, setLfgAuthor] = useState('');
  const [lfgGame, setLfgGame] = useState('Valorant');
  const [lfgRank, setLfgRank] = useState('');
  const [lfgLookingFor, setLfgLookingFor] = useState('');
  const [lfgContact, setLfgContact] = useState('');

  const handleHelpfulClick = (id: string) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r));
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const newRev: GamerReview = {
      id: `rev-${Date.now()}`,
      author: newAuthor,
      role: 'Jammu Gamer',
      rating: newRating,
      date: 'Just now',
      comment: newComment,
      verifiedVisit: true,
      gamePlayed: newGame,
      helpfulCount: 1
    };

    setReviews([newRev, ...reviews]);
    setReviewSubmitted(true);
    setTimeout(() => {
      setShowReviewForm(false);
      setReviewSubmitted(false);
      setNewAuthor('');
      setNewComment('');
    }, 2000);
  };

  const handleLfgSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lfgAuthor.trim() || !lfgLookingFor.trim()) return;

    const newPost: CommunityLFG = {
      id: `lfg-${Date.now()}`,
      author: lfgAuthor,
      game: lfgGame,
      rankOrLevel: lfgRank || 'All skill levels',
      lookingFor: lfgLookingFor,
      meetingTime: 'Today / Weekend at HIVE',
      discordOrContact: lfgContact || 'Meet at HIVE reception',
      createdAgo: 'Just now'
    };

    setLfgPosts([newPost, ...lfgPosts]);
    setShowLfgForm(false);
    setLfgAuthor('');
    setLfgRank('');
    setLfgLookingFor('');
    setLfgContact('');
  };

  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#090515] border-t border-purple-950">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-900/50 border border-purple-700/50 text-purple-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5 text-yellow-400" />
              Community & Verification
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              JAMMU&apos;S GAMING <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-300">COMMUNITY</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-base mt-2 max-w-xl">
              HIVE is where local players meet, build 5-man rosters for Valorant and CS2, spar in Tekken 8, and review the venue experience.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-2 p-1 bg-[#130b24] border border-purple-900/60 rounded-xl self-start md:self-end">
            <button
              id="tab-reviews-btn"
              onClick={() => setActiveTab('reviews')}
              className={`px-4 py-2 rounded-lg text-xs font-display font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'reviews'
                  ? 'bg-purple-600 text-white shadow-sm border border-yellow-400/50'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Star className="w-3.5 h-3.5 text-yellow-400" />
              <span>Gamer Reviews (4.6 ★)</span>
            </button>
            <button
              id="tab-lfg-btn"
              onClick={() => setActiveTab('lfg')}
              className={`px-4 py-2 rounded-lg text-xs font-display font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'lfg'
                  ? 'bg-yellow-400 text-black shadow-sm font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
              <span>Squad LFG Board</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Gamer Reviews & Google 4.6 Rating */}
        {activeTab === 'reviews' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            
            {/* Rating Highlight Banner */}
            <div className="rounded-3xl bg-gradient-to-r from-[#170a2f] via-[#100722] to-[#0a0515] border border-purple-800/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                <div className="flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-black/60 border border-yellow-400/60 p-2 shadow-inner">
                  <span className="font-display font-black text-3xl text-yellow-300">4.6</span>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-zinc-400 mt-1">Out of 5</span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-1">
                    Verified Google Business Rating
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm max-w-lg leading-relaxed">
                    Based on <strong>72+ authentic community reviews</strong> in Shastri Nagar, Jammu. Players praise our high-refresh PC LAN hardware, clean console lounge, and tournament stage.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  id="write-review-btn"
                  onClick={() => setShowReviewForm(!showReviewForm)}
                  className="px-4 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-600 text-white text-xs font-display font-bold uppercase tracking-wider border border-yellow-400/40 flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <PlusCircle className="w-4 h-4 text-yellow-300" />
                  <span>Write Feedback</span>
                </button>
                <a
                  href={VENUE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-medium border border-zinc-800 flex items-center gap-1.5"
                >
                  <span>View Google Listing</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>
            </div>

            {/* Write Review Form */}
            {showReviewForm && (
              <div className="bg-[#120a26] border border-yellow-400/60 rounded-2xl p-6 text-xs text-zinc-200 animate-in fade-in duration-200">
                <h4 className="font-display font-bold text-base text-white mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  Share Your Experience at HIVE
                </h4>
                {reviewSubmitted ? (
                  <div className="p-4 bg-emerald-950/40 border border-emerald-500/50 rounded-xl text-emerald-300 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Thank you! Your community review has been posted.</span>
                  </div>
                ) : (
                  <form onSubmit={handleReviewSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-zinc-400 mb-1">Your Name / Gamer Tag</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sahil / ClutchKing"
                          value={newAuthor}
                          onChange={(e) => setNewAuthor(e.target.value)}
                          className="w-full bg-[#180e32] border border-purple-800 rounded-lg p-2.5 text-white outline-none focus:border-yellow-400"
                        />
                      </div>
                      <div>
                        <label className="block text-zinc-400 mb-1">Star Rating</label>
                        <select
                          value={newRating}
                          onChange={(e) => setNewRating(Number(e.target.value))}
                          className="w-full bg-[#180e32] border border-purple-800 rounded-lg p-2.5 text-white outline-none focus:border-yellow-400"
                        >
                          <option value={5}>5 Stars - Outstanding Arena</option>
                          <option value={4}>4 Stars - Great Experience</option>
                          <option value={3}>3 Stars - Decent</option>
                          <option value={2}>2 Stars - Needs Improvement</option>
                          <option value={1}>1 Star - Poor</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-zinc-400 mb-1">Game Played</label>
                        <input
                          type="text"
                          placeholder="e.g. Valorant, Tekken 8, Pool"
                          value={newGame}
                          onChange={(e) => setNewGame(e.target.value)}
                          className="w-full bg-[#180e32] border border-purple-800 rounded-lg p-2.5 text-white outline-none focus:border-yellow-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-zinc-400 mb-1">Your Honest Review & Feedback</label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Mention FPS performance, tournament atmosphere, staff help, or suggestions..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="w-full bg-[#180e32] border border-purple-800 rounded-lg p-2.5 text-white outline-none focus:border-yellow-400"
                      />
                    </div>

                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setShowReviewForm(false)}
                        className="px-4 py-2 rounded-lg bg-zinc-900 text-zinc-400"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black font-display font-bold uppercase"
                      >
                        Post Review
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* Reviews Cards List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  id={`review-card-${rev.id}`}
                  className="rounded-2xl bg-[#0e081f] border border-purple-900/60 p-5 flex flex-col justify-between shadow-lg shadow-black/30"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-purple-950 border border-purple-700 flex items-center justify-center font-display font-bold text-xs text-yellow-300">
                          {rev.author.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-white">{rev.author}</h4>
                          <span className="text-[10px] text-zinc-400 block">{rev.role}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < rev.rating ? 'fill-yellow-400 text-yellow-400' : 'text-zinc-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                      &quot;{rev.comment}&quot;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-purple-900/40 flex items-center justify-between text-[11px] text-zinc-400">
                    <div className="flex items-center gap-1.5 text-purple-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      <span>{rev.gamePlayed}</span>
                    </div>

                    <button
                      onClick={() => handleHelpfulClick(rev.id)}
                      className="flex items-center gap-1 text-zinc-400 hover:text-yellow-300 transition-colors cursor-pointer"
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>Helpful ({rev.helpfulCount})</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Tab 2: Looking For Group (LFG) Board */}
        {activeTab === 'lfg' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-[#110924] border border-purple-800/80 gap-4">
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-1">
                  Need Teammates for Valorant, CS2, or Tekken 8?
                </h3>
                <p className="text-xs text-zinc-300">
                  Connect with fellow Jammu gamers. Find duelists, initiators, or LAN scrimmage partners right here.
                </p>
              </div>

              <button
                id="create-lfg-post-btn"
                onClick={() => setShowLfgForm(!showLfgForm)}
                className="px-4 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-display font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md shadow-yellow-400/20"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Post Squad Request</span>
              </button>
            </div>

            {/* LFG Post Form */}
            {showLfgForm && (
              <form onSubmit={handleLfgSubmit} className="bg-[#140b2b] border border-yellow-400/70 rounded-2xl p-5 text-xs text-zinc-200 space-y-3">
                <h4 className="font-display font-bold text-sm text-yellow-300 uppercase">
                  New LFG Request (Jammu Region)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-zinc-400 mb-1">IGN / Tag</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Phoenix_JK"
                      value={lfgAuthor}
                      onChange={(e) => setLfgAuthor(e.target.value)}
                      className="w-full bg-[#1b0e38] border border-purple-800 rounded-lg p-2 text-white outline-none focus:border-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 mb-1">Game</label>
                    <select
                      value={lfgGame}
                      onChange={(e) => setLfgGame(e.target.value)}
                      className="w-full bg-[#1b0e38] border border-purple-800 rounded-lg p-2 text-white outline-none focus:border-yellow-400"
                    >
                      <option value="Valorant">Valorant (PC)</option>
                      <option value="Counter-Strike 2">Counter-Strike 2 (PC)</option>
                      <option value="Tekken 8">Tekken 8 (PS5)</option>
                      <option value="FC26 / FIFA">FC26 / FIFA (PS5)</option>
                      <option value="Delta Force">Delta Force (PC)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-zinc-400 mb-1">Rank / Skill</label>
                    <input
                      type="text"
                      placeholder="e.g. Platinum 3 / 12k Premier"
                      value={lfgRank}
                      onChange={(e) => setLfgRank(e.target.value)}
                      className="w-full bg-[#1b0e38] border border-purple-800 rounded-lg p-2 text-white outline-none focus:border-yellow-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1">Looking For & Roles</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Need 2 players for weekend 5v5 LAN scrimmage at HIVE"
                    value={lfgLookingFor}
                    onChange={(e) => setLfgLookingFor(e.target.value)}
                    className="w-full bg-[#1b0e38] border border-purple-800 rounded-lg p-2 text-white outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1">Discord / Contact</label>
                  <input
                    type="text"
                    placeholder="Discord ID or ask at reception"
                    value={lfgContact}
                    onChange={(e) => setLfgContact(e.target.value)}
                    className="w-full bg-[#1b0e38] border border-purple-800 rounded-lg p-2 text-white outline-none focus:border-yellow-400"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowLfgForm(false)}
                    className="px-4 py-2 rounded-lg bg-zinc-900 text-zinc-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black font-display font-bold uppercase"
                  >
                    Post to Board
                  </button>
                </div>
              </form>
            )}

            {/* LFG Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {lfgPosts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-2xl bg-[#0f0820] border border-purple-900/60 p-5 flex flex-col justify-between space-y-4 hover:border-yellow-400/60 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-yellow-400/20 text-yellow-300 border border-yellow-400/40">
                        {post.game}
                      </span>
                      <span className="text-[10px] text-zinc-500">{post.createdAgo}</span>
                    </div>

                    <h4 className="font-display font-bold text-base text-white mb-1">
                      {post.author}
                    </h4>
                    <span className="text-[11px] font-semibold text-purple-300 block mb-2">
                      {post.rankOrLevel}
                    </span>

                    <p className="text-xs text-zinc-300 leading-snug">
                      {post.lookingFor}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-purple-900/40 space-y-1.5 text-[11px] text-zinc-400">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Meetup:</span>
                      <span className="text-zinc-200">{post.meetingTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Contact:</span>
                      <span className="text-yellow-300 font-mono">{post.discordOrContact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
