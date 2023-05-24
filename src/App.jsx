import { Link, Routes, Route } from "react-router-dom";
import BasketIcon from "./components/BasketIcon";
import Home from "./components/Home";
import Store from "./components/Store";
import ShoppingCart from "./components/ShoppingCart";
import CartModal from "./components/modals/CartModal";
import { useContext } from "react";
import NavigationContext from "./components/context/NavigationContext";

function App() {

  const { 
    showItems, 
    toggleMobileMenu,
    showBasket,
    setShowBasket 
  
  } = useContext(NavigationContext);
  
  return (
    <>
        <nav className={`nav-bar ${showItems ? 'open' : ''}`}>
          <div className="nav-bar__top">
            <div className={`hamburger-container ${showItems ? 'open' : ''}`} onClick={toggleMobileMenu}>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </div>
            <div className="desktop-menu">
              <Link className="nav-link" to="/">HOME</Link>
              <Link className="nav-link" to="/store">GAMES</Link>
            </div>
            <BasketIcon />
          </div>
          <div className={`mobile-menu ${showItems ? 'open' : ''}`}>
            <Link className="nav-link" to="/">HOME</Link>
            <Link className="nav-link" to="/store">GAMES</Link>
          </div>
        </nav>
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
