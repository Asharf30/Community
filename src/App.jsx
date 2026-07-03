import React from "react";
import Hero from "./components/Hero";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import ServicesSection from "./components/ServicesSection";
import ReviewSection from "./components/ReviewSection";
import RestorationServices from "./components/RestorationServices";
import ProcessSection from "./components/ProcessSection";
import PlanSection from "./components/PlanSection";
import Question from "./components/Question";
import Footer from "./components/Footer";

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
      <ExperienceSection />
      <Footer />
    </div>
  );
};

export default App;
