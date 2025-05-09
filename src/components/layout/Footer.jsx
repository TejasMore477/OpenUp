import React from "react";

function Footer() {
  return (
    <footer className="w-full h-[55vh] bg-royalAmethyst text-darkTheme py-8 rounded-t-3xl font-Syncopate">
      <div className="max-w-screen-2xl mx-auto text-center">
        <p className="leading-none font-semibold mb-6 text-zinc-300">
          CREATE SAFE PDF WITH
        </p>
        <h1 className="text-[17vw] font-extrabold tracking-tighter leading-none uppercase font-Syncopate">
          OpenUp
        </h1>

        <p className="mt-4 text-gray-300 text-[0.8vw] ">
          &copy; {new Date().getFullYear()} OpenUp. Built with love by{" "}
          <span className="font-semibold">Tejas More</span>.
        </p>
        <a
          href="mailto:tejasmore660@gmail.com"
          className="text-[0.8vw] font-normal text-gray-300"
        >
          tejasmore660@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
