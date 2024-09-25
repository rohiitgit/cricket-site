import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import articleImage1 from '../../public/article/1.svg';
import articleImage2 from '../../public/article/2.svg';
import articleImage3 from '../../public/article/3.svg';

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
    const [startIndex, setStartIndex] = useState(0);
    const articleRefs = useRef([]);

    const maxIndex = articles.length;

    const showNextArticles = () => {
        const nextIndex = (startIndex + 1) % maxIndex;
        animateArticles("left", nextIndex);
    };

    const showPreviousArticles = () => {
        const prevIndex = (startIndex - 1 + maxIndex) % maxIndex;
        animateArticles("right", prevIndex);
    };

    const animateArticles = (direction, nextIndex) => {
        const currentArticleRefs = articleRefs.current.filter(Boolean);

        // Animate all articles out with fade
        gsap.to(currentArticleRefs, {
            duration: 0.5,
            x: direction === "left" ? -50 : 50,
            opacity: 0,
            ease: 'power2.out',
            stagger: 0.1,
            onComplete: () => {
                // Update the start index
                setStartIndex(nextIndex);

                // Reset positions for all articles without changing opacity immediately
                gsap.set(currentArticleRefs, { x: 0 });

                // Animate the new articles into place with bounce and scale
                gsap.to(currentArticleRefs, {
                    duration: 0.7,
                    opacity: 1,
                    x: 0,
                    scale: 1.05, // Scale up a bit on entry
                    ease: 'bounce.out',
                    stagger: 0.1,
                    onComplete: () => {
                        // Return to original scale
                        gsap.to(currentArticleRefs, {
                            duration: 0.2,
                            scale: 1,
                            ease: 'power1.inOut'
                        });
                    },
                });
            },
        });
    };

    useEffect(() => {
        const currentArticleRefs = articleRefs.current.filter(Boolean);
        currentArticleRefs.forEach((ref) => {
            if (ref) {
                gsap.set(ref, { opacity: 1 }); // Initially show all articles
            }
        });
    }, [startIndex]);

    return (
        <div className="container mx-auto flex flex-col items-start relative h-auto top-80 p-8">
            <h1 className="font-jost font-semibold text-2xl md:text-3xl text-[#262626] mt-10">
                Sports Articles
            </h1>

            {/* Articles Row */}
            <div className="row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                {Array.from({ length: 3 }).map((_, index) => {
                    const displayIndex = (startIndex + index) % maxIndex;
                    const article = articles[displayIndex];

                    return (
                        <div
                            key={index}
                            ref={(el) => (articleRefs.current[index] = el)}
                            className="bg-white rounded-lg mt-4 relative text-left overflow-hidden shadow-md transition-transform transform"
                        >
                            <img
                                src={article.imgSrc}
                                alt={`Image for ${article.title}`}
                                className="article-image w-full h-[200px] md:h-[273.44px] rounded-md object-cover"
                            />
                            <div className="flex items-center mb-2 p-2 article-avatar">
                                <img
                                    src={`https://i.pravatar.cc/50?img=${displayIndex + 1}`}
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

            {/* Buttons Row */}
            <div className="buttons-row flex justify-left w-full mt-8">
                <button onClick={showPreviousArticles} className="bg-[#262626] w-10 mr-6 rounded-md p-2 text-white">
                    ←
                </button>
                <button onClick={showNextArticles} className="bg-[#262626] w-10 rounded-md p-2 text-white">
                    →
                </button>
            </div>
        </div>
    );
};

export default SportsArticles;
