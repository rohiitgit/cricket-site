import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import articleImage1 from '../../public/article/1.svg';
import articleImage2 from '../../public/article/2.svg';
import articleImage3 from '../../public/article/3.svg';

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    imgSrc: articleImage1,
    author: 'Jake Will.',
    date: '04 June 2023',
    title: '5 Exercises Cricket Players Should Be Using To Develop Strength',
    description: 'This article was written by Jake Willhoite from Healthlisted.com. Strength in cricket isn’t all about a massive body mass or ripped muscles.',
  },
  {
    imgSrc: articleImage2,
    author: 'Foxi.Zacon',
    date: '03 June 2023',
    title: 'Golden Knights out to fulfill owner’s quest to win Stanley Cup',
    description: 'The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.',
  },
  {
    imgSrc: articleImage3,
    author: 'Bong Lozada',
    date: '01 June 2023',
    title: 'T10 Gets Support From Local Federation',
    description: 'The ICC is developing more T10 matches and the country’s governing body, Philippine Cricket Association.',
  },
];

const SportsArticles = () => {
  const articleRefs = useRef([]);
  const buttonsRef = useRef(null);

  useEffect(() => {
    articleRefs.current.forEach((ref, index) => {
      const imageRef = ref.querySelector('.article-image');
      const avatarRef = ref.querySelector('.article-avatar');
      const titleRef = ref.querySelector('.article-title');
      const descriptionRef = ref.querySelector('.article-description');

      gsap.fromTo(
        imageRef,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        avatarRef,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        titleRef,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 1,
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        descriptionRef,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 1.5,
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonsRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="relative flex flex-col items-start">
      <h1 className="font-jost font-semibold text-2xl md:text-3xl text-[#262626] mt-10">
        Sports Articles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article, index) => {
          const avatarSrc = `https://i.pravatar.cc/50?img=${index + 1}`;
          const articleRef = (el) => (articleRefs.current[index] = el);

          return (
            <div
              key={index}
              ref={articleRef}
              className="bg-white rounded-lg mt-4 relative text-left overflow-hidden"
            >
              <img
                src={article.imgSrc}
                alt={`Image for ${article.title}`}
                className="article-image w-full h-[200px] md:h-[273.44px] rounded-md object-cover"
              />
              <div className="flex items-center mb-2 p-2 article-avatar">
                <img
                  src={avatarSrc}
                  alt={`Avatar of ${article.author}`}
                  className="w-12 h-12 rounded-full mr-2"
                />
                <div>
                  <p className="font-dm font-medium text-sm md:text-base text-[#3E3232]">
                    {article.author}
                  </p>
                  <p className="font-dm font-medium text-sm md:text-base text-[rgba(38,38,38,0.6)]">
                    {article.date}
                  </p>
                </div>
              </div>
              <h2 className="font-josefin font-bold text-lg md:text-xl italic text-[#262626] mb-2 article-title p-2">
                {article.title}
              </h2>
              <p className="font-dm font-normal text-base leading-6 text-[#696868] pt-2 article-description p-2">
                {article.description}
              </p>
            </div>
          );
        })}
      </div>
      <div ref={buttonsRef} className="flex w-full mt-8">
        <button className="bg-[#262626] w-10 mr-6 rounded-md p-2 text-white">
          ←
        </button>
        <button className="bg-[#262626] w-10 rounded-md p-2 text-white">
          →
        </button>
      </div>
    </div>
  );
};

export default SportsArticles;
