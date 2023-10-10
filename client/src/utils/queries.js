import { gql } from '@apollo/client';

export const GET_CAR = gql`
  query GetCar($make: String!, $model: String!, $year: Int!) {
    car(make: $make, model: $model, year: $year) {
      _id
      make
      model
      year
      complaints {
        _id
        text
        author
        createdAt
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($_id: ID!) {
    user(_id: $_id) {
      _id
      username
      email
      complaints {
        _id
        text
      }
    }
  }
`;

export const GET_COMPLAINTS = gql`
  query GetComplaints($carId: ID!) {
    complaints(carId: $carId) {
      _id
      text
      author
      createAt
    }
  }
`;

export const GET_COMPLAINT = gql`
  query GetComplaint($_id: ID!) {
    complaint(_id: $_id) {
      _id
      text
      author
      comments {
        _id
        text
        author
        createdAt
      }
    }
  }
`;

export const GET_COMMENTS = gql`
  query GetComments($complaintId: ID!) {
    comments(complaintId: $complaintId) {
      _id
      text
      author
      createdAt
    }
  }
`;

export const GET_COMMENT = gql`
  query GetComment($_id: ID!) {
    comment(_id: $_id) {
      _id
      text
      author
      createdAt
    }
  }
`;

export const GET_ME = gql`
  query GetMe {
    me {
      _id
      username
      email
      comments {
        _id
        text
        author
        createdAt
      }
      complaints {
        _id
        text
        car {
          _id
          make
          model
          year
        }
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($donations: [ID]!) {
    checkout(donations: $donations) {
      session
    }
  }
`;