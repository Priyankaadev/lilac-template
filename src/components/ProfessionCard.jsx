import Accordion from '@/components/Accordion'

const ProfessionCard = () => {
  return (
    <section className="flex flex-col py-10 items-center profession">
        <h1 className="text-xl md:text-3xl text-center lg:text-4xl font-semibold  ">
           My Professional Background
        </h1>
        <div className='mt-8'>
        <Accordion ques='Education'
         ans='Euphorbia dianthus alchemilla muscari lavandula
         anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.' />
        <Accordion ques='Education'
         ans='Euphorbia dianthus alchemilla muscari lavandula
         anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.' />
        <Accordion ques='Education'
         ans='Euphorbia dianthus alchemilla muscari lavandula
         anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.' />
         </div>
    </section>
  )
}

export default ProfessionCard
