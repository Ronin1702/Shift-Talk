const typeDefs = `
  # Define which fields are accessible from the Class model
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Car {
    _id: ID
    make: String
    model: String
    year: Int
  }

  type Complaint {
    _id: ID
    text: String
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
  }

  # Define which queries the front end is allowed to make and what data is returned

  type Query {
    user(_id: ID): User
    car(_id:ID): Car
    complaint: Complaint
    comment: Comment
    complaints: [Complaint]
    comments: [Comment]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    login(username: String!, password: String!): User
    addComplaint(text: String!, carId: ID): Complaint
    addComment(complaintId: ID!, commentText: String!): Comment
    addCar(make: String!, model: String!, year: Int!): Car
  }
`;

module.exports = typeDefs;
