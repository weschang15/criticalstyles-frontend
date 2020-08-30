import { gql } from "@apollo/client";

export default gql`
  mutation Logout {
    logout {
      ok
      errors {
        path
        message
      }
    }
  }
`;
