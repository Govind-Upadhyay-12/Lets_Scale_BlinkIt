import { gql } from "apollo-server-express";

const orderTypeDefs = gql`
  type Order {
    id: ID
    products: [OrderProduct]!
    total: Int!
    status: OrderStatus!
  }

  type OrderProduct {
    product: [Product]
    quantity: Int!
  }

  enum OrderStatus {
    CREATED
    PROCESSING
    SHIPPED
    DELIVERED
    CANCELLED
  }
`;

export default orderTypeDefs;
