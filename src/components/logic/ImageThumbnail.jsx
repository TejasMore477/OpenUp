import React from "react";

const ImageThumbnail = ({
  image,
  index,
  onRotate,
  onRemove,
  onCaptionChange,
}) => {
  return (
    <div className="relative border rounded p-2 shadow-sm bg-gray-50">
      <img
        src={URL.createObjectURL(image.file)}
        alt={`preview-${index}`}
        className="w-full h-36 object-cover rounded"
        style={{ transform: `rotate(${image.rotation}deg)` }}
      />
      <div>
        <p>Image-{index + 1}</p>
      </div>

      <div className="flex justify-between mt-2 gap-2">
        <button
          onClick={() => onRotate(index)}
          className="text-sm bg-yellow-300 px-2 rounded"
        >
          🔄 Rotate
        </button>
        <button
          onClick={() => onRemove(index)}
          className="text-sm bg-red-300 px-2 rounded"
        >
          ❌ Remove
        </button>
      </div>

      <input
        type="text"
        placeholder="Add caption"
        value={image.caption}
        onChange={(e) => onCaptionChange(index, e.target.value)}
        className="mt-2 w-full text-sm border rounded p-1"
      />
    </div>
  );
};

export default ImageThumbnail;
