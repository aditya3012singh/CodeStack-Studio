import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './about/HeroSection';
import StorySection from './about/StorySection';
import MissionSection from './about/MissionSection';
import TimelineSection from './about/TimelineSection';
import TeamSection from './about/TeamSection';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      <HeroSection />
      <StorySection />
      <MissionSection />
      <TimelineSection />
      <TeamSection />
    </motion.div>
  );
};

export default About;