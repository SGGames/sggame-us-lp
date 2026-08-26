export interface Milestone {
  year: string;
  title: string;
  location: string;
  description: string;
  image?: string;
}

export interface EcosystemLink {
  name: string;
  domain: string;
  url: string;
  badge: string;
  description: string;
  color: string;
}

export interface PrivacyPolicyDoc {
  id: string;
  title: string;
  gameOrScope: string;
  lastUpdated: string;
  summary: string;
  contentHtml: string;
}

export const ECOSYSTEM_LINKS: EcosystemLink[] = [
  {
    name: 'SGM Hanoi',
    domain: 'sgmhn.com',
    url: 'https://sgmhn.com',
    badge: 'Main Branch',
    description: 'Core creative engineering & game development R&D studio in Hanoi, Vietnam.',
    color: 'from-amber-500/20 to-orange-500/20 text-warning border-warning/30'
  },
  {
    name: 'SGM Global',
    domain: 'sgmgo.com',
    url: 'https://sgmgo.com',
    badge: 'Global HQ',
    description: 'International operations, multi-platform publishing, and global growth in Atlanta.',
    color: 'from-blue-500/20 to-indigo-500/20 text-info border-info/30'
  },
  {
    name: 'GameMimo',
    domain: 'gamemimo.com',
    url: 'https://gamemimo.com',
    badge: 'Casual Portal',
    description: 'High-energy casual, party, and web-first arcade gaming destination.',
    color: 'from-purple-500/20 to-pink-500/20 text-secondary border-secondary/30'
  },
  {
    name: 'BinBon TV',
    domain: 'binbontv.com',
    url: 'https://binbontv.com',
    badge: 'Kids & Education',
    description: 'Family-friendly kids gaming network, interactive animations, and learning.',
    color: 'from-emerald-500/20 to-teal-500/20 text-success border-success/30'
  }
];

export const COMPANY_INFO = {
  name: 'SG Games',
  tagline: 'Bridging Innovation from Hanoi to Atlanta',
  establishedYear: '2015',
  githubRepo: 'https://github.com/SGGames/sggame-us-lp',
  stats: [
    { label: 'Global Player Plays', targetNumber: 100, suffix: 'M+', value: '100M+' },
    { label: 'Published Titles', targetNumber: 15, suffix: '+', value: '15+' },
    { label: 'Developer Tools', targetNumber: 3, suffix: '+', value: '3+' },
    { label: 'Active Continents', targetNumber: 6, suffix: '', value: '6' }
  ],
  locations: [
    {
      city: 'Atlanta, Georgia',
      country: 'United States',
      role: 'Global Headquarters & Business Operations',
      badge: 'HQ'
    },
    {
      city: 'Los Angeles, California',
      country: 'United States',
      role: 'Creative Media & Entertainment Hub',
      badge: 'Media'
    },
    {
      city: 'Hanoi',
      country: 'Vietnam',
      role: 'Core Engineering & Game Development R&D',
      badge: 'R&D Center'
    }
  ],
  contacts: {
    email: 'sggamesvn@gmail.com',
    supportEmail: 'sggamesvn@gmail.com',
    youtubeUrl: 'https://youtube.com',
    facebookUrl: 'https://facebook.com',
    twitterUrl: 'https://x.com',
    githubUrl: 'https://github.com/sggames'
  },
  milestones: [
    {
      year: '2015-2016',
      title: 'Foundations in Hanoi',
      location: 'Hanoi, Vietnam',
      description: 'Founded in Hanoi with a player-first philosophy, producing innovative casual mobile games and interactive TV applications that reached millions of players.',
      image: '/assets/images/company/img_24071913.png'
    },
    {
      year: '2019',
      title: 'Expanding to the USA',
      location: 'Los Angeles, California',
      description: 'Established presence in Los Angeles, California to integrate global entertainment storytelling into game design pipelines and scale mobile distribution.',
      image: '/assets/images/company/img_19739504.png'
    },
    {
      year: '2020-2026',
      title: 'Atlanta Headquarters & Multi-Platform Growth',
      location: 'Atlanta, Georgia',
      description: 'Moved headquarters to Atlanta, Georgia. Scaling multi-platform indie releases across Google Play, Steam, and creating developer tools like SGG-SpriteEditor.',
      image: '/assets/images/company/img_62703490.jpg'
    }
  ],
  pillars: [
    {
      title: 'Player-First Design',
      description: 'Every mechanic, puzzle, and race is tuned for immediate fun, intuitive accessibility, and long-term player satisfaction.'
    },
    {
      title: 'Multi-Platform Reach',
      description: 'Engineering optimized experiences seamlessly across Android, iOS, Steam PC, WebGL, and developer tool ecosystems.'
    },
    {
      title: 'Empowering Creators',
      description: 'We build and open-source game templates, VS Code tools, and SDKs to support indie developers worldwide.'
    }
  ]
};

