import { transparentize } from "polished";
import styled from "styled-components";

export const QuickActionWrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => transparentize(0.9, theme.blue)};
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  padding: 1em;
  margin-top: 3em;
  transition: transform 200ms ease, margin 300ms ease;
  user-select: none;

  &:focus,
  &:hover {
    margin-top: 0;
    figure {
      margin-top: 0;
    }
  }

  &:active {
    backface-visibility: hidden;
    transform: perspective(1px) scale3d(0.97, 0.97, 0.97);
  }

  figure {
    flex: 1 0 140px;
    margin: -3em 1em 0 0;
    max-width: 140px;
    transition: margin 300ms ease;
    img {
      display: block;
    }
  }
  h5 {
    color: ${({ theme }) => theme.blue};
    line-height: 1;
    margin: 0;
  }
  p {
    display: block;
  }
`;
