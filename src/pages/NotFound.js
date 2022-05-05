import React from "react";
import { Layout } from "../components/Layout/Layout";

export const NotFound = () => {
  return (
    <Layout title="Page not found" subtitle="404">
      <p>We couldn't find the page you were looking for :(</p>
    </Layout>
  );
};
