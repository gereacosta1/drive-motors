import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bike,
  MapPin,
  Navigation,
} from 'lucide-react'
import { Link } from 'react-router'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import showroomImage from '../assets/images/showroom.jpeg'

import './Contact.css'

function Contact() {
  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=1406+S+State+Road+7+Hollywood+FL+33023'

  return (
    <>
      <Header />

      <main className="contact-page">
        {/* HERO */}
        <section
          className="contact-hero"
          aria-labelledby="contact-title"
        >
          <div
            className="contact-hero__grid"
            aria-hidden="true"
          />

          <div
            className="contact-hero__glow"
            aria-hidden="true"
          />

          <div className="contact-hero__container">
            <Link
              to="/"
              className="contact-hero__back"
            >
              <ArrowLeft
                size={15}
                aria-hidden="true"
              />

              Back home
            </Link>

            <div className="contact-hero__layout">
              <div className="contact-hero__content">
                <div className="contact-hero__eyebrow">
                  <span aria-hidden="true" />
                  DRIVE / Hollywood, Florida
                </div>

                <h1 id="contact-title">
                  COME
                  <br />
                  <span>SEE US.</span>
                </h1>

                <p>
                  Visit DRIVE Motorcycles in Hollywood, Florida and
                  explore our current motorcycle inventory in person.
                </p>

                <div className="contact-hero__actions">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-hero__primary"
                  >
                    Get directions

                    <Navigation
                      size={17}
                      aria-hidden="true"
                    />
                  </a>

                  <Link
                    to="/catalog"
                    className="contact-hero__secondary"
                  >
                    View inventory

                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>

              <div className="contact-hero__visual">
                <img
                  src={showroomImage}
                  alt="DRIVE Motorcycles location in Hollywood, Florida"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />

                <div
                  className="contact-hero__image-overlay"
                  aria-hidden="true"
                />

                <div className="contact-hero__location-card">
                  <MapPin
                    size={19}
                    aria-hidden="true"
                  />

                  <div>
                    <span>DRIVE Motorcycles</span>

                    <strong>
                      1406 S State Road 7
                    </strong>

                    <small>
                      Hollywood, FL 33023
                    </small>
                  </div>
                </div>

                <span
                  className="contact-hero__image-label"
                  aria-hidden="true"
                >
                  HOLLYWOOD / FL / USA
                </span>
              </div>
            </div>
          </div>

          <span
            className="contact-hero__background-word"
            aria-hidden="true"
          >
            DRIVE
          </span>
        </section>

        {/* LOCATION DETAILS */}
        <section
          className="contact-location"
          aria-labelledby="contact-location-title"
        >
          <div className="contact-location__container">
            <div className="contact-location__heading">
              <div>
                <span
                  className="contact-location__index"
                  aria-hidden="true"
                >
                  01
                </span>

                <div>
                  <span>Our location</span>

                  <h2 id="contact-location-title">
                    VISIT
                    <br />
                    DRIVE.
                  </h2>
                </div>
              </div>

              <p>
                Stop by our Hollywood location to see available
                motorcycles and find your next ride.
              </p>
            </div>

            <div className="contact-location__grid">
              <div className="contact-location__card">
                <div className="contact-location__card-top">
                  <span aria-hidden="true">
                    01
                  </span>

                  <div
                    className="contact-location__icon"
                    aria-hidden="true"
                  >
                    <MapPin size={22} />
                  </div>
                </div>

                <span className="contact-location__label">
                  Address
                </span>

                <h3>
                  1406 S State Road 7
                  <br />
                  Hollywood, FL 33023
                </h3>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps

                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="contact-location__card">
                <div className="contact-location__card-top">
                  <span aria-hidden="true">
                    02
                  </span>

                  <div
                    className="contact-location__icon"
                    aria-hidden="true"
                  >
                    <Bike size={22} />
                  </div>
                </div>

                <span className="contact-location__label">
                  Inventory
                </span>

                <h3>
                  EXPLORE OUR
                  <br />
                  MOTORCYCLES.
                </h3>

                <Link to="/catalog">
                  Browse inventory

                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <div className="contact-location__card contact-location__card--dark">
                <div className="contact-location__card-top">
                  <span aria-hidden="true">
                    03
                  </span>

                  <div
                    className="contact-location__icon"
                    aria-hidden="true"
                  >
                    <Navigation size={22} />
                  </div>
                </div>

                <span className="contact-location__label">
                  Directions
                </span>

                <h3>
                  FIND YOUR
                  <br />
                  WAY TO DRIVE.
                </h3>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions

                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* MAP CTA */}
        <section
          className="contact-map-cta"
          aria-labelledby="contact-map-title"
        >
          <div className="contact-map-cta__container">
            <div className="contact-map-cta__eyebrow">
              <span aria-hidden="true" />
              South Florida Motorcycle Dealer
            </div>

            <div className="contact-map-cta__main">
              <h2 id="contact-map-title">
                READY TO
                <br />
                <span>VISIT?</span>
              </h2>

              <div>
                <p>
                  DRIVE Motorcycles is located on State Road 7
                  in Hollywood, Florida.
                </p>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-map-cta__button"
                >
                  Open directions

                  <Navigation
                    size={17}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <div className="contact-map-cta__address">
              <MapPin
                size={18}
                aria-hidden="true"
              />

              <span>
                1406 S State Road 7 · Hollywood, FL 33023
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Contact