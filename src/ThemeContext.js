import { createContext, useContext, useState } from "react";


const ThemeContext = createContext(undefined)

export const ThemeProvider = ({ children }) => {
    const [ theme, setTheme] = useState("");

    const toggleTheme = () => {
        console.log("YES");
        theme === "light" ? setTheme("dark") : setTheme("light");
    }
    return <ThemeContext.Provider value={{value:[theme,toggleTheme]}}>{children}</ThemeContext.Provider>
};


export const useTheme = () => useContext(ThemeContext);