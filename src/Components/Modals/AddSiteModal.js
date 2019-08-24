import React, { useContext, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";
import { AuthContext } from "../../contexts/AuthContext";
import { CREATE_SITE } from "../../Mutations";
import ModalImage from "../../images/create-site.svg";

import {
  Fields,
  Modal,
  Spinner,
  FieldLabel,
  PrimaryButton
} from "../../Elements";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  input[type="text"],
  input[type="url"] {
    background-color: ${({ theme }) => theme.gray};
    box-shadow: none;
    margin: 0 0 1em;
    width: 100%;
  }
`;

const Group = styled.div`
  padding: 1em;
  &:last-of-type {
    display: flex;
    justify-content: flex-end;
    background-color: ${({ theme }) => theme.gray};
    margin: 0;
    padding: 0.5em 1em;
    width: 100%;
  }

  button {
    margin-right: 1em;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const ModalHeader = styled.header`
  align-items: flex-end;
  display: flex;
  padding: 1em 1em 0;
  figure {
    margin: 0 1em 0 0;
    flex: 1 0 120px;
    img {
      display: block;
    }
  }
  h5 {
    margin-top: 0;
  }
  p {
    font-size: 16px;
    margin: 0;
  }
`;

const INITIAL_FIELDS = {
  name: ""
};

function AddSiteModal({ on, toggle }) {
  const { accountId } = useContext(AuthContext);
  const [errors, setErrors] = useState([]);
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [createSite, { loading }] = useMutation(CREATE_SITE);

  const handleChange = e =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await createSite({
      variables: {
        input: { ...fields, accountId }
      }
    });

    if (data && data.createSite) {
      const {
        createSite: { ok, errors }
      } = data;
      if (!ok) {
        return setErrors(errors);
      }

      setFields(INITIAL_FIELDS);
      toggle();
    }
  };

  const cancel = e => {
    e.preventDefault();
    setFields(INITIAL_FIELDS);
    toggle();
  };

  return (
    <Modal toggle={toggle} on={on}>
      <ModalHeader>
        <figure>
          <img src={ModalImage} alt="Modal for adding a new site" />
        </figure>
        <div>
          <h5>Create Site</h5>
          <p>
            Your sites allow you to organize all of your generated critical CSS
            files
          </p>
        </div>
      </ModalHeader>
      <>
        {errors.length > 0 && (
          <ul>
            {errors.map(({ message }, i) => (
              <li key={i}>{message}</li>
            ))}
          </ul>
        )}
        <Form onSubmit={handleSubmit}>
          <Group>
            <FieldLabel htmlFor="name">Site Name</FieldLabel>
            <Fields
              type="text"
              id="name"
              placeholder="Corporate website"
              onChange={handleChange}
              value={fields.name}
              name="name"
              required
            />
          </Group>
          <Group>
            <PrimaryButton onClick={cancel} override="gray">
              Cancel
            </PrimaryButton>
            <Fields type="submit">
              {loading ? <Spinner /> : "Create Sites"}
            </Fields>
          </Group>
        </Form>
      </>
    </Modal>
  );
}

export default AddSiteModal;