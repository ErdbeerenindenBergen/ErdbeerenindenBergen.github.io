import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layoutIndex';
import Home from './components/Home/homeIndex';
import About from './components/About/aboutIndex';
import Contact from './components/Contact/contactIndex';
import Skills from './components/Skills/skillsIndex';
import Portfolio from './components/Portfolio/portfolioIndex';

//prevent refresh default with route

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="skills" element={<Skills />} />
      </Route>
    </Routes>
  </>
  );
}

export default App;
