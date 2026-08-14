import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react'
import { Link, useParams } from 'react-router'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import { products } from '../data/products'

import './Product.css'

function Product() {
  const { slug } = useParams()

  const product = products.find(
    (item) => item.slug === slug,
  )

  if (!product) {
    return (
      <>
        <Header />

        <main className="product-not-found">
          <div className="product-not-found__content">
            <span>404 / Motorcycle not found</span>

            <h1>
              RIDE NOT
              <br />
              FOUND.
            </h1>

            <p>
              The motorcycle you're looking for may no longer be
              available or the link may be incorrect.
            </p>

            <Link to="/catalog">
              <ArrowLeft
                size={17}
                aria-hidden="true"
              />

              Back to inventory
            </Link>
          </div>
        </main>

        <Footer />
      </>
    )
  }

  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 3)

  return (
    <>
      <Header />

      <main className="product-page">
        {/* PRODUCT HERO */}
        <section
          className="product-hero"
          aria-labelledby="product-title"
        >
          <div
            className="product-hero__grid"
            aria-hidden="true"
          />

          <div
            className="product-hero__glow"
            aria-hidden="true"
          />

          <div className="product-hero__container">
            <Link
              to="/catalog"
              className="product-hero__back"
            >
              <ArrowLeft
                size={15}
                aria-hidden="true"
              />

              Back to inventory
            </Link>

            <div className="product-hero__layout">
              {/* IMAGE */}
              <div className="product-hero__visual">
                <div className="product-hero__status">
                  <span
                    className={
                      product.available
                        ? 'product-hero__status-dot product-hero__status-dot--available'
                        : 'product-hero__status-dot'
                    }
                    aria-hidden="true"
                  />

                  {product.available
                    ? 'Available'
                    : 'Unavailable'}
                </div>

                <img
                  src={product.image}
                  alt={`${product.name} ${product.color}`}
                  className="product-hero__image"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />

                <span
                  className="product-hero__image-index"
                  aria-hidden="true"
                >
                  DRIVE / 01
                </span>
              </div>

              {/* INFORMATION */}
              <div className="product-hero__content">
                <div className="product-hero__eyebrow">
                  <span aria-hidden="true" />

                  {product.brand} / {product.displacement}
                </div>

                <h1 id="product-title">
                  {product.name}
                </h1>

                <p className="product-hero__description">
                  {product.description}
                </p>

                <div className="product-hero__specifications">
                  <div>
                    <span>Engine</span>
                    <strong>{product.displacement}</strong>
                  </div>

                  <div>
                    <span>Color</span>
                    <strong>{product.color}</strong>
                  </div>

                  <div>
                    <span>Brand</span>
                    <strong>{product.brand}</strong>
                  </div>

                  <div>
                    <span>Status</span>
                    <strong>
                      {product.available
                        ? 'Available'
                        : 'Unavailable'}
                    </strong>
                  </div>
                </div>

                <div className="product-hero__actions">
                  <Link
                    to="/contact"
                    className="product-hero__primary"
                  >
                    Ask about this bike

                    <ArrowRight
                      size={18}
                      aria-hidden="true"
                    />
                  </Link>

                  <Link
                    to="/contact"
                    className="product-hero__location"
                  >
                    <MapPin
                      size={16}
                      aria-hidden="true"
                    />

                    Visit DRIVE
                  </Link>
                </div>

                <div className="product-hero__dealer">
                  <span>Available at</span>

                  <strong>DRIVE Motorcycles</strong>

                  <small>
                    1406 S State Road 7 · Hollywood, FL 33023
                  </small>
                </div>
              </div>
            </div>
          </div>

          <span
            className="product-hero__background-text"
            aria-hidden="true"
          >
            250
          </span>
        </section>

        {/* DETAILS */}
        <section
          className="product-details"
          aria-labelledby="product-details-title"
        >
          <div className="product-details__container">
            <div className="product-details__heading">
              <div>
                <span
                  className="product-details__index"
                  aria-hidden="true"
                >
                  01
                </span>

                <div>
                  <span>Motorcycle details</span>

                  <h2 id="product-details-title">
                    THE MACHINE.
                  </h2>
                </div>
              </div>

              <p>
                Designed for everyday riding with distinctive
                styling and a 250CC platform.
              </p>
            </div>

            <div className="product-details__grid">
              <div className="product-details__feature">
                <span aria-hidden="true">
                  01
                </span>

                <h3>250CC Engine</h3>

                <p>
                  A versatile engine size designed for urban
                  riding and everyday use.
                </p>
              </div>

              <div className="product-details__feature">
                <span aria-hidden="true">
                  02
                </span>

                <h3>Street Focused</h3>

                <p>
                  Built around a practical street-oriented
                  motorcycle platform.
                </p>
              </div>

              <div className="product-details__feature">
                <span aria-hidden="true">
                  03
                </span>

                <h3>Available Locally</h3>

                <p>
                  Visit DRIVE in Hollywood, Florida to see the
                  motorcycle and ask about current availability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section
          className="product-related"
          aria-labelledby="product-related-title"
        >
          <div className="product-related__container">
            <div className="product-related__header">
              <div>
                <span>
                  02 / Keep exploring
                </span>

                <h2 id="product-related-title">
                  MORE
                  <br />
                  <span>RIDES.</span>
                </h2>
              </div>

              <Link to="/catalog">
                View full inventory

                <ArrowRight
                  size={17}
                  aria-hidden="true"
                />
              </Link>
            </div>

            <div className="product-related__grid">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  to={`/product/${related.slug}`}
                  className="product-related__card"
                  aria-label={`View ${related.name} details`}
                >
                  <div className="product-related__image">
                    <img
                      src={related.image}
                      alt={`${related.name} ${related.color}`}
                      loading="lazy"
                      decoding="async"
                    />

                    <div
                      className="product-related__arrow"
                      aria-hidden="true"
                    >
                      <ArrowRight size={17} />
                    </div>
                  </div>

                  <div className="product-related__info">
                    <div>
                      <span>{related.brand}</span>
                      <h3>{related.name}</h3>
                    </div>

                    <strong>
                      {related.displacement}
                    </strong>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Product