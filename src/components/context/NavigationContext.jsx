import { createContext, useState } from "react";

const NavigationContext = createContext({});

export const NavigationProvider = ({ children }) => {

  const [showItems, setShowItems] = useState(false);

  const toggleMobileMenu = () => {
    setShowItems((prev) => !prev);
  }

  const hideMobileMenu = () => {
    setShowItems(false);
  }

    return (
        <NavigationContext.Provider value={{
            showItems, toggleMobileMenu, hideMobileMenu
        }}>
            {children}
        </NavigationContext.Provider>
    )
}

export default NavigationContext;