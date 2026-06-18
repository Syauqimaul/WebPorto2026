import { useState, useCallback, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && mobileOpen) closeMobile();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [mobileOpen, closeMobile]);

  // Lock body scroll when mobile nav open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMobile();
  };

  return (
    <>
      <nav className="navbar" id="navbar" role="navigation" aria-label="Main navigation">
        <div className="container">
          <a
            href="#"
            className="navbar-brand"
            aria-label="Home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Lanasyauqi<span>.</span>
          </a>

          <ul className="navbar-nav" id="desktop-nav">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={(e) => handleSmoothScroll(e, item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="btn btn-primary btn-sm"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="navbar-actions">
            <button
              className="theme-toggle"
              id="theme-toggle"
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <Sun className="icon-sun" size={20} />
              ) : (
                <Moon className="icon-moon" size={20} />
              )}
            </button>

            <button
              className={`hamburger${mobileOpen ? ' active' : ''}`}
              id="hamburger"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              onClick={toggleMobile}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`mobile-nav${mobileOpen ? ' open' : ''}`}
        id="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={(e) => handleSmoothScroll(e, item.href)}>
            {item.label}
          </a>
        ))}
        <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>
          Contact
        </a>
      </div>
    </>
  );
}
