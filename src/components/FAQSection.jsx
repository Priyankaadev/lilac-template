import Image from 'next/image'
import Accordion2 from './Accordion2'

const FAQSection = () => {
  return (
   <section className='flex flex-col md:flex md:flex-row  '>
           <Image src='/faq.webp' width={150} height={270} className="w-[150px] md:w-[150px] h-[250px] lg:w-[250px] lg:h-[350px] object-cover rounded-t-full mx-auto mt-5 mb-5"/>
           <div className='p-5 md:w-1/2 md:py-10 md:flex md:flex-col md:justify-center'>
            <h1 className='text-3xl font-semibold pl-6 mb-4 md:text-2xl md:mb-2 xl:text-4xl'>FAQs</h1>
            <Accordion2 ques='Do you take insurance?' ans='Answer goes here.' />
            <Accordion2 ques='Do you take insurance?' ans='Answer goes here.' />
            <Accordion2 ques='Do you take insurance?' ans='Answer goes here.' />
           </div>
   </section>
  )
}

export default FAQSection
