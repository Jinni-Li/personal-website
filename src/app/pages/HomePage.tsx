import { Contact } from "../components/Contact";
import { Direction } from "../components/Direction";
import { Hero } from "../components/Hero";
import { Navigation } from "../components/Navigation";
import { SelectedChapters } from "../components/SelectedChapters";
import { SelectedProjects } from "../components/SelectedProjects";
import { TheShift } from "../components/TheShift";
import { Toolkit } from "../components/Toolkit";

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] paper-bg text-[#2C2621] font-sans selection:bg-[#0F766E] selection:text-white">
      <Navigation />
      <main className="lg:ml-24 overflow-x-hidden">
        <Hero />
        <Direction />
        <SelectedProjects />
        <TheShift />
        <SelectedChapters />
        <Toolkit />
        <Contact />
      </main>
    </div>
  );
}
