import HeroCard from "@/components/HeroCard";
import HeroSection from "@/components/HeroSection";
import MessageSection from "@/components/MessageSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ContactCard from "@/components/ContactCard";
import ProfessionCard from "@/components/ProfessionCard";
import WorkSection from "@/components/WorkSection"

const page = () => {
  return (
    <>
      <div className=" md:flex md:items-center ">
        <HeroCard src="/HomeImage.webp" alt="lady holding flower " />
        <HeroSection
          heading="Live your life in full bloom"
          info="Therapy for Adults in Minneapolis, MN."
          button="CONNECT WITH ME"
        />
      </div>
      <MessageSection
        src="/section1.webp"
        head="Live a fulfilling life. "
        alt="diary image"
        p1="Life can be challenging - especially when you are trying to balance your personal and professional life."
        p2="It is easy to feel like you are alone in facing these challenges, but I want you to know that I am here to help."
        button="get in touch"
      />
      <SpecialtiesSection />
      <WorkSection />      
      <ProfessionCard />
      <ContactCard
        head="Get started today."
        btn="get in touch"
        desc="Ready to take the first step towards a happier, healthier you?
         Contact me to book your first session. I look forward to starting this therapeutic journey with you. "
      />
      
     
    </>
  );
};

export default page;
