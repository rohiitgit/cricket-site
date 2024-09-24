import heroImage from "../assets/hero-image.svg";

const HeroImage = () => {
  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[60vh] xl:h-[70vh] top-[100px]">
      <img
        src={heroImage}
        alt="A visually appealing hero image related to cricket"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroImage;
