import { useContext, useEffect, useState } from "react"
import CartContext from "./context/CartContext"

const ErrorModal = () => {

    const { cartError, resetError } = useContext(CartContext);
    const [displayModal, setDisplayModal] = useState(false);

    useEffect(() => {
        if (cartError) {
            setDisplayModal(true);
            const timeoutId = setTimeout(() => {
                setDisplayModal(false);
                resetError();
            }, 3500);

            return () => {
                clearTimeout(timeoutId);
            }
        }

    },[cartError]);

    return (
        <>
        <div className={`error-modal ${displayModal ? 'active' : ''}`}>
            {cartError}
        </div>
        </>
    )
}

export default ErrorModal;