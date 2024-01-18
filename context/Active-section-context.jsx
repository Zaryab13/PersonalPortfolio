"use client";
import React, { createContext, useContext, useState } from "react";

export const ActiveSectionContext = createContext(null);

const ActiveSectionContextProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;

export const useActiveSectionContext = () => {
  const ctx = useContext(ActiveSectionContext);

  if (ctx === null) {
    throw new Error(
      "UseActiveSectionContext must be used within an activeSectionContextProvider"
    );
  }

  return ctx;
};
