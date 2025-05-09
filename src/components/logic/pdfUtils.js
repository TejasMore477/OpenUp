// PdfGenerator.js
import { jsPDF } from "jspdf";
import {
  MIN_IMAGES,
  PAGE_PADDING_SIZE,
  CAPTION_HEIGHT_SIZE,
} from "../../config/config";

// Compress and resize image using canvas
export const readImage = (file, maxWidth = 1024, quality = 0.7) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const scaleFactor = Math.min(1, maxWidth / img.width);
        canvas.width = img.width * scaleFactor;
        canvas.height = img.height * scaleFactor;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const compressedDataUrl = canvas.toDataURL("image/jpeg", quality);
        resolve(compressedDataUrl);
      };
    };
    reader.readAsDataURL(file);
  });
};

const loadImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
  });
};

// export const generatePDFBlob = async (images, setError, options = {}) => {
//   if (!images || images.length < MIN_IMAGES) {
//     setError(`Please upload at least ${MIN_IMAGES} images.`);
//     return null;
//   }

//   try {
//     const {
//       title = "MyImages",
//       pageSize = "a4",
//       orientation = "portrait",
//       padding = PAGE_PADDING_SIZE,
//       quality = 0.7,
//       maxImageWidth = 1024,
//     } = options;

//     const pdf = new jsPDF({ format: pageSize, orientation, compress: true });
//     const pageWidth = pdf.internal.pageSize.getWidth();
//     const pageHeight = pdf.internal.pageSize.getHeight();

//     // Font
//     pdf.setFont("helvetica", "normal");
//     pdf.setFontSize(12);
//     pdf.setTextColor(40);

//     if (title) {
//       pdf.setFontSize(18);
//       pdf.text(title, pageWidth / 2, 20, { align: "center" });
//     }

//     // Preprocess all images in parallel
//     const processedImages = await Promise.all(
//       images.map(async ({ file, rotation = 0, caption }) => {
//         const imgData = await readImage(file, maxImageWidth, quality);
//         const img = await loadImage(imgData);
//         return { imgData, img, rotation, caption };
//       })
//     );

//     // Reuse one canvas
//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");

//     processedImages.forEach(({ imgData, img, rotation, caption }, i) => {
//       const isPortrait = rotation % 180 !== 0;
//       let [imgWidth, imgHeight] = isPortrait
//         ? [img.height, img.width]
//         : [img.width, img.height];

//       const maxWidth = pageWidth - padding * 2;
//       const maxHeight = pageHeight - padding * 2 - (caption ? CAPTION_HEIGHT_SIZE : 0);
//       const scale = Math.min(maxWidth / imgWidth, maxHeight / imgHeight);

//       imgWidth *= scale;
//       imgHeight *= scale;
//       const x = padding + (maxWidth - imgWidth) / 2;
//       const y = padding + (maxHeight - imgHeight) / 2;

//       if (i !== 0) pdf.addPage();

//       if (rotation !== 0) {
//         const canvasWidth = isPortrait ? img.height : img.width;
//         const canvasHeight = isPortrait ? img.width : img.height;

//         canvas.width = canvasWidth;
//         canvas.height = canvasHeight;

//         ctx.save();
//         ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//         ctx.translate(canvasWidth / 2, canvasHeight / 2);
//         ctx.rotate((rotation * Math.PI) / 180);
//         ctx.drawImage(img, -img.width / 2, -img.height / 2);
//         ctx.restore();

//         const rotatedDataURL = canvas.toDataURL("image/jpeg", quality);
//         pdf.addImage(rotatedDataURL, "JPEG", x, y, imgWidth, imgHeight);
//       } else {
//         pdf.addImage(imgData, "JPEG", x, y, imgWidth, imgHeight);
//       }

//       if (caption) {
//         pdf.setFontSize(10);
//         pdf.text(caption, pageWidth / 2, pageHeight - padding, { align: "center" });
//       }
//     });

//     return pdf.output("blob");
//   } catch (err) {
//     setError("Failed to generate PDF");
//     console.error("PDF generation error:", err);
//     throw err;
//   }
// };
export const generatePDFBlob = async (images, setError, options = {}) => {
  if (!images || images.length < MIN_IMAGES) {
    setError(`Please upload at least ${MIN_IMAGES} images.`);
    return null;
  }

  try {
    const {
      title = "MyImages",
      pageSize = "a4",
      orientation = "portrait",
      padding = PAGE_PADDING_SIZE,
      quality = 0.7,
      maxImageWidth = 1024,
      backgroundColor = "#ffffff", // default white background
    } = options;

    const pdf = new jsPDF({ format: pageSize, orientation, compress: true });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Font
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);
    pdf.setTextColor(40);

    if (title) {
      pdf.setFontSize(18);
      pdf.text(title, pageWidth / 2, 20, { align: "center" });
    }

    // Preprocess all images in parallel
    const processedImages = await Promise.all(
      images.map(async ({ file, rotation = 0, caption }) => {
        const imgData = await readImage(file, maxImageWidth, quality);
        const img = await loadImage(imgData);
        return { imgData, img, rotation, caption };
      })
    );

    // Reuse one canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    processedImages.forEach(({ imgData, img, rotation, caption }, i) => {
      const isPortrait = rotation % 180 !== 0;
      let [imgWidth, imgHeight] = isPortrait
        ? [img.height, img.width]
        : [img.width, img.height];

      const maxWidth = pageWidth - padding * 2;
      const maxHeight = pageHeight - padding * 2 - (caption ? CAPTION_HEIGHT_SIZE : 0);
      const scale = Math.min(maxWidth / imgWidth, maxHeight / imgHeight);

      imgWidth *= scale;
      imgHeight *= scale;
      const x = padding + (maxWidth - imgWidth) / 2;
      const y = padding + (maxHeight - imgHeight) / 2;

      if (i !== 0) pdf.addPage();

      // Fill background color
      pdf.setFillColor(backgroundColor);
      pdf.rect(0, 0, pageWidth, pageHeight, "F");

      if (rotation !== 0) {
        const canvasWidth = isPortrait ? img.height : img.width;
        const canvasHeight = isPortrait ? img.width : img.height;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        ctx.save();
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.translate(canvasWidth / 2, canvasHeight / 2);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.drawImage(img, -img.width / 2, -img.height / 2);
        ctx.restore();

        const rotatedDataURL = canvas.toDataURL("image/jpeg", quality);
        pdf.addImage(rotatedDataURL, "JPEG", x, y, imgWidth, imgHeight);
      } else {
        pdf.addImage(imgData, "JPEG", x, y, imgWidth, imgHeight);
      }

      if (caption) {
        pdf.setFontSize(10);
        pdf.text(caption, pageWidth / 2, pageHeight - padding, { align: "center" });
      }
    });

    return pdf.output("blob");
  } catch (err) {
    setError("Failed to generate PDF");
    console.error("PDF generation error:", err);
    throw err;
  }
};


export const downloadPDF = async (images, setError, options) => {
  console.log("downloading pdf.... \n");
  try {
    const pdfBlob = await generatePDFBlob(images, setError, options);
    if (pdfBlob) {
      const blobURL = URL.createObjectURL(pdfBlob);
      const a = document.createElement("a");
      a.href = blobURL;
      a.download = `${options?.title || "OPENUP"}.pdf`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(blobURL), 100);
    }
  } catch (err) {
    setError("Failed to download PDF");
    console.error("Download error:", err);
    throw err;
  }
};
