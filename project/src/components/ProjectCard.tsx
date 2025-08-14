import React from 'react';
import { motion } from 'framer-motion';
import { Star, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <div className={`relative bg-gradient-to-br ${project.gradient} rounded-2xl p-6 h-full overflow-hidden`}>
        {/* Status Badge */}
        {project.status && (
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
            project.status === 'Released' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
            project.status === 'Early Access' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
            'bg-orange-500/20 text-orange-300 border border-orange-500/30'
          }`}>
            {project.status}
          </div>
        )}

        {/* App Icon & Title */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center font-bold text-xl">
            {project.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              {project.rating && (
                <>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white/90 font-medium">{project.rating}</span>
                  </div>
                  <span className="text-white/60">•</span>
                  <span className="text-white/90">{project.reviews} reviews</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/90 mb-6 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-xs text-white/90"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats & CTA */}
        <div className="flex items-center justify-between">
          

        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;