import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToFeatures = (e) => {
    e.preventDefault();
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      title: "Privacy First",
      description: "I believe in complete data privacy. All processing happens locally in your browser, ensuring your files never leave your device.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "User Experience",
      description: "I focus on creating an intuitive and seamless experience, making PDF conversion accessible to everyone.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Learning Journey",
      description: "As a computer science student, I'm continuously learning and improving my skills to create better solutions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Open Source",
      description: "This project is open source, allowing others to learn from and contribute to its development.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  return (
    <div id="about" className="min-h-screen bg-gradient-to-br font-Syncopate from-darkTheme via-slate-900 to-darkTheme">
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              About Me
            </h1>
            <p className="text-sm text-gray-300 animate-fade-in-delay">
              A computer science student passionate about creating secure and efficient solutions
            </p>
          </div>

          {/* Mission Statement */}
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/20 transition-all duration-300 mb-12">
            <h2 className="text-lg font-semibold text-white mb-4">My Mission</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              I'm dedicated to providing a secure, efficient, and user-friendly solution for converting images to PDFs. 
              My commitment to privacy and local processing ensures your data never leaves your device.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {values.map((value, index) => (
              <div 
                key={index}
                className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/20 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Personal Section */}
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/20 transition-all duration-300">
            <h2 className="text-lg font-semibold text-white mb-6">My Journey</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              As a computer science student, I'm passionate about web development and creating tools that make a difference. 
              This project combines my interest in security, user experience, and practical problem-solving. 
              I'm constantly learning and improving my skills to create better solutions.
            </p>
            <a 
              href="mailto:tejasmore477@gmail.com"
              className="text-sm inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700/90 to-slate-600/90 hover:from-slate-600/90 hover:to-slate-700/90 text-white rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 border border-blue-500/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
