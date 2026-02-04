import SpecialityCard from '@/components/SpecialityCard'

const SpecialtiesSection = () => {
  return (
    <section className="py-10 px-5 primary-text">
        <h1 className="text-3xl md:text-4xl text-center mb-6 mt-6 font-bold">My Specialties</h1>

        <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SpecialityCard head='Self-Esteem' 
        desc='Building a strong sense of self-worth is key to living a fulfilled life.
         Let us work together to bolster your self-esteem.'
         img='/selfesteemImg.webp'
         alt="self-esteem "
         />
         <SpecialityCard head='Relationships'
         desc='Navigation relationships can be complex. I am here to
         guide you through these complexities to help you form healthier connections.'
         img='/relationImg.webp'
         alt='relationship'
          />
         <SpecialityCard head='Burnout'
         desc='Feeling overwhelmed by your career is more common than you think.
         Together, we will identify strategies to manage and prevent burnout.'
         img='/burnoutImg.webp'
         alt='burn out'
          />
         </div>
    </section>
  )
}

export default SpecialtiesSection
