import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const TextReveal = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  useEffect(() => {
    AOS.init({
      duration: 5000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleRegisterClick = () => {
    navigate("/register"); // Navigate to the register page
  };

  return (
    <>
      <div className="relative w-full h-auto flex justify-center items-center top-1/2 gap-10">
        <div className="py-20 flex flex-col gap-10 ">
          <div className="overflow-hidden w-[43vw] ">
            <h1
              className="h-[237px] font-jost font-normal text-[20px] leading-[34px] text-black"
              data-aos="fade-up"
            >
              At Legends, we believe in the power of cricket to transform
              communities, and we are dedicated to organizing top-tier
              tournaments that bring this vision to life. From local leagues to
              regional championships, we help players and teams at all levels
              experience the thrill of competitive cricket. Our expertly managed
              tournaments ensure that every player, team, and fan has an
              unforgettable experience, making it easy to get involved, compete,
              and grow in the sport.
            </h1>
          </div>
          <div className="flex gap-5">
            <div className=" w-[225px] flex justify-center h-[50px] bg-[#D9D9D9] cursor-pointer rounded-[5px] hover:bg-gray-300 transform transition-all duration-300 ease-in-out">
              <button className="font-jost font-medium text-[18px] leading-[26px] text-black">
                View Tournaments
              </button>
            </div>

            <div
              className="w-[225px] flex justify-center h-[50px] bg-[#D9D9D9] cursor-pointer rounded-[5px] hover:bg-gray-300 transform transition-all duration-300 ease-in-out"
              onClick={handleRegisterClick}
            >
              <button className="font-jost font-medium text-[18px] leading-[26px] text-black">
                Register Your Team
              </button>
            </div>
          </div>
        </div>

        <div
          className="w-[630px] h-[468px] bg-[url('../public/svg/img.svg')]"
          data-aos="zoom-in"
        ></div>
      </div>
    </>
  );
};

export default TextReveal;
