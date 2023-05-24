import { createContext, useState } from "react";

const NavigationContext = createContext({});

export const NavigationProvider = ({ children }) => {

  const [showItems, setShowItems] = useState(false);

  const [showBasket, setShowBasket] = useState(false);


  const toggleBasketModal = () => {
    setShowBasket((prev) => !prev);
  }

  const showBasketModal = () => {
    setShowBasket(true);
  }

  const hideBasketModal = () => {
    setShowBasket(false);
  }

  const toggleMobileMenu = () => {
    setShowItems((prev) => !prev);
  }

  const hideMobileMenu = () => {
    setShowItems(false);
  }

    return (
        <NavigationContext.Provider value={{
            showItems, toggleMobileMenu, hideMobileMenu,
            showBasketModal, toggleBasketModal, 
            hideBasketModal, showBasket
        }}>
            {children}
        </NavigationContext.Provider>
    )
}

export default NavigationContext;