import { useMutation } from "@apollo/react-hooks";
import { darken } from "polished";
import React, { useState } from "react";
import styled from "styled-components";
import { Fields, Spinner } from "../../Elements";
import { LOGIN } from "../../Mutations";

const Form = styled.form`
  label {
    color: ${({ theme }) => darken(0.5, theme.gray)};
    font-size: 14px;
    font-weight: 600;
  }

  input {
    display: block;
    margin: 0 0 1em;
    width: 100%;
  }
`;

const INITIAL_FIELDS = {
  email: "",
  password: ""
};

function LoginForm() {
  const [errors, setErrors] = useState([]);
  const [fields, setFields] = useState(INITIAL_FIELDS);

  const [login, { loading }] = useMutation(LOGIN);

  const handleChange = e =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    const { data } = await login({
      variables: {
        input: fields
      }
    });

    if (data && data.login) {
      const { ok, errors } = data.login;
      if (!ok) {
        return setErrors(errors);
      }

      setFields(INITIAL_FIELDS);
      // window.location.assign(process.env.REACT_APP_ADMIN_URL);
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <Form onSubmit={handleSubmit}>
      {errors.map((error, i) => (
        <strong key={i}>{error.message}</strong>
      ))}
      <label>Email</label>
      <Fields
        type="email"
        placeholder="jane@doe.com"
        name="email"
        value={fields.email}
        onChange={handleChange}
        autoComplete="username"
        autoFocus
        required
      />
      <label>Password</label>
      <Fields
        type="password"
        placeholder="&#11089;&#11089;&#11089;&#11089;&#11089;&#11089;&#11089;&#11089;"
        name="password"
        value={fields.password}
        onChange={handleChange}
        autoComplete="current-password"
        required
      />
      <Fields type="submit">Login</Fields>
    </Form>
  );
}

export default LoginForm;
