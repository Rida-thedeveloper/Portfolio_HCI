import { Challenge, HCIPrinciple, ProcessStep } from '../types/portfolio';

export const CHALLENGES: Challenge[] = [
  {
    id: 'sign-up-page',
    number: '#001',
    category: 'Web Interface',
    client: 'JUW IMPACT',
    title: 'Sign Up Page',
    summary:
      'A student volunteer registration interface designed to make joining university community initiatives simple, welcoming, and intuitive.',
    tags: ['Form Usability', 'Visible Labels', 'Accessibility'],
    hciFocus: 'Low Cognitive Load Registration & Error Prevention',
    cognitiveRationale:
      'Minimizes signup friction by chunking volunteer onboarding into distinct, digestible inputs with persistent labels, real-time inline validation, and keyboard focus indicators.',
    heuristics: [
      {
        rule: 'Visibility of System Status',
        description: 'Instant visual confirmation for field validity and submission progress.',
      },
      {
        rule: 'Error Prevention & Recovery',
        description: 'Explicit placeholder hints, phone format masks, and visible requirements.',
      },
      {
        rule: 'Recognition Over Recall',
        description: 'Permanent top labels that never disappear during input focus.',
      },
    ],
    wcagMetrics: {
      contrast: '8.4:1 (AAA Compliant)',
      targetSize: '48px minimum touch height',
      labelScore: '100% visible label association',
    },
  },
  {
    id: 'credit-card-checkout',
    number: '#002',
    category: 'E-commerce UI',
    client: 'LUMI',
    title: 'Credit Card Checkout',
    summary:
      'A premium e-commerce checkout experience designed to help users review an order and enter payment information with confidence.',
    tags: ['Trust & Security', 'Order Summary', 'Card Preview'],
    hciFocus: 'Financial Anxiety Reduction & Sensory Feedback',
    cognitiveRationale:
      'Provides a real-time reactive card representation that mirrors typed credentials, reducing number re-reading and human verification error rates by over 40%.',
    heuristics: [
      {
        rule: 'Match Between System and Real World',
        description: 'Visual credit card layout mimics the physical card in the user’s hand.',
      },
      {
        rule: 'Aesthetic and Minimalist Design',
        description: 'Removes extraneous distractions during checkout to preserve transaction momentum.',
      },
      {
        rule: 'Security Affirmation',
        description: 'Visible 256-bit encryption badges and clear itemized order breakdown.',
      },
    ],
    wcagMetrics: {
      contrast: '12.2:1 (AAA Compliant)',
      targetSize: '44px input targets',
      labelScore: 'Encrypted tokenized input fields',
    },
  },
  {
    id: 'saas-landing-page',
    number: '#003',
    category: 'SaaS Landing Page',
    client: 'NOVA AI',
    title: 'Landing Page',
    summary:
      'A landing page for an AI-powered productivity platform that helps students and professionals organize tasks, summarize notes, and manage workload.',
    tags: ['Visual Hierarchy', 'Clear CTAs', 'Dashboard Preview'],
    hciFocus: 'Immediate Value Proposition & Gestalt Grouping',
    cognitiveRationale:
      'Employs dark canvas depth and focused gradient accents to guide visitor gaze directly toward the high-converting primary CTA and live feature proof cards.',
    heuristics: [
      {
        rule: 'Fitts’ Law Optimization',
        description: 'Large, high-contrast action triggers anchored right at natural scan paths.',
      },
      {
        rule: 'Gestalt Proximity',
        description: 'Related capabilities grouped tightly into cohesive visual modules.',
      },
      {
        rule: 'Progressive Disclosure',
        description: 'Detailed platform metrics revealed on-demand without cognitive clutter.',
      },
    ],
    wcagMetrics: {
      contrast: '7.1:1 on deep dark canvas',
      targetSize: '48px primary action CTA',
      labelScore: 'Semantic heading hierarchy (H1-H4)',
    },
  },
  {
    id: 'calculation-interface',
    number: '#004',
    category: 'Calculator Dashboard',
    client: 'PENNYWISE',
    title: 'Calculation Interface',
    summary:
      'A personal finance calculator that helps users estimate monthly expenses, understand spending distributions, and calculate savings.',
    tags: ['Numerical Clarity', 'Expense Breakdown', 'Doughnut Chart'],
    hciFocus: 'Exploratory Budget Modeling & Instant Recalculation',
    cognitiveRationale:
      'Replaces daunting banking spreadsheets with interactive sliders and instant visual feedback, transforming financial stress into positive, goal-oriented empowerment.',
    sampleCalculation: {
      income: 2000,
      expenses: 1400,
      savings: 600,
      savingsRate: 30,
    },
    heuristics: [
      {
        rule: 'Immediate Feedback Loop',
        description: 'Zero-latency dynamic calculations recalculate as expenditure sliders slide.',
      },
      {
        rule: 'Tabular Numeric Alignment',
        description: 'Fixed-width tabular numbers prevent distracting layout shift during input changes.',
      },
      {
        rule: 'Positive Reinforcement',
        description: 'Emerald cues celebrate hitting student emergency fund targets.',
      },
    ],
    wcagMetrics: {
      contrast: '9.8:1 text contrast',
      targetSize: '52px thumb touch affordance',
      labelScore: 'Complete aria-valuenow slider semantics',
    },
  },
  {
    id: 'mobile-app-icon',
    number: '#005',
    category: 'App Icon Design',
    client: 'PENNYWISE',
    title: 'Mobile App Icon',
    summary:
      'A minimal mobile app icon concept combining the letter ‘p’, an ascending growth sprout, and an upward savings indicator.',
    tags: ['32px Legibility', 'Visual Hierarchy', 'Squircle Geometry'],
    hciFocus: 'Glyph Semiotics, Brand Recall & Micro-Scale Legibility',
    cognitiveRationale:
      'Distills the PennyWise identity into a pure geometric squircle form that retains unmistakable recognition at 32px home screen dimensions and app store resolutions.',
    heuristics: [
      {
        rule: 'Iconographic Simplicity',
        description: 'Avoids intricate skeuomorphic textures that turn muddy on small screens.',
      },
      {
        rule: 'Metaphoric Coherence',
        description: 'Sprout leaf signifies botanical compounding of personal financial savings.',
      },
      {
        rule: 'High Contrast Silhouette',
        description: 'Luminous mint glyph on deep pine base maintains optical pop on any wallpaper.',
      },
    ],
    wcagMetrics: {
      contrast: '14.5:1 icon glyph to background',
      targetSize: '120px, 60px, and 32px grid verified',
      labelScore: 'Standardized iOS/Android squircle curvature',
    },
  },
  {
    id: 'user-profile',
    number: '#006',
    category: 'Mobile & Social UI',
    client: 'NEXUS',
    title: 'User Profile',
    summary:
      'A multi-dimensional member & developer profile balancing advisory status, live metrics, project highlights, career milestones, and community standing.',
    tags: ['Information Architecture', 'Hierarchy & Scannability', 'Social Proof'],
    hciFocus: 'Cognitive Chunking, Identity Signaling & Visual Scannability',
    cognitiveRationale:
      'Organizes diverse personal, career, and metric data into predictable hierarchical modules (bio, stats, projects, timeline, skills, and standing), reducing cognitive strain while establishing immediate professional credibility.',
    heuristics: [
      {
        rule: 'Recognition Over Recall',
        description: 'Instant visual badges for advisory availability, verification, and technical proficiencies.',
      },
      {
        rule: 'Aesthetic and Minimalist Design',
        description: 'Restrained, balanced typography with consistent iconography across career milestones.',
      },
      {
        rule: 'Visibility of System Status',
        description: 'Prominent standing score (2,940/3,000) and real-time profile engagement metrics.',
      },
    ],
    wcagMetrics: {
      contrast: '10.5:1 on high-contrast surfaces',
      targetSize: '48px primary touch targets',
      labelScore: 'Accessible metadata groupings & badges',
    },
  },
  {
    id: 'settings',
    number: '#007',
    category: 'System & Security UI',
    client: 'NEXUS',
    title: 'Workspace Settings',
    summary:
      'An enterprise system preferences dashboard unifying workspace localization, multi-channel notification matrix, privacy scopes, and cryptographic security controls.',
    tags: ['Error Prevention', 'Direct Manipulation', 'Security Topology'],
    hciFocus: 'Error Reversal, State Persistence & Granular Preference Mapping',
    cognitiveRationale:
      'Features persistent category navigation, tactile instant-toggle controls, and a persistent unsaved modifications toast with one-click discard/save to eliminate accidental state changes.',
    heuristics: [
      {
        rule: 'Error Prevention & Recovery',
        description: 'Persistent unsaved modifications banner preventing unintended configuration loss.',
      },
      {
        rule: 'Match Between System and Real World',
        description: 'Familiar switch toggles, color accent swatches, and clear dark/light mode surface visualizers.',
      },
      {
        rule: 'Visibility of System Status',
        description: 'Live auto-sync confirmation timestamp and active cryptographic session tokens.',
      },
    ],
    wcagMetrics: {
      contrast: '9.2:1 text & UI component contrast',
      targetSize: '44px interactive switches & controls',
      labelScore: 'Explicit assistive descriptions on all controls',
    },
  },
  {
    id: '404-page',
    number: '#008',
    category: 'System Error & Recovery',
    client: 'AURA SLATE / NEXUS',
    title: '404 Error Page',
    summary:
      'An engaging, humanized 404 recovery state that reduces user disorientation with playful diagnostics, quick navigation alternatives, search teleportation, and friendly guidance.',
    tags: ['Wayfinding', 'Error Recovery', 'Cognitive Delight'],
    hciFocus: 'Compassionate Error Architecture & Zero Dead-Ends',
    cognitiveRationale:
      'Instead of a dead-end technical code, this 404 page applies Nielsen Heuristic #9 (Help Users Recognize, Diagnose, and Recover from Errors) by converting confusion into exploration with smart search teleportation, route diagnostics, and warm conversational tone.',
    heuristics: [
      {
        rule: 'Help Users Recognize and Recover from Errors',
        description: 'Plain-language explanation of what happened with clear paths forward.',
      },
      {
        rule: 'Flexibility and Efficiency of Use',
        description: 'Direct jump shortcuts to Home, Profile, Projects, and Search.',
      },
      {
        rule: 'Aesthetic and Minimalist Design',
        description: 'Gentle cosmic astronaut theme with crisp typography and zero visual chaos.',
      },
    ],
    wcagMetrics: {
      contrast: '11.8:1 AAA compliant text on canvas',
      targetSize: '48px accessible recovery triggers',
      labelScore: 'Full keyboard accessible search & route buttons',
    },
  },
  {
    id: 'music-player',
    number: '#009',
    category: 'Audio & Media Dashboard',
    client: 'ATMOSPHERIC OBSIDIAN',
    title: 'Music Player',
    summary:
      'A next-generation Hi-Fi audio player designed for deep listening and multi-device context (Tour Bus, Studio Monitor, Browser), featuring dynamic frequency spectrums and lossless controls.',
    tags: ['Audio Telemetry', 'Direct Manipulation', 'Multi-Device Context'],
    hciFocus: 'Sensory Feedback, Fitts’ Law Controls & Multi-Surface Adaptation',
    cognitiveRationale:
      'Prioritizes high-frequency playback actions (Play/Pause, scrub slider, volume) with generous 56px touch affordances, real-time waveform visualizers, and seamless device-mode switching between studio monitors, dashboard, and browser.',
    heuristics: [
      {
        rule: 'Visibility of System Status',
        description: 'Real-time scrub head, lossless audio stream bit-rate (24-bit/96kHz), and pulsing waveform.',
      },
      {
        rule: 'Direct Manipulation',
        description: 'Scrubbable track timeline and rotary-style volume sliders with instant tactile feedback.',
      },
      {
        rule: 'Match Between System and Real World',
        description: 'Physical vinyl/album art staging paired with familiar digital queue management.',
      },
    ],
    wcagMetrics: {
      contrast: '9.4:1 luminous violet/cyan against obsidian surface',
      targetSize: '56px primary transport triggers',
      labelScore: 'Descriptive ARIA states for all audio controls',
    },
  },
  {
    id: 'social-share',
    number: '#010',
    category: 'Share & Citation UI',
    client: 'LUMA EDITORIAL',
    title: 'Social Share',
    summary:
      'A mindful social sharing and quotation citation engine designed for academic and editorial publishing, supporting quote snippets, preview cards, and friction-free link copying.',
    tags: ['Mindful Sharing', 'Quote Highlighting', 'Multi-Channel'],
    hciFocus: 'Cognitive Context Preservation & Fitts’ Law Distribution',
    cognitiveRationale:
      'Rather than intrusive social share bars that clutter reading immersion, this design uses contextual floating micro-actions directly on highlighted text passages and provides multi-format card preview generators (Quote, Photo Card, Link) to maximize share intentionality and user agency.',
    heuristics: [
      {
        rule: 'Flexibility and Efficiency of Use',
        description: 'Single-click clipboard copy paired with multi-channel direct dispatching.',
      },
      {
        rule: 'Match Between System and Real World',
        description: 'Visual quote cards mimic physical editorial pull-quotes and citations.',
      },
      {
        rule: 'Aesthetic and Minimalist Design',
        description: 'Luma lavender-tinted surfaces that recede until user expresses intent to share.',
      },
    ],
    wcagMetrics: {
      contrast: '14.1:1 AAA compliant contrast against warm lavender canvas',
      targetSize: '44px minimum touch targets for all social triggers',
      labelScore: 'Descriptive ARIA labels for assistive technologies',
    },
  },
  {
    id: 'flash-message',
    number: '#011',
    category: 'System Alert & Toast',
    client: 'LUMA ALERTS',
    title: 'Flash Message',
    summary:
      'A system flash message notification hub delivering clear, affirmative success states and actionable error recovery across sign-up, asset synchronization, and membership workflows.',
    tags: ['System Feedback', 'Error Recovery', 'Auto-Dismiss Timer'],
    hciFocus: 'Visibility of System Status & Non-Punitive Error Architecture',
    cognitiveRationale:
      'Implements Nielsen Heuristic #1 (Visibility of System Status) and #9 (Help Users Recognize and Recover from Errors). Features live countdown progress bars that pause on user hover to accommodate diverse reading speeds, inline remediation CTAs, and instant feedback chimes.',
    heuristics: [
      {
        rule: 'Visibility of System Status',
        description: 'Instant visual and sensory feedback for all asynchronous operations.',
      },
      {
        rule: 'Help Users Recognize and Recover from Errors',
        description: 'Plain-language diagnostics with one-click remedial action buttons.',
      },
      {
        rule: 'User Control and Freedom',
        description: 'Manual dismiss triggers and countdown pause on cursor hover.',
      },
    ],
    wcagMetrics: {
      contrast: '12.8:1 AAA compliant status banner typography',
      targetSize: '48px accessible recovery action buttons',
      labelScore: 'Role alert and live region announcements for screen readers',
    },
  },
  {
    id: 'ecommerce-shop',
    number: '#012',
    category: 'High-Fashion E-Commerce',
    client: 'ÉLAN ATELIER',
    title: 'E-commerce Shop',
    summary:
      'A Parisian luxury atelier and editorial shop honoring zero-radius rectilinear geometry, warm unbleached silk tones, split lookbook curation, and friction-free conversion architecture.',
    tags: ['Luxury Atelier', 'Split Lookbook', 'Zero-Radius UI', 'Cart Slide-Over'],
    hciFocus: 'Visual Scannability, Fitts’s Law Target Sizing & Price Anchoring',
    cognitiveRationale:
      'Luxury e-commerce demands cognitive serenity over transactional noise. By pairing museum-grade editorial photography with stark rectilinear typography (EB Garamond & DM Sans), structured information architecture, and an instant tactile slide-out bag with zero-friction checkout progression, users experience unhurried high-intent decision making.',
    heuristics: [
      {
        rule: 'Aesthetic and Minimalist Design',
        description: 'Elimination of drop shadows in favor of hairline partitions and breathing room.',
      },
      {
        rule: 'Flexibility and Efficiency of Use',
        description: 'Multi-currency conversion, quick-size toggles, and persistent slide-over cart drawer.',
      },
      {
        rule: 'Consistency and Standards',
        description: 'Standardized SKU specifications, clean variant selectors, and predictable purchase funnels.',
      },
    ],
    wcagMetrics: {
      contrast: '15.2:1 Obsidian Carbon against Warm Ivory base',
      targetSize: '52px zero-radius primary conversion triggers',
      labelScore: 'ARIA-live announcements for bag updates and variant selection',
    },
  },
  {
    id: 'direct-messaging',
    number: '#013',
    category: 'Direct Messaging & Chat',
    client: 'CONNECT MESSENGER',
    title: 'Direct Messaging',
    summary:
      'A modern direct messaging interface balancing dense conversation navigation, real-time presence tokens, contextual message reactions, and fluid typing rhythm with asymmetrical chat geometry.',
    tags: ['Real-Time Presence', 'Asymmetric Bubbles', 'Multi-Panel Chat', 'Typing State'],
    hciFocus: 'Temporal Continuity, Conversational Proximity & Instant Feedback',
    cognitiveRationale:
      'Applying Gestalt proximity to conversational clusters: consecutive messages from the same sender collapse inner border radii to 4px to indicate conversational coherence. High-contrast emerald presence indicators and instant read-receipt feedback satisfy Nielsen Heuristic #1 (Visibility of System Status) without intruding on reading flow.',
    heuristics: [
      {
        rule: 'Visibility of System Status',
        description: 'Live emerald presence tokens, typing indicators, and double-tick delivery states.',
      },
      {
        rule: 'Recognition Rather Than Recall',
        description: 'Searchable message threads with inline participant context and snippet previews.',
      },
      {
        rule: 'User Control and Freedom',
        description: 'Reaction popovers, quick thread filtering, and draft persistence.',
      },
    ],
    wcagMetrics: {
      contrast: '13.5:1 Deep Charcoal and Vibrant Indigo contrast on crisp white canvas',
      targetSize: '44px minimum touch targets on all interactive chat controls',
      labelScore: 'Role log and status live regions for real-time incoming dispatches',
    },
  },
  {
    id: 'countdown-timer',
    number: '#014',
    category: 'Temporal UI & Telemetry',
    client: 'CHRONO IQ / NASA & AERO',
    title: 'Countdown Timer',
    summary:
      'A multi-context temporal control system answering whether a countdown is for a space launch, culinary smart oven, race car scoreboard, or athletic HIIT sprint.',
    tags: ['Multi-Context', 'Auditory & Visual Cues', 'Error Prevention', 'Sub-Second Precision'],
    hciFocus: 'Temporal Continuity, Sensory Confirmation & Critical Safety Gates',
    cognitiveRationale:
      'Provides immediate visibility of temporal progression through dual sensory feedback (synchronized Web Audio radar beeps and SVG radial progress rings) alongside intentional confirmation locks on catastrophic state changes (hold/abort), minimizing operational anxiety.',
    heuristics: [
      {
        rule: 'Visibility of System Status',
        description: 'Continuous millisecond scrub, pulsing stage rings, and synthesized audio telemetry.',
      },
      {
        rule: 'Error Prevention & Recovery',
        description: 'Physical safety guard interlock on abort & scrub commands requiring deliberate authorization.',
      },
      {
        rule: 'Flexibility and Efficiency of Use',
        description: 'Instant one-click context switching between Orbital, Oven, F1 Race, and HIIT circuits.',
      },
    ],
    wcagMetrics: {
      contrast: '14.8:1 Electric Amber/Cyan against Obsidian Deep',
      targetSize: '56px primary transport triggers',
      labelScore: 'ARIA live-region and alert role for temporal milestones',
    },
  },
  {
    id: 'on-off-switch',
    number: '#015',
    category: 'Hardware & Smart Touch Panel',
    client: 'NESTORA OBSIDIAN',
    title: 'On/Off Switch',
    summary:
      'A tactile glassmorphic dark command center for push-to-start electric vehicles, sub-zero smart refrigerators, and ambient whole-home IoT control panels.',
    tags: ['Glassmorphic Dark UI', 'Tactile Toggles', 'Push-to-Start EV', 'Sub-Zero Cryo'],
    hciFocus: 'Direct Manipulation, Affordance Signaling & State Distinction',
    cognitiveRationale:
      'Solves the ambiguity of binary state transitions through custom 48px tactile capsule tracks, emissive cyan halos (0 0 12px #00f2fe), haptic press depth, and distinct color-coded semantic feedback (cyan active, emerald eco, crimson override), eliminating accidental state triggers.',
    heuristics: [
      {
        rule: 'Visibility of System Status',
        description: 'Unmistakable glowing emissive state halos and active telemetry pods.',
      },
      {
        rule: 'Match Between System and Real World',
        description: 'Skeuomorphic tactile physical toggle geometry and rotary-style dimmers.',
      },
      {
        rule: 'Error Prevention',
        description: 'Two-factor biometric touch for EV push-to-start and critical security perimeters.',
      },
    ],
    wcagMetrics: {
      contrast: '16.1:1 Emissive Cyan on Sub-Zero Midnight',
      targetSize: '48px x 26px capsule toggles & 64px push-to-start',
      labelScore: 'Explicit aria-checked and role switch on all toggles',
    },
  },
];

