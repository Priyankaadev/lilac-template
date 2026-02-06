const Section3 = () => {
  return (
    <div className="bg-[#7E7B46] text-white w-full min-h-96 p-8 flex items-center justify-center">
      
      <div className="border border-gray-300 max-w-md w-full p-8 flex flex-col items-center justify-center gap-3">
        <h1 className="font-bold text-xl">Subscribe</h1>

        <p className="text-center">
          Sign up with your email address to receive news and updates.
        </p>

        <div className="flex flex-col gap-2 w-full md:flex md:flex-row md:justify-center">
          <input
            placeholder="Email Address"
            type="email"
            className="border p-2 text-white "
          />
          <button className="border border-gray-300 p-2">
            SIGN UP
          </button>
        </div>

        <p className="text-sm">We respect your privacy.</p>
      </div>

    </div>
  );
};

export default Section3;
