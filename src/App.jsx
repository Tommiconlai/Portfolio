import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CVPage from './pages/CVPage';
import ProjectsPage from './pages/ProjectsPage';
import SiegeCore from './pages/SiegeCore';
import VectorPage from './pages/VectorPage';
import './styles/style.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/siegecore" element={<SiegeCore />} />
            <Route path="/projects/vector" element={<VectorPage />} />
          </Routes>
        </main>
        {/*<Footer />*/}
      </div>
    </Router>
  );
}

export default App;
