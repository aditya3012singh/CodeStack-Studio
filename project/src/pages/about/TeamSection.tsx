import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Mail } from 'lucide-react';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Aditya Singh',
      role: 'Founder & CEO',
      image: '/images/MyPic.png',
      bio: 'Full-stack web & Flutter developer with 2 years of experience building scalable, user-focused digital solutions.',
      skills: [
        'Full-stack Developer',
        'Flutter Developer',
        'Next.js',
        'Node.js',
        'PostgreSQL',
        'AI Integrations'
      ],
      social: {
        linkedin: 'https://www.linkedin.com/in/aditya-singh-8b8045345/',
        email: 'aditya3012singh@gmail.com'
      },
      quote: "Great products are born from understanding real human needs."
    }
  ];

  const achievements = [
    { number: '15', label: 'Countries', color: 'text-teal-400', bg: 'from-teal-500/20 to-green-500/20' },
    { number: '4.8★', label: 'Average Rating', color: 'text-green-400', bg: 'from-green-500/20 to-emerald-500/20' },
    { number: '98%', label: 'User Satisfaction', color: 'text-pink-400', bg: 'from-pink-500/20 to-rose-500/20' },
    { number: '24/7', label: 'Support Available', color: 'text-orange-400', bg: 'from-orange-500/20 to-red-500/20' }
  ];

  return (
    <div className="bg-gradient-to-br from-black via-slate-900 to-green-900 relative overflow-hidden pb-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet the Visionaries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building impactful apps & websites that users love and businesses trust.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Team Member Card */}
          <div className="flex justify-center items-center min-h-16 mb-24">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-500 group relative overflow-hidden max-w-sm"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500"></div>

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="mb-6"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-28 h-28 rounded-2xl mx-auto object-cover border-4 border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300 shadow-lg"
                    />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 font-semibold mb-4">{member.role}</p>

                  <blockquote className="text-gray-300 text-sm italic mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    "{member.quote}"
                  </blockquote>

                  <p className="text-gray-400 text-sm mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {member.skills.slice(0, 3).map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + skillIndex * 0.1, duration: 0.4 }}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-lg text-xs font-medium border border-purple-500/20"
                      >
                        {skill}
                      </motion.span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="px-3 py-1 bg-slate-700/50 text-gray-400 rounded-lg text-xs">
                        +{member.skills.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <motion.a
                      href={member.social.linkedin}
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      className="w-10 h-10 bg-slate-700/50 rounded-xl flex items-center justify-center hover:bg-blue-700/80 transition-all duration-300 group/social"
                    >
                      <Linkedin className="w-4 h-4 text-gray-400 group-hover/social:text-white" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.social.email}`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="w-10 h-10 bg-slate-700/50 rounded-xl flex items-center justify-center hover:bg-green-600/80 transition-all duration-300 group/social"
                    >
                      <Mail className="w-4 h-4 text-gray-400 group-hover/social:text-white" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section with Hover Animation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((ach, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${ach.bg} text-center shadow-lg transition-all duration-300`}
              >
                <div className={`text-2xl font-bold ${ach.color}`}>{ach.number}</div>
                <div className="text-gray-300 text-sm mt-1">{ach.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default TeamSection;
