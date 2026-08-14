import Header from '../components/layout/Header'
import Hero from '../components/home/Hero'
import FeaturedBikes from '../components/home/FeaturedBikes'
import WhyDrive from '../components/home/WhyDrive'
import ContactCTA from '../components/home/ContactCTA'
import Footer from '../components/layout/Footer'

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <FeaturedBikes />
        <WhyDrive />
        <ContactCTA />
      </main>

      <Footer />
    </>
  )
}

export default Home