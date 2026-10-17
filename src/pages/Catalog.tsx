
import { useMemo, useState } from 'react'

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  RotateCcw,
  SearchX,
  MapPin,
} from 'lucide-react'

import { Link } from 'react-router'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import CatalogFilters from '../components/catalog/CatalogFilters'
import ProductGrid from '../components/catalog/ProductGrid'

import { products } from '../data/products'

import './Catalog.css'

/* =========================================================
   DRIVE MOTORCYCLES
   CATALOG PAGE — V2

   Motorcycle Inventory Experience

   Features:
   - Premium editorial hero
   - Dynamic inventory statistics
   - Search by model, brand, color or engine
   - Brand and color filters
   - Filtered results count
   - Empty results state
   - Contact CTA
   - Responsive layout
   ========================================================= */

function Catalog() {
  /* =======================================================
     FILTER STATES
     ======================================================= */

  const [search, setSearch] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('all')
  const [selectedColor, setSelectedColor] = useState('all')

  /* =======================================================
     AVAILABLE BRANDS
     ======================================================= */

  const brands = useMemo(() => {
    return Array.from(
      new Set(
        products
          .map((product) => product.brand)
          .filter(
            (brand) => brand && brand !== 'DRIVE'
          )
      )
    ).sort()
  }, [])

  /* =======================================================
     AVAILABLE COLORS
     ======================================================= */

  const colors = useMemo(() => {
    return Array.from(
      new Set(
        products
          .map((product) => product.color)
          .filter(Boolean)
      )
    ).sort()
  }, [])

  /* =======================================================
     INVENTORY STATISTICS
     ======================================================= */

  const totalListings = products.length

  const totalModels = useMemo(() => {
    return new Set(
      products.map((product) => product.name)
    ).size
  }, [])

  /* =======================================================
     FILTERED MOTORCYCLES
     ======================================================= */

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search
      .trim()
      .toLowerCase()

    return products.filter((product) => {
      const searchableContent = [
        product.name,
        product.brand,
        product.color,
        product.displacement,
      ]
        .join(' ')
        .toLowerCase()

      const matchesSearch =
        normalizedSearch === '' ||
        searchableContent.includes(normalizedSearch)

      const matchesBrand =
        selectedBrand === 'all' ||
        product.brand === selectedBrand

      const matchesColor =
        selectedColor === 'all' ||
        product.color === selectedColor

      return (
        matchesSearch &&
        matchesBrand &&
        matchesColor
      )
    })
  }, [search, selectedBrand, selectedColor])

  /* =======================================================
     FILTER UTILITIES
     ======================================================= */

  const hasActiveFilters =
    search.trim() !== '' ||
    selectedBrand !== 'all' ||
    selectedColor !== 'all'

  const resultCount = filteredProducts.length

  const resetFilters = () => {
    setSearch('')
    setSelectedBrand('all')
    setSelectedColor('all')
  }

  /* =======================================================
     SCROLL TO INVENTORY
     ======================================================= */

  const scrollToInventory = () => {
    const inventory = document.getElementById(
      'catalog-inventory'
    )

    if (!inventory) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    inventory.scrollIntoView({
      behavior: prefersReducedMotion
        ? 'auto'
        : 'smooth',
      block: 'start',
    })
  }

  /* =======================================================
     COMPONENT
     ======================================================= */

  return (
    <>
      <Header />

      <main className="catalog-page">

        {/* ===============================================
            CATALOG HERO
           =============================================== */}

        <section
          className="catalog-hero"
          aria-labelledby="catalog-title"
        >

          {/* Background grid */}

          <div
            className="catalog-hero__grid"
            aria-hidden="true"
          />

          {/* Background glow */}

          <div
            className="catalog-hero__glow"
            aria-hidden="true"
          />

          {/* Decorative number */}

          <div
            className="catalog-hero__number"
            aria-hidden="true"
          >
            250
          </div>

          <div className="catalog-hero__container">

            {/* Eyebrow */}

            <div className="catalog-hero__eyebrow">

              <span aria-hidden="true" />

              DRIVE / Motorcycle Collection

            </div>

            {/* Main layout */}

            <div className="catalog-hero__main">

              {/* Heading */}

              <div className="catalog-hero__heading">

                <h1 id="catalog-title">
                  FIND YOUR
                  <br />

                  <span>
                    NEXT RIDE.
                  </span>
                </h1>

                <div className="catalog-hero__heading-detail">

                  <span
                    className="catalog-hero__heading-line"
                    aria-hidden="true"
                  />

                  EXPLORE THE DRIVE COLLECTION

                </div>

              </div>

              {/* Description and statistics */}

              <div className="catalog-hero__side">

                <span className="catalog-hero__side-label">
                  THE DRIVE INVENTORY
                </span>

                <p>
                  Discover motorcycles in different
                  styles, colors and configurations.
                  Explore our collection and find the
                  machine that fits your next ride.
                </p>

                {/* Inventory statistics */}

                <div className="catalog-hero__stats">

                  <div>
                    <strong>
                      {String(totalListings).padStart(
                        2,
                        '0'
                      )}
                    </strong>

                    <span>
                      Listings
                    </span>
                  </div>

                  <div
                    className="catalog-hero__stats-line"
                    aria-hidden="true"
                  />

                  <div>
                    <strong>
                      {String(totalModels).padStart(
                        2,
                        '0'
                      )}
                    </strong>

                    <span>
                      Models
                    </span>
                  </div>

                </div>

              </div>

            </div>

            {/* Bottom navigation */}

            <div className="catalog-hero__bottom">

              <button
                type="button"
                className="catalog-hero__scroll"
                onClick={scrollToInventory}
              >

                <ArrowDown
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                Browse Inventory

              </button>

              <span className="catalog-hero__bottom-line" />

              <span className="catalog-hero__location">

                <MapPin
                  size={14}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                Hollywood · Florida

              </span>

            </div>

          </div>

        </section>

        {/* ===============================================
            INVENTORY SECTION
           =============================================== */}

        <section
          className="catalog-inventory"
          id="catalog-inventory"
          aria-labelledby="catalog-inventory-title"
        >

          <div className="catalog-inventory__container">

            {/* =============================================
                SECTION HEADING
               ============================================= */}

            <div className="catalog-inventory__heading">

              <div className="catalog-inventory__heading-left">

                <span
                  className="catalog-inventory__index"
                  aria-hidden="true"
                >
                  01
                </span>

                <div>

                  <span className="catalog-inventory__eyebrow">
                    Explore The Collection
                  </span>

                  <h2 id="catalog-inventory-title">
                    Inventory
                  </h2>

                </div>

              </div>

              <p>
                Browse the motorcycles below.
                Select a model to explore its
                specifications and request more
                information from DRIVE.
              </p>

            </div>

            {/* =============================================
                INVENTORY FILTERS
               ============================================= */}

            <CatalogFilters
              search={search}
              onSearchChange={setSearch}
              selectedBrand={selectedBrand}
              onBrandChange={setSelectedBrand}
              brands={brands}
              selectedColor={selectedColor}
              onColorChange={setSelectedColor}
              colors={colors}
              resultCount={resultCount}
              onReset={resetFilters}
            />

            {/* =============================================
                INVENTORY RESULTS HEADING
               ============================================= */}

            <div className="catalog-inventory__results">

              <div className="catalog-inventory__results-label">

                <span
                  className="catalog-inventory__results-mark"
                  aria-hidden="true"
                />

                <span aria-live="polite">
                  {resultCount}{' '}
                  {resultCount === 1
                    ? 'Motorcycle Listing'
                    : 'Motorcycle Listings'}
                </span>

              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  className="catalog-inventory__reset"
                  onClick={resetFilters}
                >

                  <RotateCcw
                    size={14}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  Clear Filters

                </button>
              )}

            </div>

            {/* =============================================
                PRODUCT GRID OR EMPTY STATE
               ============================================= */}

            {resultCount > 0 ? (

              <ProductGrid
                products={filteredProducts}
              />

            ) : (

              <div className="catalog-inventory__empty">

                <div
                  className="catalog-inventory__empty-icon"
                  aria-hidden="true"
                >

                  <SearchX
                    size={34}
                    strokeWidth={1.5}
                  />

                </div>

                <span className="catalog-inventory__empty-label">
                  NO MATCHING MOTORCYCLES
                </span>

                <h3>
                  No Results Found.
                </h3>

                <p>
                  We couldn't find any motorcycles
                  matching your current search.
                  Try another model, brand or color.
                </p>

                {hasActiveFilters && (
                  <button
                    type="button"
                    className="catalog-inventory__empty-button"
                    onClick={resetFilters}
                  >

                    Reset Filters

                    <ArrowRight
                      size={17}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                  </button>
                )}

              </div>

            )}

            {/* =============================================
                CONTACT CTA
               ============================================= */}

            <div className="catalog-inventory__contact">

              <div className="catalog-inventory__contact-copy">

                <span>
                  NEED MORE INFORMATION?
                </span>

                <h3>
                  FIND YOUR NEXT RIDE
                  <br />
                  WITH DRIVE.
                </h3>

                <p>
                  Have a question about a model?
                  Contact DRIVE for motorcycle
                  details and availability.
                </p>

              </div>

              <Link
                to="/contact"
                className="catalog-inventory__contact-link"
              >

                Contact DRIVE

                <ArrowUpRight
                  size={19}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  )
}

export default Catalog
