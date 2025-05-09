import React from "react";
import Header from "./Header";
import ImgToPdf from "../logic/ImgToPdf";

function Landing() {
  return (
      <div className="flex items-center justify-center gap-4 bg-red-900">
        <div class="p-4 text-center w-[85%]">
          <section
            id="hero"
            className="w-full tracking-tight grid place-content-center"
          >
            <h1 className="text-5xl md:text-6xl leading-none font-bold text-limicMist mb-2">
              Create PDF Instantly
            </h1>

            <p className="text-lg md:text-lg font-light leading-none text-softVoilet mb-6">
              Upload your images in order — secure, private, and totally
              backend-free.
            </p>
            <ImgToPdf />
          </section>
        </div>
        <div class="p-4 text-center h-[70%] w-[20%] bg-zinc-700 bg-opacity-10">
          Ad 2
        </div>
      </div>
  );
}

export default Landing;
