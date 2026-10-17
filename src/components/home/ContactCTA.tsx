
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  MessageCircle,
  MoveUpRight,
} from 'lucide-react'

import { Link } from 'react-router'

import './ContactCTA.css'

/* =========================================================
   DRIVE MOTORCYCLES
   CONTACT CTA — V2

   Premium Motorcycle Dealership

   Brand:
   - Black
   - White
   - Orange

   Sections:
   - Editorial Heading
   - Contact Actions
   - Dealership Location
   - Customer Assistance
   - Brand Signature

   Responsive:
   Desktop / Tablet / Mobile
   ========================================================= */

function ContactCTA() {
  return (
    <section
      className="contact-cta"
      aria-labelledby="contact-cta-title"
    >
      {/* ===================================================
          MAIN CONTAINER
         =================================================== */}

      <div className="contact-cta__container">

        {/* ===============================================
            BACKGROUND DETAILS
           =============================================== */}

        <div
          className="contact-cta__number"
          aria-hidden="true"
        >
          03
        </div>

        <div
          className="contact-cta__ambient"
          aria-hidden="true"
        />

        {/* ===============================================
            SECTION INTRODUCTION
           =============================================== */}

        <div className="contact-cta__top">

          <div className="contact-cta__eyebrow">

            <span aria-hidden="true" />

            03 / Ready To Ride?

          </div>

          <div className="contact-cta__top-label">
            DRIVE MOTORCYCLES / SOUTH FLORIDA
          </div>

        </div>

        {/* ===============================================
            MAIN CALL TO ACTION
           =============================================== */}

        <div className="contact-cta__main">

          {/* Editorial heading */}

          <div className="contact-cta__heading">

            <h2 id="contact-cta-title">

              YOUR NEXT
              <br />

              <span>
                RIDE STARTS
              </span>

              <br />

              HERE.

            </h2>

            {/* Decorative signature */}

            <div className="contact-cta__heading-detail">

              <span
                className="contact-cta__heading-line"
                aria-hidden="true"
              />

              FIND YOUR NEXT MOTORCYCLE

            </div>

          </div>

          {/* =============================================
              DESCRIPTION AND ACTIONS
             ============================================= */}

          <div className="contact-cta__side">

            <span className="contact-cta__side-label">
              LET'S GET YOU RIDING
            </span>

            <p>
              Found something you like? Explore our
              motorcycle collection or get in touch
              with DRIVE to ask about available
              models, specifications and your next ride.
            </p>

            {/* Action buttons */}

            <div className="contact-cta__actions">

              <Link
                to="/contact"
                className="contact-cta__primary"
              >

                <span>
                  Contact DRIVE
                </span>

                <ArrowRight
                  size={18}
                  strokeWidth={2}
                  aria-hidden="true"
                />

              </Link>

              <Link
                to="/catalog"
                className="contact-cta__secondary"
              >

                Browse Inventory

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

              </Link>

            </div>

            {/* Supporting detail */}

            <div className="contact-cta__supporting">

              <span
                className="contact-cta__supporting-mark"
                aria-hidden="true"
              />

              EXPLORE / CONNECT / RIDE

            </div>

          </div>

        </div>

        {/* ===============================================
            EDITORIAL DIVIDER
           =============================================== */}

        <div
          className="contact-cta__separator"
          aria-hidden="true"
        >
          <span />
          <span>DRIVE / FL</span>
        </div>

        {/* ===============================================
            DEALERSHIP INFORMATION
           =============================================== */}

        <div className="contact-cta__bottom">

          {/* =============================================
              LOCATION INFORMATION
             ============================================= */}

          <div className="contact-cta__location">

            <div
              className="contact-cta__icon"
              aria-hidden="true"
            >
              <MapPin
                size={21}
                strokeWidth={1.7}
              />
            </div>

            <div className="contact-cta__location-copy">

              <span>
                Visit Our Location
              </span>

              <strong>
                1406 S State Road 7
              </strong>

              <small>
                Hollywood, FL 33023
              </small>

            </div>

          </div>

          {/* Vertical divider */}

          <div
            className="contact-cta__divider"
            aria-hidden="true"
          />

          {/* =============================================
              CUSTOMER ASSISTANCE
             ============================================= */}

          <div className="contact-cta__help">

            <div
              className="contact-cta__icon"
              aria-hidden="true"
            >
              <MessageCircle
                size={21}
                strokeWidth={1.7}
              />
            </div>

            <div className="contact-cta__help-copy">

              <span>
                Need More Information?
              </span>

              <strong>
                Talk To DRIVE
              </strong>

              <small>
                Motorcycles / Availability / Details
              </small>

            </div>

          </div>

          {/* =============================================
              CONTACT ARROW
             ============================================= */}

          <Link
            to="/contact"
            className="contact-cta__round-link"
            aria-label="Contact DRIVE Motorcycles"
          >

            <MoveUpRight
              size={23}
              strokeWidth={1.8}
              aria-hidden="true"
            />

          </Link>

        </div>

        {/* ===============================================
            BOTTOM BRAND SIGNATURE
           =============================================== */}

        <div className="contact-cta__footer">

          <div className="contact-cta__footer-brand">

            <span
              className="contact-cta__footer-mark"
              aria-hidden="true"
            />

            DRIVE MOTORCYCLES

          </div>

          <div
            className="contact-cta__footer-line"
            aria-hidden="true"
          />

          <span className="contact-cta__footer-location">
            HOLLYWOOD · FLORIDA
          </span>

        </div>

      </div>
    </section>
  )
}

export default ContactCTA
