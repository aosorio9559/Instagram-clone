import React from "react";
import { useGetPhotos } from "../../hoc/withPhotos";
import { PhotoCard } from "../PhotoCard/PhotoCard";

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId);

  if (error) return <h2>Internal Server Error</h2>;
  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </>
  );
};
