import React from "react";
import { FavsWithQuery } from "../container/GetFavorites";
import { Layout } from "../components/Layout/Layout";

export const Favs = () => (
  <Layout title="Favs">
    <FavsWithQuery />
  </Layout>
);
