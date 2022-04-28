import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from "./FavButtonStyles";

export const FavButton = ({ likes, liked, onClick }) => {
  /** React interprets titlecased constants as a rendered component */
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={onClick}>
      <Icon size="32px" /> {likes} likes
    </Button>
  );
};
