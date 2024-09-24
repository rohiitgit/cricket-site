import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Header = () => {
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
    <header
      ref={headerRef}
      className="absolute w-[1176px] h-[67px] left-1/2 transform -translate-x-1/2 top-[136px] flex items-center justify-center"
      aria-label="Champions Rise Header"
    >
      <h1 className="font-playfair font-extrabold text-[90px] leading-[66px] tracking-[0.01em] uppercase bg-gradient-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent">
        WHERE CHAMPIONS RISE
      </h1>
    </header>
  );
};

export default Header;
