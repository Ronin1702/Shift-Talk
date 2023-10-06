# Server Notes

Here we record notes during the development of the server.

## Apollo GraphQL

frontend:localhost:3000/graphql
backend:localhost:3001/graphql

## Models

Some of the models require a reference to another model. For example, a comment is associated with a complaint. To do this, we use Mongoose's [populate](https://mongoosejs.com/docs/populate.html) method. This method lets us reference documents in other collections.

### Comment Model

- complaint: An ObjectID reference to a Complaint model. This establishes a relationship between a comment and a complaint, indicating which complaint a comment is associated with. It's a required field.
- user: An ObjectID reference to a User model. This establishes a relationship between a comment and a user, indicating which user made the comment. It's a required field.

The model is then compiled using Mongoose's model method and exported.

### Complaint Model

- user: An ObjectID reference to a User model. This establishes a relationship between a complaint and a user, indicating which user made the complaint. It's a required field.
- car: An ObjectID reference to a Car model. This establishes a relationship between a complaint and a car, indicating which car the complaint is about. It's a required field.
- comments: An array of ObjectID references to Comment models. This establishes a relationship between a complaint and its comments, indicating which comments are associated with the complaint. It's not a required field.

### User Model

- complaints: An array of ObjectID references to Complaint models. This establishes a relationship between a user and their complaints, indicating which complaints are associated with the user. It's not a required field.
- cars: An array of ObjectID references to Car models. This establishes a relationship between a user and their cars, indicating which cars are associated with the user. It's not a required field.

## Schemas

When making a query to get `_id` of a `User`, `Car`, `Complaint`, and `Comment`, ObjectId is returned. However, when making a query to get `_id` of a `POST`,`GET`, `PUT`, `DELETE`, `ObjectId` is not returned. Instead, `id` is returned. This is because `Post` is a `GraphQLObjectType` while the others are `GraphQLInputObjectType`. `GraphQLObjectType` does not have an `ObjectId` field, so we have to use `id` instead.
