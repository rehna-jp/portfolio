import React from 'react';
import { Terminal, Briefcase, GraduationCap, Users, Award, Calendar } from 'lucide-react';
import FadeIn from './FadeIn';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Frontend Development Intern',
      company: 'Node Eight Foundation',
      location: 'Ghana',
      period: 'Feb 2025 - Apr 2025',
      description: 'Developed responsive web applications using React and modern frontend practices. Built reusable UI components, integrated third-party APIs for dynamic data-driven experiences, and collaborated in team environments using Git.',
      technologies: ['React', 'Git', 'REST APIs', 'Responsive UI'],
      icon: <Briefcase className="w-5 h-5" />,
      color: 'from-[#7B61FF] to-[#6366f1]'
    },
    {
      id: 2,
      type: 'leadership',
      title: 'Team1 Collaborator',
      company: 'Avalanche (Team1)',
      location: 'Remote',
      period: '2026 - Present',
      description: 'Contributing to the Avalanche ecosystem as a Team1 collaborator — producing weekly ecosystem recaps, quote-tweets, and community content for a crypto-native audience.',
      technologies: ['Avalanche', 'Content Creation', 'Web3'],
      icon: <Users className="w-5 h-5" />,
      color: 'from-[#7B61FF] to-[#8b5cf6]'
    },
    {
      id: 3,
      type: 'leadership',
      title: 'Dev3Pack Ghana Lead',
      company: 'Dev3Pack',
      location: 'Ghana',
      period: 'Ongoing',
      description: 'Leading Dev3Pack community efforts in Ghana — organizing builder engagement, running Web3 education initiatives, and connecting students to blockchain ecosystems.',
      technologies: ['Community Building', 'Web3 Education', 'Solana'],
      icon: <Users className="w-5 h-5" />,
      color: 'from-[#6366f1] to-[#8b5cf6]'
    },
    {
      id: 4,
      type: 'leadership',
      title: 'Community Manager, BB Club (Blockchain Builders Club)',
      company: 'Ho Technical University',
      location: 'Ho, Ghana',
      period: 'Ongoing',
      description: 'Manage the university blockchain community, running Builder Connect workshops that connect students to Web3 tooling and ecosystems, and coordinating hackathon and bounty participation.',
      technologies: ['Community Management', 'Workshops', 'Web3'],
      icon: <Users className="w-5 h-5" />,
      color: 'from-[#8b5cf6] to-[#a855f7]'
    },
    {
      id: 5,
      type: 'education',
      title: 'B.Tech, Information & Communication Technology',
      company: 'Ho Technical University',
      location: 'Ho, Ghana',
      period: 'Expected 2027',
      description: 'Second-year ICT student, 3.7 GPA. Coursework spans information security, data analysis, server administration, and mobile app development, alongside self-directed blockchain and smart contract study.',
      technologies: ['ICT', 'Information Security', 'Data Analysis'],
      icon: <GraduationCap className="w-5 h-5" />,
      color: 'from-[#a855f7] to-[#7B61FF]'
    },
    {
      id: 6,
      type: 'certification',
      title: 'Cyfrin Updraft',
      company: 'Cyfrin',
      location: 'Online',
      period: 'Completed',
      description: 'Smart contract security and auditing training covering Solidity vulnerabilities, common exploit patterns, and audit methodology.',
      technologies: ['Solidity', 'Smart Contract Auditing', 'Foundry'],
      icon: <Award className="w-5 h-5" />,
      color: 'from-[#7B61FF] to-[#6366f1]'
    },
    {
      id: 7,
      type: 'certification',
      title: 'SheFi Scholar',
      company: 'SheFi',
      location: 'Online',
      period: 'Completed',
      description: 'Completed the SheFi blockchain and DeFi education program covering Web3 fundamentals, financial literacy, and decentralized finance.',
      technologies: ['DeFi', 'Web3 Fundamentals'],
      icon: <Award className="w-5 h-5" />,
      color: 'from-[#6366f1] to-[#8b5cf6]'
    }
  ];

  return (
    <section id="experience" className="relative overflow-hidden py-20 ">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(123, 97, 255, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(123, 97, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      <div className="container mx-auto relative z-10 px-6 max-w-5xl">
        {/* Header */}
        <FadeIn delay={0.2}>
          <div className="flex items-center gap-3 mb-12 justify-center lg:justify-start">
            <Terminal className="w-5 h-5 text-[#7B61FF]" />
            <span className="text-[#7B61FF] font-mono text-sm">~/experience</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#7B61FF]/50 to-transparent max-w-xs" />
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.3}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            My journey in tech and continuous learning
          </p>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7B61FF] via-[#6366f1] to-[#8b5cf6]" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <FadeIn key={exp.id} delay={0.4 + index * 0.1}>
                <div className="relative pl-20">
                  {/* Icon circle */}
                  <div className={`absolute left-0 w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg shadow-[#7B61FF]/20 border-4 border-[#0a0a0a]`}>
                    <span className="text-white">
                      {exp.icon}
                    </span>
                  </div>

                  {/* Content card */}
                  <div className="backdrop-blur-xl bg-[#121212]/80 border border-white/10 rounded-2xl p-6 hover:border-[#7B61FF]/50 transition-all duration-500 group hover:scale-[1.02] hover:shadow-xl hover:shadow-[#7B61FF]/10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#7B61FF] transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-[#7B61FF] font-medium">
                          {exp.company}
                        </p>
                        <p className="text-sm text-gray-500">
                          {exp.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-[#7B61FF]/10 text-[#7B61FF] border border-[#7B61FF]/20 hover:bg-[#7B61FF]/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <FadeIn delay={0.9}>
          <div className="mt-16 text-center">
            <div className="inline-block backdrop-blur-xl bg-[#121212]/80 border border-[#7B61FF]/30 rounded-2xl p-6">
              <p className="text-gray-400 mb-2">
                Want to work together?
              </p>
              <a
                href="#contact"
                className="text-[#7B61FF] hover:underline font-medium"
              >
                Let's connect →
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Experience;