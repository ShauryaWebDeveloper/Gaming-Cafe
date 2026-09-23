import { GamingZone, Tournament, GameItem, GamerReview, CommunityLFG } from '../types';

export const VENUE_INFO = {
  name: "HIVE The Gaming Arena",
  shortName: "HIVE Arena",
  tagline: "Jammu's Premier Esports & Gaming Destination",
  address: "MVV6+83J, Shastri Nagar, Jammu, Jammu & Kashmir 180004",
  plusCode: "MVV6+83J",
  city: "Jammu, J&K",
  hours: "10:00 AM – 11:00 PM (Mon – Sun)",
  openTime: "10:00",
  closeTime: "23:00",
  phone: "+91 94191 82940",
  whatsapp: "+919419182940",
  instagram: "@hivethegamingarena",
  discord: "https://discord.gg/hive-jammu",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=MVV6%2B83J+Shastri+Nagar+Jammu",
  googleRating: 4.6,
  totalReviews: 72,
  establishedDate: "April 6, 2025",
  communityMembers: "1,500+",
  tournamentsHosted: "18+",
};

export const GAMING_ZONES: GamingZone[] = [
  {
    id: "pc-battlestations",
    name: "High-End PC Battlestations",
    category: "pc",
    tagline: "Ultra-low latency LAN rigs engineered for competitive esports",
    description: "Equipped with high refresh-rate esports displays, mechanical gaming keyboards, precision optical sensors, and tuned graphic cards to ensure zero frame-drops in ranked matches.",
    specs: [
      "High Refresh Rate 180Hz / 240Hz Esports Monitors",
      "Dedicated High-FPS Gaming Rigs (RTX Series)",
      "Mechanical RGB Keyboards & Esports Mice",
      "Low-Latency Fiber Internet with Local LAN Server Hub",
      "Ergonomic Gaming Chairs for Long Ranked Grinds"
    ],
    popularGames: ["Valorant", "Counter-Strike 2", "Delta Force", "Warzone", "Apex Legends"],
    referencePricing: "₹250 / 2 Hours (Ref.)",
    pricingNote: "Publicly reported reference rate from Sep 2025; please inquire at reception for current live bundles & passes.",
    badge: "Most Popular",
    accentColor: "purple"
  },
  {
    id: "playstation-lounge",
    name: "PlayStation 5 Console Lounge",
    category: "console",
    tagline: "Next-gen couch competitive & co-op gaming on big 4K screens",
    description: "Enjoy head-to-head football derbies in FC/FIFA or intense fighting game clashes in Tekken 8 with friends in a comfortable, spacious lounge setup with DualSense haptic feedback.",
    specs: [
      "PlayStation 5 Consoles with High-Speed NVMe Storage",
      "4K Ultra-HD Large Gaming Displays",
      "Dual DualSense Wireless Controllers for 1v1 / 2v2 Duels",
      "Premium Plush Couch Seating with Drink Holders",
      "Extensive Library of Local Co-op & Competitive Titles"
    ],
    popularGames: ["FC / FIFA 26", "Tekken 8", "Mortal Kombat 1", "WWE 2K", "It Takes Two"],
    referencePricing: "₹150 / Hour per Controller",
    pricingNote: "Special split-screen duo rates available. Check with counter for tournament practice passes.",
    badge: "Console Hub",
    accentColor: "yellow"
  },
  {
    id: "vr-experience",
    name: "VR Immersion Pods",
    category: "vr",
    tagline: "360-degree virtual reality adventures and motion-tracked action",
    description: "Step into virtual dimensions with our dedicated VR play zones. Perfect for adrenaline-fueled rhythm slicing, flight simulation, or surreal immersive team experiences.",
    specs: [
      "Next-Gen High-Resolution VR Headsets",
      "Precision 6-DoF Motion Tracking Controllers",
      "Dedicated Safe Guardian Play Bounds",
      "Assisted Staff Setup & Game Switching",
      "Single-player & Pass-and-Play Party Options"
    ],
    popularGames: ["Beat Saber", "Superhot VR", "Pavlov VR", "Roller Coaster Sim", "Pistol Whip"],
    referencePricing: "₹200 / 20 Mins Session",
    pricingNote: "Includes staff briefing and sanitization between every session.",
    badge: "Next-Gen Tech",
    accentColor: "purple"
  },
  {
    id: "pool-snooker",
    name: "Pool & Snooker Arena",
    category: "cue",
    tagline: "Classic cue sports to chill, strategize, and bond between matches",
    description: "Take a tactical break from screens. HIVE features tournament-standard green baize pool and snooker tables with quality ash cues and chalk for relaxing banter and classic competition.",
    specs: [
      "Full-Size Precision Levelled Pool & Snooker Tables",
      "Weighted Quality Cue Sticks & Aramith Ball Sets",
      "Overhead Tournament LED Shadow-Free Lighting",
      "Lounge Seating with View of LAN Battlestations",
      "Score Trackers & Chalk Stations"
    ],
    popularGames: ["8-Ball Pool", "9-Ball Pool", "Snooker Practice", "Speed Pool"],
    referencePricing: "₹200 / Frame or Hourly",
    pricingNote: "Discounts available when bundled with PC or Console gaming sessions.",
    badge: "Chill & Social",
    accentColor: "yellow"
  },
  {
    id: "fuel-cafe",
    name: "HIVE Fuel & Refreshment Bar",
    category: "cafe",
    tagline: "Cold energy drinks, snacks, and warm brew to power your victory",
    description: "Never game on an empty stomach. Grab chilled energy drinks, fresh coffee, crispy nachos, sandwiches, and gamer munchies right by your station without missing a round.",
    specs: [
      "Chilled Monster, Red Bull, Cold Coffees & Soft Drinks",
      "Freshly Prepared Quick Bites, Loaded Fries & Sandwiches",
      "Quick Clean Station Delivery (No Mess on Gear)",
      "Hydration Stations Available"
    ],
    popularGames: ["Clutch Caffeine", "Midnight Energy", "LAN Party Combos"],
    referencePricing: "Menu starting ₹40",
    pricingNote: "Snack combo discounts available during tournament weekends.",
    badge: "Fuel Station",
    accentColor: "purple"
  }
];

