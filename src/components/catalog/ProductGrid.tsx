import { SearchX } from 'lucide-react'
import type { Product } from '../../types/product'
import ProductCard from './ProductCard'

interface ProductGridProps {
  products: Product[]
}

function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="product-grid__empty">
        <div className="product-grid__empty-icon">
          <SearchX size={30} />
        </div>

        <span>No results</span>

        <h3>No motorcycles found.</h3>

        <p>
          Try changing your search or filters to see more inventory.
        </p>
      </div>
    )
  }

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
        />
      ))}
    </div>
  )
}

export default ProductGrid