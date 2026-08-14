import { ArrowDown, ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router'

import falconImage from '../../assets/products/falcon-250-red.jpeg'

import './Hero.css'

function Hero() {
  return (
    <section
      className="hero"
      aria-labelledby="hero-title"
    >
      {/* Decorative background */}
      <div className="hero__grid" aria-hidden="true" />
      <div
        className="hero__glow hero__glow--left"
        aria-hidden="true"
      />
      <div
        className="hero__glow hero__glow--right"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="hero__container">
        <div className="hero__content">
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
            BUILT TO
            <br />
            <span>MOVE.</span>
          </h1>

          <p className="hero__description fade-up">
            Find your next ride at DRIVE. Explore our selection of
            250CC motorcycles built for the streets of South Florida.
          </p>

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
                aria-hidden="true"
              />
              Visit Our Store
            </Link>
          </div>

          <div className="hero__meta fade-up">
            <div className="hero__meta-item">
              <span>01</span>

              <div>
                <strong>250CC</strong>
                <small>Motorcycles</small>
              </div>
            </div>

            <div
              className="hero__meta-divider"
              aria-hidden="true"
            />

            <div className="hero__meta-item">
              <span>02</span>

              <div>
                <strong>Hollywood</strong>
                <small>Florida</small>
              </div>
            </div>
          </div>
        </div>

        {/* Motorcycle visual */}
        <div className="hero__visual">
          <div
            className="hero__visual-number"
            aria-hidden="true"
          >
            250
          </div>

          <div className="hero__bike-card">
            <div className="hero__bike-header">
              <div>
                <span>Featured Motorcycle</span>
                <strong>Falcon 250</strong>
              </div>

              <span className="hero__bike-index">
                01 / 04
              </span>
            </div>

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

              <div
                className="hero__bike-gradient"
                aria-hidden="true"
              />
            </div>

            <div className="hero__bike-footer">
              <div>
                <span>Engine</span>
                <strong>250 CC</strong>
              </div>

              <Link
                to="/catalog"
                className="hero__bike-link"
                aria-label="Explore Falcon 250 motorcycles"
              >
                Explore
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <div
            className="hero__vertical-label"
            aria-hidden="true"
          >
            DRIVE / MOTORCYCLES / FL
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="hero__bottom">
        <div className="hero__scroll">
          <ArrowDown
            size={15}
            aria-hidden="true"
          />
          <span>Scroll to explore</span>
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