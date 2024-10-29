import { createContext, useContext, useRef, useState } from "react";

export const Context = createContext({
  showsignpop: true,
});

export const ContextProvider = ({ children }) => {
  const sectionRefs = useRef([]);
  const [showsignpop, setShowSignPop] = useState(false);
  const [showhidecontext, setShowHideContext] = useState(null);
  const scrollToNextSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Context.Provider
      value={{
        showsignpop,
        setShowSignPop,
        scrollToNextSection,
        sectionRefs,
        showhidecontext,
        setShowHideContext,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useThem() {
  return useContext(Context);
}
