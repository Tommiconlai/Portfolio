import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CVPage from './pages/CVPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import SiegeCore from './pages/SiegeCore';
import VectorPage from './pages/VectorPage';
import './styles/style.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects/siegecore" element={<SiegeCore />} />
            <Route path="/projects/vector" element={<VectorPage />} />
          </Routes>
        </main>
        {/*<Footer />*/}
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
