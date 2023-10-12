const typeDefs = `
  # Define which fields are accessible from the Class model
  type Category {
    _id: ID
    name: String
    products: [Product]
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    comments: [Comment]
    complaints: [Complaint]
    orders: [Order]
  }

  type Checkout {
    session: ID
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
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user(_id: ID): User
    car(make: String!, model: String!, year: Int!): Car
    complaint(_id: ID): Complaint
    comment(_id: ID): Comment
    complaints(carId: ID): [Complaint]
    comments(complaintId: ID): [Comment]
    me: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addComplaint(text: String!, carId: ID): Complaint
    addComment(complaintId: ID!, commentText: String!): Comment
    addCar(make: String!, model: String!, year: Int!): Car
    removeComplaint(complaintId: ID): Complaint
    removeComment(commentId: ID): Comment
    updateMe(username: String, password: String, currentPassword: String): Auth
    addOrder(products: [ID]!): Order
    updateProduct(_id: ID!, quantity: Int!): Product
  }
`;

module.exports = typeDefs;
