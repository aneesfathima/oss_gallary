"use client";
import Header from "@/components/header";
import FeatureSection from "@/components/homepage/feature-section";
import HeroSection from "@/components/homepage/hero-section";
import AllProjects from "./all projects/page";

export default function Home() {
  return (
    <div className="bg-linear-to-br from-indigo-50 via-white to-cyan-100  w-full">
      <Header />
      <HeroSection />
      <FeatureSection />
      <AllProjects />
    </div>
  );
}
