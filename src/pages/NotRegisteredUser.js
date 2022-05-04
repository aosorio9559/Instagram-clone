import React, { useContext } from "react";
import { UserForm } from "../components/UserForm/UserForm";
import { useLoginMutation } from "../container/LoginMutation";
import { useRegisterMutation } from "../container/RegisterMutation";
import { AppContext } from "../context/AppContext";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext);
  const {
    mutation: RegisterMutation,
    mutationLoading: registerMutationLoading,
    mutationError: registerMutationError,
  } = useRegisterMutation();

  const handleRegister = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    RegisterMutation({ variables })
      .then(({ data }) => {
        const { signup } = data;
        activateAuth(signup);
      })
      .catch(console.error);
  };
  const registerErrorMessage =
    registerMutationError && registerMutationError.graphQLErrors[0].message;

  const {
    mutation: loginMutation,
    mutationLoading: loginMutationLoading,
    mutationError: loginMutationError,
  } = useLoginMutation();

  const handleLogin = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    loginMutation({ variables })
      .then(({ data }) => {
        const { login } = data;
        activateAuth(login);
      })
      .catch(console.error);
  };
  const loginErrorMessage =
    loginMutationError && loginMutationError.graphQLErrors[0].message;

  return (
    <>
      <UserForm
        disabled={registerMutationLoading}
        error={registerErrorMessage}
        onSubmit={handleRegister}
        title="Sign up"
      />

      <UserForm
        disabled={loginMutationLoading}
        error={loginErrorMessage}
        onSubmit={handleLogin}
        title="Log in"
      />
    </>
  );
};
