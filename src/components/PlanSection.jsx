import React, { useState } from "react";
import Container from "./Container";
import mapImage from "../assets/Landing Page Template (Community) (2)/Rectangle 4436.png";

const cities = [
  { name: "Dallas, TX" },
  { name: "Richardson, TX" },
  { name: "Garland, TX" },
  { name: "Mesquite, TX" },
  { name: "Plano, TX" },
  { name: "Irving, TX" },
];

const PlanSection = () => {
  const [selectedCity, setSelectedCity] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-[#F8FDFF] to-white relative overflow-hidden">
      <Container>
        <div className="shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-blue-100 bg-white relative z-10 animate-fade-in">
          {/* Left Column: Clean Static Map Image Without Overlays */}
          <div className="lg:col-span-6 relative min-h-[360px] sm:min-h-[450px] bg-slate-100 overflow-hidden">
            <img
              src={mapImage}
              alt="Service Area Map"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right Column: Areas We Service Text & List */}
          <div className="lg:col-span-6 bg-[#3091E8] p-8 sm:p-12 lg:p-14 flex flex-col justify-between text-white relative">
            <div className="space-y-6 relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none drop-shadow-md">
                AREAS WE SERVICE
              </h2>

              <p className="text-white/90 text-base sm:text-lg font-medium leading-relaxed drop-shadow-sm">
                True North Restoration of Dallas services th
                e entire DFW area with our 24/7 restoration services. No matter what city you are located in, we can be there on average in 45-minutes or less. The following are some of the top cities we perform work in:
              </p>
            </div>

            {/* Interactive Cities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mt-8 relative z-10">
              {cities.map((city, idx) => {
                const isSelected = selectedCity === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedCity(idx)}
                    className={`group flex items-center gap-3 px-5 py-3.5 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 cursor-pointer transform ${
                      isSelected
                        ? "bg-white text-[#0F147F] shadow-xl scale-[1.03] translate-x-1.5"
                        : "bg-white/10 text-white hover:bg-white/20 hover:translate-x-1 border border-white/10 hover:border-white/30"
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-transform duration-300 group-hover:rotate-45 ${
                      isSelected ? "bg-[#3091E8] text-white" : "bg-white/20 text-white"
                    }`}>
                      ➔
                    </span>
                    <span>{city.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PlanSection;
