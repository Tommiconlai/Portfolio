import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Burger menu button (visibile solo su mobile) */}
      <button className="burger-menu" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      {/* Navigation menu */}
      <nav className={isMenuOpen ? 'menu-open' : ''}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/cv" onClick={() => setIsMenuOpen(false)}>CV</Link>
        <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Progetti</Link>
      </nav>
    </header>
  );
}

export default Header;