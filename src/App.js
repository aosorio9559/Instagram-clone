import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo/Logo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/NavBar/NavBar";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";

const isUserLogged = false;

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet/:categoryId" element={<Home />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route
          path="/favs"
          element={isUserLogged ? <Favs /> : <NotRegisteredUser />}
        />
        <Route
          path="/user"
          element={isUserLogged ? <User /> : <NotRegisteredUser />}
        />
        {/* <Route path="/register" component={NotRegisteredUser} /> */}
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
};
