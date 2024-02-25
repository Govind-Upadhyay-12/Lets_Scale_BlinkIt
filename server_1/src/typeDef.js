import { gql } from "apollo-server-express";
import userTypeDefs from "./graphql.typedef/userTypeDefs.js";
import productTypeDefs from "./graphql.typedef/productTypeDefs.js";
import orderTypeDefs from "./graphql.typedef/orderTypeDefs.js";

const rootTypeDefs = gql`
  type Query {
    welcome: String!
    GetUser(id: ID!): User
    GetProduct(id: ID!): Product!
    GetCartItem(id:ID!):[Product]!
  }

  type Mutation {
    AddUser(
      username: String!
      email: String!
      age: Int!
      location: String!
      password: String!
    ): User
    SignIn(email: String!, password: String!): User
    Addproduct(
      name: String!
      description: String!
      price: Int!
      inStock: Boolean!
      manufacturer: String!
    ): Product!
    AddToCart(id: ID!, items: [String!]!): String!
    BookOrder(id:ID!,data:[String!]!):String!
  }
`;

const typeDefs = [rootTypeDefs, userTypeDefs, productTypeDefs, orderTypeDefs];

export default typeDefs;
