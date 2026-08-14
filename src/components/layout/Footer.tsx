import { ArrowUp, ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router'
import driveLogo from '../../assets/logo/drive-logo.png'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* TOP */}
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img
                src={driveLogo}
                alt="DRIVE Motorcycles"
              />
            </Link>

            <p>
              Motorcycles built for the road ahead.
              Find your next ride in South Florida.
            </p>

            <Link to="/catalog" className="footer__inventory-link">
              Explore inventory
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="footer__navigation">
            <div className="footer__column">
              <span className="footer__label">Navigation</span>

              <nav>
                <Link to="/">Home</Link>
                <Link to="/catalog">Inventory</Link>
                <Link to="/contact">Contact</Link>
              </nav>
            </div>

            <div className="footer__column">
              <span className="footer__label">Motorcycles</span>

              <nav>
                <Link to="/catalog">Falcon 250</Link>
                <Link to="/catalog">Titan 250</Link>
                <Link to="/catalog">Carrera 250</Link>
                <Link to="/catalog">View All</Link>
              </nav>
            </div>

            <div className="footer__column footer__column--location">
              <span className="footer__label">Visit DRIVE</span>

              <a
                href="https://www.google.com/maps/search/?api=1&query=1406+S+State+Road+7+Hollywood+FL+33023"
                target="_blank"
                rel="noreferrer"
                className="footer__address"
              >
                <MapPin size={18} />

                <div>
                  <strong>1406 S State Road 7</strong>
                  <span>Hollywood, FL 33023</span>
                </div>
              </a>

              <Link to="/contact" className="footer__directions">
                Contact & location
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* LARGE BRAND WORD */}
        <div className="footer__wordmark">
          <span>DRIVE</span>
        </div>

        {/* BOTTOM */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            © {currentYear} DRIVE Motorcycles
          </div>

          <div className="footer__center">
            Hollywood · Florida · USA
          </div>

          <button
            type="button"
            className="footer__top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer