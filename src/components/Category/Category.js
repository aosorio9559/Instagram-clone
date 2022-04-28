import React from "react";
import { Link, Image } from "./CategoryStyles";

const DEFAUL_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

export const Category = ({ cover, path, emoji }) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
);
