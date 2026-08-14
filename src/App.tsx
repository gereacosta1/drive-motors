import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'

import Home from './pages/Home'

const Catalog = lazy(() => import('./pages/Catalog'))
const Product = lazy(() => import('./pages/Product'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/catalog"
          element={<Catalog />}
        />

        <Route
          path="/product/:slug"
          element={<Product />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Suspense>
  )
}

export default App