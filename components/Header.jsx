'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '../lib/platformData';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Africa Unveiled home">
        <span className="brand-sigil">AU</span>
        <span>Africa Unveiled</span>
      </Link>
      <button className="menu-toggle" type="button" aria-label="Toggle navigation menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /> <span /> <span />
      </button>
      <nav className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
        ))}
      </nav>
    </header>
  );
}
