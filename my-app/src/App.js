import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/layoutIndex'
import Sidebar from './components/Sidebar/sidebarIndex'
import Home from './components/Home/homeIndex'
import About from './components/About/aboutIndex'

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" index element={<About />} />
      </Route>
    </Routes>
  </>
  );
}

export default App;
