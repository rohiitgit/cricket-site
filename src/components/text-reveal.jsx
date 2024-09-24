import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";

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
    <>
      <div className="">
        <div className="absolute w-[1200px] h-[419px] left-1/2 transform -translate-x-1/2 pt-40 text-center font-jost font-normal text-[40px] leading-[70px] text-black">
          Cricket has the incredible power to unite people from all walks of
          life, fostering camaraderie, respect, and friendships that stand the
          test of time. It is more than just a sport, a cultural force that
          transcends boundaries, bringing together individuals from different
          backgrounds, languages, and beliefs. Cricket creates a common ground
          where passion for the game bridges divides and builds lasting
          connections.
        </div>

        <div className="absolute w-[374px] h-[45px] left-[calc(50%-374px/2-458px)]">
          <div className="overflow-hidden">
            <h1
              ref={textRef}
              className="absolute w-[628px] h-[237px] left-[75px] top-[1000px] font-jost font-normal text-[20px] leading-[34px] text-black"
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

          <div className="absolute w-[225px] flex justify-center h-[50px] left-[75px] top-[1350px] bg-[#D9D9D9] cursor-pointer rounded-[5px]">
            <button className="font-jost font-medium text-[18px] leading-[26px] text-black">
              View Tournaments
            </button>
          </div>

          <div className="absolute w-[225px] flex justify-center h-[50px] left-[325px] top-[1350px] bg-[#D9D9D9] cursor-pointer rounded-[5px]">
            <button className="font-jost font-medium text-[18px] leading-[26px] text-black">
              Register Your Team
            </button>
          </div>

          <div
            ref={imageRef}
            className="absolute w-[630px] h-[468px] left-[735px] top-[947px] bg-[url('../public/svg/img.svg')]"
            data-aos="zoom-in"
          ></div>
        </div>
      </div>
    </>
  );
};

export default TextReveal;
