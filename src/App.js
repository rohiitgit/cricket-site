import './App.css';
import gsap from 'gsap';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    gsap.fromTo('.hero', { y: -100 }, { y: 100, duration: 1 });
  }, []);

  return (
    <>
      <h1 className='hero'>
        WHERE CHAMPIONS RISE
      </h1>
    </>
  );
}

export default App;
