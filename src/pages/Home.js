import React from "react";
import { useParams } from "react-router-dom";
import { ListOfCategories } from "../components/ListOfCategories/ListOfCategories";
import { ListOfPhotoCardsContainer } from "../container/ListOfPhotoCardsContainer";

export const Home = () => {
  const { categoryId } = useParams();

  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCardsContainer categoryId={categoryId} />
    </>
  );
};
