// Modules
import { Routes, Route } from 'react-router-dom';
// Components
import Footer from './Components/Footer';
import Header from './Components/Header';
// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

// Styles
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main id="main">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      </main>
      <Footer />
      </div>

      );
}

      export default App;
