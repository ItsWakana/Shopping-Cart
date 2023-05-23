import { useContext } from 'react';
import CartContext from './context/CartContext';

const BasketTotal = () => {

    const { totalPrice } = useContext(CartContext);

    return (
        <h4 className="basket__header" >Total: £{totalPrice}</h4>
    )

}

export default BasketTotal;