import Banner from "./modules/Banner/Banner"
import Buying from "./modules/Buying/Buying "
import Footer from "./modules/Footer/Footer"
import Fresh from "./modules/Fresh/Fresh"
import Header from "./modules/Header/Header"
import Marquee from "./modules/Marquee/Marquee"
import Order from "./modules/Order/Order"
import Products from "./modules/Products/Products"
import Shipping from "./modules/Shipping/Shipping"

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Order />
      <Buying />
      <Marquee />
      <Products />
      <Shipping />
      <Fresh />
      <Footer />
    </>
  )
}

export default App
