import { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import pppLogo from '../assets/ppp logo.png';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={pppLogo} alt="PPP" className="h-10 sm:h-12 lg:h-14 w-auto object-contain mix-blend-multiply" />
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-primary-500">
            <a href="#services" className="hover:text-primary-900 transition-colors duration-300">Services</a>
            <a href="#about" className="hover:text-primary-900 transition-colors duration-300">About</a>
            <a href="#results" className="hover:text-primary-900 transition-colors duration-300">Results</a>
            <a href="#contact" className="hover:text-primary-900 transition-colors duration-300">Contact</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button variant="primary" size="sm" className="hidden sm:inline-flex">Book a Call</Button>
            <Button variant="primary" size="sm" className="sm:hidden">Book</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