export const TOURNAMENTS: Tournament[] = [
  {
    id: "hive-gaming-fest-2026",
    title: "HIVE Gaming Fest 2026",
    status: "completed",
    dates: "April 2026 (Multiple Weekend Stages)",
    prizePool: "₹60,000 Total Prize Pool",
    entryFee: "FREE ENTRY (Sponsored by HIVE)",
    games: ["Tekken 8", "FC26", "Valorant (PC)", "Counter-Strike 2", "BGMI", "Free Fire"],
    format: "LAN Playoffs & Mobile Stages (Single Elimination to Double Elimination Finals)",
    location: "HIVE Arena LAN Stage, Shastri Nagar, Jammu",
    description: "Jammu's landmark multi-genre esports celebration! Spread across key dates in April 2026, bringing PC, console, and mobile athletes onto the same arena stage with zero entry fee barrier.",
    highlights: [
      "₹60,000 cash pool distributed across 6 premier titles",
      "Over 250+ registered competitive players across Jammu & Kashmir",
      "High-octane Tekken 8 and FC26 console brackets with live crowd shoutcasting",
      "Offline 5v5 Valorant & CS2 intense LAN battles"
    ]
  },
  {
    id: "valorant-lan-2025",
    title: "Valorant 5v5 LAN Championship",
    status: "completed",
    dates: "14 – 15 June 2025",
    prizePool: "₹10,000 Cash Prize Pool",
    entryFee: "₹249 Solo / ₹999 Full 5-Man Squad",
    games: ["Valorant (5v5 Tactical Shooter)"],
    format: "Offline LAN Tournament • Group Stage to BO3 Grand Finals",
    location: "HIVE Arena PC Battlestations, Shastri Nagar",
    description: "The historic offline 5v5 Valorant clash that put Shastri Nagar on the regional esports map. Over two action-packed days, Jammu's fiercest duelists clashed on 0-ping LAN servers.",
    highlights: [
      "Dedicated 10-PC LAN stage setup for synchronized 5v5 matchups",
      "Official tournament anti-cheat & referee supervision",
      "Trophy & cash handover to champion squad with runner-up prize",
      "Recorded matches and community MVP highlights"
    ]
  },
  {
    id: "jammu-monsoon-cup-2026",
    title: "Jammu Winter/Autumn Esports Series",
    status: "upcoming",
    dates: "October – November 2026",
    prizePool: "₹25,000 Prize Pool + Gaming Merch",
    entryFee: "₹499 Squad / ₹149 Solo",
    games: ["Valorant", "Tekken 8", "FC26", "Counter-Strike 2"],
    format: "Swiss Stage Qualifiers + LAN Arena Grand Finals",
    location: "HIVE Arena, Shastri Nagar, Jammu",
    description: "The next chapter in HIVE's regular competitive circuit. Form your roster, scrim in our arena during the week, and fight for the trophy on the main stage.",
    highlights: [
      "Open to all amateur & semi-pro gamers in Jammu & Kashmir",
      "Live big-screen spectator lounge for friends and spectators",
      "Special discounts on practice PC slots for registered teams"
    ]
  }
];

