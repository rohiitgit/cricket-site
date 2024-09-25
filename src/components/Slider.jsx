import { useState, useEffect } from "react";
import "./Slider.css";

import slide1 from "../../public/image-slider/slide-1.svg";
import slide2 from "../../public/image-slider/slide-2.svg";
import slide3 from "../../public/image-slider/slide-3.svg";
import slide4 from "../../public/image-slider/slide-4.svg";

const itemsData = [
  {
    title: "Lossless Youths",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    imageUrl: slide1,
  },
  {
    title: "Estrange Bond",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    imageUrl: slide2,
  },
  {
    title: "The Gate Keeper",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    imageUrl: slide3,
  },
  {
    title: "Last Trace Of Us",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
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

  return (
    <div className="container mx-auto relative w-full h-screen overflow-hidden">
      {/* Slider Row */}
      <div className="row absolute inset-0">
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
                <h2 className="text-2xl md:text-4xl font-bold">{item.title}</h2>
                <p className="mt-4 text-lg md:text-xl">{item.description}</p>
                <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
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
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          &#10094;
        </button>
        <button
          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          &#10095;
        </button>
      </div>

      {/* Preview Images Column */}
      <div className="preview-images absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-4">
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
