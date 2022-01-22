import React, { useEffect, useRef, useState } from "react";
import { Article, Button, Img, ImgWrapper } from "./PhotoCardStyles";
import { MdFavoriteBorder } from "react-icons/md";

export const PhotoCard = ({
  id,
  likes = 0,
  src = "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg",
}) => {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      console.log({isIntersecting});

      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });

    observer.observe(element.current);
  }, [element]);

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button>
            <MdFavoriteBorder size="32px" /> {likes} likes
          </Button>
        </>
      )}
    </Article>
  );
};
