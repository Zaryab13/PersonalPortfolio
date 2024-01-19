'use client'

import React, { createContext, useContext, useEffect, useState } from "react";


export const ThemeContext = createContext(null);

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState("Light");

  
    const toggleTheme = () => {
      if (theme === "light") {
        setTheme("dark");
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add('dark')
      } else {
        setTheme("light");
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove('dark')
      }
    };
    
    useEffect(() => {
      const localTheme = window.localStorage.getItem('theme');
      if (localTheme) {
        setTheme(localTheme);
        
        if (localTheme === 'dark') {
            document.documentElement.classList.add('dark')
          }
        }
        else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          setTheme('dark');
          document.documentElement.classList.add('dark')
      }
    }, []);
  
  return <ThemeContext.Provider value={{
    theme,
    toggleTheme
  }}>
    {children}
  </ThemeContext.Provider> ;
};

export default ThemeContextProvider;


export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (ThemeContext === null) {
    throw new Error("Use theme must be used within a themeConetextProvider")
  }

  return context;
}
