import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {

    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        const storageTheme = localStorage.getItem('theme');

        if (storageTheme === 'dark') {
            setDarkTheme(true);
        } else if (storageTheme === 'light') {
            setDarkTheme(false);
        }

    },[]);

    const toggleDarkTheme = () => {
        setDarkTheme((prevTheme) => {
            if (!prevTheme) {
                localStorage.setItem('theme', "dark");
            } else {
                localStorage.setItem('theme', "light");
            }

            return !prevTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{
            darkTheme, toggleDarkTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}