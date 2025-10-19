import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import FeaturesPage from './pages/Features';
import Support from './pages/Support';
import Resources from './pages/Resources';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Documentation from './pages/Documentation';
import Status from './pages/Status';
import Careers from './pages/Careers';
import Classes from './pages/Classes';


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/status" element={<Status />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/classes" element={<Classes />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
