import { gql } from "apollo-server-express";

const userTypeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    age: Int!
    location: String!
    password:String!
    products: [Product]
    cart_item: [Product]!
    order: [Order]
    
  }
`;

export default userTypeDefs;
