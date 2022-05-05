import React from "react";
import { useParams } from "react-router-dom";
import { ListOfCategories } from "../components/ListOfCategories/ListOfCategories";
import { ListOfPhotoCardsContainer } from "../container/ListOfPhotoCardsContainer";
import { Layout } from "../components/Layout/Layout";

export const Home = () => {
  const { categoryId } = useParams();

  return (
    <Layout title="Home" subtitle="Your pet app">
      <ListOfCategories />
      <ListOfPhotoCardsContainer categoryId={categoryId} />
    </Layout>
  );
};
