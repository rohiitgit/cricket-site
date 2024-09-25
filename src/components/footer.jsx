import { useState } from "react";
import footerImage from '../../public/footer-image.svg';

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full max-w-[1290px] h-[425.21px] bg-[#EBEEF3] rounded-l-lg flex mt-10"> {/* Only left corners rounded */}
        
        {/* Left Column for Email Input and Text */}
        <div className="flex-1 flex flex-col justify-center ml-8">
          <h2 className="font-playfair font-extrabold text-[4rem] leading-[1.2] tracking-[0.01em] text-[#262626] text-left">
            NEWSLETTER SUBSCRIPTION
          </h2>
          <form onSubmit={handleSubmit} className="flex items-center mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-black rounded-l-md p-3 flex-grow h-[48px] text-lg"
              style={{ minWidth: '200px' }} // Ensuring a minimum width
            />
            <button
              type="submit"
              className="bg-black text-white rounded-r-md p-3 cursor-pointer text-lg h-[48px]"
            >
              ↗
            </button>
          </form>
        </div>

        {/* Right Column for Image */}
        <div className="flex-none w-[50%] h-full flex justify-end items-center"> {/* Align image to the right */}
          <img
            src={footerImage}
            alt="Newsletter"
            className="object-contain h-full max-w-full" // Ensures the image scales properly
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
