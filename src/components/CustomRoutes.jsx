import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Store from './Store';
import ShoppingCart from './ShoppingCart';
import BasketIcon from './BasketIcon';
// import { CartProvider } from "./components/context/CartContext";
import { CartProvider } from './context/CartContext';


const CustomRoutes = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <nav className="nav-bar">
                    <div className="nav-bar__left">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/store">Store</Link>
                    </div>
                    <div className="nav-bar__right">
                        <Link to="/basket">
                            <BasketIcon />
                        </Link>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/basket" element={<ShoppingCart />}/>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    )
}

export default CustomRoutes;