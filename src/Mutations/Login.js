import gql from "graphql-tag";

export default gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ok
      errors {
        path
        message
      }
    }
  }
`;
