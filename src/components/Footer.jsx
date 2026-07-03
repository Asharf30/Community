import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-[#0080FF] py-14 sm:py-16 text-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          {/* Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 font-semibold text-sm sm:text-base tracking-wide">
            <a
              href="#home"
              className="hover:opacity-80 hover:-translate-y-0.5 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-white after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:opacity-80 hover:-translate-y-0.5 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-white after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
            >
              About Us
            </a>
            <a
              href="#how-it-works"
              className="hover:opacity-80 hover:-translate-y-0.5 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-white after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
            >
              How it Work
            </a>
            <a
              href="#services"
              className="hover:opacity-80 hover:-translate-y-0.5 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-white after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
            >
              Services
            </a>
            <a
              href="#jobs"
              className="hover:opacity-80 hover:-translate-y-0.5 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-white after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
            >
              Jobs
            </a>
            <a
              href="#contact"
              className="hover:opacity-80 hover:-translate-y-0.5 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-white after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-2">
            <a
              href="#facebook"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#0080FF] flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#twitter"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#0080FF] flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="#youtube"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#0080FF] flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* Copyright Text */}
          <div className="text-xs sm:text-sm font-medium text-white/80 tracking-wide">
            © Copyright 2026 - Spectrum
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
