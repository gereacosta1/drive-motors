
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

import type { Product } from '../../types/product'

/* =========================================================
   DRIVE MOTORCYCLES
   PRODUCT CARD — V2

   Motorcycle Catalog Card

   Features:
   - Product photography
   - Availability status
   - Model identification
   - Engine and color details
   - Product description
   - Individual product navigation
   ========================================================= */

interface ProductCardProps {
  product: Product
  index: number
}

function ProductCard({
  product,
  index,
}: ProductCardProps) {
  const productNumber = String(index + 1).padStart(2, '0')

  const productPath = `/product/${product.slug}`

  const isAvailable = product.available

  const availabilityLabel = isAvailable
    ? 'Available'
    : 'Unavailable'

  return (
    <Link
      to={productPath}
      className="product-card"
      aria-label={`View ${product.name} details. ${availabilityLabel}.`}
    >
      {/* ===============================================
          MOTORCYCLE IMAGE
         =============================================== */}

      <div className="product-card__image-wrapper">
        <img
          src={product.image}
          alt={`${product.name} in ${product.color}`}
          className="product-card__image"
          loading="lazy"
          decoding="async"
        />

        <div
          className="product-card__overlay"
          aria-hidden="true"
        />

        {/* Product identification */}

        <span
          className="product-card__index"
          aria-hidden="true"
        >
          {productNumber}
        </span>

        {/* Availability status */}

        <div
          className={[
            'product-card__status',
            isAvailable
              ? 'product-card__status--available'
              : 'product-card__status--unavailable',
          ].join(' ')}
        >
          <span aria-hidden="true" />

          {availabilityLabel}
        </div>

        {/* Open product indicator */}

        <div
          className="product-card__open"
          aria-hidden="true"
        >
          <ArrowUpRight
            size={20}
            strokeWidth={1.8}
          />
        </div>
      </div>

      {/* ===============================================
          PRODUCT INFORMATION
         =============================================== */}

      <div className="product-card__content">
        <div className="product-card__heading">
          <span className="product-card__brand">
            {product.brand}
          </span>

          <h3>{product.name}</h3>
        </div>

        {/* Specifications */}

        <div className="product-card__specs">
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
        </div>
      </div>

      {/* ===============================================
          DESCRIPTION AND ACTION
         =============================================== */}

      <div className="product-card__description">
        <p>{product.description}</p>

        <span className="product-card__view">
          View Motorcycle

          <ArrowUpRight
            size={15}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}

export default ProductCard
