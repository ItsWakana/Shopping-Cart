import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {

    const [darkTheme, setDarkTheme] = useState(false);

    const toggleDarkMode = () => {
        setDarkTheme((prevTheme) => !prevTheme);
    };

    return (
        <ThemeContext.Provider value={{
            darkTheme, toggleDarkMode
        }}>
            {children}
        </ThemeContext.Provider>
    )
}