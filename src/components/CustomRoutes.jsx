import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Store from './Store';
import ShoppingCart from './ShoppingCart';

const CustomRoutes = ( { quantity }) => {
    return (
        <BrowserRouter>
            <div className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/store">Store</Link>
                <Link to="/basket">
                    <BasketIcon quantity={quantity}/>
                </Link>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/basket" element={<ShoppingCart />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default CustomRoutes;