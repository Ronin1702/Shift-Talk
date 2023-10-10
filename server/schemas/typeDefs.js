const typeDefs = `
  # Define which fields are accessible from the Class model
  type User {
    _id: ID
    username: String
    email: String
    password: String
    comments: [Comment]
    complaints: [Complaint]
  }

  type Car {
    _id: ID
    make: String
    model: String
    year: Int
    complaints: [Complaint]
  }

  type Complaint {
    _id: ID
    text: String
    author: String
    createdAt: String
    car: Car
    user: User
    comments: [Comment]
  }

  type Comment {
    _id: ID
    text: String
    author: String
    createdAt: String
    complaint: Complaint
    user: User
    car: Car
  }

  type Auth {
    token: ID!
    user: User
  }

  # Define which queries the front end is allowed to make and what data is returned

  type Query {
    user(_id: ID): User
    car(make: String!, model: String!, year: Int!): Car
    complaint(_id: ID): Complaint
    comment(_id: ID): Comment
    complaints(carId: ID): [Complaint]
    comments(complaintId: ID): [Comment]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addComplaint(text: String!, carId: ID): Complaint
    addComment(complaintId: ID!, commentText: String!): Comment
    addCar(make: String!, model: String!, year: Int!): Car
  }
`;

module.exports = typeDefs;
