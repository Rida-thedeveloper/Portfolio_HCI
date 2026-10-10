import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Showcase } from './components/Showcase';
import { Principles } from './components/Principles';
import { Process } from './components/Process';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { DesignModal } from './components/DesignModal';
import { CHALLENGES } from './data/challengesData';
import { Challenge } from './types/portfolio';

export default function App() {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

  const handleOpenChallenge = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
  };

  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1a1c1b] flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Top Bar Navigation */}
      <Navbar onOpenChallenge={handleOpenChallenge} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Home — introduction and hero overview */}
        <Hero onOpenChallenge={handleOpenChallenge} />

        {/* 2. Design Challenges — showcase all five Daily UI projects */}
        <Showcase onOpenChallenge={handleOpenChallenge} />

        {/* 3. HCI Principles — foundational theory & heuristics */}
        <Principles />

        {/* 4. Methodology / Process */}
        <Process />

        {/* 5. About — student introduction & academic record */}
        <About />
      </main>

      {/* Footer & Connect */}
      <Footer />

      {/* Full Design Inspection Modal */}
      {selectedChallenge && (
        <DesignModal
          challenge={selectedChallenge}
          allChallenges={CHALLENGES}
          onClose={() => setSelectedChallenge(null)}
          onSelectChallenge={setSelectedChallenge}
        />
      )}
    </div>
  );
}
