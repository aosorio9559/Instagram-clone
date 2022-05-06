import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from "./FavButtonStyles";
import PropTypes from "prop-types";

export const FavButton = ({ likes, liked, onClick }) => {
  /** React interprets titlecased constants as a rendered component */
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={onClick}>
      <Icon size="32px" /> {likes} likes
    </Button>
  );
};

FavButton.propTypes = {
  likes: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
