import Image from 'next/image'
import HeroCard from '../../components/HeroCard'

const Section1 = () => {
  return (
    <div className='flex flex-col md:flex md:flex-row justify-center md:items-center md:gap-1 bg-transparent'>
   <Image src='/blog.jpg' alt='girl with diary' width={100}
    height={200} className='object-cover rounded-t-full h-[250px] mb-4 w-[180px] md:h-[350px] md:w-[280px] lg:h-[400px] lg:w-[300px] md:w-1/3 mx-auto '/>

    <div className='text-center md:text-start md:w-2/3 text-[#2C3E44] lg:px-3 '>
      <h1 className='text-4xl mb-10 font-bold text-[#2C3E44]'>
      The Therapy Blog
      </h1>
      <p className='text-xl  text-[#4A5F66]'>Welcome to my space where I share insights on mental health, anxiety, trauma, burnout, and navigating the challenges of modern life. </p>
        <p className='font-semibold mt-2 text-lg text-[#3E5C59]'>Glad you're here.</p>
    </div>
    </div>
  )
}

export default Section1
