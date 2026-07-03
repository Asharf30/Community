import React, { useState } from "react";
import Container from "./Container";
import image1 from "../assets/Landing Page Template (Community) (2)/Rectangle4422.png";
import image2 from "../assets/Landing Page Template (Community) (2)/Rectangle 4436.png";
import image3 from "../assets/Landing Page Template (Community) (1)/Rectangle 24.png";

const tabData = [
  {
    label: "Water Damage Restoration",
    title: "24/7 Emergency Water Damage Restoration Services",
    description:
      "There are many places in your Aurora home where water damage can take place, from your basement to the attic. Water damage can occur from frozen pipes, frozen sprinkler lines, rusted or oxidized pipes, toilet overflow, toilet leaks, the water heater, refrigerator, dishwasher overflow or washing machine, hardwood floor water damage, broken pipe water damage.",
    image: image1,
  },
  {
    label: "Biohazard",
    title: "Emergency Biohazard & Hazard Cleanup Services",
    description:
      "Professional and discreet cleanup of hazardous materials, sewage backups, trauma scenes, and chemical spills. Our certified specialists utilize state-of-the-art decontamination equipment and EPA-approved antimicrobial agents to ensure your residential or commercial property is fully sanitized, deodorized, and restored to a safe biological environment.",
    image: image2,
  },
  {
    label: "Commercial Restoration",
    title: "Comprehensive Commercial Disaster Recovery",
    description:
      "Minimizing business downtime after flood, fire, or storm damage is our top priority. We deliver rapid industrial-grade structural drying, smoke remediation, and complete facilities restoration. Our dedicated commercial team coordinates directly with property managers and insurers to get your enterprise back up and running swiftly.",
    image: image3,
  },
];

const RestorationServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="mt-16 sm:mt-24 pb-16 min-h-screen bg-white overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#5961F9] via-[#636CFB] to-[#4A54F1] py-16 sm:py-20 md:py-24 relative shadow-lg">
        <Container>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center tracking-tight drop-shadow animate-fade-in">
            Charlotte's Restoration Professionals
          </h2>
        </Container>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-10 md:-mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 p-1.5 bg-white/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none rounded-2xl md:rounded-none shadow-lg md:shadow-none">
          {tabData.map((tab, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-5 px-4 sm:px-6 font-bold text-base sm:text-lg md:text-xl transition-all duration-300 flex items-center justify-center cursor-pointer relative rounded-xl md:rounded-none transform ${
                  isActive
                    ? "bg-[#0F147F] text-white shadow-2xl scale-[1.02] md:scale-105 z-10"
                    : "bg-[#F2F3FF] text-[#0F147F] hover:bg-white hover:shadow-md hover:-translate-y-0.5 opacity-95 hover:opacity-100"
                }`}
              >
                <span>{tab.label}</span>
                {/* Desktop active tab downward triangle */}
                {isActive && (
                  <div className="hidden md:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px] border-t-[#0F147F]"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Section */}
      <Container>
        <div
          key={activeTab}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center py-12 md:py-20 animate-fade-in"
        >
          {/* Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl bg-white p-3 border border-gray-100 transition-all duration-500 hover:shadow-blue-500/20 w-full max-w-lg lg:max-w-none">
              <img
                src={tabData[activeTab].image}
                alt={tabData[activeTab].title}
                className="w-full h-[280px] sm:h-[350px] md:h-[380px] object-cover rounded-xl transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-6 pointer-events-none">
                <span className="text-white font-semibold text-sm bg-[#0F147F]/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow">
                  24/7 Rapid Response Team
                </span>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6 animate-scale-up">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F147F] leading-snug tracking-tight flex items-start sm:items-center gap-3">
              <span className="w-2.5 h-8 sm:h-10 bg-[#5961F9] rounded-full inline-block shrink-0 mt-1 sm:mt-0 animate-pulse"></span>
              <span>{tabData[activeTab].title}</span>
            </h3>
            <p className="text-[#4A4E6D] text-base sm:text-lg font-medium leading-relaxed bg-[#F8FDFF] p-6 sm:p-8 rounded-2xl border-l-4 border-[#5961F9] shadow-sm hover:shadow-md transition-shadow duration-300">
              {tabData[activeTab].description}
            </p>
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button className="bg-[#0F147F] hover:bg-[#5961F9] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center gap-3 group">
                <span>Request Emergency Service</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
              <span className="text-sm sm:text-base font-semibold text-[#4A4E6D] flex items-center gap-2.5 px-4 py-2 bg-green-50 rounded-full border border-green-200">
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block animate-ping"></span>
                <span>Live Tech On Call</span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RestorationServices;
