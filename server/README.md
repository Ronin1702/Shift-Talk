# Server Notes

Here we record notes during the development of the server.

## Apollo GraphQL

frontend:localhost:3000/graphql
backend:localhost:3001/graphql

## Schemas

When making a query to get `_id` of a `User`, `Car`, `Complaint`, and `Comment`, ObjectId is returned. However, when making a query to get `_id` of a `POST`,`GET`, `PUT`, `DELETE`, `ObjectId` is not returned. Instead, `id` is returned. This is because `Post` is a `GraphQLObjectType` while the others are `GraphQLInputObjectType`. `GraphQLObjectType` does not have an `ObjectId` field, so we have to use `id` instead.
