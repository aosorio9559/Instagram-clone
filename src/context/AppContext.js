import React, { createContext, useState } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLogged] = useState(() => {
    return window.sessionStorage.getItem("token");
  });

  const activateAuth = (token) => {
    setIsUserLogged(true);
    window.sessionStorage.setItem("token", token);
  };

  const removeAuth = () => {
    setIsUserLogged(false);
    window.sessionStorage.removeItem("token");
  };

  return (
    <AppContext.Provider value={{ isUserLoggedIn, activateAuth, removeAuth }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
