import { Route, Routes } from 'react-router'

import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Product from './pages/Product'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/catalog" element={<Catalog />} />

      <Route
        path="/product/:slug"
        element={<Product />}
      />

      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App