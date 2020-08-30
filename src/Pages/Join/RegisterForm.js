import { useMutation } from "@apollo/client";
import { darken } from "polished";
import React, { useState } from "react";
import styled from "styled-components";
import { Fields, Spinner } from "../../Elements";
import { CREATE_ACCOUNT } from "../../Mutations";

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
  name: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function RegisterForm() {
  const [errors, setErrors] = useState([]);
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT);

  const handleChange = (e) =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, ...rest } = fields;

    const { data } = await createAccount({
      variables: {
        input: {
          name,
          user: rest,
        },
      },
    });

    if (data && data.createAccount) {
      const { ok, errors } = data.createAccount;
      if (!ok) {
        return setErrors(errors);
      }

      setFields(INITIAL_FIELDS);
      window.location.assign(process.env.REACT_APP_ADMIN_URL);
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <Form onSubmit={handleSubmit}>
      {errors.map((error, i) => (
        <strong key={i}>{error.message}</strong>
      ))}
      <label>Organization name</label>
      <Fields
        type="text"
        placeholder="WallyDoe"
        name="name"
        value={fields.name}
        onChange={handleChange}
        autoFocus
        required
      />
      <label>First name</label>
      <Fields
        type="text"
        placeholder="Jane"
        name="firstName"
        value={fields.firstName}
        onChange={handleChange}
        required
      />
      <label>Last name</label>
      <Fields
        type="text"
        placeholder="Doe"
        name="lastName"
        value={fields.lastName}
        onChange={handleChange}
        required
      />
      <label>Email</label>
      <Fields
        type="email"
        placeholder="jane@doe.com"
        name="email"
        value={fields.email}
        onChange={handleChange}
        autoComplete="username"
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
        minLength="8"
        maxLength="1024"
        required
      />
      <Fields type="submit">Sign Up</Fields>
    </Form>
  );
}

export default RegisterForm;
