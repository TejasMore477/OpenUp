import React, { useEffect } from "react";

function Features() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Secure PDF Conversion",
      description:
        "All image to PDF conversion happens locally in your browser. Your files never leave your device, ensuring complete privacy and security.",
      detailedDescription:
        "Unlike other online PDF converters, our tool processes everything directly in your browser using advanced web technologies. This means your sensitive documents and images stay on your device throughout the entire conversion process, making it the most secure image to PDF converter available.",
      icon: (
        <svg
          className="w-7 h-7"
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
    },
    {
      title: "Multiple Image Formats",
      description:
        "Convert any image format to PDF including JPG, PNG, WEBP, and more. Our PDF generator supports all popular image formats.",
      detailedDescription:
        "Our image to PDF converter supports a wide range of image formats to make your conversion process seamless. Whether you're working with JPG, PNG, WEBP, or other common formats, our converter handles them all while maintaining image quality throughout the process.",
      icon: (
        <svg
          className="w-7 h-7"
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
    },
    {
      title: "Professional PDF Customization",
      description:
        "Create professional PDFs with customizable page sizes, orientations, and image captions. Perfect for documents and presentations.",
      detailedDescription:
        "Our PDF generator offers comprehensive customization options to give you full control over your PDF output. You can adjust page sizes to match standard paper formats, choose between portrait and landscape orientations, and add descriptive captions to your images. Perfect for creating professional documents, presentations, or photo albums.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
    },
    {
      title: "Batch Image to PDF Conversion",
      description:
        "Convert multiple images to PDF in one go. Our batch processing feature saves time and maintains image order.",
      detailedDescription:
        "Our image to PDF converter includes a powerful batch processing feature to help you save time. You can select and convert multiple images simultaneously while maintaining their order and organization. This is especially useful when creating multi-page documents or photo collections.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-darkTheme via-slate-900 to-darkTheme">
      <section className="relative py-12 sm:py-20 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-16">
            <h1 className="text-2xl md:text-5xl font-Syncopate font-bold text-limicMist mb-2 sm:mb-6 animate-fade-in">
              Features
            </h1>
            <p className="text-softVoilet animate-fade-in-delay text-xs sm:text-sm">
              Discover what makes my PDF converter special
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-8 border border-royalAmethyst/20 hover:border-royalAmethyst/40 transition-all duration-300"
              >
                <h3 className="text-sm sm:text-lg font-semibold text-limicMist mb-4 flex items-center gap-3">
                  <span className="text-limicMist">{feature.icon}</span>
                  {feature.title}
                </h3>
                <p className="text-softVoilet mb-4 text-xs sm:text-sm">
                  {feature.description}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {feature.detailedDescription}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-8 border border-royalAmethyst/20">
            <h2 className=" text-sm sm:text-lg font-semibold text-limicMist mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-softVoilet mb-6 text-xs sm:text-sm">
              Try out my PDF converter today. No sign-up required, just upload
              your images and convert them to PDF instantly.
            </p>
            <div className="flex flex-col text-xs sm:text-sm sm:flex-row gap-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700/90 to-slate-600/90 hover:from-slate-600/90 hover:to-slate-700/90 text-white rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 border border-blue-500/10"
              >
                <svg
                  className="w-5 h-5"
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
                Try It Now
              </a>
              <a
                href="mailto:tejasmore477@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700/90 to-slate-600/90 hover:from-slate-600/90 hover:to-slate-700/90 text-white rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 border border-blue-500/10"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
