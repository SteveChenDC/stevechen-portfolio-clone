import React from 'react';

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Community & DevRel',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-2a6 6 0 0112 0v2zm0 0h6v-2a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      skills: [
        { name: 'Community Building' },
        { name: 'Developer Advocacy' },
        { name: 'Event Production' },
        { name: 'Public Speaking' },
        { name: 'Content Strategy' },
        { name: 'Developer Experience' },
      ],
    },
    {
      title: 'Platforms & Tools',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      skills: [
        { name: 'Discord' },
        { name: 'Meetup' },
        { name: 'Bevy' },
        { name: 'Lu.ma' },
        { name: 'Notion' },
        { name: 'GitHub' },
        { name: 'Figma' },
        { name: 'Linear' },
      ],
    },
    {
      title: 'Technical',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4m0 0l-4 4m4-4H3" />
        </svg>
      ),
      skills: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'HTML/CSS' },
        { name: 'Node.js' },
        { name: 'Git' },
      ],
    },
    {
      title: 'Analytics & Growth',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8L5.257 19.393A2 2 0 005 18.07V5a2 2 0 012-2h10a2 2 0 012 2z" />
        </svg>
      ),
      skills: [
        { name: 'Community Metrics' },
        { name: 'Growth Strategy' },
        { name: 'User Research' },
        { name: 'Data Analysis' },
        { name: 'A/B Testing' },
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-ai-secondary mb-6">
            Skills & Tools
          </h2>
          <p className="text-lg text-ai-text opacity-75 max-w-2xl">
            A comprehensive toolkit for building communities, advocating for developers,
            and driving growth through technical expertise and data-driven strategies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Category Header with Icon */}
              <div className="flex items-center gap-3 mb-5">
                <div className="text-ai-primary flex-shrink-0">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-ai-secondary">
                  {category.title}
                </h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block px-3 py-1.5 bg-ai-primary bg-opacity-10 text-ai-primary rounded-full text-sm font-medium hover:bg-opacity-20 transition-colors duration-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-ai-text opacity-75">
            Always learning and evolving. Interested in exploring opportunities?{' '}
            <a href="#contact" className="text-ai-primary font-semibold hover:underline">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
