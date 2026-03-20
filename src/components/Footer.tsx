import pppLogo from '../assets/ppp logo.png';

export function Footer() {
  return (
    <footer className="bg-primary-950 text-white/40 py-12 md:py-16 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity cursor-pointer">
              <img src={pppLogo} alt="PPP" className="h-14 sm:h-20 w-auto object-contain opacity-90 brightness-0 invert" />
            </div>
            <p className="text-sm text-white/30">Professional Preparation Program</p>
            <p className="text-sm mt-8 text-white/20">© {new Date().getFullYear()} PPP. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col gap-4 font-medium text-sm md:items-center">
             <a href="#services" className="hover:text-brand-light transition-colors duration-300">Services</a>
             <a href="#about" className="hover:text-brand-light transition-colors duration-300">About</a>
             <a href="#results" className="hover:text-brand-light transition-colors duration-300">Results</a>
             <a href="#contact" className="hover:text-brand-light transition-colors duration-300">Contact</a>
             <a href="#privacy" className="hover:text-brand-light transition-colors duration-300">Privacy Policy</a>
          </div>
          
          <div className="text-sm space-y-3 md:text-right">
            <p><a href="mailto:contact@ppp.com" className="hover:text-brand-light transition-colors duration-300">contact@ppp.com</a></p>
            <p><a href="tel:+15550000000" className="hover:text-brand-light transition-colors duration-300">+1 (555) 000-0000</a></p>
            <div className="flex gap-4 pt-4 md:justify-end">
              <a href="#" className="hover:text-brand-light transition-colors duration-300">LinkedIn</a>
              <a href="#" className="hover:text-brand-light transition-colors duration-300">Instagram</a>
            </div>
            <p className="text-brand-light/40 italic pt-4">"You got the goals, we got the blueprint."</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
