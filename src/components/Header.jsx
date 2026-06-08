import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-logo" onClick={close} aria-label="Home">
          <span className="site-logo-mark">GT</span>
        </Link>

        <button
          type="button"
          className={`burger-menu ${open ? 'open' : ''}`}
          aria-label="Apri menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`site-nav ${open ? 'menu-open' : ''}`}>
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/cv" onClick={close}>CV</NavLink>
          <NavLink to="/projects" onClick={close}>Progetti</NavLink>
        </nav>

        <div className="site-header-deco" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <a
          href="mailto:tomasso.job@gmail.com"
          className="site-header-cta"
          onClick={close}
        >
          CONTACT_ME
        </a>
      </div>
    </header>
  );
}

export default Header;
