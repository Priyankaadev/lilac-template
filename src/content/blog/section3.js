'use client';

import { useState } from "react";

const Section3 = () => {
  const [message, setMessage] = useState(false);

  return (
    <div className="bg-[#3E5C59] text-[#F5F7F6] w-full min-h-96 p-8 flex items-center justify-center">
      {message ? (
        <p className="border border-[#7FA3A0] max-w-md w-full p-8 flex flex-col items-center justify-center gap-3">
          Thankyou!
        </p>
      ) : (
        <div className="border border-[#7FA3A0] max-w-md w-full p-8 flex flex-col items-center justify-center gap-3">
          <h1 className="font-bold text-xl text-[#F5F7F6]">Subscribe</h1>

          <p className="text-center text-[#DCE6E4]">
            Sign up with your email address to receive news and updates.
          </p>

          <div className="flex flex-col gap-2 w-full md:flex md:flex-row md:justify-center">
            <input
              placeholder="Email Address"
              type="email"
              className="border p-2 border-[#7FA3A0] bg-[#F5F7F6] text-[#2C3E44] placeholder:text-[#6B7F85] focus:outline-none focus:ring-2 focus:ring-[#7FA3A0]"
            />
            <button
              onClick={() => setMessage(true)}
              className="border border-[#7FA3A0] text-[#F5F7F6] hover:bg-[#2C3E44] transition-colors p-2"
            >
              SIGN UP
            </button>
          </div>

          <p className="text-sm">We respect your privacy.</p>
        </div>
      )}
    </div>
  );
};

export default Section3;
