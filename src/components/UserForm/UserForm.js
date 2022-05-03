import React from "react";
import { UseInputValue } from "../../hooks/useInputValue";
import { Button, Form, Input } from "./UserFormStyles";

export const UserForm = ({ onSubmit, title }) => {
  const email = UseInputValue("");
  const password = UseInputValue("");

  return (
    <>
      <h2>{title}</h2>

      <Form onSubmit={onSubmit}>
        <Input placeholder="Email" {...email} />
        <Input placeholder="Password" type="password" {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  );
};
