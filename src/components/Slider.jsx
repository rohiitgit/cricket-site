import { useState, useEffect } from "react";
import "./Slider.css";

import slide1 from "../../public/image-slider/slide-1.jpg";
import slide2 from "../../public/image-slider/slide-2.jpg";
import slide3 from "../../public/image-slider/slide-3.png";
import slide4 from "../../public/image-slider/slide-4.png";
import Aos from "aos";

const itemsData = [
  {
    title: "Test Matches",
    description:
      "The longest format, played over 5 days, testing endurance, skill, and strategy. Ideal for traditionalists who enjoy the deeper aspects of the game.",
    imageUrl: slide1,
  },
  {
    title: "One Day Internationals (ODIs):",
    description:
      "A 50-over format, blending strategy and pace. Matches are completed in a day, offering a balanced experience of batting and bowling.",
    imageUrl: slide2,
  },
  {
    title: "T20",
    description:
      "A fast-paced, 20-over format designed for thrill-seekers. Action-packed and highly competitive, it's perfect for high-energy, quick matches.",
    imageUrl: slide3,
  },
  {
    title: "T10",
    description:
      "The shortest format, played over just 10 overs per side. It’s cricket at lightning speed, with every ball bringing excitement and intensity.",
    imageUrl: slide4,
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatePreview, setAnimatePreview] = useState(false);

  const nextSlide = () => {
    setAnimatePreview(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsData.length);
  };

  const prevSlide = () => {
    setAnimatePreview(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + itemsData.length) % itemsData.length
    );
  };

  const getPreviewImages = () => {
    return Array.from({ length: 3 }, (_, index) => {
      return itemsData[(currentIndex + 1 + index) % itemsData.length];
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatePreview(false);
    }, 700); // Duration of the animation
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Only animate once when scrolled into view
    });
  }, []);
  
  return (
    <div
      className="relative w-full h-screen overflow-hidden top-20"
      aria-live="polite"
    >
      {/* Slider Row */}
      <div className="row absolute inset-0"
      data-aos='fade-up'>
        {itemsData.map((item, index) => (
          <div
            key={index}
            className={`slider-item absolute inset-0 bg-center bg-cover transition-opacity duration-500 ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <div className="flex items-center justify-start h-full bg-black bg-opacity-50 p-8 md:p-16">
              <div className="text-white">
                <h2 className="text-2xl md:text-4xl font-bold" data-aos='fade-up'>{item.title}</h2>
                <p className="mt-4 text-sm md:text-lg lg:text-xl w-96" data-aos='fade-up'>{item.description}</p>
                <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700" data-aos='fade-up'>
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons Row */}
      <div className="navigation-buttons absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button
          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
          data-aos='fade-up'
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          &#10094;
        </button>
        <button
          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
          data-aos='fade-up'
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          &#10095;
        </button>
      </div>

      {/* Preview Images Column */}
      <div className="preview-images absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-4" data-aos='fade-up'>
        {getPreviewImages().map((item, index) => (
          <div
            key={index}
            className={`h-40 w-24 bg-center bg-cover rounded-md overflow-hidden ${
              animatePreview && index === 0 ? "animate-preview" : ""
            }`}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
