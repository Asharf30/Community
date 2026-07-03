import React, { useState } from "react";
import Container from "./Container";

const steps = [
  {
    number: "01",
    title: "Give Us a Call",
    description:
      "If you need help, don't hesitate to give us a call. We're available 24/7 to assist you. Whether you need us immediately or have a general restoration question, we are happy to help.",
    headerBg: "bg-[#38B6E3]",
    numBg: "bg-[#189ED1]",
    bodyBg: "bg-[#E5F7FD]",
    glowShadow: "hover:shadow-[#38B6E3]/40",
    accentColor: "#38B6E3",
  },
  {
    number: "02",
    title: "We Get On Site ASAP",
    description:
      "If you need help, don't hesitate to give us a call. We're available 24/7 to assist you. Whether you need us immediately or have a general restoration question, we are happy to help.",
    headerBg: "bg-[#E08532]",
    numBg: "bg-[#C66F1B]",
    bodyBg: "bg-[#FCEFE3]",
    glowShadow: "hover:shadow-[#E08532]/40",
    accentColor: "#E08532",
  },
  {
    number: "03",
    title: "Your Life, Restored",
    description:
      "If you need help, don't hesitate to give us a call. We're available 24/7 to assist you. Whether you need us immediately or have a general restoration question, we are happy to help.",
    headerBg: "bg-[#8A33DF]",
    numBg: "bg-[#701BB4]",
    bodyBg: "bg-[#F4E8FD]",
    glowShadow: "hover:shadow-[#8A33DF]/40",
    accentColor: "#8A33DF",
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-gradient-to-b from-[#F6F6FF] via-[#F0F2FF] to-[#F6F6FF] py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background animated blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: "2s" }}></div>

      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 flex flex-col gap-4 relative z-10 animate-fade-in">
          <p className="text-2xl md:text-3xl font-bold text-[#5961F9] tracking-wide uppercase">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F147F] tracking-tight">
            Our 3 Step Restoration Process
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#38B6E3] via-[#E08532] to-[#8A33DF] mx-auto rounded-full mt-2 animate-pulse"></div>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative z-10">
          {steps.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`group flex flex-col rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-3.5 hover:scale-[1.03] cursor-pointer bg-white border-2 ${
                  isSelected
                    ? "border-[#5961F9] shadow-2xl scale-[1.02]"
                    : "border-transparent"
                } ${step.glowShadow}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card Top Banner */}
                <div className={`${step.headerBg} h-20 sm:h-24 flex items-center transition-colors duration-300`}>
                  {/* Step Number Box */}
                  <div className={`${step.numBg} w-20 sm:w-24 h-full flex items-center justify-center text-white text-2xl sm:text-3xl font-black tracking-tighter shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                    {step.number}
                  </div>
                  {/* Step Title */}
                  <div className="flex-1 px-4 sm:px-6 flex items-center justify-between">
                    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight drop-shadow-sm">
                      {step.title}
                    </h3>
                    {isSelected && (
                      <span className="w-3 h-3 rounded-full bg-white animate-ping shrink-0 ml-2"></span>
                    )}
                  </div>
                </div>

                {/* Card Body Content */}
                <div className={`${step.bodyBg} p-8 sm:p-10 flex-1 flex flex-col justify-between transition-colors duration-300`}>
                  <p className="text-[#0F147F] font-semibold text-base sm:text-lg leading-relaxed text-center sm:text-left">
                    {step.description}
                  </p>
                  
                  {/* Interactive Footer Indicator */}
                  <div className="mt-8 pt-4 border-t border-black/5 flex items-center justify-between text-xs sm:text-sm font-bold text-[#0F147F]/70">
                    <span className="flex items-center gap-1.5 group-hover:text-[#0F147F] transition-colors">
                      <span>Step {step.number} of 03</span>
                    </span>
                    <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300 text-base">
                      →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Animated Process Footer Bar */}
        <div className="mt-16 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md border border-gray-100 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0F147F] text-white flex items-center justify-center font-bold text-lg shadow-inner shrink-0">
              ✓
            </div>
            <div>
              <h4 className="font-bold text-[#0F147F] text-lg">
                Ready to restore your property?
              </h4>
              <p className="text-sm font-medium text-body-primary">
                Our emergency response technicians are on standby 24/7/365.
              </p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-[#5961F9] to-[#4A54F1] hover:from-[#4A54F1] hover:to-[#0F147F] text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer">
            Start Step 01 Now
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;
