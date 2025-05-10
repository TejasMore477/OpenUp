import React, { useEffect } from "react";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-darkTheme font-Syncopate via-slate-900 to-darkTheme">
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-limicMist mb-6 animate-fade-in">
              Privacy Policy
            </h1>
            <p className="text-sm text-softVoilet animate-fade-in-delay">
              The shortest and most honest privacy policy you'll ever read
            </p>
          </div>

          {/* Content */}
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-royalAmethyst/20">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-limicMist mb-4">TL;DR Version</h2>
                <p className="text-softVoilet leading-relaxed text-sm">
                  Your files never leave your computer. That's it. That's the policy. 
                  No tracking, no data collection, no funny business. Just pure, simple privacy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-limicMist mb-4">The Fun Part</h2>
                <p className="text-softVoilet leading-relaxed mb-4 text-sm">
                  As a computer science student who values privacy, I've made this tool with one simple principle: 
                  your data stays with you. Everything happens right in your browser - no servers, no cloud storage, 
                  no mysterious data centers in the middle of nowhere.
                </p>
                <p className="text-softVoilet leading-relaxed text-sm">
                  Think of it like making a sandwich in your own kitchen - all the ingredients (your images) 
                  stay in your house, and you get to eat the sandwich (PDF) without anyone else knowing what's in it.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-limicMist mb-4">What I Don't Do</h2>
                <ul className="list-disc list-inside text-softVoilet space-y-2 text-sm">
                  <li>Track your browsing habits</li>
                  <li>Collect personal information</li>
                  <li>Share data with third parties</li>
                  <li>Store your files on my servers</li>
                  <li>Send you annoying emails</li>
                  <li>Use dark patterns to trick you</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-limicMist mb-4">The Technical Stuff</h2>
                <p className="text-softVoilet leading-relaxed text-sm">
                  All image processing happens locally in your browser using modern web technologies. 
                  Your files are processed in memory and never uploaded anywhere. When you close the tab, 
                  everything is cleared - like writing on a whiteboard and then erasing it.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-limicMist mb-4">Questions?</h2>
                <p className="text-softVoilet leading-relaxed text-sm">
                  If you have any questions about privacy (or just want to chat about web development), 
                  feel free to reach out! I'm always happy to explain how things work.
                </p>
                <a 
                  href="mailto:tejasmore477@gmail.com"
                  className="inline-flex text-sm items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700/90 to-slate-600/90 hover:from-slate-600/90 hover:to-slate-700/90 text-white rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 border border-blue-500/10 mt-4"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy; 