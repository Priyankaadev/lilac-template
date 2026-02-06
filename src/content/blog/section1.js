import Image from 'next/image'
import HeroCard from '../../components/HeroCard'

const Section1 = () => {
  return (
    <div className='flex flex-col md:flex md:flex-row justify-center md:items-center md:gap-1 '>
   <Image src='/blogHero.webp' alt='girl reading book' width={100}
    height={200} className='rounded-t-full h-[200px] mb-4 w-[140px] md:h-[280px] md:w-[180px] lg:h-[320px] lg:w-[200px] md:w-1/3 mx-auto '/>
    <div className='text-center md:text-start md:w-2/3 '>
      <h1 className='text-4xl mb-10 font-bold'>
        The Lilac Blog
      </h1>
      <p className='text-xl px-3'>My tiny corner of the internet where I talk about all things 
        healing, heart, and wholeness. </p>
        <p className='font-semibold mt-2 text-lg '>Glad you're here.</p>
    </div>
    </div>
  )
}

export default Section1
