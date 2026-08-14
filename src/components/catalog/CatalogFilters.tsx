import { Search, SlidersHorizontal, X } from 'lucide-react'

interface CatalogFiltersProps {
  search: string
  onSearchChange: (value: string) => void

  selectedBrand: string
  onBrandChange: (value: string) => void
  brands: string[]

  selectedColor: string
  onColorChange: (value: string) => void
  colors: string[]

  resultCount: number
  onReset: () => void
}

function CatalogFilters({
  search,
  onSearchChange,
  selectedBrand,
  onBrandChange,
  brands,
  selectedColor,
  onColorChange,
  colors,
  resultCount,
  onReset,
}: CatalogFiltersProps) {
  const hasFilters =
    search.trim() !== '' ||
    selectedBrand !== 'all' ||
    selectedColor !== 'all'

  return (
    <div className="catalog-filters">
      <div className="catalog-filters__top">
        <div className="catalog-filters__title">
          <SlidersHorizontal
            size={16}
            aria-hidden="true"
          />

          <span>Filter inventory</span>
        </div>

        <div
          className="catalog-filters__count"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {resultCount} {resultCount === 1 ? 'motorcycle' : 'motorcycles'}
        </div>
      </div>

      <div className="catalog-filters__controls">
        <label className="catalog-filters__search">
          <Search
            size={17}
            aria-hidden="true"
          />

          <input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search motorcycles..."
            aria-label="Search motorcycles"
          />

          {search && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
            >
              <X
                size={15}
                aria-hidden="true"
              />
            </button>
          )}
        </label>

        <label className="catalog-filters__select">
          <span>Brand</span>

          <select
            value={selectedBrand}
            onChange={(event) => onBrandChange(event.target.value)}
          >
            <option value="all">
              All brands
            </option>

            {brands.map((brand) => (
              <option
                key={brand}
                value={brand}
              >
                {brand}
              </option>
            ))}
          </select>
        </label>

        <label className="catalog-filters__select">
          <span>Color</span>

          <select
            value={selectedColor}
            onChange={(event) => onColorChange(event.target.value)}
          >
            <option value="all">
              All colors
            </option>

            {colors.map((color) => (
              <option
                key={color}
                value={color}
              >
                {color}
              </option>
            ))}
          </select>
        </label>

        {hasFilters && (
          <button
            type="button"
            className="catalog-filters__reset"
            onClick={onReset}
          >
            <X
              size={15}
              aria-hidden="true"
            />

            Reset filters
          </button>
        )}
      </div>
    </div>
  )
}

export default CatalogFilters