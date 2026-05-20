import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cv">CV</Link>
        <Link to="/projects">Progetti</Link>
        <Link to="/services">Servizi</Link>
      </nav>
    </header>
  );
}

export default Header;