import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { featuredProducts } from '../../data/products'
import './FeaturedBikes.css'

function FeaturedBikes() {
  return (
    <section className="featured" id="inventory">
      <div className="featured__container">
        <div className="featured__header">
          <div>
            <div className="featured__eyebrow">
              <span />
              01 / Featured Inventory
            </div>

            <h2 className="featured__title">
              FIND YOUR
              <br />
              <span>NEXT RIDE.</span>
            </h2>
          </div>

          <div className="featured__header-right">
            <p>
              Explore a selection of motorcycles available now at DRIVE
              in South Florida.
            </p>

            <Link to="/catalog" className="featured__view-all">
              View all inventory
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <div className="featured__grid">
          {featuredProducts.map((product, index) => (
            <Link
              to={`/product/${product.slug}`}
              className={`featured__card featured__card--${index + 1}`}
              key={product.id}
            >
              <div className="featured__image-wrapper">
                <img
                  src={product.image}
                  alt={`${product.name} ${product.color}`}
                  className="featured__image"
                />

                <div className="featured__image-overlay" />

                <div className="featured__number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="featured__availability">
                  <span />
                  Available
                </div>

                <div className="featured__open">
                  <ArrowUpRight size={19} />
                </div>
              </div>

              <div className="featured__info">
                <div>
                  <span className="featured__brand">
                    {product.brand}
                  </span>

                  <h3>{product.name}</h3>
                </div>

                <div className="featured__specs">
                  <div>
                    <span>Engine</span>
                    <strong>{product.displacement}</strong>
                  </div>

                  <div>
                    <span>Color</span>
                    <strong>{product.color}</strong>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="featured__mobile-action">
          <Link to="/catalog">
            Explore all motorcycles
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBikes