import React, { useEffect, useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Loader from "./components/layout/Loader";
import ImgToPdf from "./components/logic/ImgToPdf";
import Thumbnails from "./components/common/Thumbnails";
import About from "./components/layout/About";
import Features from "./components/layout/Features";
import PrivacyPolicy from "./components/layout/PrivacyPolicy";
import TermsOfService from "./components/layout/TermsOfService";

// SEO Component
const SEO = ({ title, description, path }) => {
  const location = useLocation();
  const canonicalUrl = `https://openup-pdf.com${path || location.pathname}`;

  useEffect(() => {
    // Update structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "OpenUp - Image to PDF Converter",
      description: description,
      url: canonicalUrl,
      applicationCategory: "UtilityApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "Convert images to PDF",
        "Multiple format support",
        "Secure local processing",
        "Batch conversion",
        "No registration required",
      ],
    };

    // Add structured data to page
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Update meta tags
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", description);
    document
      .querySelector('link[rel="canonical"]')
      .setAttribute("href", canonicalUrl);

    return () => {
      document.head.removeChild(script);
    };
  }, [title, description, canonicalUrl]);

  return null;
};

function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRotate = useCallback((index) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = {
        ...newImages[index],
        rotation: (newImages[index].rotation || 0) + 90,
      };
      return newImages;
    });
  }, []);

  const handleRemove = useCallback((index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }, []);

  const handleCaptionChange = useCallback((index, caption) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = {
        ...newImages[index],
        caption,
      };
      return newImages;
    });
  }, []);

  return (
    <div className="flex flex-col-reverse sm:flex-col items-center justify-center">
      <SEO
        title="OpenUp - Free Image to PDF Converter | Secure & Instant"
        description="Convert your images to PDF instantly. 100% secure, no server storage, local processing. Best free image to PDF converter tool."
        path="/"
      />
      <Landing />
      <div className="w-full">
        {/* Converter Section */}
        <div className="sm:backdrop-blur-sm sm:bg-white/5 rounded-xl sm:p-8 sm:border sm:border-white/20">
          <ImgToPdf onImagesChange={setImages} images={images} />
        </div>

        {images.length > 0 && (
          <div className="mt-8">
            <Thumbnails
              images={images}
              onRotate={handleRotate}
              onRemove={handleRemove}
              onCaptionChange={handleCaptionChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="bg-darkTheme min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <>
                  <SEO
                    title="About OpenUp - Free Image to PDF Converter"
                    description="Learn about OpenUp, the most secure and efficient image to PDF converter. Built with privacy-first principles and modern web technologies."
                    path="/about"
                  />
                  <About />
                </>
              }
            />
            <Route
              path="/features"
              element={
                <>
                  <SEO
                    title="Features - OpenUp Image to PDF Converter"
                    description="Discover the powerful features of OpenUp PDF converter. Secure processing, multiple formats, batch conversion, and more."
                    path="/features"
                  />
                  <Features />
                </>
              }
            />
            <Route
              path="/privacy"
              element={
                <>
                  <SEO
                    title="Privacy Policy - OpenUp PDF Converter"
                    description="Read our privacy policy. We believe in complete data privacy. All processing happens locally in your browser."
                    path="/privacy"
                  />
                  <PrivacyPolicy />
                </>
              }
            />
            <Route
              path="/terms"
              element={
                <>
                  <SEO
                    title="Terms of Service - OpenUp PDF Converter"
                    description="Read our terms of service. Simple and straightforward terms for using our free image to PDF converter."
                    path="/terms"
                  />
                  <TermsOfService />
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
