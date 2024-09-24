import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImage from "../assets/hero-image.svg";

const HeroPage = () => {
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    const headerElement = headerRef.current;
    if (!headerElement) return;

    const animation = gsap.fromTo(
      headerElement,
      { y: "10%", opacity: 0 },
      {
        y: -50,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      }
    );

    return () => {
      animation.kill(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <nav className="p-4">
        <div className="container mx-auto flex justify-center flex-wrap">
          <Link
            to="/"
            className={`${
              location.pathname === '/' ? 'text-black' : 'text-gray-400'
            } hover:text-gray-600 px-4 py-2`}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${
              location.pathname === '/about' ? 'text-black' : 'text-gray-400'
            } hover:text-gray-600 px-4 py-2`}
            aria-current={location.pathname === '/about' ? 'page' : undefined}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`${
              location.pathname === '/services' ? 'text-black' : 'text-gray-400'
            } hover:text-gray-600 px-4 py-2`}
            aria-current={location.pathname === '/services' ? 'page' : undefined}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={`${
              location.pathname === '/contact' ? 'text-black' : 'text-gray-400'
            } hover:text-gray-600 px-4 py-2`}
            aria-current={location.pathname === '/contact' ? 'page' : undefined}
          >
            Contact
          </Link>
        </div>
      </nav>

      <header
        ref={headerRef}
        className="flex items-center justify-center h-1/4"
        aria-label="Champions Rise Header"
      >
        <h1 className="font-playfair font-extrabold text-[90px] leading-[66px] tracking-[0.01em] uppercase bg-gradient-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent text-center">
          WHERE CHAMPIONS RISE
        </h1>
      </header>

      <div className="flex-1">
        <img
          src={heroImage}
          alt="A visually appealing hero image related to cricket"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroPage;
