import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import ShoppingCart from "./components/ShoppingCart";
import CartModal from "./components/modals/CartModal";
import Navbar from "./components/NavBar";
import ErrorModal from "./components/ErrorModal";
import StoreProvider from "./components/context/StoreContext";

function App() {
  
  return (
    <>
        <Navbar />
        <CartModal />
        <ErrorModal />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/store" element={
              <StoreProvider>
                <Store />
              </StoreProvider>
            }/>
            <Route path="/basket" element={<ShoppingCart />}/>
          </Routes>
    </>
  )
}

export default App
