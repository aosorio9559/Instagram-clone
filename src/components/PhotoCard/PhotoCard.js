import React from "react";
import { Article, Img, ImgWrapper } from "./PhotoCardStyles";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton/FavButton";
import { useToggleLikeMutation } from "../../container/ToggleLikeMutation";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const PhotoCard = ({
  id,
  liked,
  likes = 0,
  src = "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg",
}) => {
  const [show, element] = useNearScreen();
  const { mutation } = useToggleLikeMutation();

  const handleFavClick = () => {
    mutation({
      variables: { input: { id } },
    });
  };

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string,
  likes: (props, propName) => {
    const propValue = props[propName];

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`);
    }

    if (propValue < 0) {
      return new Error("Likes can't be less than zero");
    }
  },
};
