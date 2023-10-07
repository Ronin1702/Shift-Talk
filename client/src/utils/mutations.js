import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
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
