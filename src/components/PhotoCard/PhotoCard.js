import React from "react";
import { Article, Img, ImgWrapper } from "./PhotoCardStyles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton/FavButton";
import { useToggleLikeMutation } from "../../container/ToggleLikeMutation";

export const PhotoCard = ({
  id,
  likes = 0,
  src = "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg",
}) => {
  const [show, element] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const { mutation, mutationLoading, mutationError } = useToggleLikeMutation();
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
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};
