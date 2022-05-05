import React, { useContext } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo/Logo";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/NavBar/NavBar";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { AppContext } from "./context/AppContext";
import { NotFound } from "./pages/NotFound";

export const App = () => {
  const { isUserLogged } = useContext(AppContext);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pet/:categoryId" element={<Home />} />
        <Route exact path="/detail/:detailId" element={<Detail />} />
        <Route
          exact
          path="/favs"
          element={isUserLogged ? <Favs /> : <Navigate replace to="/login" />}
        />
        <Route
          exact
          path="/user"
          element={isUserLogged ? <User /> : <Navigate replace to="/login" />}
        />
        <Route
          exact
          path="/login"
          element={
            !isUserLogged ? <NotRegisteredUser /> : <Navigate replace to="/" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
};
