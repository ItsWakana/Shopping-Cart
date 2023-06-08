import { useContext, useEffect } from "react";
import NavigationContext from "./context/NavigationContext";
import { Link } from "react-router-dom";
import BasketIcon from "./BasketIcon";
import { ThemeContext } from "./context/ThemeContext";
import CartContext from "./context/CartContext";

const Navbar = () => {

    const { showItems, toggleMobileMenu } = useContext(NavigationContext);
    const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);
    const { handleLoginClick, isLoggedIn, user } = useContext(CartContext);

    useEffect(() => {

      if (darkTheme) {
        document.documentElement.classList.add('dark-theme');
      } else {
        document.documentElement.classList.remove('dark-theme');
      }

    },[darkTheme]);

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
            {/* <div onClick={handleLoginClick} className="nav-link">{`${isLoggedIn ? 'SIGN OUT' : 'SIGN IN'}`}</div> */}
            {isLoggedIn ? 
            <div className="nav-link logged">
              <a onClick={handleLoginClick}>SIGN OUT</a>
              {/* <p>{user.displayName}</p> */}
              <img className="profile-icon" src={user.photoURL} alt="" />
            </div> : 
            <div onClick={handleLoginClick} className="nav-link">SIGN IN</div>}
          </div>
          <div className="nav-bar__right-side">
          <div>
            <input onClick={toggleDarkTheme} type="checkbox" className="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="checkbox-label">
              <span className="ball"></span>
            </label>
          </div>
          <BasketIcon />
          </div>
        </div>
        <div className={`mobile-menu ${showItems ? 'open' : ''}`}>
          <Link className="nav-link" to="/">HOME</Link>
          <Link className="nav-link" to="/store">GAMES</Link>
        </div>
      </nav>
    )
}

export default Navbar;