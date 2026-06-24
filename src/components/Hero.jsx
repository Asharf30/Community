import React from "react";
import Container from "./Container";
import headerLogo from "../assets/header.png";
import home1 from "../assets/home 1.png";
import home2 from "../assets/home 2.png";
import home3 from "../assets/home 3.png";
import home4 from "../assets/home 4.png";
import home5 from "../assets/home 5.png";
import home6 from "../assets/home 6.png";

const Header = () => {
  return (
    <div className=" h-[780px] fixed top-0 left-0 right-0 ">
      <Container>
        <div className="top-10 z-50 relative  flex justify-between items-center gap-5">
          <div className="">
            <img src={headerLogo} alt="" className="min-w-[200px]" />
          </div>
          <div className=" capitalize flex gap-10 md:gap-10 text-[14px] font-semibold text-[#171A31]">
            <a href="#home">home</a>
            <a href="#about">about us </a>
            <a href="#portfolio">How it works</a>
            <a href="#services">services</a>
            <a href="#contact">contact</a>
          </div>
          <div>
            <button className="  top-0 right-0 flex justify-center  items-center rounded-[10px] text-white bg-primary px-8 py-2 ">
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
            <div className="pt-10 ">
              <button className="py-5 w-50 bg-primary rounded-[15px] text-white mr-10">
                GET A FAST QUOTE
              </button>
              <button className="py-5 w-50 bg-secondary text-white rounded-[15px]">
                {" "}
                Contact Us
              </button>
            </div>
          </div>
          <div>
            <img
              src={home1}
              alt=""
              className="  absolute  right-[-50px]  -top-[50px] w-[450px] max-w-[40vw] "
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

export default Header;
