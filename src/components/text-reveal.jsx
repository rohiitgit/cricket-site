import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";
import midSecImage from "../../public/mid-sec.svg";

const TextReveal = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div className="container mx-auto relative flex flex-col items-center h-auto pt-20 md:pt-10 w-full">
      {/* Main Content Row */}
      <div className="row flex flex-col items-center mb-10 px-4 w-full">
        <div className="max-w-screen-lg text-center font-jost font-normal text-3xl leading-[70px] text-black mb-10">
          Cricket has the incredible power to unite people from all walks of life, fostering camaraderie, respect, and friendships that stand the test of time. It is more than just a sport, a cultural force that transcends boundaries, bringing together individuals from different backgrounds, languages, and beliefs. Cricket creates a common ground where passion for the game bridges divides and builds lasting connections.
        </div>

        {/* Nested Column for Text and Image */}
        <div className="flex flex-col md:flex-row items-start justify-between w-full mb-20">
          <h1
            ref={textRef}
            className="w-full md:max-w-2xl mb-10 md:mb-0 font-jost font-normal text-lg leading-[34px] text-black md:mr-10"
            data-aos="fade-up"
          >
            At Legends, we believe in the power of cricket to transform communities, and we are dedicated to organizing top-tier tournaments that bring this vision to life. From local leagues to regional championships, we help players and teams at all levels experience the thrill of competitive cricket. Our expertly managed tournaments ensure that every player, team, and fan has an unforgettable experience, making it easy to get involved, compete, and grow in the sport.
          </h1>

          <div
            ref={imageRef}
            className="w-full md:w-[630px] h-[400px] md:h-[468px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${midSecImage})`,
            }}
            data-aos="zoom-in"
          />
        </div>
      </div>

      {/* Button Row */}
      <div className="flex justify-center space-x-5 mb-10 w-full">
        <div className="flex justify-center h-[50px] bg-[#D9D9D9] cursor-pointer rounded-[5px] px-4 items-center">
          <button className="font-jost font-medium text-[18px] leading-[26px] text-black">
            View Tournaments
          </button>
        </div>

        <div className="flex justify-center h-[50px] bg-[#D9D9D9] cursor-pointer rounded-[5px] px-4 items-center">
          <button className="font-jost font-medium text-[18px] leading-[26px] text-black">
            Register Your Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextReveal;
