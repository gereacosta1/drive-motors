
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  Bike,
  Headphones,
} from 'lucide-react'

import { Link } from 'react-router'

import showroomImage from '../../assets/images/showroom.jpeg'

import './WhyDrive.css'

/* =========================================================
   DRIVE MOTORCYCLES
   WHY DRIVE — V2

   Premium Dealership Experience

   Brand:
   - Black
   - White
   - Orange

   Sections:
   - Editorial Introduction
   - Dealership Showcase
   - Why Choose DRIVE
   - Contact CTA
   - Brand Footer

   Responsive:
   Desktop / Tablet / Mobile
   ========================================================= */

const driveFeatures = [
  {
    number: '01',
    label: 'THE COLLECTION',
    title: 'Selected Inventory',
    description:
      'Explore our growing collection of 250CC motorcycles, featuring different styles, colors and designs to match your riding preferences.',
    icon: Bike,
  },
  {
    number: '02',
    label: 'OUR LOCATION',
    title: 'Local Dealership',
    description:
      'Visit DRIVE in Hollywood, Florida, take a closer look at our motorcycles and explore the options available at our location.',
    icon: ShieldCheck,
  },
  {
    number: '03',
    label: 'GET IN TOUCH',
    title: 'Direct Assistance',
    description:
      'Have questions about a specific model? Contact our team directly for more information about motorcycles, specifications and availability.',
    icon: Headphones,
  },
]

function WhyDrive() {
  return (
    <section
      className="why-drive"
      aria-labelledby="why-drive-title"
    >
      <div className="why-drive__container">

        {/* =================================================
            SECTION INTRODUCTION
           ================================================= */}

        <header className="why-drive__top">

          {/* Editorial heading */}

          <div className="why-drive__heading">

            <div className="why-drive__eyebrow">

              <span aria-hidden="true" />

              02 / The DRIVE Experience

            </div>

            <h2 id="why-drive-title">
              MORE THAN
              <br />

              <span>
                A RIDE.
              </span>
            </h2>

            {/* Editorial identification */}

            <div className="why-drive__heading-detail">

              <span
                className="why-drive__heading-line"
                aria-hidden="true"
              />

              BUILT AROUND THE RIDE

            </div>

          </div>

          {/* Section introduction */}

          <div className="why-drive__intro-wrap">

            <span className="why-drive__intro-label">
              GET TO KNOW DRIVE
            </span>

            <p className="why-drive__intro">
              More than just motorcycles. DRIVE is a
              local motorcycle dealership focused on
              straightforward service, distinctive
              bikes and helping riders find their
              next machine.
            </p>

            <Link
              to="/contact"
              className="why-drive__intro-link"
            >
              Get In Touch

              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>

          </div>

        </header>

        {/* =================================================
            MAIN DEALERSHIP SHOWCASE
           ================================================= */}

        <div className="why-drive__main">

          {/* ===============================================
              SHOWROOM PHOTOGRAPHY
             =============================================== */}

          <div className="why-drive__image">

            <img
              src={showroomImage}
              alt="DRIVE Motorcycles dealership in Hollywood, Florida"
              loading="lazy"
              decoding="async"
            />

            {/* Image depth overlay */}

            <div
              className="why-drive__image-overlay"
              aria-hidden="true"
            />

            {/* Top editorial image details */}

            <div className="why-drive__image-top">

              <span className="why-drive__image-index">
                DRIVE / 001
              </span>

              <span className="why-drive__image-tag">
                SOUTH FLORIDA
              </span>

            </div>

            {/* Dealership location */}

            <div className="why-drive__location-card">

              <div className="why-drive__location-icon">

                <MapPin
                  size={19}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

              </div>

              <div>
                <span>
                  Visit DRIVE
                </span>

                <strong>
                  Hollywood, Florida
                </strong>
              </div>

              <ArrowUpRight
                className="why-drive__location-arrow"
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />

            </div>

            {/* Vertical image identification */}

            <span
              className="why-drive__image-label"
              aria-hidden="true"
            >
              DRIVE MOTORCYCLES / HOLLYWOOD FL
            </span>

            {/* Decorative corners */}

            <span
              className="why-drive__image-corner why-drive__image-corner--top"
              aria-hidden="true"
            />

            <span
              className="why-drive__image-corner why-drive__image-corner--bottom"
              aria-hidden="true"
            />

          </div>

          {/* ===============================================
              DEALERSHIP FEATURES
             =============================================== */}

          <div className="why-drive__content">

            {/* Content heading */}

            <div className="why-drive__content-heading">

              <span className="why-drive__content-eyebrow">
                THE DRIVE DIFFERENCE
              </span>

              <h3>
                A BETTER WAY
                <br />
                TO FIND YOUR RIDE.
              </h3>

              <p>
                Explore the motorcycles, visit our
                location and get the information you
                need before choosing your next ride.
              </p>

            </div>

            {/* =============================================
                FEATURE LIST
               ============================================= */}

            <div className="why-drive__features">

              {driveFeatures.map((feature) => {
                const Icon = feature.icon

                return (
                  <div
                    className="why-drive__feature"
                    key={feature.number}
                  >

                    {/* Feature number */}

                    <span
                      className="why-drive__feature-number"
                      aria-hidden="true"
                    >
                      {feature.number}
                    </span>

                    {/* Feature icon */}

                    <div
                      className="why-drive__feature-icon"
                      aria-hidden="true"
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.7}
                      />
                    </div>

                    {/* Feature content */}

                    <div className="why-drive__feature-copy">

                      <span className="why-drive__feature-label">
                        {feature.label}
                      </span>

                      <h4>
                        {feature.title}
                      </h4>

                      <p>
                        {feature.description}
                      </p>

                    </div>

                  </div>
                )
              })}

            </div>

            {/* =============================================
                CONTACT ACTION
               ============================================= */}

            <Link
              to="/contact"
              className="why-drive__cta"
            >

              <span className="why-drive__cta-content">

                <span className="why-drive__cta-label">
                  HAVE A QUESTION?
                </span>

                <strong>
                  Contact DRIVE
                </strong>

              </span>

              <span className="why-drive__cta-arrow">

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

              </span>

            </Link>

          </div>

        </div>

        {/* =================================================
            BOTTOM EDITORIAL STRIP
           ================================================= */}

        <div className="why-drive__footer">

          <div className="why-drive__footer-brand">

            <span
              className="why-drive__footer-mark"
              aria-hidden="true"
            />

            DRIVE MOTORCYCLES

          </div>

          <div
            className="why-drive__footer-line"
            aria-hidden="true"
          />

          <div className="why-drive__footer-location">

            <MapPin
              size={14}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            HOLLYWOOD · FLORIDA

          </div>

          <Link
            to="/catalog"
            className="why-drive__footer-link"
          >
            Explore Inventory

            <ArrowRight
              size={16}
              strokeWidth={1.8}
              aria-hidden="true"
            />

          </Link>

        </div>

      </div>
    </section>
  )
}

export default WhyDrive
