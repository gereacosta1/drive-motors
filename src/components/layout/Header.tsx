import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Menu, X, ArrowUpRight } from 'lucide-react'

import driveLogo from '../../assets/logo/drive-logo.png'

import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const navClassName = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'header__nav-link header__nav-link--active'
      : 'header__nav-link'

  return (
    <header className="header">
      <div className="header__inner">
        <Link
          to="/"
          className="header__brand"
          onClick={closeMenu}
          aria-label="DRIVE Motorcycles home"
        >
          <img
            src={driveLogo}
            alt="DRIVE Motorcycles"
            className="header__logo"
            width={2176}
            height={723}
            loading="eager"
            fetchPriority="high"
          />
        </Link>

        <nav
          id="main-navigation"
          className={`header__nav ${
            menuOpen ? 'header__nav--open' : ''
          }`}
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            end
            className={navClassName}
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/catalog"
            className={navClassName}
            onClick={closeMenu}
          >
            Inventory
          </NavLink>

          <NavLink
            to="/contact"
            className={navClassName}
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <Link
            to="/catalog"
            className="header__mobile-cta"
            onClick={closeMenu}
          >
            Explore Bikes
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </nav>

        <Link
          to="/catalog"
          className="header__cta"
          onClick={closeMenu}
        >
          Explore Bikes
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>

        <button
          type="button"
          className="header__menu-button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? (
            <X size={27} aria-hidden="true" />
          ) : (
            <Menu size={27} aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  )
}

export default Header