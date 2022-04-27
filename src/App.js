import React from "react";
import { ListOfCategories } from "./components/ListOfCategories/ListOfCategories";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo/Logo";
import { ListOfPhotoCardsContainer } from "./container/ListOfPhotoCardsContainer";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";

export const App = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCardsContainer categoryId={1} />
        </>
      )}
    </>
  );
};
