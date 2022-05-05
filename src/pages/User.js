import React, { useContext } from "react";
import { Layout } from "../components/Layout/Layout";
import { SubmitButton } from "../components/SubmitButton/SubmitButton";
import { AppContext } from "../context/AppContext";

export const User = () => {
  const { removeAuth } = useContext(AppContext);

  return (
    <Layout title="User">
      <SubmitButton onClick={removeAuth}>Logout</SubmitButton>
    </Layout>
  );
};
