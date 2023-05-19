import { Link, Routes, Route } from "react-router-dom";
import BasketIcon from "./components/BasketIcon";
import Home from "./components/Home";
import Store from "./components/Store";
import ShoppingCart from "./components/ShoppingCart";
import { useContext } from "react";
import NavigationContext from "./components/context/NavigationContext";

function App() {

  const { showItems, toggleMobileMenu } = useContext(NavigationContext);
  
  return (
    <>
        <nav className={`nav-bar ${showItems ? 'open' : ''}`}>
          <div className="nav-bar__left">
            <div className="hamburger-container" onClick={toggleMobileMenu}>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </div>
            <div className="nav-bar__left-links">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/store">Store</Link>
            </div>
          </div>
          <div className={`mobile-menu ${showItems ? 'open' : ''}`}>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/store">Store</Link>
          </div>
          <div className="nav-bar__right">
              <Link to="/basket">
                  <BasketIcon />
              </Link>
          </div>

        </nav>
        <div className="content">
          
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/store" element={<Store />}/>
            <Route path="/basket" element={<ShoppingCart />}/>
          </Routes>
        </div>
    </>
  )
}

export default App
