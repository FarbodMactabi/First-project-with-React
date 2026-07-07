import TopBanner from "./components/TopBanner/TopBanner"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import FloatingButtons from "./components/FloatingButtons/FloatingButtons"

import Home from "./pages/Home"
import Search from "./pages/Search"
import Product from "./pages/Product"

function App() {
  const activePage = "product"

  return (
    <>
      <TopBanner />
      <Header />

      {activePage === "home" && <Home />}

      {activePage === "search" && <Search />}

      {activePage === "product" && <Product />}

      <Footer />
      <FloatingButtons />
    </>
  )
}

export default App