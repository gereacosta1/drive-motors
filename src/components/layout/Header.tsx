
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router'
import {
  ArrowUpRight,
  MapPin,
  Menu,
  X,
} from 'lucide-react'

import driveLogo from '../../assets/logo/drive-logo.png'

import './Header.css'

/* =========================================================
   DRIVE MOTORCYCLES
   HEADER — V2
   ========================================================= */

const navigationItems = [
  {
    number: '01',
    label: 'Home',
    path: '/',
    end: true,
  },
  {
    number: '02',
    label: 'Inventory',
    path: '/catalog',
    end: false,
  },
  {
    number: '03',
    label: 'Contact',
    path: '/contact',
    end: false,
  },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  /* =======================================================
     MENU ACTIONS
     ======================================================= */

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const toggleMenu = () => {
    setMenuOpen((current) => !current)
  }

  /* =======================================================
     MOBILE MENU BEHAVIOR
     ======================================================= */

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    firstLinkRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key !== 'Tab') return

      const links = Array.from(
        navRef.current?.querySelectorAll<HTMLAnchorElement>(
          'a[href]'
        ) ?? []
      )

      if (links.length === 0) return

      const first = links[0]
      const last = links[links.length - 1]

      if (
        event.shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault()
        last.focus()
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault()
        first.focus()
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.body.style.overflow = previousOverflow

      document.removeEventListener(
        'keydown',
        handleKeyDown
      )

      window.removeEventListener(
        'resize',
        handleResize
      )
    }
  }, [menuOpen])

  /* =======================================================
     ACTIVE NAVIGATION CLASS
     ======================================================= */

  const navClassName = ({
    isActive,
  }: {
    isActive: boolean
  }) =>
    isActive
      ? 'header__nav-link header__nav-link--active'
      : 'header__nav-link'

  return (
    <header
      className={`header ${
        menuOpen ? 'header--menu-open' : ''
      }`}
    >
      <div className="header__inner">

        {/* BRAND */}

        <Link
          to="/"
          className="header__brand"
          onClick={closeMenu}
          aria-label="DRIVE Motorcycles — Home"
        >
          <img
            src={driveLogo}
            alt=""
            className="header__logo"
            width={2176}
            height={723}
            loading="eager"
            decoding="async"
          />
        </Link>

        {/* NAVIGATION */}

        <nav
          ref={navRef}
          id="main-navigation"
          className={`header__nav ${
            menuOpen ? 'header__nav--open' : ''
          }`}
          aria-label="Main navigation"
        >
          <div className="header__mobile-heading">
            <span className="header__mobile-eyebrow">
              DRIVE / NAVIGATION
            </span>

            <strong>EXPLORE DRIVE.</strong>

            <span
              className="header__mobile-heading-line"
              aria-hidden="true"
            />
          </div>

          {/* NAVIGATION LINKS */}

          <div className="header__links">
            {navigationItems.map((item, index) => (
              <NavLink
                key={item.path}
                ref={
                  index === 0
                    ? firstLinkRef
                    : undefined
                }
                to={item.path}
                end={item.end}
                className={navClassName}
                onClick={closeMenu}
              >
                <span
                  className="header__nav-index"
                  aria-hidden="true"
                >
                  {item.number}
                </span>

                <span className="header__nav-text">
                  {item.label}
                </span>

                <ArrowUpRight
                  className="header__nav-arrow"
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </NavLink>
            ))}
          </div>

          {/* MOBILE CTA */}

          <Link
            to="/catalog"
            className="header__mobile-cta"
            onClick={closeMenu}
          >
            <span>Explore Motorcycles</span>

            <ArrowUpRight
              size={20}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </Link>

          {/* MOBILE FOOTER */}

          <div className="header__mobile-footer">
            <div className="header__mobile-location">
              <MapPin
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <span>Hollywood, Florida</span>
            </div>

            <span className="header__mobile-signature">
              BUILT TO MOVE / DRIVE MOTORCYCLES
            </span>
          </div>
        </nav>

        {/* DESKTOP CTA */}

        <Link
          to="/catalog"
          className="header__cta"
          onClick={closeMenu}
        >
          <span>Explore Bikes</span>

          <ArrowUpRight
            size={18}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}

        <button
          ref={menuButtonRef}
          type="button"
          className="header__menu-button"
          aria-label={
            menuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={toggleMenu}
        >
          <span className="header__menu-text">
            {menuOpen ? 'Close' : 'Menu'}
          </span>

          <span
            className="header__menu-icon"
            aria-hidden="true"
          >
            {menuOpen ? (
              <X size={25} strokeWidth={1.8} />
            ) : (
              <Menu size={25} strokeWidth={1.8} />
            )}
          </span>
        </button>
      </div>

      {/* MOBILE BACKDROP */}

      {menuOpen && (
        <button
          type="button"
          className="header__backdrop"
          aria-label="Close navigation menu"
          tabIndex={-1}
          onClick={closeMenu}
        />
      )}

      {/* EDITORIAL ACCENT */}

      <div
        className="header__bottom-accent"
        aria-hidden="true"
      >
        <span />
        <span />
      </div>
    </header>
  )
}

export default Header
