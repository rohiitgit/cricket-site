// src/App.jsx
import "./App.css"; // If you have custom styles
import TextReveal from "./components/text-reveal";
import HeroPage from "./components/hero.jsx";
import Slider from "./components/Slider.jsx";
import SportsArticles from "./components/articles.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <HeroPage />
      <TextReveal />
      <Slider />
      <SportsArticles />
      <Footer />
    </>
  );
}

export default App;
