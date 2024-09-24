// src/App.jsx
import "./App.css"; // If you have custom styles
import TextReveal from "./components/text-reveal";
import HeroPage from "./components/hero.jsx";
import Slider from "./components/Slider.jsx";

function App() {
  return (
    <>
      <HeroPage />
      <TextReveal />
      <Slider />
    </>
  );
}

export default App;
