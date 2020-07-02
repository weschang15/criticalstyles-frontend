import { darken } from "polished";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-apollo";
import styled from "styled-components";
import { PageSection, PrimaryCard } from "../../Elements";
import { PublicLayout } from "../../Layouts/Layouts";
import { AUTH } from "../../Queries";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Wrapper = styled(PageSection)`
  padding: 1.5em;
`;

const FormContainer = styled.div`
  margin: 0 auto;
  max-width: 640px;
`;

const FormWrapper = styled(PrimaryCard)`
  background-color: #fff;
  border: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  @media only screen and (min-width: 22.75em) {
    border-top-right-radius: 6px;
  }
`;

const FormTabs = styled.ul`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  display: inline-flex;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
  z-index: 3;
`;

const FormTab = styled.li`
  background-color: #fff;
  color: ${({ theme }) => darken(0.25, theme.gray)};
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  padding: 0.75rem 1rem;
  text-transform: uppercase;
  user-select: none;
  &:first-of-type {
    padding-right: 0;
  }

  &.is-active {
    color: ${({ theme }) => darken(0.5, theme.gray)};
  }
`;

function Join() {
  // State for managing whether login tab is showing
  const [showingLogin, toggleTab] = useState(true);
  const { data } = useQuery(AUTH);

  useEffect(() => {
    if (data && data.auth) {
      const { ok } = data.auth;
      if (ok) {
        window.location.assign(process.env.REACT_APP_ADMIN_URL);
      }
    }
  });

  const handleToggle = (e) => {
    const target = e.target;
    const parent = target.parentNode;
    const active = parent.querySelector(".is-active");

    if (target === active) {
      return;
    }

    active.classList.toggle("is-active");
    target.classList.toggle("is-active");

    return toggleTab(!showingLogin);
  };

  return (
    <PublicLayout>
      <Wrapper bgColor="rgba(59, 53, 97, 1)">
        <FormContainer>
          <FormTabs>
            <FormTab
              onClick={handleToggle}
              className={showingLogin && "is-active"}
            >
              My account
            </FormTab>
            <FormTab onClick={handleToggle}>Register a new account</FormTab>
          </FormTabs>
          <FormWrapper>
            {showingLogin ? <LoginForm /> : <RegisterForm />}
          </FormWrapper>
        </FormContainer>
      </Wrapper>
    </PublicLayout>
  );
}

export default Join;
