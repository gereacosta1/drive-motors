
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  MapPin,
} from 'lucide-react'

import { Link } from 'react-router'

import { featuredProducts } from '../../data/products'

import './FeaturedBikes.css'

/* =========================================================
   DRIVE MOTORCYCLES
   FEATURED INVENTORY — V2

   Premium Motorcycle Showcase

   Design:
   - Editorial typography
   - Asymmetric motorcycle grid
   - Premium product cards
   - Black / White / Orange
   - Fully responsive
   ========================================================= */

function FeaturedBikes() {
  const totalFeatured = featuredProducts.length

  return (
    <section
      className="featured"
      id="inventory"
      aria-labelledby="featured-title"
    >
      <div className="featured__container">

        {/* =================================================
            SECTION INTRODUCTION
           ================================================= */}

        <header className="featured__header">

          {/* Left editorial heading */}

          <div className="featured__heading">

            <div className="featured__eyebrow">

              <span aria-hidden="true" />

              01 / Featured Inventory

            </div>

            <h2
              id="featured-title"
              className="featured__title"
            >
              FIND YOUR
              <br />

              <span>
                NEXT RIDE.
              </span>
            </h2>

            <div className="featured__heading-detail">
              <span
                className="featured__heading-line"
                aria-hidden="true"
              />

              MOTORCYCLES / SOUTH FLORIDA
            </div>

          </div>

          {/* Right section description */}

          <div className="featured__header-right">

            <span className="featured__intro-label">
              THE DRIVE COLLECTION
            </span>

            <p>
              Discover our selection of 250CC
              motorcycles. Explore different styles,
              compare models and find the ride
              that fits you.
            </p>

            <Link
              to="/catalog"
              className="featured__view-all"
            >
              View All Inventory

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>

          </div>

        </header>

        {/* =================================================
            EDITORIAL DIVIDER
           ================================================= */}

        <div className="featured__divider">

          <span>
            SELECTED MOTORCYCLES
          </span>

          <span>
            {String(totalFeatured).padStart(2, '0')}
            {' '}
            MODELS
          </span>

        </div>

        {/* =================================================
            FEATURED MOTORCYCLE GRID
           ================================================= */}

        <div className="featured__grid">

          {featuredProducts.map((product, index) => {

            const productNumber = String(
              index + 1
            ).padStart(2, '0')

            const productPath =
              `/product/${product.slug}`

            return (
              <Link
                to={productPath}
                className={[
                  'featured__card',
                  `featured__card--${index + 1}`,
                ].join(' ')}
                key={product.id}
                aria-label={`Explore ${product.name}`}
              >

                {/* =========================================
                    MOTORCYCLE IMAGE
                   ========================================= */}

                <div className="featured__image-wrapper">

                  <img
                    src={product.image}
                    alt={`${product.name} in ${product.color}`}
                    className="featured__image"
                    width={768}
                    height={960}
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Image gradient */}

                  <div
                    className="featured__image-overlay"
                    aria-hidden="true"
                  />

                  {/* Model number */}

                  <div
                    className="featured__number"
                    aria-hidden="true"
                  >
                    {productNumber}
                  </div>

                  {/* Top-left label */}

                  <div className="featured__availability">

                    <span aria-hidden="true" />

                    Featured Model

                  </div>

                  {/* Top-right arrow */}

                  <div
                    className="featured__open"
                    aria-hidden="true"
                  >
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Motorcycle image caption */}

                  <div className="featured__image-caption">

                    <span className="featured__image-caption-label">
                      DRIVE MOTORCYCLES
                    </span>

                    <span className="featured__image-caption-action">

                      Discover Model

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />

                    </span>

                  </div>

                  {/* Decorative corners */}

                  <span
                    className="featured__corner featured__corner--top"
                    aria-hidden="true"
                  />

                  <span
                    className="featured__corner featured__corner--bottom"
                    aria-hidden="true"
                  />

                </div>

                {/* =========================================
                    MOTORCYCLE INFORMATION
                   ========================================= */}

                <div className="featured__info">

                  <div className="featured__product-heading">

                    <span className="featured__brand">
                      {product.brand}
                    </span>

                    <h3>
                      {product.name}
                    </h3>

                    <span className="featured__product-index">
                      MODEL / {productNumber}
                    </span>

                  </div>

                  {/* Motorcycle specifications */}

                  <div className="featured__specs">

                    <div>
                      <span>
                        Engine
                      </span>

                      <strong>
                        {product.displacement}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Color
                      </span>

                      <strong>
                        {product.color}
                      </strong>
                    </div>

                  </div>

                  {/* Card bottom action */}

                  <div className="featured__card-bottom">

                    <span>
                      View Motorcycle
                    </span>

                    <ArrowRight
                      size={17}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                  </div>

                </div>

              </Link>
            )
          })}

        </div>

        {/* =================================================
            COLLECTION BOTTOM
           ================================================= */}

        <div className="featured__bottom">

          <div className="featured__bottom-info">

            <MapPin
              size={16}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            <span>
              Hollywood, Florida
            </span>

          </div>

          <div className="featured__bottom-line" />

          <Link
            to="/catalog"
            className="featured__bottom-link"
          >
            Explore The Full Collection

            <ChevronRight
              size={18}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </Link>

        </div>

        {/* =================================================
            MOBILE ACTION
           ================================================= */}

        <div className="featured__mobile-action">

          <Link to="/catalog">

            Explore All Motorcycles

            <ArrowRight
              size={17}
              strokeWidth={1.8}
              aria-hidden="true"
            />

          </Link>

        </div>

      </div>
    </section>
  )
}

export default FeaturedBikes
