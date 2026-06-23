import { useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import gsap from 'gsap';

function Home() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 text-white">
      <h1 ref={headerRef} className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Welcome to Your New App
      </h1>
      <p className="text-zinc-400 text-lg mb-8">
        React + Vite + Tailwind v4 + React Router + GSAP
      </p>
      <div className="flex gap-4">
        <Link 
          to="/about" 
          className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors font-medium"
        >
          Go to About
        </Link>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 text-white">
      <h1 className="text-4xl font-bold mb-4">About Page</h1>
      <Link to="/" className="text-purple-400 hover:text-purple-300 underline">
        Back Home
      </Link>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
