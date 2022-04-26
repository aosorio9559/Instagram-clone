import React from "react";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards/ListOfPhotoCards";
import { useGetPhotos } from "../hoc/withPhotos";

export const ListOfPhotoCardsContainer = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId);

  if (error) return <h2>Internal Server Error</h2>;
  if (loading) return <h2>Loading...</h2>;

  return <ListOfPhotoCards data={data} />;
};
