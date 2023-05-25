import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {

    const [darkTheme, setDarkTheme] = useState(false);

    const toggleDarkTheme = () => {
        setDarkTheme((prevTheme) => !prevTheme);
    };

    return (
        <ThemeContext.Provider value={{
            darkTheme, toggleDarkTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}