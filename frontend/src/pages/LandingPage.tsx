import AboutPage from "../components/AboutPage"
import Footer from "../components/static/Footer"
import Header from "../components/static/Header"
import Hero from "../components/static/Hero"
import ProductScreen from "../components/static/ProductScreen"


const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <br />
      <br />
      <AboutPage/>
      <br />
      <ProductScreen/>
      <br />
      <Footer/>
    </div>
  )
}

export default LandingPage