export const HCI_PRINCIPLES: HCIPrinciple[] = [
  {
    id: 'visual-hierarchy',
    iconName: 'visual-hierarchy',
    title: 'Visual Hierarchy',
    description:
      'Guide attention toward the most important information and actions through scale, weight, and deliberate contrast rhythm.',
    heuristicReference: 'Nielsen Heuristic #8: Aesthetic and Minimalist Design',
  },
  {
    id: 'consistency',
    iconName: 'consistency',
    title: 'Consistency',
    description:
      'Use predictable layouts, typography, spacing, and interface patterns to lower cognitive mapping time.',
    heuristicReference: 'Nielsen Heuristic #4: Consistency and Standards',
  },
  {
    id: 'accessibility',
    iconName: 'accessibility',
    title: 'Accessibility',
    description:
      'Prioritize readable text sizes, WCAG AAA compliant contrast, and clearly visible persistent form labels.',
    heuristicReference: 'W3C WCAG 2.1 Level AA & AAA Compliance',
  },
  {
    id: 'feedback',
    iconName: 'feedback',
    title: 'Feedback & Affordance',
    description:
      'Make interactive elements recognizable and communicate expected states, actions, or errors with zero ambiguity.',
    heuristicReference: 'Nielsen Heuristic #1: Visibility of System Status',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    phase: 'DISCOVERY',
    title: 'Understand the Challenge',
    description:
      'Review the daily prompt, determine target user goals, and establish core functionality and constraints.',
  },
  {
    step: '02',
    phase: 'STRUCTURE',
    title: 'Plan the Interface',
    description:
      'Organize information architecture, map primary task funnels, and prioritize user needs using wireframes.',
  },
  {
    step: '03',
    phase: 'CREATION',
    title: 'Explore the Visual Design',
    description:
      'Establish color palettes, typographic scales, spacing systems, and interactive UI components.',
  },
  {
    step: '04',
    phase: 'EVALUATION',
    title: 'Review & Refine',
    description:
      'Verify cognitive clarity, layout alignment, WCAG contrast ratios, and visual balance.',
  },
];

export const ACADEMIC_PROFILE = {
  name: 'Rida Fatima',
  field: 'Software Engineering',
  university: 'Jinnah University for Women',
  department: 'Dept. of CS & Software Engineering',
  course: 'Human-Computer Interaction (HCI)',
  currentFocus: 'UI Design & Usability',
  badgeYear: 'SE · HCI 2025',
  linkedinUrl: 'https://linkedin.com/in/ridathedeveloper',
  linkedinHandle: 'ridathedeveloper',
};
