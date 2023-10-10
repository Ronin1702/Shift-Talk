import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        password
      }
    }
  }
`;

export const ADD_COMPLAINT = gql`
  mutation AddComplaint($text: String!, $carId: ID!) {
    addComplaint(text: $text, carId: $carId) {
      _id
      text
      author
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($commentText: String!, $complaintId: ID!) {
    addComment(commentText: $commentText, complaintId: $complaintId) {
      _id
      text
      author
    }
  }
`;

export const ADD_CAR = gql`
  mutation AddCar($make: String!, $model: String!, $year: Int!) {
    addCar(make: $make, model: $model, year: $year) {
      _id
      make
      model
      year
    }
  }
`;

export const REMOVE_COMPLAINT = gql`
  mutation RemoveComplaint($complaintId: ID!) {
    removeComplaint(complaintId: $complaintId) {
      _id
      text
      author
    }
  }
`;

export const UPDATE_ME = gql`
  mutation UpdateMe(
    $username: String
    $password: String
    $currentPassword: String
  ) {
    updateMe(
      username: $username
      password: $password
      currentPassword: $currentPassword
    ) {
      user {
        _id
        username
        password
      }
    }
  }
`;