export const GAMES_LIBRARY: GameItem[] = [
  {
    id: "valorant",
    title: "Valorant",
    genre: "Tactical Hero Shooter",
    platform: ["PC"],
    featured: true,
    esportsTitle: true,
    tag: "LAN Ready • 180Hz",
    description: "5v5 character-based tactical shooter. The heartbeat of HIVE's PC competitive scene."
  },
  {
    id: "cs2",
    title: "Counter-Strike 2",
    genre: "Esports FPS",
    platform: ["PC"],
    featured: true,
    esportsTitle: true,
    tag: "LAN Server • Low Latency",
    description: "The definitive competitive shooter with Sub-tick matchmaking, smoke physics, and clutch plays."
  },
  {
    id: "tekken-8",
    title: "Tekken 8",
    genre: "Fighting / 1v1",
    platform: ["PlayStation 5", "PC"],
    featured: true,
    esportsTitle: true,
    tag: "Console Lounge • 4K",
    description: "Aggressive combat mechanics and Heat system. Jammu's favorite head-to-head arcade fighter."
  },
  {
    id: "fc26",
    title: "EA Sports FC 26 / FIFA",
    genre: "Sports / Football",
    platform: ["PlayStation 5"],
    featured: true,
    esportsTitle: true,
    tag: "DualSense 1v1 • Big Screen",
    description: "High-stakes local derbies, Champions League tournaments, and casual weekend friendlies."
  },
  {
    id: "delta-force",
    title: "Delta Force",
    genre: "Tactical Extraction & Warfare",
    platform: ["PC"],
    featured: true,
    esportsTitle: false,
    tag: "Community Favorite",
    description: "Massive scale warfare and extraction shooter loved by local squad regulars at HIVE."
  },
  {
    id: "warzone",
    title: "Call of Duty: Warzone",
    genre: "Battle Royale",
    platform: ["PC", "PlayStation 5"],
    featured: false,
    esportsTitle: false,
    tag: "Trio / Quad LAN",
    description: "High-octane Battle Royale requiring sharp reflexes and tactical communications."
  },
  {
    id: "bgmi",
    title: "BGMI (Battlegrounds Mobile India)",
    genre: "Mobile Battle Royale",
    platform: ["Mobile"],
    featured: true,
    esportsTitle: true,
    tag: "Mobile Esports Arena",
    description: "Featured in HIVE Gaming Fest 2026 with high-speed arena Wi-Fi and power dock stations."
  },
  {
    id: "free-fire",
    title: "Free Fire Max",
    genre: "Mobile Battle Royale",
    platform: ["Mobile"],
    featured: false,
    esportsTitle: true,
    tag: "Tournament Stage",
    description: "Fast-paced squad battles featured in regional esports showcases."
  },
  {
    id: "beat-saber",
    title: "Beat Saber",
    genre: "VR Rhythm Action",
    platform: ["VR"],
    featured: false,
    esportsTitle: false,
    tag: "Immersive VR Pod",
    description: "Slash the beats of adrenaline-pumping music with dual sabers inside our VR zone."
  },
  {
    id: "pool-snooker-game",
    title: "8-Ball Pool & Snooker",
    genre: "Billiards / Cue Sports",
    platform: ["PlayStation 5"],
    featured: false,
    esportsTitle: false,
    tag: "Physical Arena Tables",
    description: "Tournament cloth slate tables right in the center lounge for friendly wagers and chill sessions."
  }
];

export const VERIFIED_REVIEWS: GamerReview[] = [
  {
    id: "rev-1",
    author: "Sahil Sharma",
    role: "Competitive Valorant Player",
    rating: 5,
    date: "August 2025",
    comment: "Best gaming lounge in Jammu without doubt! The PC rigs give solid 240+ FPS on Valorant and CS2 with zero ping issues. The staff helped our 5-man squad set up our DPI and configs without rushing us. Shastri Nagar needed this place!",
    verifiedVisit: true,
    gamePlayed: "Valorant PC (5v5)",
    helpfulCount: 28
  },
  {
    id: "rev-2",
    author: "Rohan Verma",
    role: "Console Gamer & Student",
    rating: 5,
    date: "April 2026",
    comment: "Attended the HIVE Gaming Fest 2026. The atmosphere was electrifying! Competing in the Tekken 8 bracket with live spectators cheer-leading behind us was unforgettable. PS5 displays are massive and controllers are in mint condition.",
    verifiedVisit: true,
    gamePlayed: "Tekken 8 & FC26 (PS5)",
    helpfulCount: 34
  },
  {
    id: "rev-3",
    author: "Amanpreet Singh",
    role: "Casual Gamer",
    rating: 4,
    date: "July 2025",
    comment: "The mix of video games, VR and pool tables makes HIVE unique. You can play a couple of rounds of Counter-Strike and then switch to 8-ball pool with your friends. Good energy drinks in the cafe too. Highly recommend visiting.",
    verifiedVisit: true,
    gamePlayed: "CS2 & 8-Ball Pool",
    helpfulCount: 19
  },
  {
    id: "rev-4",
    author: "Tanishq Gupta",
    role: "Regular Weekend Visitor",
    rating: 5,
    date: "September 2025",
    comment: "Super affordable hourly packages (loved the 2-hour deal for ₹250). The AC is cool, gaming chairs are super comfortable for 3-hour sessions, and the lighting vibes are peak cyberpunk. 4.6 stars well deserved.",
    verifiedVisit: true,
    gamePlayed: "Delta Force & Warzone",
    helpfulCount: 15
  },
  {
    id: "rev-5",
    author: "Vikram Rajput",
    role: "Jammu Esports Enthusiast",
    rating: 4,
    date: "May 2026",
    comment: "Great effort by the founders to build an actual esports community in Jammu instead of just a basic cyber cafe. Customer service is getting better every month as they add more staff. Don't forget to check their Instagram before visiting during tournament days!",
    verifiedVisit: true,
    gamePlayed: "VR Experience & PC LAN",
    helpfulCount: 22
  }
];

