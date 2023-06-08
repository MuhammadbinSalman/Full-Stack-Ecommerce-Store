import Designer from './components/Designer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
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
    </>
  )
}
