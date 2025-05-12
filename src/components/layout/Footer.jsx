import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-darkTheme via-slate-900 to-darkTheme border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div>
          <p className="leading-none font-semibold mb-2 sm:mb-6 text-zinc-300 text-center text-xs sm:text-sm">
            FREE IMAGE TO PDF CONVERTER
          </p>
          <h1 className="text-limicMist font-extrabold font-Syncopate tracking-tighter text-4xl sm:text-6xl md:text-8xl lg:text-[10vw] tracking-leading-none uppercase text-center">
            OpenUp
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-white font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Image to PDF Converter</li>
              <li className="text-gray-400">JPG to PDF</li>
              <li className="text-gray-400">PNG to PDF</li>
              <li className="text-gray-400">WEBP to PDF</li>
              <li className="text-gray-400">Batch Conversion</li>
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-white font-semibold mb-4">Benefits</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">100% Free</li>
              <li className="text-gray-400">No Registration</li>
              <li className="text-gray-400">Secure Processing</li>
              <li className="text-gray-400">Instant Conversion</li>
              <li className="text-gray-400">No Server Storage</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:tejasmore477@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Email Us
                </a>
              </li>
              <li className="text-gray-400">24/7 Support</li>
              <li className="text-gray-400">Fast Response</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} OpenUp - Free Image to PDF Converter. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
