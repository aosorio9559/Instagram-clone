import React from "react";
import { ListOfCategories } from "./components/ListOfCategories/ListOfCategories";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo/Logo";
import { ListOfPhotoCardsContainer } from "./container/ListOfPhotoCardsContainer";

export const App = () => {
  const urlParams = new URLSearchParams(location.search);
  const detailId = urlParams.get("detail");

  console.log(detailId);

  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCardsContainer categoryId={3} />
    </>
  );
};
