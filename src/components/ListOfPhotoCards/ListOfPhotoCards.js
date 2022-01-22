import React from "react";
import { PhotoCard } from "../PhotoCard/PhotoCard";

export const ListOfPhotoCards = () => (
  <>
    {[1, 2, 3, 4, 5, 6, 7].map((photoCard) => (
      <PhotoCard key={photoCard} />
    ))}
  </>
);
