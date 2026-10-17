
import {
  ArrowUp,
  ArrowUpRight,
  MapPin,
} from 'lucide-react'

import { Link } from 'react-router'

import { featuredProducts } from '../../data/products'

import driveLogo from '../../assets/logo/drive-logo.png'

import './Footer.css'

/* =========================================================
   DRIVE MOTORCYCLES
   FOOTER — V2

   Premium Motorcycle Dealership

   Brand:
   - Black
   - White
   - Orange

   Sections:
   - Editorial Top Bar
   - Brand Information
   - Navigation
   - Featured Motorcycles
   - Dealership Location
   - Large Brand Wordmark
   - Copyright / Back To Top
   ========================================================= */

const footerNavigation = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Inventory',
    path: '/catalog',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
]

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=1406+S+State+Road+7+Hollywood+FL+33023'

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerMotorcycles = featuredProducts.slice(0, 3)

  /* =======================================================
     SCROLL TO TOP
     ======================================================= */

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <footer className="footer">

      <div className="footer__container">

        {/* =================================================
            TOP EDITORIAL BAR
           ================================================= */}

        <div className="footer__topline">

          <span className="footer__topline-label">
            DRIVE / MOTORCYCLES
          </span>

          <span
            className="footer__topline-rule"
            aria-hidden="true"
          />

          <span className="footer__topline-location">
            SOUTH FLORIDA · USA
          </span>

        </div>

        {/* =================================================
            MAIN FOOTER
           ================================================= */}

        <div className="footer__top">

          {/* ===============================================
              BRAND INFORMATION
             =============================================== */}

          <div className="footer__brand">

            <Link
              to="/"
              className="footer__logo"
              aria-label="DRIVE Motorcycles home"
            >
              <img
                src={driveLogo}
                alt=""
                width={2176}
                height={723}
                loading="lazy"
                decoding="async"
              />
            </Link>

            <p>
              Your next ride starts at DRIVE.
              Discover our motorcycle collection
              and explore the road ahead in
              South Florida.
            </p>

            {/* Brand signature */}

            <div className="footer__brand-detail">

              <span
                className="footer__brand-mark"
                aria-hidden="true"
              />

              BUILT TO MOVE.

            </div>

            {/* Primary inventory action */}

            <Link
              to="/catalog"
              className="footer__inventory-link"
            >
              Explore Inventory

              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>

          </div>

          {/* ===============================================
              NAVIGATION COLUMNS
             =============================================== */}

          <div className="footer__navigation">

            {/* =============================================
                MAIN NAVIGATION
               ============================================= */}

            <div className="footer__column">

              <span className="footer__label">
                Navigation
              </span>

              <nav aria-label="Footer navigation">

                {footerNavigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                ))}

              </nav>

            </div>

            {/* =============================================
                MOTORCYCLE COLLECTION
               ============================================= */}

            <div className="footer__column">

              <span className="footer__label">
                Motorcycles
              </span>

              <nav aria-label="Featured motorcycle models">

                {footerMotorcycles.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.slug}`}
                  >
                    {product.name}
                  </Link>
                ))}

                <Link
                  to="/catalog"
                  className="footer__view-all"
                >
                  View All Inventory

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </Link>

              </nav>

            </div>

            {/* =============================================
                DEALERSHIP LOCATION
               ============================================= */}

            <div className="footer__column footer__column--location">

              <span className="footer__label">
                Visit DRIVE
              </span>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__address"
                aria-label="Open DRIVE Motorcycles location in Google Maps"
              >

                <span
                  className="footer__address-icon"
                  aria-hidden="true"
                >
                  <MapPin
                    size={19}
                    strokeWidth={1.8}
                  />
                </span>

                <span className="footer__address-text">

                  <strong>
                    1406 S State Road 7
                  </strong>

                  <span>
                    Hollywood, FL 33023
                  </span>

                  <small>
                    United States
                  </small>

                </span>

              </a>

              <Link
                to="/contact"
                className="footer__directions"
              >
                Contact & Location

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>

            </div>

          </div>

        </div>

        {/* =================================================
            LARGE BRAND WORDMARK
           ================================================= */}

        <div
          className="footer__wordmark"
          aria-hidden="true"
        >

          <span className="footer__wordmark-main">
            DRIVE
          </span>

          <span className="footer__wordmark-subtitle">
            MOTORCYCLES / SOUTH FLORIDA
          </span>

        </div>

        {/* =================================================
            FOOTER BOTTOM
           ================================================= */}

        <div className="footer__bottom">

          {/* Copyright */}

          <div className="footer__copyright">
            © {currentYear} DRIVE Motorcycles.
            All Rights Reserved.
          </div>

          {/* Location signature */}

          <div className="footer__center">
            Hollywood · Florida · USA
          </div>

          {/* Back to top */}

          <button
            type="button"
            className="footer__top-button"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >

            <span>
              Back To Top
            </span>

            <ArrowUp
              size={17}
              strokeWidth={1.8}
              aria-hidden="true"
            />

          </button>

        </div>

      </div>

    </footer>
  )
}

export default Footer
