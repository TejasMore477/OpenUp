// export default ImgToPdf;
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  memo,
  useMemo,
} from "react";
import debounce from "lodash.debounce";
import { handleImageUpload } from "./handlers/handleImageUpload";
import { generatePDFBlob, downloadPDF } from "./pdfUtils";
import ImageThumbnail from "./ImageThumbnail";
import { MIN_IMAGES } from "../../config/config";
import Loading from "../common/Loading";

// Memoized component to avoid unnecessary re-renders
const MemoizedImageThumbnail = memo(ImageThumbnail);

const ImgToPdf = ({ onImagesChange, images = [] }) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pdfOptions, setPdfOptions] = useState({
    title: "",
    pageSize: "a4",
    orientation: "portrait",
    padding: 10,
    imageQuality: 0.8,
    backgroundColor: "#ffffff",
  });

  const renderCount = useRef(0);

  const onImageChange = useCallback((e) => {
    if (!e.target.files?.length) return;

    const files = Array.from(e.target.files);
    const imageObjects = files.map((file) => ({
      file,
      rotation: 0,
      caption: "",
      lastModified: file.lastModified,
      size: file.size,
      type: file.type,
    }));

    try {
      handleImageUpload(files, () => {
        onImagesChange(imageObjects);
      }, setError);
    } catch (err) {
      setError("Failed to process images. Please try again.");
      console.error(err);
    }
  }, [onImagesChange]);

  const handleRotate = useCallback((index) => {
    onImagesChange((prev) => {
      const newImages = prev.map((img, i) =>
        i === index ? { ...img, rotation: (img.rotation + 90) % 360 } : img
      );
      return newImages;
    });
  }, [onImagesChange]);

  const handleRemove = useCallback((index) => {
    onImagesChange((prev) => {
      const newImages = prev.filter((_, i) => i !== index);
      return newImages;
    });
  }, [onImagesChange]);

  const debouncedCaptionChange = useMemo(
    () =>
      debounce((index, caption) => {
        onImagesChange((prev) => {
          const newImages = prev.map((img, i) => (i === index ? { ...img, caption } : img));
          return newImages;
        });
      }, 300),
    [onImagesChange]
  );

  const handleCaptionChange = useCallback(
    (index, caption) => {
      debouncedCaptionChange(index, caption);
    },
    [debouncedCaptionChange]
  );

  const previewPDF = useCallback(async () => {
    if (!images || images.length < MIN_IMAGES) {
      setError(`Please upload at least ${MIN_IMAGES} images`);
      return;
    }

    setError("");
    setIsLoading(true);
    try {
      const blob = await generatePDFBlob(images, setError, pdfOptions);
      if (blob) {
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      }
    } catch (err) {
      setError("Failed to generate PDF preview");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [images, pdfOptions]);

  const handleDownload = useCallback(async () => {
    if (!images || images.length < MIN_IMAGES) {
      setError(`Please upload at least ${MIN_IMAGES} images`);
      return;
    }

    setError("");
    setIsLoading(true);
    try {
      await downloadPDF(images, setError, pdfOptions);
    } catch (err) {
      setError("Failed to download PDF");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [images, pdfOptions]);

  const clearAll = useCallback(() => {
    onImagesChange([]);
    setPdfOptions((prev) => ({ ...prev, title: "" }));
    setError("");
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = "";
  }, [onImagesChange]);

  const debouncedPdfOptionChange = useMemo(
    () =>
      debounce((field, value) => {
        setPdfOptions((prev) => ({
          ...prev,
          [field]: field === "padding" ? parseInt(value) || 0 : value,
        }));
      }, 300),
    []
  );

  const handlePdfOptionChange = useCallback(
    (field, value) => {
      debouncedPdfOptionChange(field, value);
    },
    [debouncedPdfOptionChange]
  );

  useEffect(() => {
    renderCount.current += 1;
  }, []);

  const canShowActions = images && images.length >= MIN_IMAGES;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Loading />
        </div>
      )}

      <div className="bg-white rounded-xl shadow-2xl p-6 mb-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Convert Images to PDF</h2>
          <p className="text-gray-600">Upload your images and customize your PDF settings</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Upload Section */}
          <div className="flex-1">
            <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300 hover:border-blue-500 transition-colors duration-300">
              <label className="flex flex-col items-center justify-center cursor-pointer">
                <div className="text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="mt-1 text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={onImageChange}
                  className="hidden"
                />
              </label>
            </div>

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
          </div>

          {/* Right Column - PDF Options */}
          <div className="flex-1 space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">PDF Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">PDF Title</label>
                  <input
                    type="text"
                    placeholder="Enter PDF title"
                    value={pdfOptions.title}
                    onChange={(e) => handlePdfOptionChange("title", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Page Size</label>
                    <select
                      value={pdfOptions.pageSize}
                      onChange={(e) => handlePdfOptionChange("pageSize", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="a4">A4</option>
                      <option value="letter">Letter</option>
                      <option value="a5">A5</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Orientation</label>
                    <select
                      value={pdfOptions.orientation}
                      onChange={(e) => handlePdfOptionChange("orientation", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="portrait">Portrait</option>
                      <option value="landscape">Landscape</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Page Padding (px)</label>
                  <input
                    type="number"
                    value={pdfOptions.padding}
                    onChange={(e) => handlePdfOptionChange("padding", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Background Color</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={pdfOptions.backgroundColor}
                      onChange={(e) => handlePdfOptionChange("backgroundColor", e.target.value)}
                      className="w-12 h-12 rounded-lg cursor-pointer"
                    />
                    <span className="text-sm text-gray-500">Click to change color</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button
            type="button"
            onClick={previewPDF}
            disabled={!canShowActions}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
              canShowActions
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Preview PDF
            </span>
          </button>

          <button
            type="button"
            onClick={handleDownload}
            disabled={!canShowActions}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
              canShowActions
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </span>
          </button>

          <button
            type="button"
            onClick={clearAll}
            disabled={images.length === 0}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
              images.length > 0
                ? "bg-red-600 hover:bg-red-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear All
            </span>
          </button>
        </div>
      </div>

      {/* Image Preview Section */}
      {/* {images.length > 0 && (
        <div className="bg-white rounded-xl shadow-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Selected Images ({images.length})
            </h3>
            <p className="text-sm text-gray-500">
              Drag to reorder • Click to edit captions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {images.map((image, index) => (
              <MemoizedImageThumbnail
                key={index}
                image={image}
                index={index}
                onRotate={handleRotate}
                onRemove={handleRemove}
                onCaptionChange={handleCaptionChange}
              />
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ImgToPdf;
