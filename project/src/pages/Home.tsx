import React from 'react';
import HeroSection from './HeroSection';
import FeaturedSection from './FeaturedSection';
import ProjectsSection from './ProjectsSection';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* <HeroSection /> */}
      <FeaturedSection />
      <ProjectsSection />
    </div>
  );
}

export default App;