import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
// import { About } from './pages/About'; // commented out — reserved for future use
import { Services } from './pages/Services';
import { Pricing } from './pages/Pricing';
import { Solutions } from './pages/Solutions';
import { Contact } from './pages/Contact';
import { Careers } from './pages/Careers';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
