import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import ShoppingCart from "./components/ShoppingCart";
import CartModal from "./components/modals/CartModal";
import Navbar from "./components/NavBar";

function App() {
  
  return (
    <>
        <Navbar />
        <CartModal />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/store" element={<Store />}/>
            <Route path="/basket" element={<ShoppingCart />}/>
          </Routes>
    </>
  )
}

export default App
