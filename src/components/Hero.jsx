import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Aos from "aos";
import heroImg from "../../public/svg/hero-image.png"

const HeroPage = () => {
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Only animate once when scrolled into view
    });
  }, []);

  useEffect(() => {
    const headerElement = headerRef.current;
    if (!headerElement) return;

    const animation = gsap.fromTo(
      headerElement,
      { y: "10%", opacity: 0 },
      {
        y: -50,
        opacity: 1,
        duration: 1.8,
        ease: "power2.out",
      }
    );

    return () => {
      animation.kill(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="container mx-auto flex-col overflow-hidden relative w-full h-auto">
      <nav className="p-4  flex justify-center flex-wrap" data-aos="fade-up">
        <Link
          to="/"
          className={`${
            location.pathname === "/" ? "text-black" : "text-gray-400"
          } hover:text-gray-600 px-4 py-2`}
          aria-current={location.pathname === "/" ? "page" : undefined}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`${
            location.pathname === "/about" ? "text-black" : "text-gray-400"
          } hover:text-gray-600 px-4 py-2`}
          aria-current={location.pathname === "/about" ? "page" : undefined}
        >
          About
        </Link>
        <Link
          to="/services"
          className={`${
            location.pathname === "/services" ? "text-black" : "text-gray-400"
          } hover:text-gray-600 px-4 py-2`}
          aria-current={location.pathname === "/services" ? "page" : undefined}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className={`${
            location.pathname === "/contact" ? "text-black" : "text-gray-400"
          } hover:text-gray-600 px-4 py-2`}
          aria-current={location.pathname === "/contact" ? "page" : undefined}
        >
          Contact
        </Link>
      </nav>

      <header
        ref={headerRef}
        className="flex items-center mt-20 mb-10 justify-center h-1/4"
        aria-label="Champions Rise Header"
      >
        <h1
          className="font-playfair font-extrabold text-[90px] leading-[66px] tracking-[0.01em] uppercase bg-gradient-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent text-center"
          data-aos="fade-up"
        >
          WHERE CHAMPIONS RISE
        </h1>
      </header>

      <div className="w-full">
        <img
          src={heroImg}
          data-aos="fade-up"
          alt="A visually appealing hero image related to cricket"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroPage;
