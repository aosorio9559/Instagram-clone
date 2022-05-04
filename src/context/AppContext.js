import React, { createContext, useState } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(() => {
    return window.sessionStorage.getItem("token");
  });

  const activateAuth = (token) => {
    setIsUserLogged(true);
    window.sessionStorage.setItem("token", token);
  };

  return (
    <AppContext.Provider value={{ isUserLogged, activateAuth }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
