import TextReveal from './components/TextReveal';
import NewClub from './components/NewClub';
import Hero from './components/Hero';
import Slider from './components/Slider';
import TextRevel2 from './components/TextRevel2';
import SportsArticles from './components/SportsArticle';
import Footer from './components/Footer';
import RegForm from './components/RegForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <TextRevel2 />
              <TextReveal />
              <Slider />
              <NewClub />
              <SportsArticles />
              <Footer />
            </>
          } 
        />
        <Route path="/register" element={<RegForm />} />
      </Routes>
    </Router>
  );
}

export default App;
