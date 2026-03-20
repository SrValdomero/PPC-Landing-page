import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { About } from './components/About';
import { Insights } from './components/Insights';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-primary-900">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Insights />
        <Problem />
        <Solution />
        <Services />
        <HowItWorks />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
