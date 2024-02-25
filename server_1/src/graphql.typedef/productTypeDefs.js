import { gql } from "apollo-server-express";

const productTypeDefs = gql`
  type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
    inStock: Boolean!
    manufacturer: String
    userId: [User]
  }
`;

export default productTypeDefs;
