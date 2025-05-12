import React, { memo } from "react";
import ImgToPdf from "../logic/ImgToPdf";

// Extracted Feature Card Component
const FeatureCard = memo(({ icon, title, description, color }) => (
  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-6 border border-white/20 transition-all duration-300">
    <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-white mb-2 flex items-center gap-2">
      <span className={`text-${color}-400 `}>{icon}</span>
      {title}
    </h3>
    <p className="text-gray-300 text-xs sm:text-sm">{description}</p>
  </div>
));

// Extracted Step Component
const Step = memo(({ number, title, description, color }) => (
  <div className="text-center">
    <div
      className={`w-10 h-10 sm:w-12 sm:h-12 backdrop-blur-md bg-neutral-900/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 border border-white/20`}
    >
      <span className={`text-${color}-400 font-bold`}>{number}</span>
    </div>
    <h3 className="text-white font-Syncopate leading-none font-semibold sm:mb-2">
      {title}
    </h3>
    <p className="text-gray-300 text-xs sm:text-sm">{description}</p>
  </div>
));

// Memoized Hero Section
const HeroSection = memo(() => (
  <div className="text-center mb-16">
    <h1 className="font-Syncopate text-2xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
      Free Image to PDF Converter
      <span className="block text-sm md:text-xl text-blue-400 mt-2">
        Convert JPG, PNG, WEBP to PDF Instantly
      </span>
    </h1>
    <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in-delay">
      Transform your images into professional PDFs with our secure,
      browser-based converter. No sign-up required, no server storage, and 100%
      free. Perfect for documents, photos, and presentations.
    </p>
    <div className="mt-8 space-y-4">
      <h2 className="text-xl font-semibold text-white">
        Why Choose Our Image to PDF Converter?
      </h2>
      <ul className="text-sm text-gray-300 space-y-2">
        <li>✓ 100% Secure - All processing happens in your browser</li>
        <li>✓ Free to Use - No hidden charges or subscriptions</li>
        <li>✓ Multiple Formats - Support for JPG, PNG, WEBP, and more</li>
        <li>✓ Instant Conversion - No waiting time or upload delays</li>
        <li>✓ No Registration - Start converting immediately</li>
      </ul>
    </div>
  </div>
));

// Memoized Features Grid
const FeaturesGrid = memo(() => {
  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6 sm:w-12 sm:h-12 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "100% Secure",
      description:
        "Your images never leave your device. All processing happens locally in your browser.",
      color: "blue",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 sm:w-12 sm:h-12 text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Lightning Fast",
      description:
        "Convert multiple images to PDF in seconds with our optimized processing engine.",
      color: "green",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 sm:w-12 sm:h-12 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Professional Quality",
      description:
        "Customize page size, orientation, and add captions for professional-looking PDFs.",
      color: "purple",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-3 sm:gap-8 mb-10 sm:mb-16">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
});

// Memoized How It Works Section
const HowItWorks = memo(() => {
  const steps = [
    {
      number: 1,
      title: "Upload Images",
      description: "Select your images or drag and drop them",
      color: "blue",
    },
    {
      number: 2,
      title: "Customize",
      description: "Adjust settings and add captions",
      color: "green",
    },
    {
      number: 3,
      title: "Preview",
      description: "Check how your PDF will look",
      color: "purple",
    },
    {
      number: 4,
      title: "Download",
      description: "Get your PDF instantly",
      color: "red",
    },
  ];

  return (
    <div className="backdrop-blur-sm bg-white/5 rounded-xl py-8 sm:p-8 border border-white/20 mb-10 sm:mb-16">
      <h2 className="text-lg md:text-xl font-Syncopate font-bold text-white mb-4 sm:mb-8 text-center">
        How It Works
      </h2>
      <div className="grid md:grid-cols-4 gap-5 sm:gap-6">
        {steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </div>
    </div>
  );
});

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-darkTheme via-slate-900 to-darkTheme">
      <section className="relative py-10 sm:py-20 sm:px-4">
        <div className="max-w-7xl mx-auto">
          <HeroSection />
          <FeaturesGrid />
          <HowItWorks />
        </div>
      </section>
    </div>
  );
}

export default memo(Landing);
