"use client";

import SpecialityCard from "@/components/SpecialityCard";

const SpecialtiesSection = () => {
  return (
    <section className="py-10 px-5 primary-text">
      <h1 className="text-3xl md:text-4xl text-center mb-6 mt-6 font-bold">
        My Specialties
      </h1>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SpecialityCard
          head="Anxiety & Stress"
          desc="I help high-achieving adults manage chronic worry, tension, and overthinking. Together,
          we develop strategies to reduce anxiety, improve sleep, and feel more grounded in daily life."
          img="/stress.jpg"
          alt="anxiety therapy Santa Monica"
          delay={0}
        />

        <SpecialityCard
          head="Trauma & EMDR Therapy"
          desc="Whether you’ve experienced a single-incident trauma or complex long-standing patterns, 
          I provide a safe, paced, and supportive environment to process your experiences and build emotional regulation."
          img="/trauma.jpg"
          alt="trauma therapy Santa Monica"
          delay={0.1}
        />

        <SpecialityCard
          head="Burnout & Professional Pressure"
          desc="Many professionals, creatives, and entrepreneurs struggle with high internal pressure and exhaustion.
          I help clients reconnect with themselves, manage stress, and develop sustainable ways of living and working."
          img="/burnout.jpg"
          alt="burnout therapy Santa Monica"
          delay={0.2}
        />
      </div>
    </section>
  );
};

export default SpecialtiesSection;
