import React, { useState } from "react";
import Container from "./Container";
import exp1 from "../assets/Experience 1.png";
import exp2 from "../assets/Experience 2.png";
import exp3 from "../assets/Experience 3.png";
import exp4 from "../assets/Experience 4.png";

const experiences = [
  {
    title: "CUSTOMER SERVICE",
    description:
      "We Are Available Around The Clock To Assist You In Anyway Possible. We Are Proud To Also Offer 100% Customer Satisfaction Guarantee!",
    image: exp1,
    bg: "bg-[#38B6E3]",
    glow: "hover:shadow-[#38B6E3]/50",
    stat: "24/7 Live Support",
  },
  {
    title: "FAST, FREE ESTIMATES",
    description:
      "We Are Available Around The Clock To Assist You In Anyway Possible. We Are Proud To Also Offer 100% Customer Satisfaction Guarantee!",
    image: exp2,
    bg: "bg-[#8A33DF]",
    glow: "hover:shadow-[#8A33DF]/50",
    stat: "< 45 Mins On-Site",
  },
  {
    title: "LOCALLY OWNED",
    description:
      "We Are Available Around The Clock To Assist You In Anyway Possible. We Are Proud To Also Offer 100% Customer Satisfaction Guarantee!",
    image: exp3,
    bg: "bg-[#E08532]",
    glow: "hover:shadow-[#E08532]/50",
    stat: "100% Community Trust",
  },
  {
    title: "RESIDENTIAL & COMMERCIAL",
    description:
      "We Are Available Around The Clock To Assist You In Anyway Possible. We Are Proud To Also Offer 100% Customer Satisfaction Guarantee!",
    image: exp4,
    bg: "bg-[#3BC15B]",
    glow: "hover:shadow-[#3BC15B]/50",
    stat: "Licensed & Insured",
  },
];

const ExperienceSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-100/40 via-purple-100/40 to-green-100/40 rounded-full blur-3xl pointer-events-none animate-float"></div>

      <Container>
        <div className="text-center mb-16 md:mb-24 relative z-10 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F147F] tracking-tight">
            The Sunshine Restoration Experience
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#38B6E3] via-[#8A33DF] to-[#3BC15B] mx-auto rounded-full mt-4 animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
          {experiences.map((exp, idx) => {
            const isSelected = activeCard === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveCard(idx)}
                className={`${exp.bg} ${exp.glow} rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center text-white shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer relative group ${
                  isSelected ? "ring-4 ring-white shadow-2xl scale-[1.03]" : ""
                }`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white flex items-center justify-center p-3 sm:p-4 mb-6 shadow-md transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 shrink-0">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="font-extrabold text-lg sm:text-xl tracking-wide uppercase mb-4 drop-shadow">
                  {exp.title}
                </h3>

                <p className="text-white/95 text-sm sm:text-base font-medium leading-relaxed drop-shadow-sm flex-1">
                  {exp.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/20 w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span>✨ {exp.stat}</span>
                  <span className="bg-white/20 px-2.5 py-1 rounded-full group-hover:bg-white group-hover:text-gray-900 transition-colors">
                    {isSelected ? "Active" : "Select"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#F0F4FF] via-[#F8FDFF] to-[#F0F4FF] p-6 sm:p-8 rounded-2xl border border-blue-100 shadow-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left relative z-10 animate-scale-up">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#0F147F] text-white flex items-center justify-center font-bold text-2xl shrink-0 shadow-md">
              🛡️
            </div>
            <div>
              <h4 className="font-bold text-[#0F147F] text-lg sm:text-xl">
                {experiences[activeCard].title} Guarantee Active
              </h4>
              <p className="text-sm font-medium text-body-primary mt-1">
                Backed by our 100% satisfaction promise and certified local
                professionals.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="bg-[#0F147F] hover:bg-[#38B6E3] text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            Claim Benefit Now
          </a>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
