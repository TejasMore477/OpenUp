import React from "react";
import Counter from "../common/Counter";
import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        role="status"
        aria-live="polite"
        className="bg-darkTheme w-full min-h-screen overflow-hidden grid place-content-center px-4 sm:px-6 md:px-8"
      >
        <div className="text-center">
          <h1 className="text-limicMist font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-Syncopate tracking-tighter leading-none">
            OpenUp
          </h1>
          <div className="flex items-center justify-center sm:mt-3 md:mt-4 text-limicMist font-light text-sm sm:text-base md:text-lg lg:text-xl font-Syncopate tracking-tighter">
            <p className="pr-2">Loading</p> <Counter /> <p>%</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Loader;
