import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Container from "./Container";
import headerLogo from "../assets/header.png";
import home1 from "../assets/home 1.png";
import home2 from "../assets/home 2.png";
import home3 from "../assets/home 3.png";
import home4 from "../assets/home 4.png";
import home5 from "../assets/home 5.png";
import home6 from "../assets/home 6.png";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoCloseOutline } from "react-icons/io5"; // أيقونة الإغلاق

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (menuRef.current) {
      if (isMenuOpen) {
        gsap.fromTo(
          menuRef.current,
          { opacity: 0, y: -20, display: "none" },
          {
            opacity: 1,
            y: 0,
            display: "flex",
            duration: 0.4,
            ease: "power2.out",
          },
        );

        // Animate links inside
        gsap.fromTo(
          menuRef.current.children,
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.1,
          },
        );
      } else {
        gsap.to(menuRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(menuRef.current, { display: "none" });
          },
        });
      }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 770) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div className=" h-[780px] top-0 left-0 right-0 bottom-0 relative bg-[#F8FDFF] overflow-hidden">
      <Container>
        <div className="top-10 z-50 relative flex justify-between items-center gap-5">
          <div className="">
            <img src={headerLogo} alt="" className="min-w-[200px]" />
          </div>

          {/* Desktop Links */}
          <div className="hidden min-[770px]:flex  items-center gap-8">
            <a
              href="#home"
              className="relative font-semibold text-[#171A31] hover:text-primary transition-all duration-300 hover:-translate-y-1 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="relative font-semibold text-[#171A31] hover:text-primary transition-all duration-300 hover:-translate-y-1 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
            >
              About Us
            </a>
            <a
              href="#portfolio"
              className="relative font-semibold text-[#171A31] hover:text-primary transition-all duration-300 hover:-translate-y-1 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
            >
              How it works
            </a>
            <a
              href="#services"
              className="relative font-semibold text-[#171A31] hover:text-primary transition-all duration-300 hover:-translate-y-1 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
            >
              Services
            </a>
            <a
              href="#contact"
              className="relative font-semibold text-[#171A31] hover:text-primary transition-all duration-300 hover:-translate-y-1 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-5">
            {/* Desktop Login Button */}
            <div className="hidden min-[770px]:block">
              <button className="flex cursor-pointer justify-center items-center rounded-[10px] text-white bg-primary px-8 py-2 hover:opacity-90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95">
                Login
              </button>
            </div>
            {/* Mobile Menu Toggle */}
            <button
              className="min-[770px]:hidden text-2xl text-primary cursor-pointer z-50 hover:scale-110 transition-transform duration-300 active:scale-90 "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <IoCloseOutline /> : <TfiMenuAlt />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className="max-[770px]:hidden absolute left-0 right-0 top-[100px] z-[100] flex flex-col items-center py-4 bg-white rounded-2xl shadow-2xl mx-4 border border-gray-100 overflow-hidden"
          style={{ display: "none" }}
        >
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center py-3 font-semibold text-[#171A31] hover:bg-primary/5 hover:text-primary transition-colors duration-300 border-b border-gray-50"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center py-3 font-semibold text-[#171A31] hover:bg-primary/5 hover:text-primary transition-colors duration-300 border-b border-gray-50"
          >
            About Us
          </a>
          <a
            href="#portfolio"
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center py-3 font-semibold text-[#171A31] hover:bg-primary/5 hover:text-primary transition-colors duration-300 border-b border-gray-50"
          >
            How it works
          </a>
          <a
            href="#services"
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center py-3 font-semibold text-[#171A31] hover:bg-primary/5 hover:text-primary transition-colors duration-300 border-b border-gray-50"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center py-3 font-semibold text-[#171A31] hover:bg-primary/5 hover:text-primary transition-colors duration-300"
          >
            Contact
          </a>

          <div className="w-full px-6 mt-4 mb-2">
            <button
              className="w-full flex justify-center items-center rounded-[10px] text-white bg-primary px-8 py-3 font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </button>
          </div>
        </div>
        <div className=" relative z-50 items-start top-[135px]  flex">
          <div>
            <h1 className="text-[50px] ">
              Water Damage <br /> Restoration Company
            </h1>
            <div className="flex flex-col items-start mt-5 gap-5">
              <div className="flex items-center gap-5">
                <img src={home4} alt="" />
                <p className="font-bold text-[20px]  text-body-primary">
                  24/7 Emergency Services
                </p>
              </div>

              <div className="flex items-center gap-5">
                <img src={home5} alt="" />
                <p className="font-bold text-[20px]  text-body-primary">
                  45 Minute On-Site Guarantee
                </p>
              </div>

              <div className="flex items-center gap-5">
                <img src={home6} alt="" />
                <p className="font-bold text-[20px] text-body-primary">
                  Work Directly With Your Insurance Company
                </p>
              </div>
            </div>
            <div className="pt-10 flex flex-wrap gap-4">
              <button
                className="py-4 px-8 bg-primary rounded-[15px] text-white font-semibold 
    hover:bg-[#1a7acc] hover:shadow-lg hover:-translate-y-1 
    transition-all duration-300 active:scale-95 cursor-pointer"
              >
                GET A FAST QUOTE
              </button>

              <button
                className="py-4 px-8 bg-secondary text-white rounded-[15px] font-semibold 
    hover:bg-[#7a4fd4] hover:shadow-lg hover:-translate-y-1 
    transition-all duration-300 active:scale-95 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div>
            <img
              src={home1}
              ref={imageRef}
              alt=""
              className="  max-[900px]:hidden absolute  right-[-50px]  -top-[50px] w-[450px] max-w-[40vw] "
            />
          </div>
        </div>
      </Container>
      <div className="-z-10">
        <img
          src={home3}
          alt=""
          className="  absolute  right-[-150px]  -top-[20px] max-w-[65vw] "
        />
      </div>
      <div className="-z-15">
        <img
          src={home2}
          alt=""
          className="  absolute  -right-[100px]  -top-[0px]  max-w-[50vw] "
        />
      </div>
    </div>
  );
};

export default Hero;
