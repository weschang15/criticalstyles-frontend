import { darken } from "polished";
import React from "react";
import styled from "styled-components";
import NotFoundIllustration from "../../assets/404-illustration.svg";
import { PrimaryButton } from "../../Elements";
import { PublicLayout } from "../../Layouts/Layouts";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.purple};
  min-height: 400px;
  padding: 1em;
  text-align: center;
  h2 {
    color: ${({ theme }) => theme.white};
  }
  p {
    color: ${({ theme }) => darken(0.5, theme.gray)};
  }

  img {
    width: 280px;
  }

  @media only screen and (min-width: 30em) {
    align-items: center;
    display: grid;
    grid-gap: 2em;
    grid-template-columns: minmax(auto, 320px) minmax(auto, 640px);
    justify-content: center;
    min-height: 500px;
    text-align: left;
    img {
      width: initial;
    }
  }
  @media only screen and (min-width: 64em) {
    min-height: 600px;
  }
`;

function NotFound({ history }) {
  return (
    <PublicLayout>
      <Wrapper>
        <figure>
          <img src={NotFoundIllustration} alt="404, Page not found!" />
        </figure>
        <div>
          <h2>Looks like you're a bit lost!</h2>
          <PrimaryButton bgColor="salmon" onClick={() => history.goBack()}>
            Get out. Get out now...
          </PrimaryButton>
        </div>
      </Wrapper>
    </PublicLayout>
  );
}

export default NotFound;
