import React from "react";
import { MdFavoriteBorder, MdHome, MdPersonOutline } from "react-icons/md";
import { Link, Nav } from "./NavBarStyles";

const ICON_SIZE = "32px";

export const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <MdHome size={ICON_SIZE} />
      </Link>
      <Link to="/favs">
        <MdFavoriteBorder size={ICON_SIZE} />
      </Link>
      <Link to="/user">
        <MdPersonOutline size={ICON_SIZE} />
      </Link>
    </Nav>
  );
};
