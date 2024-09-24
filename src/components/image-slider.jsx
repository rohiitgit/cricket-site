import { useState } from 'react';
import { motion } from 'framer-motion';
import slide1 from '/home/rohiit/Public/cricket-site/src/assets/image-slider/slide-1.svg';
import slide2 from '/home/rohiit/Public/cricket-site/src/assets/image-slider/slide-2.svg';
import slide3 from '/home/rohiit/Public/cricket-site/src/assets/image-slider/slide-3.svg';
import slide4 from '/home/rohiit/Public/cricket-site/src/assets/image-slider/slide-4.svg';

const images = [
  { title: "Lossless Youths", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", image: slide1 },
  { title: "Estrange Bond", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", image: slide2 },
  { title: "The Gate Keeper", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", image: slide3 },
  { title: "Last Trace Of Us", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", image: slide4 },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 aspect-[16/9]">
        {images.map((item, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-center bg-cover transition-opacity duration-500"
            style={{ backgroundImage: `url(${item.image})` }}
            initial={{ opacity: 0, x: 100 }}
            animate={currentIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-start h-full bg-black bg-opacity-50 p-8 md:p-16">
              <div className="text-white">
                <h2 className="text-2xl md:text-4xl font-bold">{item.title}</h2>
                <p className="mt-4 text-lg md:text-xl">{item.description}</p>
                <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">Read More</button>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button 
          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          &#10094; {/* Left arrow */}
        </button>
        <button 
          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          &#10095; {/* Right arrow */}
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default ImageSlider;
