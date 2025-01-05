'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        Muskaan<span className="highlight">Blog</span>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/blogs" className="nav-link">
          Blogs
        </Link>
        <Link href="/about" className="nav-link">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
