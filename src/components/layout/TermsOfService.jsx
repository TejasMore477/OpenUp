import React, { useEffect } from "react";

function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-sm text-softVoilet animate-fade-in-delay">
              The most straightforward terms you'll ever read
            </p>
          </div>

          {/* Content */}
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-royalAmethyst/20">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-limicMist mb-4">The Simple Version</h2>
                <p className="text-softVoilet leading-relaxed text-sm">
                  Use this tool however you want. Just don't do anything illegal or mean. 
                  That's pretty much it. No complicated legal jargon here!
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-limicMist mb-4">What You Can Do</h2>
                <ul className="list-disc list-inside text-softVoilet space-y-2 text-sm">
                  <li>Convert any images you own to PDF</li>
                  <li>Use it for personal or business purposes</li>
                  <li>Share it with your friends and colleagues</li>
                  <li>Use it as many times as you want</li>
                  <li>Suggest improvements (I love feedback!)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-limicMist mb-4">What You Shouldn't Do</h2>
                <ul className="list-disc list-inside text-softVoilet space-y-2 text-sm">
                  <li>Try to break the tool (it's just a simple converter)</li>
                  <li>Use it for anything illegal (obviously)</li>
                  <li>Spam or abuse the service (though it's hard to do since everything's local)</li>
                  <li>Claim you made it (though I'd be flattered)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-limicMist mb-4">The Technical Disclaimer</h2>
                <p className="text-softVoilet leading-relaxed text-sm">
                  This is a personal project I made as a computer science student. 
                  While I've done my best to make it work well, I can't guarantee it'll be perfect for everyone. 
                  If something goes wrong, I'll try to help, but I'm not responsible for any issues that might come up.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-limicMist mb-4">Suggestions Welcome!</h2>
                <p className="text-softVoilet leading-relaxed text-sm mb-4">
                  I'm always looking to improve this tool. If you have any ideas, suggestions, 
                  or found a bug, I'd love to hear from you! This is a learning project for me, 
                  so your feedback is super valuable.
                </p>
                <a 
                  href="mailto:tejasmore477@gmail.com"
                  className="inline-flex text-sm items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700/90 to-slate-600/90 hover:from-slate-600/90 hover:to-slate-700/90 text-white rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 border border-blue-500/10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Suggestions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsOfService; 