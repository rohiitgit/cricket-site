// app.jsx
import TextReveal from './components/TextReveal';
import NewClub from './components/NewClub';
import Hero from './components/Hero'
import Slider from './components/Slider'
import TextRevel2 from './components/TextRevel2'
import SportsArticles from './components/SportsArticle';
import Footer from './components/Footer';
function App() {
  return (
    <div className="flex flex-col space-y-8">
      <Hero className="block " /> 
      <TextRevel2 className="block"/>
      <TextReveal className="block " />    
      <Slider className="block" /> 
      <NewClub className="block" /> 
      <SportsArticles className='block' />
      <Footer className='block'/>
    </div>
  );
}

export default App;
