import Designer from './components/Designer'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Products from './components/Products'
import Promotions from './components/Promotions'

export default async function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Promotions/>
      <Products/>
      <Designer/>
      <Newsletter/>
      <Footer/>
    </>
  )
}
