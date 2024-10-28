import { createContext, useContext, useState } from "react";

export const Context = createContext({
  showsignpop: true,
});

export const ContextProvider = ({ children }) => {
  const [showsignpop, setShowSignPop] = useState(false);
  return (
    <Context.Provider value={{ showsignpop , setShowSignPop }}>{children}</Context.Provider>
  );
};

export function useThem() {
  return useContext(Context);
}
