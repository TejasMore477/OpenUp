import React from 'react';
import ImageThumbnail from '../logic/ImageThumbnail';

function Thumbnails({ 
  images = [], 
  onRotate, 
  onRemove, 
  onCaptionChange 
}) {
  return (
    <section>
      {images.length > 0 && (
        <>
          <p className="text-sm text-gray-400 mt-4">
            {images.length} image{images.length !== 1 && "s"} selected
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {images.map((image, index) => (
              <ImageThumbnail
                key={index}
                image={image}
                index={index}
                onRotate={onRotate}
                onRemove={onRemove}
                onCaptionChange={onCaptionChange}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Thumbnails;