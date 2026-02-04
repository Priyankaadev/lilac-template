import { HiArrowLongRight } from "react-icons/hi2";

const ContactCard = ({ head, desc, btn }) => {
  return (
    <section className="flex flex-col items-center justify-center contact text-white gap-8 p-8 border-b border-black">
      <h1 className="text-2xl font-semibold ">{head}</h1>
      <p className="text-center text-xl">{desc}</p>
      <button className="border px-4 py-2 w-fit mb-5 mt-5 hover:bg-white hover:text-[#7E7B46] ">
        <span className="text-center flex flex-row items-center justify-center gap-2 uppercase ">
          {btn} <HiArrowLongRight size={25} />{" "}
        </span>
      </button>
    </section>
  );
};

export default ContactCard;
