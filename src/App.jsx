import React from "react";
import Hero from "./components/Hero";
import ContactSection from "./components/ContactSection";
import ServicesSection from "./components/ServicesSection";
import ReviewSection from "./components/ReviewSection";
import RestorationServices from "./components/RestorationServices";
import ProcessSection from "./components/ProcessSection";
const App = () => {
  return (
    <div>
      <Hero />
      <ContactSection />
      <ServicesSection />
      <ReviewSection />
      <RestorationServices />
      <ProcessSection />
    </div>
  );
};

export default App;
