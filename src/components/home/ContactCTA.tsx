import { ArrowRight, ArrowUpRight, MapPin, MessageCircle } from 'lucide-react'
import { Link } from 'react-router'
import './ContactCTA.css'

function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="contact-cta__container">
        <div className="contact-cta__number">
          03
        </div>

        <div className="contact-cta__eyebrow">
          <span />
          03 / Ready to ride?
        </div>

        <div className="contact-cta__main">
          <div className="contact-cta__heading">
            <h2>
              YOUR NEXT
              <br />
              <span>RIDE STARTS</span>
              <br />
              HERE.
            </h2>
          </div>

          <div className="contact-cta__side">
            <p>
              See something you like? Visit DRIVE or contact us to ask about
              availability and find the motorcycle that fits you.
            </p>

            <div className="contact-cta__actions">
              <Link to="/contact" className="contact-cta__primary">
                Contact DRIVE
                <ArrowRight size={18} />
              </Link>

              <Link to="/catalog" className="contact-cta__secondary">
                Browse inventory
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="contact-cta__bottom">
          <div className="contact-cta__location">
            <div className="contact-cta__icon">
              <MapPin size={20} />
            </div>

            <div>
              <span>Visit our location</span>
              <strong>1406 S State Road 7</strong>
              <small>Hollywood, FL 33023</small>
            </div>
          </div>

          <div className="contact-cta__divider" />

          <div className="contact-cta__help">
            <div className="contact-cta__icon">
              <MessageCircle size={20} />
            </div>

            <div>
              <span>Questions?</span>
              <strong>Ask about a motorcycle</strong>
              <small>Availability & information</small>
            </div>
          </div>

          <Link to="/contact" className="contact-cta__round-link">
            <ArrowUpRight size={23} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA