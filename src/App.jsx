import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import TopBanner from "./components/TopBanner"
import Header from "./components/Header"
import Footer from "./components/Footer"
import FloatingButtons from "./components/FloatingButtons"

import Home from "./pages/Home"
import Search from "./pages/Search"
import Product from "./pages/Product"

function App() {
  return (
    <BrowserRouter>
      <TopBanner />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/search" element={<Search />} />

          <Route path="/product" element={<Product />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      <FloatingButtons />
    </BrowserRouter>
  )
}

export default App