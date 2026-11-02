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
