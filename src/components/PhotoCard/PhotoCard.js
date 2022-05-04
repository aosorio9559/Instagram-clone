import React from "react";
import { Article, Img, ImgWrapper } from "./PhotoCardStyles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton/FavButton";
import { useToggleLikeMutation } from "../../container/ToggleLikeMutation";
import { Link } from "react-router-dom";

export const PhotoCard = ({
  id,
  likes = 0,
  src = "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg",
}) => {
  const [show, element] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const { mutation } = useToggleLikeMutation();
  const handleFavClick = () => {
    !liked &&
      mutation({
        variables: { input: { id } },
      });
    setLiked(!liked);
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
