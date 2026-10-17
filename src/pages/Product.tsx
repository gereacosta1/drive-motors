
import { useEffect } from 'react'

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
} from 'lucide-react'

import {
  Link,
  useParams,
} from 'react-router'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import { products } from '../data/products'

import './Product.css'

/* =========================================================
   DRIVE MOTORCYCLES
   PRODUCT DETAILS — V2

   Premium Motorcycle Detail Page

   Sections:
   - Motorcycle Hero
   - Model Information
   - Specifications
   - Contact Actions
   - Motorcycle Details
   - Related Motorcycles

   Responsive:
   Desktop / Tablet / Mobile
   ========================================================= */

function Product() {
  const { slug } = useParams()

  /* =======================================================
     PRODUCT DATA
     ======================================================= */

  const product = products.find(
    (item) => item.slug === slug
  )

  const relatedProducts = product
    ? products
        .filter((item) => item.id !== product.id)
        .slice(0, 3)
    : []

  /* =======================================================
     RESET SCROLL WHEN CHANGING MOTORCYCLES
     ======================================================= */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    })
  }, [slug])

  /* =======================================================
     PRODUCT NOT FOUND
     ======================================================= */

  if (!product) {
    return (
      <>
        <Header />

        <main className="product-not-found">

          <div className="product-not-found__content">

            <div className="product-not-found__eyebrow">
              <span aria-hidden="true" />

              404 / Motorcycle Not Found
            </div>

            <h1>
              RIDE NOT
              <br />

              <span>
                FOUND.
              </span>
            </h1>

            <p>
              We couldn't find the motorcycle you're
              looking for. The link may be incorrect
              or the listing may have changed.
            </p>

            <Link to="/catalog">

              <ArrowLeft
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              Back To Inventory

            </Link>

          </div>

        </main>

        <Footer />
      </>
    )
  }

  /* =======================================================
     PRODUCT INFORMATION
     ======================================================= */

  const isAvailable = product.available

  const availabilityLabel = isAvailable
    ? 'Available'
    : 'Unavailable'

  const productNumber = String(
    products.findIndex((item) => item.id === product.id) + 1
  ).padStart(2, '0')

  return (
    <>
      <Header />

      <main className="product-page">

        {/* ===============================================
            MOTORCYCLE HERO
           =============================================== */}

        <section
          className="product-hero"
          aria-labelledby="product-title"
        >

          {/* Background grid */}

          <div
            className="product-hero__grid"
            aria-hidden="true"
          />

          {/* Background glow */}

          <div
            className="product-hero__glow"
            aria-hidden="true"
          />

          <div className="product-hero__container">

            {/* =============================================
                TOP NAVIGATION
               ============================================= */}

            <div className="product-hero__topline">

              <Link
                to="/catalog"
                className="product-hero__back"
              >

                <ArrowLeft
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                Back To Inventory

              </Link>

              <span className="product-hero__reference">
                DRIVE / MODEL {productNumber}
              </span>

            </div>

            {/* =============================================
                MOTORCYCLE LAYOUT
               ============================================= */}

            <div className="product-hero__layout">

              {/* ===========================================
                  MOTORCYCLE PHOTOGRAPH
                 =========================================== */}

              <div className="product-hero__visual">

                <img
                  src={product.image}
                  alt={`${product.name} motorcycle in ${product.color}`}
                  className="product-hero__image"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />

                {/* Image shading */}

                <div
                  className="product-hero__image-overlay"
                  aria-hidden="true"
                />

                {/* Availability */}

                <div className="product-hero__status">

                  <span
                    className={
                      isAvailable
                        ? 'product-hero__status-dot product-hero__status-dot--available'
                        : 'product-hero__status-dot'
                    }
                    aria-hidden="true"
                  />

                  {availabilityLabel}

                </div>

                {/* Image number */}

                <span
                  className="product-hero__image-index"
                  aria-hidden="true"
                >
                  DRIVE / {productNumber}
                </span>

                {/* Image bottom identification */}

                <div
                  className="product-hero__image-bottom"
                  aria-hidden="true"
                >

                  <span>
                    DRIVE MOTORCYCLES
                  </span>

                  <span>
                    SOUTH FLORIDA
                  </span>

                </div>

                {/* Decorative corners */}

                <span
                  className="product-hero__corner product-hero__corner--top"
                  aria-hidden="true"
                />

                <span
                  className="product-hero__corner product-hero__corner--bottom"
                  aria-hidden="true"
                />

              </div>

              {/* ===========================================
                  PRODUCT INFORMATION
                 =========================================== */}

              <div className="product-hero__content">

                {/* Eyebrow */}

                <div className="product-hero__eyebrow">

                  <span aria-hidden="true" />

                  {product.brand} / {product.displacement}

                </div>

                {/* Model heading */}

                <h1 id="product-title">
                  {product.name}
                </h1>

                {/* Editorial detail */}

                <div className="product-hero__heading-detail">

                  <span
                    className="product-hero__heading-line"
                    aria-hidden="true"
                  />

                  THE DRIVE COLLECTION

                </div>

                {/* Description */}

                <p className="product-hero__description">
                  {product.description}
                </p>

                {/* =========================================
                    SPECIFICATIONS
                   ========================================= */}

                <div className="product-hero__specifications">

                  <div>
                    <span>Engine</span>

                    <strong>
                      {product.displacement}
                    </strong>
                  </div>

                  <div>
                    <span>Color</span>

                    <strong>
                      {product.color}
                    </strong>
                  </div>

                  <div>
                    <span>Brand</span>

                    <strong>
                      {product.brand}
                    </strong>
                  </div>

                  <div>
                    <span>Status</span>

                    <strong>
                      {availabilityLabel}
                    </strong>
                  </div>

                </div>

                {/* =========================================
                    CONTACT ACTIONS
                   ========================================= */}

                <div className="product-hero__actions">

                  <Link
                    to="/contact"
                    className="product-hero__primary"
                  >

                    <span>
                      Ask About This Bike
                    </span>

                    <ArrowRight
                      size={18}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                  </Link>

                  <Link
                    to="/contact"
                    className="product-hero__location"
                  >

                    <MapPin
                      size={17}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                    Visit DRIVE

                  </Link>

                </div>

                {/* =========================================
                    DEALERSHIP INFORMATION
                   ========================================= */}

                <div className="product-hero__dealer">

                  <span>
                    LOCAL MOTORCYCLE DEALERSHIP
                  </span>

                  <strong>
                    DRIVE Motorcycles
                  </strong>

                  <small>
                    1406 S State Road 7 · Hollywood, FL 33023
                  </small>

                  <div className="product-hero__dealer-note">

                    <span
                      className="product-hero__dealer-mark"
                      aria-hidden="true"
                    />

                    Contact us to confirm current availability
                    and viewing options.

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Background typography */}

          <span
            className="product-hero__background-text"
            aria-hidden="true"
          >
            DRIVE
          </span>

        </section>

        {/* ===============================================
            MOTORCYCLE DETAILS
           =============================================== */}

        <section
          className="product-details"
          aria-labelledby="product-details-title"
        >

          <div className="product-details__container">

            {/* =============================================
                SECTION HEADING
               ============================================= */}

            <div className="product-details__heading">

              <div className="product-details__heading-left">

                <span
                  className="product-details__index"
                  aria-hidden="true"
                >
                  01
                </span>

                <div>

                  <span className="product-details__eyebrow">
                    Motorcycle Information
                  </span>

                  <h2 id="product-details-title">
                    THE MACHINE.
                  </h2>

                </div>

              </div>

              <p>
                Take a closer look at the model,
                its available specifications and
                how to get more information from DRIVE.
              </p>

            </div>

            {/* =============================================
                INFORMATION GRID
               ============================================= */}

            <div className="product-details__grid">

              {/* Engine */}

              <div className="product-details__feature">

                <span
                  className="product-details__feature-number"
                  aria-hidden="true"
                >
                  01
                </span>

                <span className="product-details__feature-label">
                  ENGINE
                </span>

                <h3>
                  {product.displacement}
                </h3>

                <p>
                  Explore this motorcycle's engine
                  category and contact DRIVE for
                  additional technical specifications.
                </p>

                <div
                  className="product-details__feature-line"
                  aria-hidden="true"
                />

              </div>

              {/* Color */}

              <div className="product-details__feature">

                <span
                  className="product-details__feature-number"
                  aria-hidden="true"
                >
                  02
                </span>

                <span className="product-details__feature-label">
                  COLOR / FINISH
                </span>

                <h3>
                  {product.color}
                </h3>

                <p>
                  View the motorcycle's listed color
                  and contact us if you'd like to
                  know about other options.
                </p>

                <div
                  className="product-details__feature-line"
                  aria-hidden="true"
                />

              </div>

              {/* Dealership */}

              <div className="product-details__feature">

                <span
                  className="product-details__feature-number"
                  aria-hidden="true"
                >
                  03
                </span>

                <span className="product-details__feature-label">
                  LOCAL DEALERSHIP
                </span>

                <h3>
                  VISIT DRIVE
                </h3>

                <p>
                  We're located in Hollywood, Florida.
                  Contact us to confirm availability,
                  ask questions or arrange a visit.
                </p>

                <div
                  className="product-details__feature-line"
                  aria-hidden="true"
                />

              </div>

            </div>

          </div>

        </section>

        {/* ===============================================
            RELATED MOTORCYCLES
           =============================================== */}

        {relatedProducts.length > 0 && (
          <section
            className="product-related"
            aria-labelledby="product-related-title"
          >

            <div className="product-related__container">

              {/* ===========================================
                  SECTION HEADER
                 =========================================== */}

              <div className="product-related__header">

                <div>

                  <span className="product-related__eyebrow">
                    02 / Keep Exploring
                  </span>

                  <h2 id="product-related-title">
                    MORE
                    <br />

                    <span>
                      RIDES.
                    </span>
                  </h2>

                </div>

                <Link
                  to="/catalog"
                  className="product-related__view-all"
                >

                  View Full Inventory

                  <ArrowRight
                    size={17}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                </Link>

              </div>

              {/* ===========================================
                  RELATED PRODUCT GRID
                 =========================================== */}

              <div className="product-related__grid">

                {relatedProducts.map((related, index) => (
                  <Link
                    key={related.id}
                    to={`/product/${related.slug}`}
                    className="product-related__card"
                    aria-label={`View ${related.name} details`}
                  >

                    {/* Image */}

                    <div className="product-related__image">

                      <img
                        src={related.image}
                        alt={`${related.name} motorcycle in ${related.color}`}
                        loading="lazy"
                        decoding="async"
                      />

                      <span
                        className="product-related__image-number"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <div
                        className="product-related__arrow"
                        aria-hidden="true"
                      >

                        <ArrowUpRight
                          size={19}
                          strokeWidth={1.8}
                        />

                      </div>

                    </div>

                    {/* Product information */}

                    <div className="product-related__info">

                      <div>

                        <span>
                          {related.brand}
                        </span>

                        <h3>
                          {related.name}
                        </h3>

                      </div>

                      <strong>
                        {related.displacement}
                      </strong>

                    </div>

                    <div className="product-related__card-bottom">

                      <span>
                        View Motorcycle
                      </span>

                      <ArrowRight
                        size={16}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />

                    </div>

                  </Link>
                ))}

              </div>

            </div>

          </section>
        )}

      </main>

      <Footer />
    </>
  )
}

export default Product
