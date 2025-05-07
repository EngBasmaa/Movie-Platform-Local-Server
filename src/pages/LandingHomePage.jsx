import React from "react";
import { HeroSection } from "../components/HeroSection.jsx";
import { HeaderNav } from "../components/HeaderNav.jsx";
import { Footer } from "../components/Footer.jsx";
import { Documentary } from "../components/Documentary.jsx";
import { LogosSlider } from "../components/LogosSlider.jsx";
import { Movies } from "../components/Movies.jsx";
import { UpcomingEvents } from "../components/UpcomingEvents.jsx";

export function LandingHomePage() {
  return (
    <>
      <HeaderNav />
      <HeroSection />
      <Movies />
      <Documentary />
      <UpcomingEvents />
      <LogosSlider />
      <Footer />
    </>
  );
}
