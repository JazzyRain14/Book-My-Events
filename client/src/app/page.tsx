"use client";

import Hero from "@/components/landing/Hero";
import Featured from "@/components/landing/Featured";
import WhyChooseMe from "@/components/landing/WhyChooseMe";




export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Featured />
      <WhyChooseMe/>
    </div>
  );
}
