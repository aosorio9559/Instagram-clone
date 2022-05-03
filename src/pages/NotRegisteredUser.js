import React, { useContext } from "react";
import { UserForm } from "../components/UserForm/UserForm";
import { AppContext } from "../context/AppContext";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext);

  return <UserForm onSubmit={activateAuth} title="Sign up" />;
};
