import ExploreIntro from "./components/ExploreIntro"
import Navbar from "./components/Navbar"
import Product from "./components/Product"

function App() {

  return (
    <>
    {/* <Navbar/>
    <ExploreIntro/> */}
    <Product 
      startingBid={100}
      currentBid={157}
      endDate="1 day 12 hrs 43 minutes"
      productTitle="Sony Black Headphones"
      productImage="src\assets\sony-headphone.png"
      showBidButton={true}
      />
    </>
  )
}

export default App
