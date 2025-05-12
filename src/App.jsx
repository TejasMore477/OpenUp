import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
