import React, { useContext } from "react";
import { UserForm } from "../components/UserForm/UserForm";
import { useRegisterMutation } from "../container/RegisterMutation";
import { AppContext } from "../context/AppContext";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext);
  const { mutation, mutationLoading, mutationError } = useRegisterMutation();
  const handleSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    mutation({ variables }).then(activateAuth).catch(console.error);
  };
  const errorMessage = mutationError && mutationError.graphQLErrors[0].message;

  return (
    <UserForm
      disabled={mutationLoading}
      error={errorMessage}
      onSubmit={handleSubmit}
      title="Sign up"
    />
  );
};
