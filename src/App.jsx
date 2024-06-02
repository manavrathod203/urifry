import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import SinglePhone from "./components/SinglePhone";

function App() {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
