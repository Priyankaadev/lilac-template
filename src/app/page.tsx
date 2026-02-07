import HeroCard from "@/components/HeroCard";
import HeroSection from "@/components/HeroSection";
import MessageSection from "@/components/MessageSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ContactCard from "@/components/ContactCard";
import ProfessionCard from "@/components/ProfessionCard";
import WorkSection from "@/components/WorkSection"
import About from "@/components/About"
import FAQSection from "@/components/FAQSection"

const page = () => {
  return (
    <>
      <div className=" md:flex md:items-center ">
        <HeroCard src="/heroImg.jpg"  alt="lady holding coffee cup " />
        <HeroSection
          heading="Feeling Overwhelmed, Stressed, or Stuck?"
          info="I’m Dr. Maya Reynolds, a licensed clinical psychologist in Santa Monica. I help high-achieving adults struggling with anxiety,
           burnout, or the lingering effects of past experiences reconnect with themselves, develop resilience, and find calm in their daily lives."
          button="Schedule Your Session"
        />
      </div>
      <MessageSection
        src="/office1.jpeg"
        head="A Warm, Collaborative Approach to Therapy. "
        alt="Dr. Maya Reynolds therapy office in Santa Monica"
        p1="I work with adults who feel high internal pressure, chronic stress, or the lingering impact
         of past experiences. Many of my clients are high-achievers who seem 'functional' on the outside, but internally 
         struggle with anxiety, tension, or burnout."
        p2="Through evidence-based methods like cognitive-behavioral therapy (CBT), EMDR, mindfulness, and body-oriented
         techniques, I help clients understand both the emotional and physical aspects of what they're experiencing, supporting lasting growth and resilience."
        button="Know more"
      />
      <SpecialtiesSection />
      <WorkSection />   
      <About />  
      <FAQSection /> 
      <ProfessionCard />
      <ContactCard
        head="Take the first step toward support."
        btn="get in touch"
        desc="If you’re feeling overwhelmed by anxiety, stress, burnout, or the lingering effects of past experiences, I’m here to help. Reach out to schedule your first session, whether in-person in Santa Monica or via secure telehealth. Let's start this journey together toward insight, resilience, and a stronger relationship with yourself."
         />
      
     
    </>
  );
};

export default page;
