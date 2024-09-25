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
      <div className="flex flex-col space-y-8">
        <Hero className="block " />
        <TextRevel2 className="block" />

        <Routes>
          <Route path="/" element={<TextReveal />} />
          <Route path="/register" element={<RegForm />} />
        </Routes>

        <Slider className="block" />
        <NewClub className="block" />
        <SportsArticles className='block' />
        <Footer className='block' />
      </div>
    </Router>
  );
}

export default App;
