import { gql, useQuery } from "@apollo/client";
import React from "react";
import { ListOfFavs } from "../components/ListOfFavs/ListOfFavs";

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const FavsWithQuery = () => {
  const { loading, error, data } = useQuery(GET_FAVS, {
    fetchPolicy: "network-only",
  });
  if (error) return <h2>Internal Server Error</h2>;
  if (loading) return <h2>Loading...</h2>;

  const { favs } = data;

  return <ListOfFavs favs={favs} />;
};
