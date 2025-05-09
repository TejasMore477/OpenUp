import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Header() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <motion.header
      className="fixed w-full py-[15px] rounded-b-xl transition-colors duration-200"
      initial={{ y: 0 }}
      animate={scrollDirection === "down" ? { y: "-100%" } : { y: 0 }}
      style={{ color: isScrolled ? "black" : "inherit" }}
    >
      <nav>
        <a
          href="#"
          className=" px-[70px] text-limicMist font-extrabold text-[1.7vw] font-Syncopate tracking-tighter"
        >
          OpenUp
        </a>
      </nav>
    </motion.header>
  );
}

export default Header;
