import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, Images } from 'lucide-react';
import { Project } from '../types/Project';
import ImageGalleryModal from './ImageGalleryModel';

interface ProjectCardProps {
  project: Project;
  viewMode?: 'grid' | 'list';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, viewMode = 'grid' }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const statusColors = {
    live: 'bg-green-500/20 text-green-400 border-green-500/30',
    development: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'coming-soon': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'delivered-to-client': 'bg-blue-500/20 text-blue-400 border-blue-500/30'
  };

  const statusLabels = {
    live: 'Released',
    development: 'Early Access',
    'coming-soon': 'Coming Soon',
    'delivered-to-client': 'Delivered'
  };

  const handleLiveLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(project.link, '_blank', 'noopener,noreferrer');
  };

  const handleSeeImagesClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsGalleryOpen(true);
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -6 }}
        whileTap={{ scale: 0.98 }}
        className="relative bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-800 hover:border-purple-500/40 transition-all duration-300 overflow-hidden group cursor-pointer"
      >
        {/* Top gradient header */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 pointer-events-none"></div>

        {/* Status Tag */}
        {project.status && (
          <span
            className={`absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-2xl z-20 ${statusColors[project.status]}`}
          >
            {statusLabels[project.status]}
          </span>
        )}

        {/* Main Content - Always visible on mobile */}
        <div className="relative z-10">
          {/* Image */}
          <div className="relative h-32 sm:h-40 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 space-y-3 relative z-20">
            <h3 className="text-base sm:text-lg font-bold text-white line-clamp-1">{project.title}</h3>
            <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 sm:py-1 bg-slate-800/50 text-gray-300 text-xs rounded-full border border-slate-700/50"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-2 py-0.5 sm:py-1 bg-slate-800/50 text-gray-400 text-xs rounded-full border border-slate-700/50">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>

            {/* Rating & Stats */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800">
              {project.rating ? (
                <div className="flex items-center gap-1 text-yellow-300">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                  <span className="text-xs sm:text-sm font-medium">{project.rating}</span>
                </div>
              ) : (
                <span className="text-gray-500 text-xs sm:text-sm">No rating</span>
              )}
              <span className="text-gray-400 text-xs">
                {project.reviews || 0} reviews • {project.date}
              </span>
            </div>

            {/* Mobile Action Buttons - Always visible */}
            <div className="flex gap-2 pt-3 sm:hidden">
              {project.status === 'live' && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleLiveLinkClick}
                  className="flex-1 px-3 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all duration-300 active:scale-95"
                >
                  <ExternalLink className="w-3 h-3" />
                  Live Link
                </motion.button>
              )}

              {project.images && project.images.length > 0 && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSeeImagesClick}
                  className="flex-1 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all duration-300 active:scale-95"
                >
                  <Images className="w-3 h-3" />
                  Pictures
                </motion.button>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Hover Overlay - Hidden on mobile */}
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center gap-3 opacity-0 sm:group-hover:opacity-100 transition-all duration-300 z-30 pointer-events-none sm:pointer-events-auto">
          {project.status === 'live' && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLiveLinkClick}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Live Link
            </motion.button>
          )}

          {project.images && project.images.length > 0 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSeeImagesClick}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg text-sm"
            >
              <Images className="w-4 h-4" />
              See Pictures
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Image Gallery Modal */}
      <ImageGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={project.images || []}
        title={project.title}
        projectLink={project.link}
      />
    </>
  );
};

export default ProjectCard;