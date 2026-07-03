import React from "react";
import Hero from "./components/Hero";
import ContactSection from "./components/ContactSection";
import ServicesSection from "./components/ServicesSection";
import ReviewSection from "./components/ReviewSection";
import RestorationServices from "./components/RestorationServices";
import ProcessSection from "./components/ProcessSection";
import PlanSection from "./components/PlanSection";
import Question from "./components/Question";
const App = () => {
  return (
    <div>
      <Hero />
      <ContactSection />
      <ServicesSection />
      <ReviewSection />
      <RestorationServices />
      <ProcessSection />
      <PlanSection />
      <Question />
    </div>
  );
};

export default App;
