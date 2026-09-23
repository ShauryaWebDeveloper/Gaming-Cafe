export interface GamingZone {
  id: string;
  name: string;
  category: 'pc' | 'console' | 'vr' | 'cue' | 'cafe';
  tagline: string;
  description: string;
  specs: string[];
  popularGames: string[];
  referencePricing: string;
  pricingNote?: string;
  badge: string;
  accentColor: 'purple' | 'yellow';
}

export interface Tournament {
  id: string;
  title: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  dates: string;
  prizePool: string;
  entryFee: string;
  games: string[];
  format: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface GameItem {
  id: string;
  title: string;
  genre: string;
  platform: ('PC' | 'PlayStation 5' | 'VR' | 'Mobile')[];
  featured: boolean;
  esportsTitle: boolean;
  tag: string;
  description: string;
}

export interface GamerReview {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  verifiedVisit: boolean;
  gamePlayed: string;
  helpfulCount: number;
}

export interface CommunityLFG {
  id: string;
  author: string;
  game: string;
  rankOrLevel: string;
  lookingFor: string;
  meetingTime: string;
  discordOrContact: string;
  createdAgo: string;
}

export interface BookingState {
  zone: string;
  players: number;
  durationHours: number;
  date: string;
  timeSlot: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  specialRequests: string;
  addSnacksCombo: boolean;
}
