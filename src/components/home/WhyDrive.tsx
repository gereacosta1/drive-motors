import {
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  Bike,
  Headphones,
} from 'lucide-react'
import { Link } from 'react-router'

import showroomImage from '../../assets/images/showroom.jpeg'

import './WhyDrive.css'

function WhyDrive() {
  return (
    <section
      className="why-drive"
      aria-labelledby="why-drive-title"
    >
      <div className="why-drive__container">
        <div className="why-drive__top">
          <div className="why-drive__heading">
            <div className="why-drive__eyebrow">
              <span aria-hidden="true" />
              02 / Why DRIVE
            </div>

            <h2 id="why-drive-title">
              MORE THAN
              <br />
              <span>A RIDE.</span>
            </h2>
          </div>

          <p className="why-drive__intro">
            A local motorcycle dealer focused on straightforward service,
            distinctive bikes and helping riders find the right machine.
          </p>
        </div>

        <div className="why-drive__main">
          <div className="why-drive__image">
            <img
              src={showroomImage}
              alt="DRIVE Motorcycles showroom in Hollywood, Florida"
              loading="lazy"
              decoding="async"
            />

            <div
              className="why-drive__image-overlay"
              aria-hidden="true"
            />

            <div className="why-drive__location-card">
              <MapPin
                size={18}
                aria-hidden="true"
              />

              <div>
                <span>Visit DRIVE</span>
                <strong>Hollywood, Florida</strong>
              </div>
            </div>

            <span
              className="why-drive__image-label"
              aria-hidden="true"
            >
              SOUTH FLORIDA / USA
            </span>
          </div>

          <div className="why-drive__content">
            <div className="why-drive__feature">
              <span
                className="why-drive__feature-number"
                aria-hidden="true"
              >
                01
              </span>

              <div
                className="why-drive__feature-icon"
                aria-hidden="true"
              >
                <Bike size={22} />
              </div>

              <div>
                <h3>Selected Inventory</h3>

                <p>
                  Explore a growing selection of 250CC motorcycles with
                  different styles, colors and designs.
                </p>
              </div>
            </div>

            <div className="why-drive__feature">
              <span
                className="why-drive__feature-number"
                aria-hidden="true"
              >
                02
              </span>

              <div
                className="why-drive__feature-icon"
                aria-hidden="true"
              >
                <ShieldCheck size={22} />
              </div>

              <div>
                <h3>Local Dealer</h3>

                <p>
                  Visit our Hollywood location and see the motorcycles
                  directly before choosing your next ride.
                </p>
              </div>
            </div>

            <div className="why-drive__feature">
              <span
                className="why-drive__feature-number"
                aria-hidden="true"
              >
                03
              </span>

              <div
                className="why-drive__feature-icon"
                aria-hidden="true"
              >
                <Headphones size={22} />
              </div>

              <div>
                <h3>Direct Support</h3>

                <p>
                  Have a question about a motorcycle? Contact DRIVE directly
                  and get help with availability and information.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="why-drive__cta"
            >
              Contact DRIVE
              <ArrowUpRight
                size={17}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <div
          className="why-drive__footer"
          aria-hidden="true"
        >
          <span>DRIVE MOTORCYCLES</span>

          <div />

          <span>HOLLYWOOD · FLORIDA</span>
        </div>
      </div>
    </section>
  )
}

export default WhyDrive