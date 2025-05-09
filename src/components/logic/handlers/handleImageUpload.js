import {
    MAX_IMAGES,
    MIN_IMAGES,
    MAX_IMG_SIZE,
} from "../../../config/config.js";

export const handleImageUpload = (files, setImages, setError) => {
    // check if the no of image uploaded is less than 1
    if (files.length < MIN_IMAGES) {
        setError(`Please select at least ${MIN_IMAGES} images.`);
        return;
    }
    // check if the no of image uploaded is less than 30
    if (files.length > MAX_IMAGES) {
        setError(`You can only upload up to ${MAX_IMAGES} images.`);
        return;
    }

    // getting the file size (of each image) whether it is greater than 3MB
    const oversized = files.find(
        (file) => file.size / (1024 * 1024) > MAX_IMG_SIZE // comparing the file in MB
    );

    // return error when over-sized
    if (oversized) {
        setError(`Each image must be under ${MAX_IMG_SIZE}MB.`);
        return;
    }
    // setting the image Objects to the state
    setImages();
    // setting no error or empty sting in the arror state
    setError("");
};
