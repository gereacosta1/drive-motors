import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import './NotFound.css'

function NotFound() {
  return (
    <>
      <Header />

      <main
        className="not-found"
        aria-labelledby="not-found-title"
      >
        <div
          className="not-found__grid"
          aria-hidden="true"
        />

        <div className="not-found__content">
          <span className="not-found__code">
            404 / Page not found
          </span>

          <h1 id="not-found-title">
            WRONG
            <br />
            <span>TURN.</span>
          </h1>

          <p>
            The page you're looking for doesn't exist.
            Head back to DRIVE or explore our motorcycle inventory.
          </p>

          <div className="not-found__actions">
            <Link
              to="/"
              className="not-found__primary"
            >
              <ArrowLeft
                size={17}
                aria-hidden="true"
              />

              Back home
            </Link>

            <Link
              to="/catalog"
              className="not-found__secondary"
            >
              View inventory

              <ArrowRight
                size={16}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <span
          className="not-found__number"
          aria-hidden="true"
        >
          404
        </span>
      </main>

      <Footer />
    </>
  )
}

export default NotFound