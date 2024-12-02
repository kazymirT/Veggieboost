import Banner from "./modules/Banner/Banner"
import Buying from "./modules/Buying/Buying "
import Header from "./modules/Header/Header"
import Marquee from "./modules/Marquee/Marquee"
import Order from "./modules/Order/Order"
import Products from "./modules/Products/Products"

function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <Order/>
      <Buying/>
      <Marquee />
      <Products/>
    </>
  )
}

export default App
