import React from "react";
import { useRegisterMutation } from "../../container/RegisterMutation";
import { UseInputValue } from "../../hooks/useInputValue";
import { Button, Error, Form, Input, Title } from "./UserFormStyles";

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
        <Button disabled={disabled}>{title}</Button>
      </Form>
    </>
  );
};
