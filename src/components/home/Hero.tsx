
import {
  ArrowDown,
  ArrowRight,
  MapPin,
} from 'lucide-react'

import { Link } from 'react-router'

import falconImage from '../../assets/products/falcon-250-red.jpeg'

import './Hero.css'

/* =========================================================
   DRIVE MOTORCYCLES
   HERO SECTION — V2

   Premium motorcycle dealership design
   Black / White / Orange

   Desktop:
   Editorial headline + featured motorcycle

   Mobile:
   Headline -> Motorcycle -> Information
   ========================================================= */

function Hero() {
  return (
    <section
      className="hero"
      aria-labelledby="hero-title"
    >
      {/* ===================================================
          AMBIENT BACKGROUND
         =================================================== */}

      <div
        className="hero__grid"
        aria-hidden="true"
      />

      <div
        className="hero__glow hero__glow--left"
        aria-hidden="true"
      />

      <div
        className="hero__glow hero__glow--right"
        aria-hidden="true"
      />

      {/* ===================================================
          MAIN HERO CONTAINER
         =================================================== */}

      <div className="hero__container">

        {/* ===============================================
            INTRO / HEADLINE
           =============================================== */}

        <div className="hero__intro">

          <div className="hero__eyebrow fade-up">
            <span
              className="hero__eyebrow-line"
              aria-hidden="true"
            />

            South Florida Motorcycle Dealer
          </div>

          <h1
            id="hero-title"
            className="hero__title fade-up"
          >
            <span className="hero__title-main">
              BUILT TO
            </span>

            <span className="hero__title-outline">
              MOVE.
            </span>
          </h1>

          {/* Editorial brand signature */}

          <div
            className="hero__edition fade-up"
            aria-label="DRIVE motorcycle collection"
          >
            <span
              className="hero__edition-mark"
              aria-hidden="true"
            />

            DRIVE / MOTORCYCLES / FL
          </div>

        </div>

        {/* ===============================================
            FEATURED MOTORCYCLE VISUAL
           =============================================== */}

        <div className="hero__visual fade-up">

          <div className="hero__bike-card">

            {/* Motorcycle photograph */}

            <div className="hero__bike-image-wrap">

              <img
                src={falconImage}
                alt="Red Falcon 250 motorcycle"
                className="hero__bike-image"
                width={768}
                height={960}
                loading="eager"
                fetchPriority="high"
              />

              {/* Gradient overlay */}

              <div
                className="hero__bike-gradient"
                aria-hidden="true"
              />

              {/* Background displacement graphic */}

              <span
                className="hero__visual-number"
                aria-hidden="true"
              >
                250
              </span>

            </div>

            {/* Motorcycle top information */}

            <div className="hero__bike-header">

              <span className="hero__bike-kicker">

                <span
                  className="hero__live-dot"
                  aria-hidden="true"
                />

                Model Spotlight
              </span>

              <span className="hero__bike-displacement">
                250 CC
              </span>

            </div>

            {/* Motorcycle identification and CTA */}

            <div className="hero__bike-footer">

              <div className="hero__bike-identification">

                <span>
                  Discover The Ride
                </span>

                <strong>
                  FALCON 250
                </strong>

              </div>

              <Link
                to="/catalog"
                className="hero__bike-link"
                aria-label="Explore Falcon 250 in the motorcycle catalog"
              >
                Explore

                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </Link>

            </div>

            {/* Decorative corners */}

            <span
              className="hero__bike-corner hero__bike-corner--top"
              aria-hidden="true"
            />

            <span
              className="hero__bike-corner hero__bike-corner--bottom"
              aria-hidden="true"
            />

          </div>

          {/* Vertical brand label */}

          <span
            className="hero__vertical-label"
            aria-hidden="true"
          >
            DRIVE — BUILT TO MOVE
          </span>

        </div>

        {/* ===============================================
            DESCRIPTION AND ACTIONS
           =============================================== */}

        <div className="hero__details">

          {/* Main description */}

          <p className="hero__description fade-up">
            Find your next ride at DRIVE.
            Explore our selection of 250CC
            motorcycles built for the streets
            of South Florida.
          </p>

          {/* Primary actions */}

          <div className="hero__actions fade-up">

            <Link
              to="/catalog"
              className="hero__primary"
            >
              View Inventory

              <ArrowRight
                size={18}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>

            <Link
              to="/contact"
              className="hero__secondary"
            >
              <MapPin
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              Visit Our Store
            </Link>

          </div>

          {/* =============================================
              DEALERSHIP INFORMATION
             ============================================= */}

          <div className="hero__meta fade-up">

            {/* Motorcycle category */}

            <div className="hero__meta-item">

              <span>
                01
              </span>

              <div>
                <strong>
                  250CC
                </strong>

                <small>
                  Motorcycles
                </small>
              </div>

            </div>

            <div
              className="hero__meta-divider"
              aria-hidden="true"
            />

            {/* Dealership location */}

            <div className="hero__meta-item">

              <span>
                02
              </span>

              <div>
                <strong>
                  Hollywood
                </strong>

                <small>
                  Florida
                </small>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ===================================================
          BOTTOM EDITORIAL STRIP
         =================================================== */}

      <div className="hero__bottom">

        <div className="hero__scroll">

          <ArrowDown
            size={15}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <span>
            Scroll to Explore
          </span>

        </div>

        <div
          className="hero__bottom-line"
          aria-hidden="true"
        />

        <span className="hero__location">
          Hollywood · Florida
        </span>

      </div>

    </section>
  )
}

export default Hero
