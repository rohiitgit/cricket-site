import { useEffect, useState } from "react";
import footerImage from "../../public/footer-image.svg";
import Aos from "aos";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Only animate once when scrolled into view
    });
  }, []);

  return (
    <div className="flex justify-between items-center relative h-auto w-full top-96 pb-12">
      <div className="relative bg-[#EBEEF3] rounded-l-lg flex">
        {" "}
        {/* Only left corners rounded */}
        {/* Left Column for Email Input and Text */}
        <div className="flex-1 ml-10 flex flex-col justify-center">
          <h2 className="font-playfair font-extrabold text-[4rem] leading-[1.2] tracking-[0.01em] text-[#262626] text-left"
          data-aos='fade-up'>
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
              style={{ minWidth: "200px" }}
              data-aos='fade-up'
            />
            <button
              type="submit"
              className="bg-black text-white rounded-r-md p-3 cursor-pointer text-lg h-[48px]"
              data-aos='fade-up'
            >
              ↗
            </button>
          </form>
        </div>
        {/* Right Column for Image */}
        <div className="flex-none w-[50%] h-full flex justify-end items-center">
          {" "}
          {/* Align image to the right */}
          <img
            src={footerImage}
            alt="Newsletter"
            className="object-contain h-full max-w-full" // Ensures the image scales properly
            data-aos='fade-up'
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
