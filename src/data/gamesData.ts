export interface GameItem {
  id: string;
  title: string;
  subtitle: string;
  genre: string;
  category: 'action' | 'rpg' | 'arcade' | 'casual' | 'runner' | 'puzzle' | 'board';
  releaseYear: string;
  badge?: string;
  featured?: boolean;
  coverImage: string;
  screenshots: string[];
  description: string;
  longDescription: string;
  features: string[];
  platforms: ('android' | 'ios' | 'steam' | 'web')[];
  rating?: number;
  playersCount?: string;
  downloadUrl?: string;
  googlePlayUrl?: string;
  appStoreUrl?: string;
  steamUrl?: string;
  webPlayUrl?: string;
  privacyPolicySlug?: string;
}

export const GAMES_CATALOG: GameItem[] = [
  {
    id: 'botz',
    title: 'BotZ: Abandoned Dream',
    subtitle: 'Cyberpunk Sci-Fi Tactical FPS & Survival',
    genre: 'Sci-Fi FPS / Action',
    category: 'action',
    releaseYear: '2020',
    badge: 'Popular',
    featured: true,
    coverImage: '/assets/images/img_90532284.jpg',
    screenshots: [
      '/assets/images/img_90532284.jpg',
      '/assets/images/img_4258551.jpg',
      '/assets/images/img_19511028.jpg'
    ],
    description: 'Immerse yourself in a dystopian sci-fi world where rogue cybernetic bots have overrun human sanctuaries. Fight for survival across futuristic ruins.',
    longDescription: 'BotZ: Abandoned Dream is a first-person tactical shooter featuring intense firefights, high-tech weapon customizations, responsive movement mechanics, and challenging bot AI. Navigate through destroyed urban sectors, secure energy cores, and uncover the secret behind the robotic revolt.',
    features: [
      'Fast-paced tactical FPS gunplay with futuristic weapons',
      'Advanced AI bots with dynamic combat behaviors',
      'Rich atmospheric cyberpunk environments and sound design',
      'Weapon upgrade systems, energy shields, and tactical drones',
      'Optimized 60 FPS performance on mobile and PC'
    ],
    platforms: ['android', 'steam', 'web'],
    rating: 4.6,
    playersCount: '2M+ Players',
    googlePlayUrl: 'https://play.google.com/store/apps/developer?id=SG+Games',
    privacyPolicySlug: 'default'
  },
  {
    id: 'monkeyking',
    title: 'Monkey King: Journey to the West',
    subtitle: 'Epic Mythological Action RPG',
    genre: 'Action RPG / Fantasy',
    category: 'rpg',
    releaseYear: '2019',
    badge: 'Featured RPG',
    featured: true,
    coverImage: '/assets/images/img_84443049.jpg',
    screenshots: [
      '/assets/images/img_84443049.jpg',
      '/assets/images/img_70330619.jpg',
      '/assets/images/img_37860198.jpg'
    ],
    description: 'Relive the legendary saga of Sun Wukong. Master the magical staff, shapeshift, summon mythical spells, and battle demons across mystical realms.',
    longDescription: 'Monkey King: Journey to the West is an action role-playing adventure based on classic mythology. Channel the supreme strength of the Great Sage Equal to Heaven, unleash combos with the Golden Cudgel, and unlock 72 transformations to conquer celestial bosses.',
    features: [
      'Fluid combo combat system with transformation abilities',
      'Over 50 hand-crafted mythic levels and giant boss encounters',
      'Skill trees: Staff arts, Cloud walking, Daoist sorcery',
      'Rich cinematic storyline inspired by Eastern folklore',
      'Offline play supported with local progression save'
    ],
    platforms: ['android', 'ios'],
    rating: 4.8,
    playersCount: '5M+ Downloads',
    googlePlayUrl: 'https://play.google.com/store/apps/developer?id=SG+Games',
    privacyPolicySlug: 'default'
  },
  {
    id: 'hellwatch',
    title: 'Hell Watch: Armageddon',
    subtitle: 'Demonic Wave Defense & Survival Action',
    genre: 'Action / Tower Defense Shooter',
    category: 'action',
    releaseYear: '2017',
    badge: 'Classic',
    featured: true,
    coverImage: '/assets/images/img_5653269.jpg',
    screenshots: [
      '/assets/images/img_5653269.jpg',
      '/assets/images/img_4258551.jpg'
    ],
    description: 'Hold the gates against hordes rising from the underworld. Deploy holy relics, heavy ballistas, and elemental magic to prevent Armageddon.',
    longDescription: 'Hell Watch combines frantic arcade shooting with strategic stronghold defense. Waves of hellspawn assault your sanctuary wall; equip arcane armaments and trigger cataclysmic powers before the demonic breach.',
    features: [
      'Relentless wave-based survival action',
      'Massive demonic roster from gargoyles to towering hell lords',
      'Tower fortifications, rune enchantments, and ultimate spells',
      'Endless challenge mode with global leaderboards'
    ],
    platforms: ['android', 'web'],
    rating: 4.5,
    playersCount: '1M+ Players',
    googlePlayUrl: 'https://play.google.com/store/apps/developer?id=SG+Games',
    privacyPolicySlug: 'default'
  },
  {
    id: 'snakesaga',
    title: 'Snake Saga',
    subtitle: 'Modern Multiplayer Snake Battle Royale',
    genre: 'Arcade / Casual IO',
    category: 'arcade',
    releaseYear: '2022',
    badge: 'Hot 2022',
    featured: true,
    coverImage: '/assets/images/img_19511028.jpg',
    screenshots: [
      '/assets/images/img_19511028.jpg',
      '/assets/images/img_28093794.jpg'
    ],
    description: 'The definitive next-generation Snake experience! Slither, trap opponents, gather glowing orbs, unlock flashy skins, and dominate the arena.',
    longDescription: 'Snake Saga modernizes the timeless arcade classic with ultra-smooth 60fps movement, vibrant particle physics, competitive online matchmaking, and customization options.',
    features: [
      'Real-time battle arena with dozens of players',
      'Dynamic booster boosts, speed boosts, and magnet powers',
      'Dozens of vibrant custom snake skins, hats, and trail effects',
      'Solo survival, Team battle, and Speed rush game modes'
    ],
    platforms: ['android', 'ios', 'web'],
    rating: 4.7,
    playersCount: '10M+ Downloads',
    googlePlayUrl: 'https://play.google.com/store/apps/developer?id=SG+Games',
    privacyPolicySlug: 'snakesaga'
  },
  {
    id: 'ninjadash',
    title: 'Ninja Dash',
    subtitle: 'Fast-Paced Shadow Ninja Platformer & Runner',
    genre: 'Action Runner / Platformer',
    category: 'runner',
    releaseYear: '2021',
    badge: 'Top Runner',
    featured: true,
    coverImage: '/assets/images/img_1362298.jpg',
    screenshots: [
      '/assets/images/img_1362298.jpg',
      '/assets/images/img_27266689.png',
      '/assets/images/img_44228425.jpg'
    ],
    description: 'Sprint across moonlit rooftops, deflect shurikens, slice through enemy shinobi, and collect legendary scrolls in this adrenaline-pumping platformer.',
    longDescription: 'Ninja Dash blends precision platforming with sword slashing mechanics. Dash across feudal Japan landscapes, execute air assassinations, and defeat evil clan masters.',
    features: [
      'Precision swipe and tap controls for jumps, wall runs, and strikes',
      '8 unique ninja characters with special katana techniques',
      'Boss battles against elemental samurai warlords',
      'Also available as a complete Unity Game Template for creators'
    ],
    platforms: ['android', 'ios', 'web'],
    rating: 4.6,
    playersCount: '3M+ Downloads',
    googlePlayUrl: 'https://play.google.com/store/apps/developer?id=SG+Games',
    privacyPolicySlug: 'default'
  },
  {
    id: 'fairytalerunner',
    title: 'Forest Fairy Runner',
    subtitle: 'Enchanted 3D Fantasy Endless Runner',
    genre: 'Endless Runner / Casual',
    category: 'runner',
    releaseYear: '2021',
    badge: 'Kids Choice',
    featured: false,
    coverImage: '/assets/images/img_27266689.png',
    screenshots: [
      '/assets/images/img_27266689.png',
      '/assets/images/img_32695895.jpg'
    ],
    description: 'Fly and run through magical enchanted forests, collect fairy dust crystals, avoid thorny traps, and unlock cute woodland fairy companions.',
    longDescription: 'Fairy Tale Runner takes players on a colorful fairy-tale journey through lush meadows, crystal caverns, and magical canopy villages.',
    features: [
      'Accessible, family-friendly swipe controls',
      'Beautiful vibrant fantasy landscapes with magical effects',
      'Pet companions that boost scoring multipliers',
      'Kid-safe design with zero intrusive tracking'
    ],
    platforms: ['android', 'ios'],
    rating: 4.7,
    playersCount: '2M+ Downloads',
    googlePlayUrl: 'https://play.google.com/store/apps/developer?id=SG+Games',
    privacyPolicySlug: 'fairytalerunner'
  },
  {
    id: 'witchmaze',
    title: 'Witch Maze: Magic Puzzles',
    subtitle: 'Spellbinding Labyrinth & Puzzle Adventure',
    genre: 'Puzzle / Logic Adventure',
    category: 'puzzle',
    releaseYear: '2021',
    badge: 'Puzzle Master',
    featured: false,
    coverImage: '/assets/images/img_16879798.jpg',
    screenshots: [
      '/assets/images/img_16879798.jpg',
      '/assets/images/img_17998739.jpg'
    ],
    description: 'Help the young apprentice witch navigate tricky magical labyrinths, brew secret potions, shift moving walls, and rescue captive familiars.',
    longDescription: 'Witch Maze challenges your spatial problem-solving with hundreds of hand-crafted puzzle mazes packed with teleporters, trap doors, potion cauldrons, and magical creatures.',
    features: [
      'Over 200 brain-teasing puzzle stages with increasing complexity',
      'Unique magic mechanics: Freeze tiles, Portal warps, Potion brewing',
      'Whimsical cute art style and relaxing soundtrack',
      'No time limit pressure - play at your own relaxing pace'
    ],
    platforms: ['android', 'ios'],
    rating: 4.6,
    playersCount: '1.5M+ Downloads',
    googlePlayUrl: 'https://play.google.com/store/apps/developer?id=SG+Games',
    privacyPolicySlug: 'witchmaze'
  },
  {
    id: 'monopoly',
    title: 'Monopoly: Around the World',
    subtitle: 'Classic Property Trading Board Game',
    genre: 'Board Game / Family Strategy',
    category: 'board',
    releaseYear: '2019',
    badge: 'Family Fun',
    featured: false,
    coverImage: '/assets/images/img_16053595.png',
    screenshots: [
      '/assets/images/img_16053595.png',
      '/assets/images/img_28093794.jpg'
    ],
    description: 'Roll the dice, buy world-famous landmarks from Paris to Tokyo, build luxury resorts, and become the world\'s greatest real estate tycoon.',
    longDescription: 'Monopoly: Around the World delivers quick-session family board game fun. Play against smart AI bots or pass-and-play with friends and family anywhere.',
    features: [
      'Famous international cities and landmark properties',
      'Dynamic chance cards and mini-games',
      'Offline local multiplayer and smart AI difficulty settings',
      'Colorful 3D animated board and city models'
    ],
    platforms: ['android', 'web'],
    rating: 4.5,
    playersCount: '4M+ Downloads',
    googlePlayUrl: 'https://play.google.com/store/apps/developer?id=SG+Games',
    privacyPolicySlug: 'default'
  },
  {
    id: 'crazymotor',
    title: 'Crazy Motor',
    subtitle: 'Extreme Highway Motorcycle Racing',
    genre: 'Racing / Arcade Action',
    category: 'arcade',
    releaseYear: '2020',
    badge: 'High Speed',
    featured: false,
    coverImage: '/assets/images/img_4258551.jpg',
    screenshots: [
      '/assets/images/img_4258551.jpg',
      '/assets/images/img_90532284.jpg'
    ],
    description: 'Weave through dense rush-hour traffic at breakneck speeds. Perform close-call near misses, boost your nitrous, and upgrade super-bikes.',
    longDescription: 'Crazy Motor provides adrenaline-fueled arcade bike racing with intuitive tilt and touch controls, diverse city highways, and customizable superbikes.',
    features: [
      'High-speed physics with responsive gyro steering',
      'Multiple game modes: Career, Endless highway, Time trial',
      'Realistic engine roar sound effects and neon night courses'
    ],
    platforms: ['android'],
    rating: 4.4,
    playersCount: '1M+ Downloads',
    googlePlayUrl: 'https://play.google.com/store/apps/developer?id=SG+Games',
    privacyPolicySlug: 'default'
  },
  {
    id: 'bugplanet',
    title: 'Bug Planet: Invasion Wars',
    subtitle: 'Intergalactic Insectoid Shooter',
    genre: 'Arcade Shooter / Sci-Fi',
    category: 'action',
    releaseYear: '2019',
    badge: 'Shooter',
    featured: false,
    coverImage: '/assets/images/img_70330619.jpg',
    screenshots: [
      '/assets/images/img_70330619.jpg'
    ],
    description: 'Defend humanity\'s frontier colonies from swarming alien insectoids with mech armor and heavy plasma artillery.',
    longDescription: 'Bug Planet drops you into the frontline against endless alien swarms. Blast arachnid warriors, giant acid spitters, and colossal hive queens across alien planets.',
    features: [
      'Twin-stick arcade shooter mechanics',
      'Arsenal of flamethrowers, lasers, and railguns',
      'Dozens of planetary defense missions'
    ],
    platforms: ['android'],
    rating: 4.3,
    playersCount: '800K+ Downloads',
    googlePlayUrl: 'https://play.google.com/store/apps/developer?id=SG+Games',
    privacyPolicySlug: 'default'
  },
  {
    id: 'halloweennight',
    title: 'Halloween: Night Out',
    subtitle: 'Spooky Match & Trick-or-Treat Adventure',
    genre: 'Casual / Adventure',
    category: 'casual',
    releaseYear: '2020',
    badge: 'Seasonal',
    featured: false,
    coverImage: '/assets/images/img_32695895.jpg',
    screenshots: [
      '/assets/images/img_32695895.jpg'
    ],
    description: 'Celebrate Halloween with spooky puzzles, jack-o-lantern crafting, candy collection, and haunted house explorations.',
    longDescription: 'Halloween Night Out brings spooky fun for players of all ages with cute ghosts, pumpkin puzzles, and trick-or-treat surprises.',
    features: [
      'Festive spooky atmosphere and playful animations',
      'Over 100 themed puzzle stages'
    ],
    platforms: ['android'],
    rating: 4.6,
    playersCount: '1M+ Downloads',
    googlePlayUrl: 'https://play.google.com/store/apps/developer?id=SG+Games',
    privacyPolicySlug: 'default'
  },
  {
    id: 'metalbro',
    title: 'Metal Bro',
    subtitle: 'Classic 2D Side-Scrolling Run & Gun',
    genre: '2D Action / Run & Gun',
    category: 'action',
    releaseYear: '2018',
    badge: 'Retro Action',
    featured: false,
    coverImage: '/assets/images/img_37860198.jpg',
    screenshots: [
      '/assets/images/img_37860198.jpg'
    ],
    description: 'A tribute to 90s classic run-and-gun platformers. Blast through mercenary bases with heavy machine guns, rocket launchers, and combat vehicles.',
    longDescription: 'Metal Bro delivers high-octane 2D side-scrolling action with pixel art explosions, tight gunplay, and screen-filling mechanical bosses.',
    features: [
      'Retro arcade run & gun action',
      'Vehicle combat with tanks, mechs, and helicopters'
    ],
    platforms: ['android', 'web'],
    rating: 4.5,
    playersCount: '2M+ Downloads',
    googlePlayUrl: 'https://play.google.com/store/apps/developer?id=SG+Games',
    privacyPolicySlug: 'default'
  },
  {
    id: 'titanfallen',
    title: 'Titan Fallen',
    subtitle: 'Epic Mythic Action RPG',
    genre: 'Fantasy RPG',
    category: 'rpg',
    releaseYear: '2018',
    badge: 'Classic RPG',
    featured: false,
    coverImage: '/assets/images/img_70330619.jpg',
    screenshots: [
      '/assets/images/img_70330619.jpg'
    ],
    description: 'When ancient titans fall from the heavens, only the chosen warrior can claim their power to banish the encroaching shadow.',
    longDescription: 'Titan Fallen offers rich dungeon crawling, deep equipment crafting, and monumental boss fights against elemental colossi.',
    features: [
      'Deep loot and equipment enchantment system',
      'Hero class skill combinations and pet companions'
    ],
    platforms: ['android'],
    rating: 4.4,
    playersCount: '1.2M+ Downloads',
    googlePlayUrl: 'https://play.google.com/store/apps/developer?id=SG+Games',
    privacyPolicySlug: 'default'
  },
  {
    id: 'bombershowdown',
    title: 'Bomber Showdown',
    subtitle: 'Classic Grid Bomb Multiplayer Arena',
    genre: 'Arcade / Party Game',
    category: 'arcade',
    releaseYear: '2017',
    badge: 'Arcade Party',
    featured: false,
    coverImage: '/assets/images/img_28093794.jpg',
    screenshots: [
      '/assets/images/img_28093794.jpg'
    ],
    description: 'Place bombs, blast obstacles, pick up firepower power-ups, and trap rival bombers in fast-paced arena showdowns.',
    longDescription: 'Bomber Showdown is the classic retro party battle revamped with fun characters, colorful maps, and multiplayer frenzy.',
    features: [
      'Classic grid-based bomb blast action',
      'Speed boosts, extra bombs, and remote detonation powerups'
    ],
    platforms: ['android', 'web'],
    rating: 4.5,
    playersCount: '3M+ Downloads',
    googlePlayUrl: 'https://play.google.com/store/apps/developer?id=SG+Games',
    privacyPolicySlug: 'default'
  },
  {
    id: 'dragonsvsgods',
    title: 'Dragons Vs Gods (Long Than)',
    subtitle: 'Legendary Vietnamese & Eastern Myth RPG',
    genre: 'Mythological Combat / RPG',
    category: 'rpg',
    releaseYear: '2016',
    badge: 'Origins',
    featured: false,
    coverImage: '/assets/images/img_84443049.jpg',
    screenshots: [
      '/assets/images/img_84443049.jpg'
    ],
    description: 'The primordial conflict between dragons and ancient deities. Command divine warriors and summon elemental dragons in tactical skirmishes.',
    longDescription: 'Dragons Vs Gods (Long Than) honors ancient folklore through tactical combat, divine blessing systems, and legendary artifact forging.',
    features: [
      'Rich folklore-inspired character designs and abilities',
      'Hero summoning, team synergy strategies, and guild raids'
    ],
    platforms: ['android'],
    rating: 4.6,
    playersCount: '1.5M+ Downloads',
    googlePlayUrl: 'https://play.google.com/store/apps/developer?id=SG+Games',
    privacyPolicySlug: 'default'
  }
];
