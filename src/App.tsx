import React, { useState } from "react";

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
  <div>
    <div className="font-sans bg-ai-neutral text-ai-text">
      <div className="fixed top-0 w-full z-[60] bg-gradient-to-r from-ai-primary to-ai-accent text-white text-center py-2 px-4 text-sm">
        <a
          href="https://www.steveslist.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline inline-flex items-center gap-2"
        >
          <span>Check out Steve's new project (in Open Beta) for curated developer events local to your city!</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1={10} x2={21} y1={14} y2={3} />
          </svg>
        </a>
      </div>
      <nav className="fixed top-10 w-full bg-white z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold gradient-text">Steve Chen</h1>
            </div>
            <div className="hidden lg:flex space-x-8">
              <button className="text-gray-600 hover:text-ai-primary transition-colors">
                Metrics
              </button>
              <button className="text-gray-600 hover:text-ai-primary transition-colors">
                Milestones
              </button>
              <button className="text-gray-600 hover:text-ai-primary transition-colors lg:block hidden">
                Case Studies
              </button>
              <button className="text-gray-600 hover:text-ai-primary transition-colors lg:block hidden">
                Portfolio
              </button>
              <button className="text-gray-600 hover:text-ai-primary transition-colors lg:block hidden">
                Shoutouts
              </button>
              <button className="text-gray-600 hover:text-ai-primary transition-colors">
                Contact
              </button>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu h-5 w-5"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1={18} x2={6} y1={6} y2={18} />
                    <line x1={6} x2={18} y1={6} y2={18} />
                  </>
                ) : (
                  <>
                    <line x1={4} x2={20} y1={12} y2={12} />
                    <line x1={4} x2={20} y1={6} y2={6} />
                    <line x1={4} x2={20} y1={18} y2={18} />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-3 space-y-2">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-ai-primary hover:bg-gray-50 rounded-md transition-colors"
              >
                Metrics
              </button>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-ai-primary hover:bg-gray-50 rounded-md transition-colors"
              >
                Milestones
              </button>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-ai-primary hover:bg-gray-50 rounded-md transition-colors"
              >
                Case Studies
              </button>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-ai-primary hover:bg-gray-50 rounded-md transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-ai-primary hover:bg-gray-50 rounded-md transition-colors"
              >
                Shoutouts
              </button>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-ai-primary hover:bg-gray-50 rounded-md transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
      <section className="relative bg-white">
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-[140px]">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-8 items-start py-12 lg:py-16">
              <div className="text-center lg:text-left flex flex-col justify-center">
                <div className="animate-fade-in-up">
                  <div className="relative w-32 h-32 mx-auto lg:mx-0 mb-6">
                    <img
                      src="/assets/Steve%20Chen%20Profile%20(3)_1754203983774-fCyEKpBk.jpeg"
                      alt="Steve Chen Profile"
                      className="w-full h-full rounded-full shadow-xl border-4 border-white object-cover"
                    />
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-6">
                    <span className="gradient-text drop-shadow-lg">
                      Developer Events
                    </span>
                    <br />
                    <span className="text-white drop-shadow-lg">
                      &amp; Community Leader
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed drop-shadow-md">
                    Supercharging developer communities
                    <br />
                    from 0 to{" "}
                    <strong className="text-ai-primary">
                      74,738+ devs
                    </strong>{" "}
                    across <strong className="text-ai-accent">37 cities</strong>
                    .<br />
                    <br />
                    Specializing in producing memorable brand activations,
                    execution leading to{" "}
                    <strong className="gradient-text">word of mouth</strong>,
                    and rapid iteration resulting in award-winning{" "}
                    <strong className="text-ai-primary">sustainable</strong> and{" "}
                    <strong className="text-ai-accent">resilient</strong>{" "}
                    communities.
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                    <a
                      href="https://www.linkedin.com/in/stevechendc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin h-4 w-4 text-blue-600"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width={4} height={12} x={2} y={9} />
                        <circle cx={4} cy={4} r={2} />
                      </svg>
                      <span className="text-gray-800 font-medium text-sm">
                        LinkedIn
                      </span>
                    </a>
                    <a
                      href="https://twitter.com/SteveChenDC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-md"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        role="img"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-black"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                      </svg>
                      <span className="text-gray-800 font-medium text-sm">
                        X | Twitter
                      </span>
                    </a>
                    <a
                      href="https://codeandcoffee.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-globe h-4 w-4 text-teal-600"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                      <span className="text-gray-800 font-medium text-sm">
                        Code &amp; Coffee
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-4 lg:p-6 flex flex-col justify-start">
                <div>
                  <div className="bg-gray-50 rounded-xl p-4 space-y-4">
                    <div className="flex items-start space-x-4 group">
                      <div className="bg-ai-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-ai-primary group-hover:text-white transition-all">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-users h-6 w-6 text-ai-primary group-hover:text-white"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx={9} cy={7} r={4} />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">
                          Community Building
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          From NYC Code &amp; Coffee's pandemic launch to 12K+
                          members growing 300-500/month, he creates communities
                          that scale.
                        </p>
                        <a
                          href="#case-studies"
                          className="inline-block mt-2 text-ai-primary hover:text-ai-accent transition-colors duration-300 font-semibold text-sm"
                        >
                          Visit our Communities ↓
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 group">
                      <div className="bg-ai-accent/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-ai-accent group-hover:text-white transition-all">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-chart-column h-6 w-6 text-ai-accent group-hover:text-white"
                        >
                          <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                          <path d="M18 17V9" />
                          <path d="M13 17V5" />
                          <path d="M8 17v-3" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">
                          Data-Driven Growth
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Achieved 4.8/5.0 star reviews, 9,447 ratings, and
                          measurable ROI through strategic community
                          initiatives.
                        </p>
                        <a
                          href="#achievements"
                          className="inline-block mt-2 text-ai-primary hover:text-ai-accent transition-colors duration-300 font-semibold text-sm"
                        >
                          View Metrics ↓
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 group">
                      <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-mic h-6 w-6 text-indigo-600 group-hover:text-white"
                        >
                          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                          <line x1={12} x2={12} y1={19} y2={22} />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">
                          Thought Leadership
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Regular speaking engagements, content creation, and
                          brand building that establishes authority in the dev
                          community.
                        </p>
                        <a
                          href="#portfolio"
                          className="inline-block mt-2 text-ai-primary hover:text-ai-accent transition-colors duration-300 font-semibold text-sm"
                        >
                          See Portfolio ↓
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="achievements"
        className="py-12 md:py-20 bg-gradient-to-r from-ai-primary/5 to-ai-accent/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 transform transition-all duration-700 opacity-100 translate-y-0">
            <h2 className="text-3xl md:text-5xl font-bold text-ai-secondary mb-4 md:mb-6">
              Impact by the Numbers
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Results from Code &amp; Coffee
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div
              className="transform transition-all duration-700 opacity-100 translate-y-0"
              style={{ transitionDelay: "0ms" }}
            >
              <div className="text-card-foreground metric-card bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-2 md:p-3 rounded-full mr-3 md:mr-4 bg-ai-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-users text-ai-primary text-xl"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight text-ai-primary">
                        74,738+
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base font-medium">
                        Total Developers Reached
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    Across Code &amp; Coffee Collective with 37 chapters nationwide
                  </p>
                </div>
              </div>
            </div>
            <div
              className="transform transition-all duration-700 opacity-100 translate-y-0"
              style={{ transitionDelay: "0ms" }}
            >
              <div className="text-card-foreground metric-card bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-2 md:p-3 rounded-full mr-3 md:mr-4 bg-ai-accent/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-map-pin text-ai-accent text-xl"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx={12} cy={10} r={3} />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight text-ai-accent">
                        40 Cities
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base font-medium">
                        with Active Meetups
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    Self-sustaining community-led groups nationwide
                  </p>
                </div>
              </div>
            </div>
            <div
              className="transform transition-all duration-700 opacity-100 translate-y-0"
              style={{ transitionDelay: "0ms" }}
            >
              <div className="text-card-foreground metric-card bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-2 md:p-3 rounded-full mr-3 md:mr-4 bg-yellow-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star text-yellow-500 text-xl"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight text-yellow-500">
                        9,447★
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base font-medium">
                        Meetup Reviews
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    Across all Code &amp; Coffee chapters and communities
                  </p>
                </div>
              </div>
            </div>
            <div
              className="transform transition-all duration-700 opacity-100 translate-y-0"
              style={{ transitionDelay: "0ms" }}
            >
              <div className="text-card-foreground metric-card bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-2 md:p-3 rounded-full mr-3 md:mr-4 bg-purple-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-message-square text-purple-600 text-xl"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight text-purple-600">
                        9,000+
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base font-medium">
                        Discord Members
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    Our most engaged users
                  </p>
                </div>
              </div>
            </div>
            <div
              className="transform transition-all duration-700 opacity-100 translate-y-0"
              style={{ transitionDelay: "0ms" }}
            >
              <div className="text-card-foreground metric-card bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-2 md:p-3 rounded-full mr-3 md:mr-4 bg-green-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trending-up text-green-600 text-xl"
                      >
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                        <polyline points="16 7 22 7 22 13" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight text-green-600">
                        649
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base font-medium">
                        Events in 2025
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    Evidence-based community growth
                  </p>
                </div>
              </div>
            </div>
            <div
              className="transform transition-all duration-700 opacity-100 translate-y-0"
              style={{ transitionDelay: "0ms" }}
            >
              <div className="text-card-foreground metric-card bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-2 md:p-3 rounded-full mr-3 md:mr-4 bg-blue-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-calendar text-blue-600 text-xl"
                      >
                        <path d="M8 2v4" />
                        <path d="M16 2v4" />
                        <rect width={18} height={18} x={3} y={4} rx={2} />
                        <path d="M3 10h18" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight text-blue-600">
                        ~50%
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base font-medium">
                        Event Attendance Rate
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    Consistently high engagement across events
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="timeline"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-ai-secondary mb-6">
              Milestones
            </h2>
            <div className="mt-8 max-w-xs mx-auto">
              <a
                href="https://www.linkedin.com/in/stevechendc/details/experience/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-colors p-2 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-2 h-2 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-medium text-gray-700">
                      See Software Dev Timeline →
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="space-y-6 md:space-y-8">
              <div
                id="dc-founding"
                data-timeline-item="true"
                className="relative transform transition-all duration-700 ease-out opacity-100 translate-y-0"
                style={{ transitionDelay: "0ms" }}
              >
                <div className="hidden md:flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="flex items-center justify-end h-8">
                      <span className="text-sm font-semibold text-ai-primary bg-ai-primary/10 px-3 py-1 rounded-lg whitespace-nowrap">
                        Oct 2017
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="flex items-center justify-center h-8">
                      <div className="relative w-4 h-4 bg-white border-4 border-ai-primary rounded-full shadow-lg z-20">
                        <div className="absolute inset-1 bg-ai-primary rounded-full animate-pulse" />
                      </div>
                    </div>
                    <div className="w-0.5 flex-1 min-h-[120px] border-l-2 border-dashed border-ai-primary/30" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 scale-95">
                      <div className="h-64 overflow-hidden">
                        <img
                          src="/assets/technical-ly-dc-code-coffee-r64zA7MS.png"
                          alt="Co-founded DC Code & Coffee meetup with friends"
                          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-ai-accent/10 rounded-lg flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-coffee w-4 h-4 text-orange-600"
                            >
                              <path d="M10 2v2" />
                              <path d="M14 2v2" />
                              <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
                              <path d="M6 2v2" />
                            </svg>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-ai-secondary leading-tight">
                            <span>
                              Co-founded DC Code &amp; Coffee meetup with
                              friends
                            </span>
                          </h3>
                        </div>
                        <div className="text-gray-600 mb-4 leading-relaxed">
                          The weekends are a chance to dig into personal
                          projects, without the pressures of a job. Code and
                          Coffee offers a chance to get together with others to
                          pursue those endeavors, or just socialize.
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            Community Founding
                          </span>
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            DC Metro
                          </span>
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            Personal Projects
                          </span>
                        </div>
                        <div className="mt-4">
                          <a
                            href="https://technical.ly/software-development/code-coffee-dc/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-ai-primary hover:text-ai-accent transition-colors duration-200"
                          >
                            Read Technical.ly Article →
                            <svg
                              className="ml-1 w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:hidden">
                  <div className="mb-4 flex items-center">
                    <div className="w-3 h-3 bg-ai-primary rounded-full mr-3 animate-pulse" />
                    <span className="text-sm font-medium text-ai-primary bg-ai-primary/10 px-2 py-1 rounded-full">
                      Oct 2017
                    </span>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 scale-95">
                    <div className="h-64 overflow-hidden">
                      <img
                        src="/assets/technical-ly-dc-code-coffee-r64zA7MS.png"
                        alt="Co-founded DC Code & Coffee meetup with friends"
                        className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-ai-accent/10 rounded-lg flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-coffee w-4 h-4 text-orange-600"
                          >
                            <path d="M10 2v2" />
                            <path d="M14 2v2" />
                            <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
                            <path d="M6 2v2" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-ai-secondary leading-tight">
                          <span>
                            Co-founded DC Code &amp; Coffee meetup with friends
                          </span>
                        </h3>
                      </div>
                      <div className="text-gray-600 mb-4 leading-relaxed">
                        The weekends are a chance to dig into personal projects,
                        without the pressures of a job. Code and Coffee offers a
                        chance to get together with others to pursue those
                        endeavors, or just socialize.
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          Community Founding
                        </span>
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          DC Metro
                        </span>
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          Personal Projects
                        </span>
                      </div>
                      <div className="mt-4">
                        <a
                          href="https://technical.ly/software-development/code-coffee-dc/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-ai-primary hover:text-ai-accent transition-colors duration-200"
                        >
                          Read Technical.ly Article →
                          <svg
                            className="ml-1 w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="founding"
                data-timeline-item="true"
                className="relative transform transition-all duration-700 ease-out opacity-100 translate-y-0"
                style={{ transitionDelay: "0ms" }}
              >
                <div className="hidden md:flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="flex items-center justify-end h-8">
                      <span className="text-sm font-semibold text-ai-primary bg-ai-primary/10 px-3 py-1 rounded-lg whitespace-nowrap">
                        Sept 2021
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="flex items-center justify-center h-8">
                      <div className="relative w-4 h-4 bg-white border-4 border-ai-primary rounded-full shadow-lg z-20">
                        <div className="absolute inset-1 bg-ai-primary rounded-full animate-pulse" />
                      </div>
                    </div>
                    <div className="w-0.5 flex-1 min-h-[120px] border-l-2 border-dashed border-ai-primary/30" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 scale-95">
                      <div className="h-64 overflow-hidden">
                        <img
                          src="/assets/nyc-code-coffee-BvXRoG-Y.png"
                          alt="Launched NYC Code & Coffee"
                          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-ai-accent/10 rounded-lg flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-users w-4 h-4 text-ai-primary"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                              <circle cx={9} cy={7} r={4} />
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-ai-secondary leading-tight">
                            <span>Launched NYC Code &amp; Coffee</span>
                          </h3>
                        </div>
                        <div className="text-gray-600 mb-4 leading-relaxed">
                          Rebooted developer meetups during the pandemic,
                          architecting a community model that would expand
                          nationwide.
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            Community Building
                          </span>
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            NYC
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-ai-primary">
                              12.2K
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              Members
                            </div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-ai-primary">
                              4.8★
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              Rating
                            </div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-ai-primary">
                              138
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              Events
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:hidden">
                  <div className="mb-4 flex items-center">
                    <div className="w-3 h-3 bg-ai-primary rounded-full mr-3 animate-pulse" />
                    <span className="text-sm font-medium text-ai-primary bg-ai-primary/10 px-2 py-1 rounded-full">
                      Sept 2021
                    </span>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 scale-95">
                    <div className="h-64 overflow-hidden">
                      <img
                        src="/assets/nyc-code-coffee-BvXRoG-Y.png"
                        alt="Launched NYC Code & Coffee"
                        className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-ai-accent/10 rounded-lg flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-users w-4 h-4 text-ai-primary"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx={9} cy={7} r={4} />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-ai-secondary leading-tight">
                          <span>Launched NYC Code &amp; Coffee</span>
                        </h3>
                      </div>
                      <div className="text-gray-600 mb-4 leading-relaxed">
                        Rebooted developer meetups during the pandemic,
                        architecting a community model that would expand
                        nationwide.
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          Community Building
                        </span>
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          NYC
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-ai-primary">
                            12.2K
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            Members
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-ai-primary">
                            4.8★
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            Rating
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-ai-primary">
                            138
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            Events
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="100chats100days"
                data-timeline-item="true"
                className="relative transform transition-all duration-700 ease-out opacity-100 translate-y-0"
                style={{ transitionDelay: "0ms" }}
              >
                <div className="hidden md:flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="flex items-center justify-end h-8">
                      <span className="text-sm font-semibold text-ai-primary bg-ai-primary/10 px-3 py-1 rounded-lg whitespace-nowrap">
                        Mar 2022
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="flex items-center justify-center h-8">
                      <div className="relative w-4 h-4 bg-white border-4 border-ai-primary rounded-full shadow-lg z-20">
                        <div className="absolute inset-1 bg-ai-primary rounded-full animate-pulse" />
                      </div>
                    </div>
                    <div className="w-0.5 flex-1 min-h-[120px] border-l-2 border-dashed border-ai-primary/30" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 scale-95">
                      <div className="h-64 overflow-hidden">
                        <a
                          href="https://shoutout.io/SteveChenDC/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block h-full"
                        >
                          <img
                            src="/assets/100chats-testimonials-DDQByR36.png"
                            alt="Hosted 100chats in 100days with 100devs"
                            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
                          />
                        </a>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-ai-accent/10 rounded-lg flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-message-circle w-4 h-4 text-blue-600"
                            >
                              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                            </svg>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-ai-secondary leading-tight">
                            <span>Hosted 100chats in 100days with 100devs</span>
                          </h3>
                        </div>
                        <div className="text-gray-600 mb-4 leading-relaxed">
                          Conducted 109 phone 30m-1hr calls with aspiring
                          developers from Leon Noel's #100devs community,
                          providing mentorship, career guidance, and community
                          connections to help break into tech.{" "}
                          <strong>
                            Growing Code &amp; Coffee from 6 to 25 chapters.
                          </strong>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            Mentorship
                          </span>
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            #100devs
                          </span>
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            Brand Building
                          </span>
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            Developer Relations
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-ai-primary">
                              109
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              Coffee Chats
                            </div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-ai-primary">
                              #100devs
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              Community
                            </div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-ai-primary">
                              Mar 2022
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              Launch
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <a
                            href="https://shoutout.io/SteveChenDC/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-ai-primary hover:text-ai-accent transition-colors duration-200"
                          >
                            View Community Testimonials →
                            <svg
                              className="ml-1 w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:hidden">
                  <div className="mb-4 flex items-center">
                    <div className="w-3 h-3 bg-ai-primary rounded-full mr-3 animate-pulse" />
                    <span className="text-sm font-medium text-ai-primary bg-ai-primary/10 px-2 py-1 rounded-full">
                      Mar 2022
                    </span>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 scale-95">
                    <div className="h-64 overflow-hidden">
                      <a
                        href="https://shoutout.io/SteveChenDC/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <img
                          src="/assets/100chats-testimonials-DDQByR36.png"
                          alt="Hosted 100chats in 100days with 100devs"
                          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
                        />
                      </a>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-ai-accent/10 rounded-lg flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-message-circle w-4 h-4 text-blue-600"
                          >
                            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-ai-secondary leading-tight">
                          <span>Hosted 100chats in 100days with 100devs</span>
                        </h3>
                      </div>
                      <div className="text-gray-600 mb-4 leading-relaxed">
                        Conducted 109 phone 30m-1hr calls with aspiring
                        developers from Leon Noel's #100devs community,
                        providing mentorship, career guidance, and community
                        connections to help break into tech.{" "}
                        <strong>
                          Growing Code &amp; Coffee from 6 to 25 chapters.
                        </strong>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          Mentorship
                        </span>
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          #100devs
                        </span>
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          Brand Building
                        </span>
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          Developer Relations
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-ai-primary">
                            109
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            Coffee Chats
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-ai-primary">
                            #100devs
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            Community
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-ai-primary">
                            Mar 2022
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            Launch
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <a
                          href="https://shoutout.io/SteveChenDC/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-ai-primary hover:text-ai-accent transition-colors duration-200"
                        >
                          View Community Testimonials →
                          <svg
                            className="ml-1 w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="design-work"
                data-timeline-item="true"
                className="relative transform transition-all duration-700 ease-out opacity-100 translate-y-0"
                style={{ transitionDelay: "0ms" }}
              >
                <div className="hidden md:flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="flex items-center justify-end h-8">
                      <span className="text-sm font-semibold text-ai-primary bg-ai-primary/10 px-3 py-1 rounded-lg whitespace-nowrap">
                        2023
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="flex items-center justify-center h-8">
                      <div className="relative w-4 h-4 bg-white border-4 border-ai-primary rounded-full shadow-lg z-20">
                        <div className="absolute inset-1 bg-ai-primary rounded-full animate-pulse" />
                      </div>
                    </div>
                    <div className="w-0.5 flex-1 min-h-[120px] border-l-2 border-dashed border-ai-primary/30" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 scale-95">
                      <div className="relative overflow-hidden h-64">
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src="/assets/collective-website-CF1c-4Wy.png"
                            alt="Code & Coffee Collective website showing global reach and community metrics"
                            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
                          />
                          <button
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/20 text-gray-700 hover:text-gray-900 p-2 rounded-full transition-colors duration-200"
                            aria-label="Previous image"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-chevron-left w-4 h-4"
                            >
                              <path d="m15 18-6-6 6-6" />
                            </svg>
                          </button>
                          <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/20 text-gray-700 hover:text-gray-900 p-2 rounded-full transition-colors duration-200"
                            aria-label="Next image"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-chevron-right w-4 h-4"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </button>
                        </div>
                        <div className="flex justify-center mt-3 space-x-2">
                          <button
                            className="w-2 h-2 rounded-full transition-colors duration-200 bg-ai-primary"
                            aria-label="Go to slide 1"
                          />
                          <button
                            className="w-2 h-2 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400"
                            aria-label="Go to slide 2"
                          />
                          <button
                            className="w-2 h-2 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400"
                            aria-label="Go to slide 3"
                          />
                          <button
                            className="w-2 h-2 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400"
                            aria-label="Go to slide 4"
                          />
                          <button
                            className="w-2 h-2 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400"
                            aria-label="Go to slide 5"
                          />
                          <button
                            className="w-2 h-2 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400"
                            aria-label="Go to slide 6"
                          />
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-ai-accent/10 rounded-lg flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-palette w-4 h-4 text-green-600"
                            >
                              <circle
                                cx="13.5"
                                cy="6.5"
                                r=".5"
                                fill="currentColor"
                              />
                              <circle
                                cx="17.5"
                                cy="10.5"
                                r=".5"
                                fill="currentColor"
                              />
                              <circle
                                cx="8.5"
                                cy="7.5"
                                r=".5"
                                fill="currentColor"
                              />
                              <circle
                                cx="6.5"
                                cy="12.5"
                                r=".5"
                                fill="currentColor"
                              />
                              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                            </svg>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-ai-secondary leading-tight">
                            <span>
                              Launch Code &amp; Coffee Collective
                              <br />
                            </span>
                            <span>+ Global Branding Campaign</span>
                          </h3>
                        </div>
                        <div className="text-gray-600 mb-4 leading-relaxed">
                          Spearheaded the creation of a unified collective of
                          Code &amp; Coffee meetups. In parallel, initiated a
                          comprehensive brand campaign establishing it as the #1
                          dev community in 25 cities, utilizing multiple mediums
                          including video production, graphics design, web
                          development, and post-event marketing. Operating as a{" "}
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            One Man Agency
                          </span>{" "}
                          to deliver cohesive brand experiences across all
                          touchpoints.
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            Graphic Design
                          </span>
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            Brand Identity
                          </span>
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            Marketing
                          </span>
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            Video Production
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-ai-primary">
                              40
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              Cities
                            </div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-ai-primary">
                              74K+
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              Developers
                            </div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-ai-primary">
                              368
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              Events
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <a
                            href="https://youtu.be/Ln89-bTeh4E?si=-90mGcGiXZwkoPpv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-ai-primary hover:text-ai-accent transition-colors duration-200"
                          >
                            Code &amp; Coffee's origin story on Youtube →
                            <svg
                              className="ml-1 w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:hidden">
                  <div className="mb-4 flex items-center">
                    <div className="w-3 h-3 bg-ai-primary rounded-full mr-3 animate-pulse" />
                    <span className="text-sm font-medium text-ai-primary bg-ai-primary/10 px-2 py-1 rounded-full">
                      2023
                    </span>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 scale-95">
                    <div className="relative overflow-hidden h-64">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src="/assets/collective-website-CF1c-4Wy.png"
                          alt="Code & Coffee Collective website showing global reach and community metrics"
                          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
                        />
                        <button
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/20 text-gray-700 hover:text-gray-900 p-2 rounded-full transition-colors duration-200"
                          aria-label="Previous image"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-left w-4 h-4"
                          >
                            <path d="m15 18-6-6 6-6" />
                          </svg>
                        </button>
                        <button
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/20 text-gray-700 hover:text-gray-900 p-2 rounded-full transition-colors duration-200"
                          aria-label="Next image"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-right w-4 h-4"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex justify-center mt-3 space-x-2">
                        <button
                          className="w-2 h-2 rounded-full transition-colors duration-200 bg-ai-primary"
                          aria-label="Go to slide 1"
                        />
                        <button
                          className="w-2 h-2 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400"
                          aria-label="Go to slide 2"
                        />
                        <button
                          className="w-2 h-2 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400"
                          aria-label="Go to slide 3"
                        />
                        <button
                          className="w-2 h-2 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400"
                          aria-label="Go to slide 4"
                        />
                        <button
                          className="w-2 h-2 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400"
                          aria-label="Go to slide 5"
                        />
                        <button
                          className="w-2 h-2 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400"
                          aria-label="Go to slide 6"
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-ai-accent/10 rounded-lg flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-palette w-4 h-4 text-green-600"
                          >
                            <circle
                              cx="13.5"
                              cy="6.5"
                              r=".5"
                              fill="currentColor"
                            />
                            <circle
                              cx="17.5"
                              cy="10.5"
                              r=".5"
                              fill="currentColor"
                            />
                            <circle
                              cx="8.5"
                              cy="7.5"
                              r=".5"
                              fill="currentColor"
                            />
                            <circle
                              cx="6.5"
                              cy="12.5"
                              r=".5"
                              fill="currentColor"
                            />
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-ai-secondary leading-tight">
                          <span>
                            Launch Code &amp; Coffee Collective
                            <br />
                          </span>
                          <span>+ Global Branding Campaign</span>
                        </h3>
                      </div>
                      <div className="text-gray-600 mb-4 leading-relaxed">
                        Spearheaded the creation of a unified collective of Code
                        &amp; Coffee meetups. In parallel, initiated a
                        comprehensive brand campaign establishing it as the #1
                        dev community in 25 cities, utilizing multiple mediums
                        including video production, graphics design, web
                        development, and post-event marketing. Operating as a{" "}
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          One Man Agency
                        </span>{" "}
                        to deliver cohesive brand experiences across all
                        touchpoints.
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          Graphic Design
                        </span>
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          Brand Identity
                        </span>
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          Marketing
                        </span>
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          Video Production
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-ai-primary">
                            40
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            Cities
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-ai-primary">
                            74K+
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            Developers
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-ai-primary">
                            368
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            Events
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <a
                          href="https://youtu.be/Ln89-bTeh4E?si=-90mGcGiXZwkoPpv"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-ai-primary hover:text-ai-accent transition-colors duration-200"
                        >
                          Code &amp; Coffee's origin story on Youtube →
                          <svg
                            className="ml-1 w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="grant-funding"
                data-timeline-item="true"
                className="relative transform transition-all duration-700 ease-out opacity-100 translate-y-0"
                style={{ transitionDelay: "0ms" }}
              >
                <div className="hidden md:flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="flex items-center justify-end h-8">
                      <span className="text-sm font-semibold text-ai-primary bg-ai-primary/10 px-3 py-1 rounded-lg whitespace-nowrap">
                        June 2024
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="flex items-center justify-center h-8">
                      <div className="relative w-4 h-4 bg-white border-4 border-ai-primary rounded-full shadow-lg z-20">
                        <div className="absolute inset-1 bg-ai-primary rounded-full animate-pulse" />
                      </div>
                    </div>
                    <div className="w-0.5 flex-1 min-h-[120px] border-l-2 border-dashed border-ai-primary/30" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 scale-95">
                      <div className="h-64 overflow-hidden">
                        <img
                          src="/assets/LinkedIn%20Post%20(1)_1753561220277-Be1MAM0E.gif"
                          alt="Awarded $25,000 grant"
                          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-ai-accent/10 rounded-lg flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-dollar-sign w-4 h-4 text-green-600"
                            >
                              <line x1={12} x2={12} y1={2} y2={22} />
                              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-ai-secondary leading-tight">
                            <span>Awarded $25,000 grant</span>
                          </h3>
                        </div>
                        <div className="text-gray-600 mb-4 leading-relaxed">
                          Secured significant funding to support and expand Code
                          &amp; Coffee Collective's mission of building
                          inclusive developer communities across North America.
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            Grant Funding
                          </span>
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            501c3 Non-Profit
                          </span>
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            Community Expansion
                          </span>
                        </div>
                        <div className="mt-4">
                          <a
                            href="https://www.linkedin.com/feed/update/urn:li:activity:7205956634030870528/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-ai-primary hover:text-ai-accent transition-colors duration-200"
                          >
                            View Grant Announcement →
                            <svg
                              className="ml-1 w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:hidden">
                  <div className="mb-4 flex items-center">
                    <div className="w-3 h-3 bg-ai-primary rounded-full mr-3 animate-pulse" />
                    <span className="text-sm font-medium text-ai-primary bg-ai-primary/10 px-2 py-1 rounded-full">
                      June 2024
                    </span>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 scale-95">
                    <div className="h-64 overflow-hidden">
                      <img
                        src="/assets/LinkedIn%20Post%20(1)_1753561220277-Be1MAM0E.gif"
                        alt="Awarded $25,000 grant"
                        className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-ai-accent/10 rounded-lg flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-dollar-sign w-4 h-4 text-green-600"
                          >
                            <line x1={12} x2={12} y1={2} y2={22} />
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-ai-secondary leading-tight">
                          <span>Awarded $25,000 grant</span>
                        </h3>
                      </div>
                      <div className="text-gray-600 mb-4 leading-relaxed">
                        Secured significant funding to support and expand Code
                        &amp; Coffee Collective's mission of building inclusive
                        developer communities across North America.
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          Grant Funding
                        </span>
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          501c3 Non-Profit
                        </span>
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          Community Expansion
                        </span>
                      </div>
                      <div className="mt-4">
                        <a
                          href="https://www.linkedin.com/feed/update/urn:li:activity:7205956634030870528/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-ai-primary hover:text-ai-accent transition-colors duration-200"
                        >
                          View Grant Announcement →
                          <svg
                            className="ml-1 w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="speaking"
                data-timeline-item="true"
                className="relative transform transition-all duration-700 ease-out opacity-100 translate-y-0"
                style={{ transitionDelay: "0ms" }}
              >
                <div className="hidden md:flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="flex items-center justify-end h-8">
                      <span className="text-sm font-semibold text-ai-primary bg-ai-primary/10 px-3 py-1 rounded-lg whitespace-nowrap">
                        Jun 2022 -{" "}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="flex items-center justify-center h-8">
                      <div className="relative w-4 h-4 bg-white border-4 border-ai-primary rounded-full shadow-lg z-20">
                        <div className="absolute inset-1 bg-ai-primary rounded-full animate-pulse" />
                      </div>
                    </div>
                    <div className="w-0.5 flex-1 min-h-[120px] border-l-2 border-dashed border-ai-primary/30" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 scale-95">
                      <div className="relative overflow-hidden h-64">
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src="/assets/LinkedIn%20Post%20(3)_1753561878673-BL__egXP.gif"
                            alt="Community-Led Summit Boston 2024 keynote presentation"
                            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
                          />
                          <button
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/20 text-gray-700 hover:text-gray-900 p-2 rounded-full transition-colors duration-200"
                            aria-label="Previous image"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-chevron-left w-4 h-4"
                            >
                              <path d="m15 18-6-6 6-6" />
                            </svg>
                          </button>
                          <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/20 text-gray-700 hover:text-gray-900 p-2 rounded-full transition-colors duration-200"
                            aria-label="Next image"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-chevron-right w-4 h-4"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </button>
                        </div>
                        <div className="flex justify-center mt-3 space-x-2">
                          <button
                            className="w-2 h-2 rounded-full transition-colors duration-200 bg-ai-primary"
                            aria-label="Go to slide 1"
                          />
                          <button
                            className="w-2 h-2 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400"
                            aria-label="Go to slide 2"
                          />
                          <button
                            className="w-2 h-2 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400"
                            aria-label="Go to slide 3"
                          />
                          <button
                            className="w-2 h-2 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400"
                            aria-label="Go to slide 4"
                          />
                          <button
                            className="w-2 h-2 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400"
                            aria-label="Go to slide 5"
                          />
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-ai-accent/10 rounded-lg flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-mic w-4 h-4 text-purple-600"
                            >
                              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                              <line x1={12} x2={12} y1={19} y2={22} />
                            </svg>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-ai-secondary leading-tight">
                            <span>
                              Spoke at Developer &amp; Startup conferences on
                              "Building User Groups &amp; Meetups"
                            </span>
                          </h3>
                        </div>
                        <div className="text-gray-600 mb-4 leading-relaxed">
                          Featured speaker at major developer conferences
                          including a keynote at AWS Community Day,
                          Community-Led Summit, Developer Marketing Summit,{" "}
                          <strong>with a finale at DevRelCon NYC</strong>.
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            Speaking
                          </span>
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            AWS
                          </span>
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            DevRel
                          </span>
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            Community Leadership
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-ai-primary">
                              6
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              Conferences
                            </div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-ai-primary">
                              500+
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              Attendees
                            </div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-ai-primary">
                              In-Person
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              events mostly
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:hidden">
                  <div className="mb-4 flex items-center">
                    <div className="w-3 h-3 bg-ai-primary rounded-full mr-3 animate-pulse" />
                    <span className="text-sm font-medium text-ai-primary bg-ai-primary/10 px-2 py-1 rounded-full">
                      Jun 2022 -{" "}
                    </span>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 scale-95">
                    <div className="relative overflow-hidden h-64">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src="/assets/LinkedIn%20Post%20(3)_1753561878673-BL__egXP.gif"
                          alt="Community-Led Summit Boston 2024 keynote presentation"
                          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
                        />
                        <button
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/20 text-gray-700 hover:text-gray-900 p-2 rounded-full transition-colors duration-200"
                          aria-label="Previous image"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-left w-4 h-4"
                          >
                            <path d="m15 18-6-6 6-6" />
                          </svg>
                        </button>
                        <button
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/20 text-gray-700 hover:text-gray-900 p-2 rounded-full transition-colors duration-200"
                          aria-label="Next image"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-right w-4 h-4"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex justify-center mt-3 space-x-2">
                        <button
                          className="w-2 h-2 rounded-full transition-colors duration-200 bg-ai-primary"
                          aria-label="Go to slide 1"
                        />
                        <button
                          className="w-2 h-2 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400"
                          aria-label="Go to slide 2"
                        />
                        <button
                          className="w-2 h-2 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400"
                          aria-label="Go to slide 3"
                        />
                        <button
                          className="w-2 h-2 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400"
                          aria-label="Go to slide 4"
                        />
                        <button
                          className="w-2 h-2 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400"
                          aria-label="Go to slide 5"
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-ai-accent/10 rounded-lg flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-mic w-4 h-4 text-purple-600"
                          >
                            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                            <line x1={12} x2={12} y1={19} y2={22} />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-ai-secondary leading-tight">
                          <span>
                            Spoke at Developer &amp; Startup conferences on
                            "Building User Groups &amp; Meetups"
                          </span>
                        </h3>
                      </div>
                      <div className="text-gray-600 mb-4 leading-relaxed">
                        Featured speaker at major developer conferences
                        including a keynote at AWS Community Day, Community-Led
                        Summit, Developer Marketing Summit,{" "}
                        <strong>with a finale at DevRelCon NYC</strong>.
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          Speaking
                        </span>
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          AWS
                        </span>
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          DevRel
                        </span>
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          Community Leadership
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-ai-primary">
                            6
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            Conferences
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-ai-primary">
                            500+
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            Attendees
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-ai-primary">
                            In-Person
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            events mostly
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="sonar-user-groups"
                data-timeline-item="true"
                className="relative transform transition-all duration-700 ease-out opacity-100 translate-y-0"
                style={{ transitionDelay: "0ms" }}
              >
                <div className="hidden md:flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="flex items-center justify-end h-8">
                      <span className="text-sm font-semibold text-ai-primary bg-ai-primary/10 px-3 py-1 rounded-lg whitespace-nowrap">
                        Mar 2025 -
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="flex items-center justify-center h-8">
                      <div className="relative w-4 h-4 bg-white border-4 border-ai-primary rounded-full shadow-lg z-20">
                        <div className="absolute inset-1 bg-ai-primary rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 scale-95">
                      <div className="h-64 overflow-hidden">
                        <img
                          src="/assets/IMG_2841_1753709236234-DrumnHev.jpeg"
                          alt="Own SonarQube User Groups Meetups Program"
                          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-ai-accent/10 rounded-lg flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-globe w-4 h-4 text-blue-600"
                            >
                              <circle cx={12} cy={12} r={10} />
                              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                              <path d="M2 12h20" />
                            </svg>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-ai-secondary leading-tight">
                            <span>
                              Own SonarQube User Groups Meetups Program
                            </span>
                          </h3>
                        </div>
                        <div className="text-gray-600 mb-4 leading-relaxed">
                          Steve is currently leading as the Senior Community
                          Programs Manager at Sonar, leading the SonarQube User
                          Groups program across 3 cities, scaling the community
                          from launch to 1,000+ members globally. Heavy
                          cross-functional collaboration with Product, DevRel,
                          and Sales teams while establishing scalable
                          company-owned community-led framework for 2025
                          expansion to <strong>7+ cities by Q4 2025</strong>.
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            Current Role
                          </span>
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            Global Launch
                          </span>
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            B2B &amp; B2D Community
                          </span>
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            SonarSource
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-ai-primary">
                              606+
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              Global Members
                            </div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-ai-primary">
                              3
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              Launch Cities
                            </div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-ai-primary">
                              2025
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              Program Launch
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <a
                            href="https://community.sonarsource.com/t/announcing-sonar-user-groups/136656"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-ai-primary hover:text-ai-accent transition-colors duration-200"
                          >
                            View Official Announcement →
                            <svg
                              className="ml-1 w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:hidden">
                  <div className="mb-4 flex items-center">
                    <div className="w-3 h-3 bg-ai-primary rounded-full mr-3 animate-pulse" />
                    <span className="text-sm font-medium text-ai-primary bg-ai-primary/10 px-2 py-1 rounded-full">
                      Mar 2025 -
                    </span>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 scale-95">
                    <div className="h-64 overflow-hidden">
                      <img
                        src="/assets/IMG_2841_1753709236234-DrumnHev.jpeg"
                        alt="Own SonarQube User Groups Meetups Program"
                        className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-ai-accent/10 rounded-lg flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-globe w-4 h-4 text-blue-600"
                          >
                            <circle cx={12} cy={12} r={10} />
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                            <path d="M2 12h20" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-ai-secondary leading-tight">
                          <span>Own SonarQube User Groups Meetups Program</span>
                        </h3>
                      </div>
                      <div className="text-gray-600 mb-4 leading-relaxed">
                        Steve is currently leading as the Senior Community
                        Programs Manager at Sonar, leading the SonarQube User
                        Groups program across 3 cities, scaling the community
                        from launch to 1,000+ members globally. Heavy
                        cross-functional collaboration with Product, DevRel, and
                        Sales teams while establishing scalable company-owned
                        community-led framework for 2025 expansion to{" "}
                        <strong>7+ cities by Q4 2025</strong>.
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          Current Role
                        </span>
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          Global Launch
                        </span>
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          B2B &amp; B2D Community
                        </span>
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          SonarSource
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-ai-primary">
                            606+
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            Global Members
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-ai-primary">
                            3
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            Launch Cities
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-ai-primary">
                            2025
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            Program Launch
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <a
                          href="https://community.sonarsource.com/t/announcing-sonar-user-groups/136656"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-ai-primary hover:text-ai-accent transition-colors duration-200"
                        >
                          View Official Announcement →
                          <svg
                            className="ml-1 w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="case-studies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ai-secondary mb-6">
              Community Case Studies
            </h2>
            <p className="text-lg text-gray-600">
              Strategic insights and measurable outcomes from 4 community
              initiatives
            </p>
          </div>
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 rounded-xl border border-purple-200 shadow-sm" />
              <div className="relative">
                <div className="relative rounded-2xl border overflow-hidden border-purple-300 bg-gradient-to-r to-transparent">
                  <div className="relative p-8 from-purple-50">
                    <div className="lg:hidden mb-6">
                      <h3 className="text-2xl font-bold mb-4 text-ai-secondary">
                        Code &amp; Coffee Collective
                      </h3>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className>
                        <div className="rounded-xl shadow-lg w-full mb-4 h-80 overflow-hidden bg-gray-50">
                          <img
                            src="/assets/code-coffee-collective-map-B7RpOfWh.png"
                            alt="Code & Coffee Collective Geographic Map"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                          <div className="bg-white p-4 rounded-lg shadow">
                            <div className="text-2xl font-bold text-ai-primary">
                              74,738+
                            </div>
                            <div className="text-sm text-gray-600">
                              Total Developers
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow">
                            <div className="text-2xl font-bold text-ai-primary">
                              600+
                            </div>
                            <div className="text-sm text-gray-600">
                              events annually
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow">
                            <div className="text-2xl font-bold text-ai-primary">
                              ~200
                            </div>
                            <div className="text-sm text-gray-600">
                              volunteers
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className>
                        <h3 className="text-2xl font-bold mb-4 hidden lg:block text-ai-secondary">
                          Code &amp; Coffee Collective
                        </h3>
                        <p className="mb-6 text-gray-600">
                          The meetup to make friends and grow - Community-led in{" "}
                          <strong>37 cities</strong> across 74,738+ devs.
                        </p>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-circle-check-big text-ai-accent mr-3 h-5 w-5"
                            >
                              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                              <path d="m9 11 3 3L22 4" />
                            </svg>
                            <span className="text-gray-900">
                              Happening monthly or every two weeks
                            </span>
                          </div>
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-circle-check-big text-ai-accent mr-3 h-5 w-5"
                            >
                              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                              <path d="m9 11 3 3L22 4" />
                            </svg>
                            <span className="text-gray-900">
                              100% community-led with volunteer chapter
                              organizers
                            </span>
                          </div>
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-circle-check-big text-ai-accent mr-3 h-5 w-5"
                            >
                              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                              <path d="m9 11 3 3L22 4" />
                            </svg>
                            <span className="text-gray-900">
                              Free, inclusive meetups focused on making friends
                              and growing together
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <div className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 px-3 py-1 bg-purple-700 text-white border-purple-700 hover:bg-purple-800">
                            501c3 Non-Profit
                          </div>
                          <div className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 px-3 py-1 bg-purple-700 text-white border-purple-700 hover:bg-purple-800">
                            Community-Led
                          </div>
                          <div className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 px-3 py-1 bg-purple-700 text-white border-purple-700 hover:bg-purple-800">
                            40 Cities
                          </div>
                        </div>
                        <a
                          href="https://codeandcoffee.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-ai-primary hover:text-ai-primary/80 font-medium"
                        >
                          Visit www.CodeAndCoffee.org →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-ai-primary/5 via-ai-primary/10 to-ai-primary/5 rounded-xl border border-ai-primary/20 shadow-sm" />
              <div className="relative">
                <div className="relative rounded-2xl border overflow-hidden border-ai-primary/20 bg-gradient-to-r to-transparent">
                  <div className="relative p-8 from-ai-primary/5">
                    <div className="lg:hidden mb-6">
                      <h3 className="text-2xl font-bold mb-4 text-ai-secondary">
                        NYC Code &amp; Coffee
                      </h3>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className>
                        <div className="rounded-xl shadow-lg w-full mb-4 h-80 overflow-hidden bg-gray-50">
                          <img
                            src="/assets/nyc-code-coffee-BvXRoG-Y.png"
                            alt="NYC Code & Coffee Developer Meetup"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                          <div className="bg-white p-4 rounded-lg shadow">
                            <div className="text-2xl font-bold text-ai-primary">
                              12.2K
                            </div>
                            <div className="text-sm text-gray-600">
                              NYC Developers
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow">
                            <div className="text-2xl font-bold text-ai-primary">
                              100%
                            </div>
                            <div className="text-sm text-gray-600">
                              Volunteer-run
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow">
                            <div className="text-2xl font-bold text-ai-primary">
                              4.8★
                            </div>
                            <div className="text-sm text-gray-600">Rating</div>
                          </div>
                        </div>
                      </div>
                      <div className>
                        <h3 className="text-2xl font-bold mb-4 hidden lg:block text-ai-secondary">
                          NYC Code &amp; Coffee
                        </h3>
                        <p className="mb-6 text-gray-600">
                          Rebooted developer meetups during the pandemic,
                          creating a scalable community model that expanded to
                          37 cities nationwide with 12,218 active members.
                        </p>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-circle-check-big text-ai-accent mr-3 h-5 w-5"
                            >
                              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                              <path d="m9 11 3 3L22 4" />
                            </svg>
                            <span className="text-gray-900">
                              Launched September 2021 during pandemic
                            </span>
                          </div>
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-circle-check-big text-ai-accent mr-3 h-5 w-5"
                            >
                              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                              <path d="m9 11 3 3L22 4" />
                            </svg>
                            <span className="text-gray-900">
                              Grew to 12,218 members (300-500/month growth)
                            </span>
                          </div>
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-circle-check-big text-ai-accent mr-3 h-5 w-5"
                            >
                              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                              <path d="m9 11 3 3L22 4" />
                            </svg>
                            <span className="text-gray-900">
                              4.8★ rating with 1,160 reviews on Meetup
                            </span>
                          </div>
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-circle-check-big text-ai-accent mr-3 h-5 w-5"
                            >
                              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                              <path d="m9 11 3 3L22 4" />
                            </svg>
                            <span className="text-gray-900">
                              138 past events with consistent 50%+ attendance
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <div className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1">
                            Community Building
                          </div>
                          <div className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1">
                            Event Management
                          </div>
                          <div className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1">
                            Brand Development
                          </div>
                        </div>
                        <a
                          href="https://www.youtube.com/watch?v=Ln89-bTeh4E"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-ai-primary hover:text-ai-primary/80 font-medium"
                        >
                          Watch Code &amp; Coffee Origin Story →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 rounded-xl border border-blue-200 shadow-sm" />
              <div className="relative">
                <div className="relative rounded-2xl border overflow-hidden border-blue-300 bg-gradient-to-r to-transparent">
                  <div className="relative p-8 from-blue-50">
                    <div className="lg:hidden mb-6">
                      <h3 className="text-2xl font-bold mb-4 text-ai-secondary">
                        SonarQube User Groups Launch
                      </h3>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className>
                        <div className="rounded-xl shadow-lg w-full mb-4 h-80 overflow-hidden bg-gray-50">
                          <img
                            src="/assets/Steve%20Chen%20LinkedIn%20(13)_1753684837991-CpK2FNMm.jpeg"
                            alt="Sonar User Groups Global Launch"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                          <div className="bg-white p-4 rounded-lg shadow">
                            <div className="text-2xl font-bold text-ai-primary">
                              606+
                            </div>
                            <div className="text-sm text-gray-600">
                              Global Members
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow">
                            <div className="text-2xl font-bold text-ai-primary">
                              3
                            </div>
                            <div className="text-sm text-gray-600">
                              Launch Cities
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow">
                            <div className="text-2xl font-bold text-ai-primary">
                              2025
                            </div>
                            <div className="text-sm text-gray-600">
                              Program Year
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className>
                        <h3 className="text-2xl font-bold mb-4 hidden lg:block text-ai-secondary">
                          SonarQube User Groups Launch
                        </h3>
                        <p className="mb-6 text-gray-600">
                          Leading global community program as Community Programs
                          Manager at SonarSource, launching developer meetups
                          across multiple continents to connect code quality
                          enthusiasts.
                        </p>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-circle-check-big text-ai-accent mr-3 h-5 w-5"
                            >
                              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                              <path d="m9 11 3 3L22 4" />
                            </svg>
                            <span className="text-gray-900">
                              Launched Sonar User Groups program in March 2025
                              across 3 cities
                            </span>
                          </div>
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-circle-check-big text-ai-accent mr-3 h-5 w-5"
                            >
                              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                              <path d="m9 11 3 3L22 4" />
                            </svg>
                            <span className="text-gray-900">
                              Grew SonarQube User Groups from launch to 1,000+ members
                              globally
                            </span>
                          </div>
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-circle-check-big text-ai-accent mr-3 h-5 w-5"
                            >
                              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                              <path d="m9 11 3 3L22 4" />
                            </svg>
                            <span className="text-gray-900">
                              Coordinated cross-functional collaboration with
                              Product, DevRel, and Sales teams
                            </span>
                          </div>
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-circle-check-big text-ai-accent mr-3 h-5 w-5"
                            >
                              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                              <path d="m9 11 3 3L22 4" />
                            </svg>
                            <span className="text-gray-900">
                              Established scalable community framework for 2025
                              expansion to <strong>7+ cities</strong>
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <div className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 px-3 py-1 bg-blue-600 text-white border-blue-600 hover:bg-blue-700">
                            Current Role
                          </div>
                          <div className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 px-3 py-1 bg-blue-600 text-white border-blue-600 hover:bg-blue-700">
                            B2B &amp; B2D Community
                          </div>
                          <div className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 px-3 py-1 bg-blue-600 text-white border-blue-600 hover:bg-blue-700">
                            Cross-functional
                          </div>
                        </div>
                        <a
                          href="https://community.sonarsource.com/t/announcing-sonar-user-groups/136656"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-ai-primary hover:text-ai-primary/80 font-medium"
                        >
                          View Official Announcement →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl border overflow-hidden border-ai-accent/20 bg-gradient-to-r to-transparent">
              <div className="relative p-8 from-ai-accent/5">
                <div className="lg:hidden mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-ai-secondary">
                    Product &amp; Pastries Rebrand
                  </h3>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className>
                    <div className="rounded-xl shadow-lg w-full mb-4 h-80 overflow-hidden bg-gray-50">
                      <img
                        src="/assets/product-pastries-rebrand-CVOfowRf.png"
                        alt="Product & Pastries Product Management Event"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="bg-white p-4 rounded-lg shadow">
                        <div className="text-2xl font-bold text-ai-primary">
                          1,046
                        </div>
                        <div className="text-sm text-gray-600">Members</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <div className="text-2xl font-bold text-ai-primary">
                          4.7★
                        </div>
                        <div className="text-sm text-gray-600">Rating</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <div className="text-2xl font-bold text-ai-primary">
                          102
                        </div>
                        <div className="text-sm text-gray-600">Reviews</div>
                      </div>
                    </div>
                  </div>
                  <div className>
                    <h3 className="text-2xl font-bold mb-4 hidden lg:block text-ai-secondary">
                      Product &amp; Pastries Rebrand
                    </h3>
                    <p className="mb-6 text-gray-600">
                      Rebranded DC Design + Donuts to create a more inclusive
                      space for both product design and product management
                      professionals, achieving 1,046 members.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-circle-check-big text-ai-accent mr-3 h-5 w-5"
                        >
                          <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                        <span className="text-gray-900">
                          Successfully rebranded from Design + Donuts
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-circle-check-big text-ai-accent mr-3 h-5 w-5"
                        >
                          <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                        <span className="text-gray-900">
                          4.7★ rating with 102 member reviews
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-circle-check-big text-ai-accent mr-3 h-5 w-5"
                        >
                          <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                        <span className="text-gray-900">
                          1,046 members in the DC metro area
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-circle-check-big text-ai-accent mr-3 h-5 w-5"
                        >
                          <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                        <span className="text-gray-900">
                          Grew to having volunteers who are Product Managers and
                          Designers
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <div className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1">
                        Rebranding
                      </div>
                      <div className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1">
                        Growth Strategy
                      </div>
                      <div className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1">
                        Community Operations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="portfolio"
        className="py-20 bg-gradient-to-br from-ai-primary/5 via-ai-neutral to-ai-accent/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ai-secondary mb-6">
              Portfolio
            </h2>
            <p className="text-xl text-gray-600">Brand &amp; Community</p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <div className="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-purple-200 text-purple-700 px-4 py-2 text-sm font-medium">
                Talks
              </div>
              <div className="inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 bg-green-50 text-green-700 border border-green-200 px-4 py-2 text-sm font-medium">
                Design
              </div>
              <div className="inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 bg-blue-100 text-blue-800 border border-blue-200 px-4 py-2 text-sm font-medium">
                Podcast
              </div>
              <div className="inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 bg-white text-black border border-gray-300 px-4 py-2 text-sm font-medium">
                Video
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-12">
              <div className="border text-card-foreground bg-white rounded-2xl shadow-lg">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-ai-primary/10 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-mic text-ai-primary h-6 w-6"
                      >
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1={12} x2={12} y1={19} y2={22} />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-ai-secondary">
                      Speaking
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-ai-secondary">
                        eMcee - DC Javascript Frontrunners Conference
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        2023 &amp; 2024 - Master of Ceremonies
                      </p>
                      <p className="text-gray-500 text-sm">
                        Led conference proceedings and speaker introductions for
                        premier JavaScript community event
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <a
                          href="https://www.linkedin.com/posts/stevechendc_imposterlol-activity-7041074801766998017-zwCg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAAQsXn4BU8OPB5OgqqunseuiF_tWvHYBoMk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                              src="/assets/Steve%20Chen%20Activity%20Image%20(2)_1753562297454-8HskvLHm.jpeg"
                              alt="DC Javascript Frontrunners Conference eMcee Steve Chen"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10 hover:bg-black/30 transition-colors" />
                          </div>
                        </a>
                        <a
                          href="https://www.linkedin.com/posts/stevechendc_imposterlol-activity-7041074801766998017-zwCg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAAQsXn4BU8OPB5OgqqunseuiF_tWvHYBoMk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-ai-primary hover:text-ai-primary/80 text-sm font-medium"
                        >
                          View LinkedIn Post →
                        </a>
                      </div>
                    </div>
                    <div className="border-l-4 border-ai-primary pl-4">
                      <h4 className="font-semibold text-ai-secondary">
                        AWS Community Day DC/MD/VA 2023
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Keynote: "The Art of Community: Building Thriving
                        Meetups" at Amazon HQ2
                      </p>
                      <p className="text-gray-500 text-sm">
                        Featured speaker on scaling developer communities and
                        event management
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <a
                          href="https://www.linkedin.com/posts/stevechendc_gave-my-talk-on-art-of-community-building-activity-7119765808334954497-Yjyn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                              src="/assets/Activity%20from%20Steve%20Chen%20(2)_1753561762775-CjOvrLXJ.jpeg"
                              alt="AWS Community Day presentation by Steve Chen"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10 hover:bg-black/30 transition-colors" />
                          </div>
                        </a>
                        <a
                          href="https://www.linkedin.com/posts/stevechendc_gave-my-talk-on-art-of-community-building-activity-7119765808334954497-Yjyn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-ai-primary hover:text-ai-primary/80 text-sm font-medium"
                        >
                          View LinkedIn Post →
                        </a>
                      </div>
                    </div>
                    <div className="border-l-4 border-teal-500 pl-4">
                      <h4 className="font-semibold text-ai-secondary">
                        TechWalk Community: Community Leader Panel - November
                        2023
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Purposeful Participation: How to Nurture the Full
                        Potential of Your Community Memberships
                      </p>
                      <p className="text-gray-500 text-sm">
                        Served on a LIVE virtual panel about leveraging your
                        community memberships and navigating the community world
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <a
                          href="https://www.linkedin.com/posts/stevechendc_stevespeaks-activity-7130676303296393217-WJVY"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                              src="/assets/Steve%20Chen%20Activity%20Image%20(1)_1753561680077-BD6_PdLH.jpeg"
                              alt="TechWalk Community Panel with Steve Chen"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10 hover:bg-black/30 transition-colors" />
                          </div>
                        </a>
                        <a
                          href="https://www.linkedin.com/posts/stevechendc_stevespeaks-activity-7130676303296393217-WJVY"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-ai-primary hover:text-ai-primary/80 text-sm font-medium"
                        >
                          View LinkedIn Post →
                        </a>
                      </div>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-ai-secondary">
                        Community-Led &amp; Developer Marketing Summit 2024
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Boston - Keynote Speaker on "Building Meetups &amp; User
                        Groups: Principles, Prescriptions &amp; Power"
                      </p>
                      <p className="text-gray-500 text-sm">
                        Showcased scaling from 10 to 367 in-person events across
                        37 US cities serving 74,738+ developers
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <a
                          href="https://www.linkedin.com/posts/stevechendc_communityled-cla-claboston-activity-7162845321402777600-jub6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                              src="/assets/LinkedIn%20Post%20(3)_1753561878673-BL__egXP.gif"
                              alt="Community-Led Summit Boston presentation by Steve Chen"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10 hover:bg-black/30 transition-colors" />
                          </div>
                        </a>
                        <a
                          href="https://www.linkedin.com/posts/stevechendc_communityled-cla-claboston-activity-7162845321402777600-jub6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-ai-primary hover:text-ai-primary/80 text-sm font-medium"
                        >
                          View LinkedIn Post →
                        </a>
                      </div>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-ai-secondary">
                        DC Startup Week 2024
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Panel Discussion on Community Building for Startups
                      </p>
                      <p className="text-gray-500 text-sm">
                        Shared insights on leveraging developer communities for
                        startup growth and engagement
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <a
                          href="https://www.linkedin.com/posts/stevechendc_and-thats-a-wrap-we-just-got-done-hosting-activity-7120596184737435649-mtVs"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                              src="/assets/1696410603925_1753655350023-CUcrqK4T.jpeg"
                              alt="DC Startup Week 2024 panel with Steve Chen"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10 hover:bg-black/30 transition-colors" />
                          </div>
                        </a>
                        <a
                          href="https://www.linkedin.com/posts/stevechendc_and-thats-a-wrap-we-just-got-done-hosting-activity-7120596184737435649-mtVs"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-ai-primary hover:text-ai-primary/80 text-sm font-medium"
                        >
                          View LinkedIn Post →
                        </a>
                      </div>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-ai-secondary">
                        DevRelCon NYC 2024: Building Meetups &amp; User Groups
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Conference presentation on community building best
                        practices
                      </p>
                      <a
                        href="https://youtu.be/ncEOyVM_r-8?si=c0bdiytPMdMabHI9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-3"
                      >
                        <div className="relative rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                          <img
                            src="/assets/devrelcon-showcase-0hP2JCBx.jpeg"
                            alt="DevRelCon NYC 2024 Presentation"
                            className="w-full h-40 object-cover object-center"
                          />
                          <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors flex items-center justify-center">
                            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                              <span className="text-sm font-semibold text-gray-800">
                                Watch on YouTube
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="border-l-4 border-rose-500 pl-4">
                      <h4 className="font-semibold text-ai-secondary">
                        QCon Sonar X Diffblue Panel - November 2024
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Moderator - Panel Discussion on Developer Experience and
                        Testing
                      </p>
                      <p className="text-gray-500 text-sm">
                        Led expert panel discussion on modern software
                        development practices and developer productivity
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <a
                          href="https://www.linkedin.com/posts/stevechendc_my-manager-approached-me-three-weeks-ago-activity-7265265425142210560-zWLu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                              src="/assets/Steve%20Chen%20Activity%20(10)_1753562465263-CmPGk57T.jpeg"
                              alt="QCon Sonar X Diffblue Panel Moderator Steve Chen"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10 hover:bg-black/30 transition-colors" />
                          </div>
                        </a>
                        <a
                          href="https://www.linkedin.com/posts/stevechendc_my-manager-approached-me-three-weeks-ago-activity-7265265425142210560-zWLu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-ai-primary hover:text-ai-primary/80 text-sm font-medium"
                        >
                          View LinkedIn Post →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border text-card-foreground bg-white rounded-2xl shadow-lg">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-ai-secondary/10 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-file-text text-ai-secondary h-6 w-6"
                      >
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        <path d="M10 9H8" />
                        <path d="M16 13H8" />
                        <path d="M16 17H8" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-ai-secondary">
                      Media
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="border-l-4 border-emerald-500 pl-4">
                      <h4 className="font-semibold text-ai-secondary">
                        Co-founded DC Code &amp; Coffee - October 2017
                      </h4>
                      <p className="text-gray-500 text-sm">
                        Created weekend coding space for personal projects and
                        developer community building in Washington DC
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <a
                          href="https://technical.ly/software-development/code-coffee-dc/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                              src="/assets/technical-ly-dc-code-coffee-r64zA7MS.png"
                              alt="DC Code & Coffee founding article in Technical.ly"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10 hover:bg-black/30 transition-colors" />
                          </div>
                        </a>
                        <a
                          href="https://technical.ly/software-development/code-coffee-dc/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-ai-primary hover:text-ai-primary/80 text-sm font-medium"
                        >
                          Read Technical.ly Article →
                        </a>
                      </div>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-semibold text-ai-secondary">
                        Chat with Hackers Podcast - June 2022
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Ep. 8 | How Community and Dedication Lead to a DevRel
                        Career with Steve Chen
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <a
                          href="https://creators.spotify.com/pod/profile/chatwithhackers/episodes/Ep--8--How-Community-and-Dedication-Lead-to-a-DevRel-Career-with-Steve-Chen-e1kldf4"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                              src="/assets/chat-with-hackers-updated-CCi-JpDV.png"
                              alt="Chat with Hackers Podcast with Steve Chen"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10 hover:bg-black/30 transition-colors" />
                          </div>
                        </a>
                        <a
                          href="https://creators.spotify.com/pod/profile/chatwithhackers/episodes/Ep--8--How-Community-and-Dedication-Lead-to-a-DevRel-Career-with-Steve-Chen-e1kldf4"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-ai-primary hover:text-ai-primary/80 text-sm font-medium"
                        >
                          Listen on Spotify →
                        </a>
                      </div>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold text-ai-secondary">
                        The Origin Story of Code &amp; Coffee - Oct 2022
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        YouTube presentation on scaling developer communities
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <a
                          href="https://youtu.be/Ln89-bTeh4E"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                              src="/assets/youtube-thumbnail-B9rWow_q.png"
                              alt="The Origin Story of Code & Coffee YouTube video"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10 hover:bg-black/30 transition-colors" />
                          </div>
                        </a>
                        <a
                          href="https://youtu.be/Ln89-bTeh4E"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-ai-primary hover:text-ai-primary/80 text-sm font-medium"
                        >
                          Watch on YouTube →
                        </a>
                      </div>
                    </div>
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <h4 className="font-semibold text-ai-secondary">
                        Boba Talk Podcast - December 2024
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        #9: From LAN Parties to Building a 74,738 Member Dev
                        Community in 37 Cities
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <a
                          href="https://open.spotify.com/episode/2iDZRm2XKfKOD2oUABWBZw?si=3XnuFVujT2GTI0MpuST7YA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                              src="/assets/Steve%20Chen%20Developer%20Community_1753523257437-Iy-Nb1jj.jpeg"
                              alt="Boba Talk Podcast with Steve Chen"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10 hover:bg-black/30 transition-colors" />
                          </div>
                        </a>
                        <a
                          href="https://open.spotify.com/episode/2iDZRm2XKfKOD2oUABWBZw?si=3XnuFVujT2GTI0MpuST7YA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-ai-primary hover:text-ai-primary/80 text-sm font-medium"
                        >
                          Listen on Spotify →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border text-card-foreground bg-white rounded-2xl shadow-lg">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-ai-accent/10 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-palette text-ai-accent h-6 w-6"
                    >
                      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-ai-secondary">
                    Design Portfolio
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-ai-secondary">
                      Global Promotional Posters
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Monthly festival-style event posters (Feb-June 2023)
                      promoting first Code &amp; Coffee events in each city
                    </p>
                    <p className="text-gray-500 text-sm">
                      Visual design campaign that launched Code &amp; Coffee
                      chapters across multiple cities with consistent branding
                    </p>
                    <div className="mt-3">
                      <img
                        src="/assets/monthly-posters-collage-BnMHyZbJ.png"
                        alt="Monthly Global Promotional Posters Collection"
                        className="w-full rounded-lg mb-3 cursor-pointer hover:opacity-90 transition-opacity"
                      />
                      <div className="flex flex-col space-y-3">
                        <div className="flex space-x-2">
                          <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 bg-green-50 text-green-700 border border-green-200">
                            Graphic Design
                          </div>
                          <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 bg-green-50 text-green-700 border border-green-200">
                            Brand Identity
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-ai-secondary">
                      NYC Wrap-up Poster Collages
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Visual storytelling showcasing member diversity -
                      inspiring 37 chapters across America
                    </p>
                    <p className="text-gray-500 text-sm">
                      Created diversity-focused collages that became templates
                      for community building nationwide
                    </p>
                    <div className="mt-3">
                      <img
                        src="/assets/nyc-wrapup-collages-CtMj_wBR.png"
                        alt="NYC Wrap-up Poster Collages"
                        className="w-full rounded-lg mb-3 cursor-pointer hover:opacity-90 transition-opacity"
                      />
                      <div className="flex space-x-2">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-purple-200 text-purple-700">
                          Visual Design
                        </div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-purple-200 text-purple-700">
                          Community Impact
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-ai-secondary">
                      Code &amp; Coffee Website Design
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Designed user-friendly interface showcasing 40 meetups
                      with real-time meetup.com events data integration
                    </p>
                    <p className="text-gray-500 text-sm">
                      Created comprehensive web platform highlighting community
                      growth and event management capabilities
                    </p>
                    <div className="mt-3">
                      <img
                        src="/assets/code-coffee-website-homepage-DIgUQwwD.png"
                        alt="Code & Coffee Website Design with Interactive Map"
                        className="w-full rounded-lg mb-3 cursor-pointer hover:opacity-90 transition-opacity"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ai-secondary mb-6">
              Shoutouts
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="text-center">
              <a
                href="https://shoutout.io/SteveChenDC"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                  style={{ height: 300 }}
                >
                  <img
                    src="/assets/_latest_shoutout_1753672979654-DEwS9yL7.gif"
                    alt="Latest shoutouts and testimonials from the 100Devs community showing appreciation for Steve's mentorship and community building efforts"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </a>
              <div className="mt-4 text-center">
                <p className="text-gray-800 font-medium text-sm">
                  More 💜 from 100Devs
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Community testimonials and shoutouts
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br p-5 md:p-4 rounded-2xl border min-w-0 relative from-ai-primary/5 to-ai-primary/10 border-ai-primary/20">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star h-4 w-4 fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star h-4 w-4 fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star h-4 w-4 fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star h-4 w-4 fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star h-4 w-4 fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <span className="ml-2 text-xs text-gray-600">5.0/5.0</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-12 md:mb-8 italic">
                  "Between all our campuses worldwide, Code &amp; Coffee is a
                  model of a partnered meetup."
                </p>
                <div className="hidden md:flex items-center absolute bottom-4 left-4 right-4">
                  <div className="w-8 h-8 rounded-full mr-3 bg-gradient-to-br from-ai-primary/20 to-ai-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-ai-primary font-medium text-[10px]">
                      MG
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                      <span className="font-medium text-ai-secondary">
                        Melissa Glazar
                      </span>
                      <span className="text-gray-500">
                        {" "}
                        • BrainStation Community Manager
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex md:hidden items-center">
                  <div className="w-8 h-8 rounded-full mr-3 bg-gradient-to-br from-ai-primary/20 to-ai-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-ai-primary font-medium text-[10px]">
                      MG
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs leading-tight">
                      <div className="font-medium text-ai-secondary">
                        Melissa Glazar
                      </div>
                      <div className="text-gray-500 text-[11px]">
                        BrainStation Community Manager
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br p-5 md:p-4 rounded-2xl border min-w-0 relative from-ai-accent/5 to-ai-accent/10 border-ai-accent/20">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star h-4 w-4 fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star h-4 w-4 fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star h-4 w-4 fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star h-4 w-4 fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star h-4 w-4 fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <span className="ml-2 text-xs text-gray-600">5.0/5.0</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-12 md:mb-8 italic">
                  "The best things come in 3: Code, Coffee, and now Couchbase."
                </p>
                <div className="hidden md:flex items-center absolute bottom-4 left-4 right-4">
                  <div className="w-8 h-8 rounded-full mr-3 bg-gradient-to-br from-ai-primary/20 to-ai-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-ai-primary font-medium text-[10px]">
                      SR
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                      <span className="font-medium text-ai-secondary">
                        Sheyla Ruiz
                      </span>
                      <span className="text-gray-500">
                        {" "}
                        • Couchbase Community Manager
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex md:hidden items-center">
                  <div className="w-8 h-8 rounded-full mr-3 bg-gradient-to-br from-ai-primary/20 to-ai-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-ai-primary font-medium text-[10px]">
                      SR
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs leading-tight">
                      <div className="font-medium text-ai-secondary">
                        Sheyla Ruiz
                      </div>
                      <div className="text-gray-500 text-[11px]">
                        Couchbase Community Manager
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br p-5 md:p-4 rounded-2xl border min-w-0 relative from-purple-50 to-purple-100 border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star h-4 w-4 fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star h-4 w-4 fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star h-4 w-4 fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star h-4 w-4 fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star h-4 w-4 fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <span className="ml-2 text-xs text-gray-600">5.0/5.0</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-12 md:mb-8 italic">
                  "Excellent organizers, friendly and was very helpful in
                  connecting with like-minded people. As a woman in tech, felt
                  empowered and supported."
                </p>
                <div className="hidden md:flex items-center absolute bottom-4 left-4 right-4">
                  <div className="w-8 h-8 rounded-full mr-3 bg-gradient-to-br from-ai-primary/20 to-ai-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-ai-primary font-medium text-[10px]">
                      EA
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                      <span className="font-medium text-ai-secondary">
                        Event Attendee
                      </span>
                      <span className="text-gray-500">
                        {" "}
                        • Developer Community Member
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex md:hidden items-center">
                  <div className="w-8 h-8 rounded-full mr-3 bg-gradient-to-br from-ai-primary/20 to-ai-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-ai-primary font-medium text-[10px]">
                      EA
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs leading-tight">
                      <div className="font-medium text-ai-secondary">
                        Event Attendee
                      </div>
                      <div className="text-gray-500 text-[11px]">
                        Developer Community Member
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <div
                className="relative inline-block rounded-2xl overflow-hidden shadow-2xl"
                style={{ height: 280, maxWidth: 450, width: "100%" }}
              >
                <img
                  src="/assets/community-birthday-party-DAYXv7S8.png"
                  alt="NYC Code & Coffee community members celebrating together at a meetup event"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm mt-2">
                  Steve's many communities celebrating his birthday in 2022
                </p>
              </div>
            </div>
            <div>
              <div className="mb-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-ai-secondary mb-4">
                  👋 Get in Contact
                </h2>
              </div>
              <form className="space-y-6">
                <div>
                  <label
                    className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-gray-700"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-gray-700"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1"
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, community, or just say hello..."
                    defaultValue={""}
                  />
                </div>
                <div>
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 w-full px-8 py-3 bg-gradient-to-r from-ai-primary to-ai-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-ai-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold gradient-text mb-4">
                Steve Chen
              </h3>
              <p className="text-gray-400 mb-4">
                Community Builder &amp; Developer Relations Leader
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/stevechendc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width={4} height={12} x={2} y={9} />
                    <circle cx={4} cy={4} r={2} />
                  </svg>
                </a>
                <a
                  href="https://codeandcoffee.chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-message-square h-5 w-5"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </a>
                <a
                  href="mailto:stevechenweb@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail h-5 w-5"
                  >
                    <rect width={20} height={16} x={2} y={4} rx={2} />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Communities</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://www.codeandcoffee.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Code &amp; Coffee Collective
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.meetup.com/product-and-pastries/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Product &amp; Pastries
                  </a>
                </li>
                <li>
                  <a
                    href="https://codeandcoffee.chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Discord Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button className="hover:text-white transition-colors text-left">
                    About
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors text-left">
                    Metrics
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors text-left">
                    Milestones
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors text-left">
                    Case Studies
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors text-left">
                    Portfolio
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors text-left">
                    Shoutouts
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>2025 | stevechen.xyz | Built for Community</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
  );
};

export default App;
