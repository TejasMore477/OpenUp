import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Loader from "./layout/Loader";
import { AnimatePresence } from "framer-motion";
import Landing from "./layout/Landing";

function Mother({ isLoading }) {
  return (
    <>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
      {!isLoading && (
        <main className="bg-darkTheme font-Popins max-w-screen-2xl mx-auto min-h-screen overflow-hidden">
                <Header />
          <Landing/>
          <section id="about" className="h-screen"></section>
          <section id="hero" className="h-screen"></section>
          <Footer />

        </main>
      )}
    </>
  );
}

export default Mother;
