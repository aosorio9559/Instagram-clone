import React from "react";
import { UseInputValue } from "../../hooks/useInputValue";

export const UserForm = ({ onSubmit }) => {
  const email = UseInputValue("");
  const password = UseInputValue("");

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Email" {...email} />
      <input placeholder="Password" type="password" {...password} />
      <button>Log in</button>
    </form>
  );
};
