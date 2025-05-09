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
        className="bg-darkTheme max-w-screen-2xl mx-auto h-screen overflow-hidden grid place-content-center"
      >
        <h1 className=" px-[70px] text-limicMist font-extrabold text-[3vw] font-Syncopate tracking-tighter leading-tight">
          OpenUp
        </h1>
        <div className="flex items-center justify-center mt-[-5px]  text-limicMist pl-[2px] font-light text-[1vw] font-Syncopate tracking-tighter">
          <p className="pr-[8px]">Loading</p> <Counter /> <p>%</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Loader;