export const PRIVACY_POLICIES: Record<string, PrivacyPolicyDoc> = {
  default: {
    id: 'default',
    title: 'General Studio Privacy Policy',
    gameOrScope: 'SG Games Studio & All Apps',
    lastUpdated: '2026-01-09',
    summary: 'Our standard privacy policy explaining information collection, usage, third-party service providers, data retention, and player rights.',
    contentHtml: `
      <h3>Privacy Policy</h3>
      <p>This privacy policy applies to applications and digital services provided by <strong>SG Games</strong> ("Service Provider") as free and commercial services intended for use "AS IS".</p>
      
      <h4>Information Collection and Use</h4>
      <p>Our applications may collect certain non-personally identifiable diagnostic information when downloaded and used, including:</p>
      <ul>
        <li>Device Internet Protocol address (IP address) and general network status</li>
        <li>Operating system version and device hardware model</li>
        <li>Gameplay events, stage progression, session durations, and anonymized crash logs</li>
      </ul>
      <p>Our applications do not gather precise real-time GPS location data from your mobile device.</p>
      
      <h4>Third-Party Services</h4>
      <p>We work with trusted third-party SDKs to provide analytics, leaderboards, and ad services, including:</p>
      <ul>
        <li>Google Play Services / Apple Game Center</li>
        <li>Google AdMob / Unity Ads</li>
        <li>Firebase Crashlytics & Analytics</li>
      </ul>
      
      <h4>Children's Privacy</h4>
      <p>We do not knowingly collect personally identifiable information from children under the age of 13. If you believe a child has provided us personal information, please contact us at <strong>sggamesvn@gmail.com</strong> and we will promptly delete it.</p>
      
      <h4>Data Retention & Opt-Out</h4>
      <p>You can stop all data collection by uninstalling the application. If you would like to request deletion of user-provided data, email us at <strong>sggamesvn@gmail.com</strong>.</p>
    `
  },
  fairytalerunner: {
    id: 'fairytalerunner',
    title: 'Forest Fairy Runner Privacy Policy',
    gameOrScope: 'Forest Fairy Runner Application',
    lastUpdated: '2026-01-09',
    summary: 'Specific privacy commitments for the FairyTaleRunner family game.',
    contentHtml: `
      <h3>Privacy Policy - Forest Fairy Runner</h3>
      <p>This privacy policy applies to the <strong>FairyTaleRunner</strong> app created by <strong>SG Games</strong> as a Free service.</p>
      
      <h4>Child & Family Safe Commitment</h4>
      <p>FairyTaleRunner is designed for players of all ages, including children. The application does not collect personal identifiers, contact books, camera, microphone, or precise location.</p>
      
      <h4>Third Party Access</h4>
      <p>Only aggregated, anonymized telemetry is utilized to improve performance and stability via Google Play Services.</p>
      
      <h4>Contact Us</h4>
      <p>For questions regarding FairyTaleRunner privacy, contact <strong>sggamesvn@gmail.com</strong>.</p>
    `
  },
  witchmaze: {
    id: 'witchmaze',
    title: 'Witch Maze Privacy Policy',
    gameOrScope: 'Witch Maze: Magic Puzzles',
    lastUpdated: '2026-01-09',
    summary: 'Privacy terms and offline puzzle play specifications for Witch Maze.',
    contentHtml: `
      <h3>Privacy Policy - Witch Maze</h3>
      <p>This privacy policy applies to the <strong>WitchMaze</strong> puzzle game created by <strong>SG Games</strong>.</p>
      <p>All puzzle progression is saved locally on the user's device. Cloud saves utilize official Google Play Games or Apple Game Center authentication without external third-party data broker sharing.</p>
      <p>Contact: <strong>sggamesvn@gmail.com</strong></p>
    `
  },
  snakesaga: {
    id: 'snakesaga',
    title: 'Snake Saga Privacy Policy',
    gameOrScope: 'Snake Saga Multiplayer',
    lastUpdated: '2026-01-09',
    summary: 'Multiplayer matchmaking and leaderboard data handling for Snake Saga.',
    contentHtml: `
      <h3>Privacy Policy - Snake Saga</h3>
      <p>This privacy policy applies to the <strong>Snake Saga</strong> multiplayer and single-player game created by <strong>SG Games</strong>.</p>
      <p>Online leaderboard nicknames and arena high scores are broadcast to other match participants in real-time. No personal identity or sensitive demographic data is stored or transmitted.</p>
      <p>Contact: <strong>sggamesvn@gmail.com</strong></p>
    `
  }
};
