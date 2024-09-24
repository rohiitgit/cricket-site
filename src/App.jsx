// src/App.jsx
import "./App.css"; // If you have custom styles
import TextReveal from "./components/text-reveal";
import ImageSlider from "./components/image-slider.jsx";
import HeroPage from "./components/hero.jsx";

function App() {
  return (
    <>
      <HeroPage />
      <TextReveal />
      <ImageSlider />
    </>
  );
}

export default App;
