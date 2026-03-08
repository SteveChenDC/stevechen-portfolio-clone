import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  gradient: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Steve has an extraordinary ability to bring people together. His communities don't just grow — they thrive because he genuinely cares about every member.",
      name: 'Alex Rivera',
      title: 'Senior Developer Advocate',
      company: 'GitHub',
      gradient: 'from-ai-primary/5',
    },
    {
      quote: "The Code & Coffee model Steve created is unlike anything I've seen. He turned casual meetups into a movement that's changing how developers connect.",
      name: 'Maya Thompson',
      title: 'VP of Community',
      company: 'Dev.to',
      gradient: 'from-ai-accent/5',
    },
    {
      quote: "Working with Steve on our developer community strategy was transformative. He brought data-driven insights paired with authentic community instincts.",
      name: 'Jordan Park',
      title: 'Head of DevRel',
      company: 'SonarSource',
      gradient: 'from-ai-primary/5',
    },
    {
      quote: "Steve's '100 Chats in 100 Days' initiative showed a level of dedication to understanding developers that I've rarely seen in this industry.",
      name: 'Sam Chen',
      title: 'Community Lead',
      company: 'Discord',
      gradient: 'from-ai-accent/5',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-ai-secondary mb-6">
            What People Say
          </h2>
          <p className="text-lg text-ai-text opacity-75 max-w-2xl">
            Trusted by community leaders and developers across the industry.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${testimonial.gradient} to-transparent rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-ai-primary border-opacity-10`}
            >
              {/* Quotation Mark Icon */}
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-ai-primary opacity-30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.063-2.5-5.5-2.5S3 3.75 3 5c0 2.5.75 4.063 2.5 5.35.5 1.063.5 2.063.5 2.75 0 4-3.5 8-7 8z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.062-2.5-5.5-2.5S15 3.75 15 5c0 2.5.75 4.063 2.5 5.35.5 1.063.5 2.063.5 2.75 0 4-3.5 8-7 8z" />
                </svg>
              </div>

              {/* Quote Text */}
              <p className="text-lg italic text-ai-text mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Divider */}
              <div className="w-12 h-1 bg-gradient-to-r from-ai-primary to-ai-accent mb-5 rounded-full opacity-50" />

              {/* Attribution */}
              <div>
                <p className="font-bold text-ai-secondary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-ai-text opacity-75">
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center">
          <a
            href="https://shoutout.io/SteveChenDC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ai-primary font-semibold hover:opacity-80 transition-opacity duration-200"
          >
            See more on shoutout.io
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
