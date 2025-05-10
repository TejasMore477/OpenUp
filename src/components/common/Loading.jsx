import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/20 shadow-lg flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-limicMist mb-4"></div>
        <p className="text-limicMist">Processing PDF...</p>
      </div>
    </div>
  );
};

export default Loading;