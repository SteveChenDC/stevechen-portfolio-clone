import React from 'react';

interface Experience {
  company: string;
  role: string;
  dates: string;
  highlights: string[];
  isCurrent?: boolean;
}

const experiences: Experience[] = [
  {
    company: 'SonarSource',
    role: 'Developer Relations',
    dates: 'Current',
    highlights: [
      'Building developer community programs and user groups globally',
      'Driving developer adoption through events, content, and advocacy',
    ],
    isCurrent: true,
  },
  {
    company: 'Code & Coffee Collective',
    role: 'Founder',
    dates: '2019 - Present',
    highlights: [
      'Founded and scaled a developer community to 74,738+ members across 36 cities',
      'Organized 6,200+ events with 500+ monthly active participants',
    ],
  },
  {
    company: '100 Chats in 100 Days',
    role: 'Creator',
    dates: '2020',
    highlights: [
      'Conducted 100 one-on-one conversations with developers in 100 consecutive days',
      'Generated insights that shaped community programming and strategy',
    ],
  },
  {
    company: 'DC Tech Community',
    role: 'Founder',
    dates: '2017 - Present',
    highlights: [
      'Founded the DC developer community from scratch',
      '100+ speaking engagements and brand activations',
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ai-secondary mb-6">
            Experience
          </h2>
          <p className="text-lg text-ai-text opacity-75 max-w-2xl">
            A track record of building communities, driving developer adoption, and creating meaningful connections in the tech ecosystem.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-ai-primary via-ai-accent to-ai-primary opacity-30 md:block hidden"></div>

          {/* Experience Items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:ml-24">
                {/* Timeline Dot */}
                <div className="absolute -left-6 md:-left-16 top-2 w-4 h-4 md:w-5 md:h-5 bg-ai-primary rounded-full border-4 border-white shadow-lg"></div>

                {/* Current Badge */}
                {exp.isCurrent && (
                  <div className="absolute -top-3 left-0 md:left-0">
                    <span className="inline-block bg-ai-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Current Role
                    </span>
                  </div>
                )}

                {/* Card */}
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-ai-neutral border-opacity-20 hover:shadow-lg transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-ai-secondary">
                      {exp.role}
                    </h3>
                    <span className="text-base md:text-lg font-semibold text-ai-accent">
                      {exp.dates}
                    </span>
                  </div>

                  {/* Company */}
                  <p className="text-lg text-ai-text opacity-70 mb-4 font-medium">
                    {exp.company}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {/* Checkmark SVG Icon */}
                          <svg
                            className="w-5 h-5 text-ai-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-base text-ai-text opacity-85 leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          {/* Resume Button */}
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ai-primary text-white font-semibold rounded-xl hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform"
          >
            {/* Download SVG Icon */}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/stevechendc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-ai-primary text-ai-primary font-semibold rounded-xl hover:bg-ai-primary hover:text-white transition-colors duration-300"
          >
            {/* LinkedIn SVG Icon */}
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            View Full Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
