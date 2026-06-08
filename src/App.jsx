import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Intro from './pages/Intro';
import Stats from './pages/Stats';
import Character from './pages/Character';
import Quests from './pages/Quests';
import Achievements from './pages/Achievements';
import Gallery from './pages/Gallery';
import SiegeCore from './pages/SiegeCore';
import VectorPage from './pages/VectorPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route element={<Layout />}>
          <Route path="/stats" element={<Stats />} />
          <Route path="/character" element={<Character />} />
          <Route path="/quests" element={<Quests />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects/siegecore" element={<SiegeCore />} />
          <Route path="/projects/vector" element={<VectorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