export const INITIAL_LFG_POSTS: CommunityLFG[] = [
  {
    id: "lfg-1",
    author: "Cipher_JK",
    game: "Valorant",
    rankOrLevel: "Diamond 2 / Ascendant",
    lookingFor: "Need 2 Initiator / Sentinel players for upcoming HIVE LAN Cup",
    meetingTime: "Daily 6:00 PM – 9:00 PM at HIVE PC Zone",
    discordOrContact: "Discord: @CipherJK#4421",
    createdAgo: "3 hours ago"
  },
  {
    id: "lfg-2",
    author: "JammuStriker",
    game: "FC26 / FIFA",
    rankOrLevel: "Div 1 Rivals",
    lookingFor: "Looking for competitive 1v1 rivals for weekend LAN wagers & warmups",
    meetingTime: "Saturdays 4:00 PM (PS5 Lounge)",
    discordOrContact: "Find me in HIVE Lounge (Desk 4)",
    createdAgo: "1 day ago"
  },
  {
    id: "lfg-3",
    author: "Vortex_CS",
    game: "Counter-Strike 2",
    rankOrLevel: "14,000+ Premier Rating",
    lookingFor: "Forming Jammu regional roster for 5v5 scrimmage practices",
    meetingTime: "Friday Evenings",
    discordOrContact: "Steam / WhatsApp available at reception",
    createdAgo: "2 days ago"
  }
];

export const FAQS = [
  {
    q: "Where exactly is HIVE The Gaming Arena located in Jammu?",
    a: "HIVE is located at MVV6+83J, Shastri Nagar, Jammu, Jammu & Kashmir 180004. You can paste the Google Plus Code 'MVV6+83J' into Google Maps or use our interactive directions button to navigate straight to our doorstep."
  },
  {
    q: "What are your operating timings?",
    a: "We are open 7 days a week from 10:00 AM to 11:00 PM. This provides ample time for both daytime casual games and late-night ranked grinds or tournament brackets."
  },
  {
    q: "How much does gaming cost at HIVE?",
    a: "Historically reported public rates from late 2025 included ₹250 for two hours of high-end PC gaming, with console and VR sessions starting around ₹150–₹200. Because seasonal bundles, day passes, and student discount rates evolve, we advise asking our front desk or checking our Instagram for active daily specials."
  },
  {
    q: "Can I bring my own mouse, mousepad, keyboard, or headset?",
    a: "Yes! Competitive esports players are welcome to bring their personal peripherals (mice, keyboards, in-ear monitors/headsets) to plug into our battlestations. Our staff will gladly assist with quick setup."
  },
  {
    q: "Do I need to book in advance or can I walk in?",
    a: "Walk-ins are always welcome on a first-come, first-served basis! However, during weekend peak hours (5:00 PM – 10:00 PM) or tournament days, we strongly advise reserving your rigs in advance via WhatsApp or our online booking form."
  },
  {
    q: "How can I participate in HIVE's esports tournaments?",
    a: "We host regular competitions like the 5v5 Valorant LAN Tournament and the ₹60,000 HIVE Gaming Fest. Registrations are announced on our official Instagram and right here on our website. You can register individually (free-agent pool) or as a full 5-player squad."
  },
  {
    q: "Are food, drinks, and snacks available inside?",
    a: "Yes! Our HIVE Fuel & Refreshment Bar offers chilled energy drinks (Monster, Red Bull), cold coffee, carbonated sodas, and gamer-friendly snacks so you don't lose focus during marathon gaming sessions."
  }
];
