import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cv">CV</Link>
        <Link to="/projects">Progetti</Link>
      </nav>
    </header>
  );
}

export default Header;