import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo/Logo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/NavBar/NavBar";

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet/:categoryId" element={<Home />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
};
