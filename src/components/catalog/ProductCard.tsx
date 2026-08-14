import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import type { Product } from '../../types/product'

interface ProductCardProps {
  product: Product
  index: number
}

function ProductCard({ product, index }: ProductCardProps) {
  return (
    <Link
      to={`/product/${product.slug}`}
      className="product-card"
      aria-label={`View ${product.name}`}
    >
      <div className="product-card__image-wrapper">
        <img
          src={product.image}
          alt={`${product.name} ${product.color}`}
          className="product-card__image"
          loading="lazy"
        />

        <div className="product-card__overlay" />

        <span className="product-card__index">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div
          className={`product-card__status ${
            product.available
              ? 'product-card__status--available'
              : 'product-card__status--unavailable'
          }`}
        >
          <span />

          {product.available ? 'Available' : 'Unavailable'}
        </div>

        <div className="product-card__open">
          <ArrowUpRight size={19} />
        </div>
      </div>

      <div className="product-card__content">
        <div className="product-card__heading">
          <span className="product-card__brand">
            {product.brand}
          </span>

          <h3>{product.name}</h3>
        </div>

        <div className="product-card__specs">
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

      <div className="product-card__description">
        <p>{product.description}</p>

        <span className="product-card__view">
          View motorcycle
          <ArrowUpRight size={14} />
        </span>
      </div>
    </Link>
  )
}

export default ProductCard