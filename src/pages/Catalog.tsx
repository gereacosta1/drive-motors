import { useMemo, useState } from 'react'
import { ArrowDown } from 'lucide-react'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import CatalogFilters from '../components/catalog/CatalogFilters'
import ProductGrid from '../components/catalog/ProductGrid'

import { products } from '../data/products'

import './Catalog.css'

function Catalog() {
  const [search, setSearch] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('all')
  const [selectedColor, setSelectedColor] = useState('all')

  const brands = useMemo(() => {
    return Array.from(
      new Set(
        products
          .map((product) => product.brand)
          .filter((brand) => brand && brand !== 'DRIVE')
      )
    ).sort()
  }, [])

  const colors = useMemo(() => {
    return Array.from(
      new Set(products.map((product) => product.color))
    ).sort()
  }, [])

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return products.filter((product) => {
      const matchesSearch =
        normalizedSearch === '' ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.brand.toLowerCase().includes(normalizedSearch) ||
        product.color.toLowerCase().includes(normalizedSearch) ||
        product.displacement.toLowerCase().includes(normalizedSearch)

      const matchesBrand =
        selectedBrand === 'all' ||
        product.brand === selectedBrand

      const matchesColor =
        selectedColor === 'all' ||
        product.color === selectedColor

      return matchesSearch && matchesBrand && matchesColor
    })
  }, [search, selectedBrand, selectedColor])

  const resetFilters = () => {
    setSearch('')
    setSelectedBrand('all')
    setSelectedColor('all')
  }

  const scrollToInventory = () => {
    document
      .getElementById('catalog-inventory')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header />

      <main className="catalog-page">
        {/* HERO */}
        <section className="catalog-hero">
          <div className="catalog-hero__grid" />

          <div className="catalog-hero__glow" />

          <div className="catalog-hero__container">
            <div className="catalog-hero__eyebrow">
              <span />
              DRIVE / Motorcycle Inventory
            </div>

            <div className="catalog-hero__main">
              <div>
                <h1>
                  FIND YOUR
                  <br />
                  <span>NEXT RIDE.</span>
                </h1>
              </div>

              <div className="catalog-hero__side">
                <p>
                  Browse our current motorcycle inventory and find the
                  style, color and machine that fits your next ride.
                </p>

                <div className="catalog-hero__stats">
                  <div>
                    <strong>{products.length}</strong>
                    <span>Motorcycles</span>
                  </div>

                  <div className="catalog-hero__stats-line" />

                  <div>
                    <strong>250CC</strong>
                    <span>Inventory</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="catalog-hero__scroll"
              onClick={scrollToInventory}
            >
              <ArrowDown size={16} />
              Browse inventory
            </button>
          </div>

          <div className="catalog-hero__number">
            250
          </div>
        </section>

        {/* INVENTORY */}
        <section
          className="catalog-inventory"
          id="catalog-inventory"
        >
          <div className="catalog-inventory__container">
            <div className="catalog-inventory__heading">
              <div>
                <span className="catalog-inventory__index">
                  01
                </span>

                <div>
                  <span>Available motorcycles</span>
                  <h2>Inventory</h2>
                </div>
              </div>

              <p>
                Select a motorcycle to view more information,
                specifications and availability.
              </p>
            </div>

            <CatalogFilters
              search={search}
              onSearchChange={setSearch}
              selectedBrand={selectedBrand}
              onBrandChange={setSelectedBrand}
              brands={brands}
              selectedColor={selectedColor}
              onColorChange={setSelectedColor}
              colors={colors}
              resultCount={filteredProducts.length}
              onReset={resetFilters}
            />

            <ProductGrid products={filteredProducts} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Catalog