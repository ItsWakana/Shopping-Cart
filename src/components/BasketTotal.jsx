import { useContext } from 'react';
import CartContext from './context/CartContext';

const BasketTotal = () => {

    const { totalPrice } = useContext(CartContext);

    return (
        <h2>Total: £{totalPrice}</h2>
    )

}

export default BasketTotal;