import React from 'react';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: number;
  excerpt: string;
  gradient: string;
}

const BlogSection: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'How I Built a Developer Community of 74K+ Members',
      category: 'Community Building',
      readTime: 8,
      excerpt: 'Strategies and lessons learned scaling a developer community from zero to 74,000+ active members through authentic engagement.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: '2',
      title: 'The Developer Event Playbook: Lessons from 6,200+ Events',
      category: 'Events',
      readTime: 12,
      excerpt: 'A comprehensive guide to organizing developer events that drive engagement, learning, and lasting community connections.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: '3',
      title: 'Why Developer Relations is the New Growth Engine',
      category: 'DevRel',
      readTime: 6,
      excerpt: 'How DevRel functions have become critical to product adoption and company growth in the modern tech landscape.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: '4',
      title: '100 Conversations That Changed How I Think About Community',
      category: 'Personal',
      readTime: 10,
      excerpt: 'Reflections on meaningful conversations with community leaders, developers, and peers that shaped my perspective.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const getCategoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      'Community Building': 'bg-blue-100 text-blue-800',
      'Events': 'bg-purple-100 text-purple-800',
      'DevRel': 'bg-emerald-100 text-emerald-800',
      'Personal': 'bg-orange-100 text-orange-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-ai-secondary mb-6">
            Writing & Thought Leadership
          </h2>
          <p className="text-lg text-ai-text max-w-2xl">
            Insights from building and scaling developer communities.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Gradient Top Bar */}
              <div
                className={`h-2 bg-gradient-to-r ${post.gradient}`}
              />

              {/* Card Content */}
              <div className="p-6">
                {/* Category Tag */}
                <div className="mb-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                      post.category
                    )}`}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-ai-secondary mb-3 leading-tight line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-ai-text mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read Time & Link */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center">
                    {/* Clock Icon */}
                    <svg
                      className="w-4 h-4 mr-1.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {post.readTime} min read
                  </span>
                  <a
                    href="#"
                    className="text-ai-primary font-semibold hover:text-ai-accent transition-colors duration-200 flex items-center"
                  >
                    Read more
                    {/* Arrow Icon */}
                    <svg
                      className="w-4 h-4 ml-1.5"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
