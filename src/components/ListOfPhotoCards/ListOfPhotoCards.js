import React from "react";
import { PhotoCard } from "../PhotoCard/PhotoCard";

export const ListOfPhotoCards = ({ data }) => {
  return (
    <>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </>
  );
};
