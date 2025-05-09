import React, { useEffect, useState, useCallback } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Loader from './components/layout/Loader';
import ImgToPdf from './components/logic/ImgToPdf';
import ImageThumbnail from './components/logic/ImageThumbnail';
import Counter from './components/common/Counter';
import Thumbnails from './components/common/Thumbnails';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  const handleRotate = useCallback((index) => {
    setImages(prevImages => {
      const newImages = [...prevImages];
      newImages[index] = {
        ...newImages[index],
        rotation: (newImages[index].rotation || 0) + 90
      };
      return newImages;
    });
  }, []);

  const handleRemove = useCallback((index) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  }, []);

  const handleCaptionChange = useCallback((index, caption) => {
    setImages(prevImages => {
      const newImages = [...prevImages];
      newImages[index] = {
        ...newImages[index],
        caption
      };
      return newImages;
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='bg-darkTheme min-h-screen'>
      <Header />
      <main className='container mx-auto px-4 py-8'>
        <Landing />
        {/* Converter Section */}
        <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/20">
          <ImgToPdf onImagesChange={setImages}
            images={images} />
        </div>

        {images.length > 0 && (
          <div className="mt-8">
            <Thumbnails
              images={images}
              onRotate={handleRotate}
              onRemove={handleRemove}
              onCaptionChange={handleCaptionChange}
            />
            {/* <Counter count={images.length} /> */}
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}

export default App;