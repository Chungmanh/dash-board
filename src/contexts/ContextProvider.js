import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  return (
    <StateContext.Provider value={{ isOpenSidebar, setIsOpenSidebar }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
