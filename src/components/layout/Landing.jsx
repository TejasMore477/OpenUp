import React from "react";
import ImgToPdf from "../logic/ImgToPdf";

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-darkTheme via-slate-900 to-darkTheme">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Transform Images to PDF
              <span className="block text-3xl md:text-4xl text-royalAmethyst mt-2">Securely & Instantly</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-delay">
              Your trusted solution for converting images to professional PDFs.
              No server storage, no data retention, just pure conversion.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/20 hover:border-blue-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="text-blue-400 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">100% Secure</h3>
              <p className="text-gray-300">Your images never leave your device. All processing happens locally in your browser.</p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/20 hover:border-green-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
              <div className="text-green-400 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-300">Convert multiple images to PDF in seconds with our optimized processing engine.</p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/20 hover:border-purple-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="text-purple-400 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Professional Quality</h3>
              <p className="text-gray-300">Customize page size, orientation, and add captions for professional-looking PDFs.</p>
            </div>
          </div>

          {/* How It Works */}
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-400 font-bold">1</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Upload Images</h3>
                <p className="text-gray-300 text-sm">Select your images or drag and drop them</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-400 font-bold">2</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Customize</h3>
                <p className="text-gray-300 text-sm">Adjust settings and add captions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-400 font-bold">3</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Preview</h3>
                <p className="text-gray-300 text-sm">Check how your PDF will look</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-400 font-bold">4</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Download</h3>
                <p className="text-gray-300 text-sm">Get your PDF instantly</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
