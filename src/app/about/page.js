'use client'
import Image from "next/image";

const page = () => {
  return (
    <section className="px-5 md:px-20 py-10 primary-text flex flex-col  gap-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">About Dr. Maya Reynolds, PsyD</h1>

      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <div className="relative  w-56 md:w-1/3 h-96 md:h-96 ">
          <Image 
            src='/Dr. Maya Reynolds.png' 
            fill 
            className="object-cover rounded-t-full" 
            alt="Dr. Maya Reynolds profile"
          />
        </div>

        <div className="md:w-2/3 flex flex-col gap-4 text-lg">
          <p>
            I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
          </p>

          <p>
            My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling “functional” on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong.
          </p>

          <p>
            I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.
          </p>

          <p>
            Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, emphasizing safety, stabilization, and helping clients feel more regulated in their daily lives.
          </p>

          <p>
            In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.
          </p>

         

          <p>
            I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
