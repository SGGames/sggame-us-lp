export interface StoreItem {
  id: string;
  type: 'tool' | 'template' | 'opensource';
  title: string;
  tagline: string;
  category: string;
  badge?: string;
  featured?: boolean;
  coverImage: string;
  screenshots: string[];
  description: string;
  longDescription: string;
  features: { title: string; description: string }[];
  specs?: { label: string; value: string }[];
  marketplaceUrl?: string;
  githubUrl?: string;
  docsUrl?: string;
  demoUrl?: string;
  price?: string;
  engine?: string;
  version?: string;
}

export const STORE_ITEMS: StoreItem[] = [
  {
    id: 'spriteeditor',
    type: 'tool',
    title: 'SGG-SpriteEditor',
    tagline: 'Visual Sprite Atlas Editor for Visual Studio Code',
    category: 'VS Code Extension / Game Dev Tool',
    badge: 'Official Extension',
    featured: true,
    coverImage: '/assets/images/tools/spriteeditor/sgg_spriteeditor_vscode.png',
    screenshots: [
      '/assets/images/tools/spriteeditor/sgg_spriteeditor_vscode.png'
    ],
    description: 'Sgg-SpriteEditor brings a full sprite atlas editing environment into VS Code. Open any atlas file, see your sprites on a live canvas, manipulate frames visually, and export in the format your engine expects without leaving your editor.',
    longDescription: 'SGG-SpriteEditor eliminates the need for heavyweight external texture tools. Directly within VS Code, you can inspect atlas files, slice spritesheets, rename frames, remove greenscreens/chroma keys, auto-align bounding boxes, and export directly to Unity, Godot, LibGDX, Cocos, Phaser, or Web frameworks.',
    features: [
      { title: '🗂️ Custom Editor', description: 'Native editor for *.atlas.json, *.plist, *.atlas.plist, *.atlas, and image sheets.' },
      { title: '🖼️ Frame Editing', description: 'Move, resize, rotate, duplicate, delete, and rename frames on an interactive live canvas.' },
      { title: '↔️ Transform Tools', description: 'Hand mode, Transform mode, Rectangle multi-select, and automatic sprite trimming.' },
      { title: '📋 Atlas Outline', description: 'Sidebar tree with frame lock, visibility toggle, inline rename, and keyboard navigation.' },
      { title: '⚙️ Batch Image Process', description: 'Convert (PNG/JPG/WebP) or batch resize entire image folders in one step.' },
      { title: '🔧 Image Tools', description: 'Smart resize presets, chroma key / green screen removal, and external image editor integration.' },
      { title: '📤 Multi-Format Export', description: 'JSON, Plist, LibGDX Atlas, custom Handlebars templates, and PNG unpack.' },
      { title: '📐 Split / Grid Generation', description: 'Fill an atlas with uniform cells from name patterns (<index>, <row>, <col>).' },
      { title: '🎯 Batch Alignment', description: 'Left, H-center, Right, Top, V-center, Bottom across multi-selections.' }
    ],
    specs: [
      { label: 'Platform', value: 'VS Code Extension' },
      { label: 'Publisher', value: 'sggames' },
      { label: 'Version', value: 'v1.4.0' },
      { label: 'License', value: 'Free on VS Code Marketplace' },
      { label: 'Supported Formats', value: 'Atlas JSON, Plist, LibGDX Atlas, PNG, WebP' }
    ],
    marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=sggames.sggspriteeditor',
    docsUrl: 'https://marketplace.visualstudio.com/items?itemName=sggames.sggspriteeditor',
    price: 'Free',
    engine: 'VS Code / Universal'
  },
  {
    id: 'textureeditor',
    type: 'tool',
    title: 'TextureEditor',
    tagline: 'High-Performance Game Texture & Packing Utility',
    category: 'Game Dev Tool / Pipeline',
    badge: 'Pipeline Tool',
    featured: false,
    coverImage: '/assets/images/tools/spriteeditor/sgg_spriteeditor_vscode.png',
    screenshots: [
      '/assets/images/tools/spriteeditor/sgg_spriteeditor_vscode.png'
    ],
    description: 'A specialized texture packing, channel-packing, and compression pipeline utility designed for optimizing 2D and 3D game assets.',
    longDescription: 'TextureEditor packs individual textures into efficient power-of-two atlases, combines metallic/roughness/ambient occlusion channels, and generates compressed formats (ASTC, ETC2, DXT, WebP) for lightning-fast GPU memory loading.',
    features: [
      { title: 'MaxRects Packing Algorithm', description: 'Tightest packing density with minimal wasted texture memory.' },
      { title: 'Channel Packing', description: 'Combine Roughness, Metallic, AO into single RGBA maps.' },
      { title: 'Lossless Compression', description: 'Automated WebP/ASTC/KTX2 optimization.' }
    ],
    specs: [
      { label: 'Type', value: 'Desktop Utility & CLI' },
      { label: 'Engine Support', value: 'Unity, Unreal, Godot, WebGL' }
    ],
    price: 'Free / Open',
    engine: 'Cross-Engine'
  },
  {
    id: 'anigo',
    type: 'tool',
    title: 'AniGo',
    tagline: 'Lightweight 2D Sprite Animation Sequencer',
    category: 'Game Dev Tool',
    badge: 'Animation',
    featured: false,
    coverImage: '/assets/images/tools/spriteeditor/sgg_spriteeditor_vscode.png',
    screenshots: [
      '/assets/images/tools/spriteeditor/sgg_spriteeditor_vscode.png'
    ],
    description: 'Rapidly preview, organize, and export 2D sprite animations and timing sheets for indie games.',
    longDescription: 'AniGo is designed for 2D game artists who need rapid playback preview, onion skinning, hitbox definition, and event keyframe tagging on spritesheets.',
    features: [
      { title: 'Live Playback & FPS Tuning', description: 'Preview frame animations with customizable loop points.' },
      { title: 'Event Triggers', description: 'Attach sound effects and particle triggers to specific frames.' },
      { title: 'Export Presets', description: 'Export JSON animation descriptors and Sprite Sheets.' }
    ],
    specs: [
      { label: 'Platform', value: 'Web & Desktop' },
      { label: 'Export Formats', value: 'JSON, Unity AnimationClip, Spriter' }
    ],
    price: 'Free',
    engine: 'Universal'
  },
  {
    id: 'kartdash-unity',
    type: 'template',
    title: 'KartDash-Unity 2021',
    tagline: 'Complete 3D Arcade Kart Racing Game Template',
    category: 'Unity Game Template',
    badge: 'Unity Template',
    featured: true,
    coverImage: '/assets/images/tools/kartdash-unity/img_28529196.png',
    screenshots: [
      '/assets/images/tools/kartdash-unity/img_28529196.png'
    ],
    description: 'Production-ready 3D Kart Racing project for Unity 2021. Features arcade vehicle physics, AI waypoint racers, drifting boost mechanics, missile powerups, and customizable tracks.',
    longDescription: 'KartDash-Unity is a full source code template containing everything required to launch a commercial 3D kart racer on Mobile, PC, or WebGL. Includes smooth arcade physics, item pick-ups (homing rockets, oil slicks, shields, speed turbos), smart AI opponents, checkpoint systems, and complete UI menus.',
    features: [
      { title: 'Drift & Boost Physics', description: 'Satisfying powerslide drift mechanics with multi-stage mini-turbo.' },
      { title: 'AI Waypoint Navigation', description: 'Adaptive bot racers with obstacle avoidance and dynamic rubber-banding.' },
      { title: 'Weapon & Power-up System', description: 'Missiles, mines, shields, and speed boosts with projectile trajectory prediction.' },
      { title: 'Garage & Customization', description: 'Vehicle selection, paint jobs, engine upgrades, and stats balancing.' },
      { title: 'Mobile & Gamepad Ready', description: 'Touch onscreen controls, tilt gyro, and full Xbox/PlayStation gamepad mapping.' }
    ],
    specs: [
      { label: 'Unity Version', value: 'Unity 2021.3 LTS +' },
      { label: 'Render Pipeline', value: 'Universal Render Pipeline (URP)' },
      { label: 'Platforms', value: 'Android, iOS, PC, WebGL' },
      { label: 'Included Code', value: '100% C# Full Source Code' }
    ],
    githubUrl: 'https://github.com/sggames',
    price: 'Source Available',
    engine: 'Unity URP'
  },
  {
    id: 'ninjadash-unity',
    type: 'template',
    title: 'NinjaDash-Unity 2021',
    tagline: 'Action Platformer & Endless Runner Starter Kit',
    category: 'Unity Game Template',
    badge: 'Unity Template',
    featured: true,
    coverImage: '/assets/images/tools/ninjadash-unity/img_44228425.jpg',
    screenshots: [
      '/assets/images/tools/ninjadash-unity/img_44228425.jpg',
      '/assets/images/old/games/ninjadash/img_1362298.jpg'
    ],
    description: 'Fast-paced ninja action platformer and runner starter kit for Unity. Features swipe controls, wall running, slashing combat, procedural level generation, and monetization integrations.',
    longDescription: 'NinjaDash-Unity provides an end-to-end framework for action platform runners. Master double-jumping, shuriken throwing, sword slashing, and grappling hooks. Complete with sound effects, particle effects, shop system, and rewarded ad hooks.',
    features: [
      { title: 'Precision Character Controller', description: 'Fluid movement, double jumps, ledge climbing, and wall sliding.' },
      { title: 'Procedural Chunk Spawner', description: 'Infinite level generation with difficulty scaling.' },
      { title: 'Shop & Unlocks', description: 'Character skins, weapons, and upgradeable perks.' },
      { title: 'Ready for Stores', description: 'AdMob, Unity Ads, and in-app purchase hooks pre-configured.' }
    ],
    specs: [
      { label: 'Unity Version', value: 'Unity 2021.3 LTS +' },
      { label: 'Platforms', value: 'Android, iOS, WebGL' },
      { label: 'Language', value: 'C#' }
    ],
    githubUrl: 'https://github.com/sggames',
    price: 'Source Available',
    engine: 'Unity'
  },
  {
    id: 'atomgameframework',
    type: 'opensource',
    title: 'AtomGameFramework',
    tagline: 'Lightweight, Modular Architecture for Game Systems',
    category: 'Open Source Framework',
    badge: 'Open Source',
    featured: true,
    coverImage: '/assets/images/tools/spriteeditor/sgg_spriteeditor_vscode.png',
    screenshots: [
      '/assets/images/tools/spriteeditor/sgg_spriteeditor_vscode.png'
    ],
    description: 'A modular, decoupling game framework providing event buses, object pooling, state machines, and audio managers for rapid prototype-to-production game development.',
    longDescription: 'AtomGameFramework provides clean architecture patterns that scale from game jams to massive live-ops commercial releases. Keep gameplay logic decoupled, memory allocations near zero with high-performance pooling, and audio/UI systems cleanly event-driven.',
    features: [
      { title: 'Type-Safe Event Aggregator', description: 'Publish/subscribe event messaging without hard component dependencies.' },
      { title: 'Generic Object Pooling', description: 'Auto-expanding memory pools for projectiles, VFX, and audio clips.' },
      { title: 'Hierarchical State Machine', description: 'Visual state transitions for player controllers, enemy AI, and game state loops.' },
      { title: 'Cross-Engine Architecture', description: 'Clean C# standard architecture portable across Unity, Godot, and Monogame.' }
    ],
    specs: [
      { label: 'Language', value: 'C# (.NET Standard 2.1)' },
      { label: 'License', value: 'MIT License' },
      { label: 'Repository', value: 'github.com/sggames/AtomGameFramework' }
    ],
    githubUrl: 'https://github.com/sggames',
    docsUrl: 'https://github.com/sggames',
    price: 'Free / MIT',
    engine: 'C# / Unity / Godot'
  },
  {
    id: 'sggamesdk-unity',
    type: 'opensource',
    title: 'SGGameSDK-Unity',
    tagline: 'Cross-Platform Game Services & Monetization Toolkit',
    category: 'Open Source SDK',
    badge: 'Open Source',
    featured: false,
    coverImage: '/assets/images/tools/spriteeditor/sgg_spriteeditor_vscode.png',
    screenshots: [
      '/assets/images/tools/spriteeditor/sgg_spriteeditor_vscode.png'
    ],
    description: 'Unified wrapper for mobile analytics, in-app purchases, mediation ads, cloud saves, and GDPR consent management across Android and iOS.',
    longDescription: 'SGGameSDK-Unity bundles production-proven monetization and compliance logic into a single plug-and-play package. Avoid dealing with disparate SDK APIs; use one unified interface for banners, interstitials, rewarded ads, app tracking transparency, and in-app receipt validation.',
    features: [
      { title: 'Unified Ads Mediation', description: 'Automated waterfall and bidding orchestration across Google AdMob, Unity Ads, and AppLovin.' },
      { title: 'Cross-Platform IAP', description: 'Secure store receipt parsing, restore purchases, and consumable inventory tracking.' },
      { title: 'Privacy & GDPR Consent', description: 'UMP consent dialog triggers and ATT prompt flows pre-configured.' }
    ],
    specs: [
      { label: 'Platforms', value: 'Android, iOS' },
      { label: 'Unity Support', value: '2020.3, 2021.3, 2022.3, Unity 6' },
      { label: 'License', value: 'MIT License' }
    ],
    githubUrl: 'https://github.com/sggames',
    docsUrl: 'https://github.com/sggames',
    price: 'Free / MIT',
    engine: 'Unity'
  }
];
