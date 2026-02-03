import HeroCard from '@/components/HeroCard'
import HeroSection from '@/components/HeroSection'

const page = () => {
  return (
    <div className=' p-6 md:flex md:items-center '>
      <HeroCard src='/HomeImage.webp' alt="lady holding flower " />
      <HeroSection
       heading='Live your life in full bloom'
       info='Therapy for Adults in Minneapolis, MN.'
       button='CONNECT WITH ME'
       />
    </div>
  )
}

export default page
