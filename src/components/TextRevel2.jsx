import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const TextReveal = () => {
    const textRef = useRef(null);
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.07,
            smooth: true,
        });

        lenisRef.current = lenis;
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        const splitText = new SplitType(textRef.current, {
            types: 'words',
        });

        const section = textRef.current.closest('section');
        gsap.from(splitText.words, {
            opacity: 0,
            yPercent: 50,
            ease: 'power2.out',
            stagger: 0.05,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top center',
                end: `+=${window.innerHeight * 2}`,
                scrub: true,
                pin: true,
                // markers: true, // Uncomment for debugging
            },
        });

        return () => {
            gsap.killTweensOf(splitText.words);
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            if (lenisRef.current) lenisRef.current.destroy();
        };
    }, []);

    return (
        <section style={{ height: '300vh', overflow: 'hidden', width: '80vw', margin: 'auto' }} className='relative top-24'> {/* Ensure the parent has enough height */}
            <div
                ref={textRef}
                className="items-center font-jost font-normal text-[40px] leading-[60px] text-center text-black"
            >
                Cricket has the incredible power to unite people from all walks of life, fostering camaraderie, respect, and friendships that stand the test of time. It is more than just a sport, it a cultural force that transcends boundaries, bringing together individuals from different backgrounds, languages, and beliefs. Cricket creates a common ground where passion for the game bridges divides and builds lasting connections.
            </div>
        </section>
    );
};

export default TextReveal;
