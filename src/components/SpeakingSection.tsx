import React from 'react';

interface Talk {
  title: string;
  event: string;
  type: 'Keynote' | 'Talk' | 'Workshop' | 'Panel' | 'Lightning Talk' | 'Presentation';
}

const talks: Talk[] = [
  {
    title: 'Building Developer Communities from 0 to 74K+',
    event: 'DevRelCon 2024',
    type: 'Keynote',
  },
  {
    title: 'The Code & Coffee Model: Scaling Grassroots Communities',
    event: 'Community Club Summit',
    type: 'Panel',
  },
  {
    title: '100 Chats in 100 Days: What I Learned',
    event: 'DevRel Meetup DC',
    type: 'Talk',
  },
  {
    title: 'Creating Sustainable Developer Events',
    event: 'All Things Open',
    type: 'Workshop',
  },
  {
    title: 'From Meetup to Movement: The Developer Community Playbook',
    event: 'GitHub Universe',
    type: 'Lightning Talk',
  },
  {
    title: 'Brand Activations That Actually Work',
    event: 'SonarQube City Tour',
    type: 'Presentation',
  },
];

const typeColors: Record<string, string> = {
  Keynote: 'bg-ai-primary text-white',
  Talk: 'bg-ai-accent text-white',
  Workshop: 'bg-ai-secondary text-white',
  Panel: 'bg-blue-500 text-white',
  'Lightning Talk': 'bg-orange-500 text-white',
  Presentation: 'bg-purple-500 text-white',
};

const SpeakingSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ai-secondary mb-6">
            Speaking & Talks
          </h2>
          <p className="text-lg text-ai-text opacity-75 max-w-2xl">
            I've had the privilege of sharing insights and experiences on developer communities, grassroots movements, and sustainable tech initiatives across major conferences and events.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="mb-12 md:mb-16 bg-gradient-to-r from-ai-primary via-ai-accent to-ai-secondary rounded-2xl p-8 md:p-10 text-white shadow-lg">
          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">100+</p>
              <p className="text-lg opacity-90">Speaking Engagements</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">36</p>
              <p className="text-lg opacity-90">Cities</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">6</p>
              <p className="text-lg opacity-90">Countries</p>
            </div>
          </div>
        </div>

        {/* Talks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {talks.map((talk, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 md:p-7 border border-ai-neutral border-opacity-20 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Type Badge */}
              <div className="mb-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    typeColors[talk.type] || 'bg-gray-400 text-white'
                  }`}
                >
                  {talk.type}
                </span>
              </div>

              {/* Talk Title */}
              <h3 className="text-lg md:text-xl font-bold text-ai-secondary mb-3 flex-grow">
                {talk.title}
              </h3>

              {/* Event Name */}
              <p className="text-base text-ai-text opacity-70 mb-5 font-medium">
                {talk.event}
              </p>

              {/* Link Icon */}
              <div className="flex items-center justify-between pt-4 border-t border-ai-neutral border-opacity-10">
                <span className="text-sm text-ai-text opacity-60">Learn more</span>
                <svg
                  className="w-5 h-5 text-ai-primary transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ai-primary text-white font-semibold rounded-xl hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform"
          >
            {/* Speaking Icon */}
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
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            Invite Me to Speak
          </a>

          <p className="text-ai-text opacity-70 text-sm sm:text-base">
            Available for conferences, meetups, and community events
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;
