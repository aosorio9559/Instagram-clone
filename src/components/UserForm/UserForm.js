import React from "react";
import { UseInputValue } from "../../hooks/useInputValue";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { Error, Form, Input, Title } from "./UserFormStyles";

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  const email = UseInputValue("");
  const password = UseInputValue("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      {error && <Error>{error}</Error>}

      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input required disabled={disabled} placeholder="Email" {...email} />
        <Input
          required
          disabled={disabled}
          placeholder="Password"
          type="password"
          {...password}
        />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
    </>
  );
};
