import React from "react";
import { ListOfCategories } from "./components/ListOfCategories/ListOfCategories";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards/ListOfPhotoCards";
import { Logo } from "./components/Logo/Logo";

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
);
