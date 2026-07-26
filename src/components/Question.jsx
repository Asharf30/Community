import React, { useState } from "react";
import Container from "./Container";

const faqsLeft = [
  {
    id: 1,
    question: "Are you Licensed and insured?",
    answer:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
  },
  {
    id: 2,
    question: "Do you offer free quotes?",
    answer:
      "Yes, we offer comprehensive free on-site inspections and estimates for all emergency water damage, fire restoration, and mold remediation projects.",
  },
  {
    id: 3,
    question: "Is NoCode the future of the web?",
    answer:
      "NoCode tools empower faster development and design workflows, allowing teams to build scalable modern web applications with ease and flexibility.",
  },
];

const faqsRight = [
  {
    id: 4,
    question: "What type of equipment do you use?",
    answer:
      "We utilize industrial-grade dehumidifiers, high-velocity air movers, thermal imaging cameras, and HEPA air scrubbers for complete structural restoration.",
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer:
      "We work directly with all major insurance carriers for billing, and also accept all major credit cards, checks, and flexible financing options.",
  },
  {
    id: 6,
    question: "Who are the Webflow founders?",
    answer:
      "Webflow was founded by Vlad Magdalin, Sergie Magdalin, and Bryant Chou in 2012 to empower designers to build websites visually.",
  },
];

const Question = () => {
  const [openIds, setOpenIds] = useState([1]);

  const toggleFaq = (id) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const renderFaqCard = (faq) => {
    const isOpen = openIds.includes(faq.id);
    return (
      <div
        key={faq.id}
        onClick={() => toggleFaq(faq.id)}
        className={`bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border ${
          isOpen ? "border-[#3091E8]/40 shadow-md" : "border-gray-100"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-bold text-[#0F147F] text-base sm:text-lg md:text-xl leading-snug">
            {faq.question}
          </h3>
          <button
            aria-label="Toggle Question"
            className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 transform ${
              isOpen
                ? "bg-[#3091E8] text-white rotate-180 shadow-md scale-105"
                : "bg-[#F0F2FF] text-[#0F147F] hover:bg-[#E0E6FF]"
            }`}
          >
            {isOpen ? (
              <span className="text-xl font-bold leading-none mb-0.5 cursor-pointer">
                −
              </span>
            ) : (
              <span className="text-xl font-bold leading-none cursor-pointer">
                +
              </span>
            )}
          </button>
        </div>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-gray-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-[#6B7280] font-medium text-sm sm:text-base leading-relaxed animate-fade-in">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#F5F5FC] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl pointer-events-none animate-float"></div>
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-purple-300/15 rounded-full blur-3xl pointer-events-none animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <Container>
        <div className="text-center mb-12 sm:mb-16 animate-fade-in relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F147F] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative z-10">
          <div className="flex flex-col gap-4 sm:gap-6">
            {faqsLeft.map(renderFaqCard)}
          </div>
          <div className="flex flex-col gap-4 sm:gap-6">
            {faqsRight.map(renderFaqCard)}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 text-center relative z-10 animate-scale-up">
          <button className="bg-[#3091E8] hover:bg-[#2079CD] text-white font-bold text-lg md:text-xl px-10 sm:px-14 py-4 sm:py-5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer inline-flex items-center gap-3 group">
            <span>More Questions</span>
            <svg
              className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Question;
