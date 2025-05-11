import React from "react";

const ImageThumbnail = ({
  image,
  index,
  onRotate,
  onRemove,
  onCaptionChange,
}) => {
  return (
    <div className="relative backdrop-blur-sm bg-white/5 rounded-lg p-2 sm:p-4 shadow-lg border border-white/20 hover:border-blue-500/20 transition-all duration-300">
      <div className="relative group aspect-square overflow-hidden rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={URL.createObjectURL(image.file)}
            alt={`preview-${index}`}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            style={{
              transform: `rotate(${image.rotation}deg)`,
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
      </div>

      <div className="mt-2">
        <p className="sm:text-sm text-xs font-medium text-gray-300">Image {index + 1}</p>
      </div>

      <div className="flex justify-between mt-3 gap-2">
        <button
          onClick={() => onRotate(index)}
          className="group relative flex-1 px-3 py-1.5 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-slate-700/90 to-slate-600/90 hover:from-slate-600/90 hover:to-slate-700/90 shadow-lg shadow-blue-500/5 "
        >
          <span className="flex items-center justify-center gap-1">
            <svg
              className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
           <span className="hidden sm:block">Rotate</span>
          </span>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 animate-shimmer"></div>
        </button>

        <button
          onClick={() => onRemove(index)}
          className="group relative flex-1 px-3 py-1.5 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-slate-700/90 to-slate-600/90 hover:from-slate-600/90 hover:to-slate-700/90 shadow-lg shadow-red-500/5 hover:shadow-red-500/10 border border-red-500/10"
        >
          <span className="flex items-center justify-center gap-1">
            <svg
              className="w-4 h-4 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            <span className="hidden sm:block">Remove</span>
          </span>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 animate-shimmer"></div>
        </button>
      </div>

      <input
        type="text"
        placeholder="Add caption"
        value={image.caption}
        onChange={(e) => onCaptionChange(index, e.target.value)}
        className="mt-3 w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400 text-sm"
      />
    </div>
  );
};

export default ImageThumbnail;
