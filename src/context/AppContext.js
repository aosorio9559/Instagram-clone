import React, { createContext, useState } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const activateAuth = () => setIsUserLogged(true);

  return (
    <AppContext.Provider value={{ isUserLogged, activateAuth }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
