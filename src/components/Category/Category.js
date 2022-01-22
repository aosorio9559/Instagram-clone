import React from "react";
import { Anchor, Image } from "./CategoryStyles";

const DEFAUL_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

export const Category = ({ cover, path, emoji }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
);
