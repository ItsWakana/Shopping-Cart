import { useContext } from "react";
import NavigationContext from "./context/NavigationContext";
import { Link } from "react-router-dom";
import BasketIcon from "./BasketIcon";

const Navbar = () => {

    const { showItems, toggleMobileMenu } = useContext(NavigationContext);

    return (
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
    )
}

export default Navbar;