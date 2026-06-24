import React from "react";
import Container from "./Container";
import headerLogo from "../assets/header.png";

const Header = () => {
  return (
    <div>
      <Container>
        <div className="top-10  bg-background relative h-[42px] flex justify-between items-center gap-5">
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
      </Container>
    </div>
  );
};

export default Header;
