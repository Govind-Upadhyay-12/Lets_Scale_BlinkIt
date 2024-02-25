import { gql } from "apollo-server-express";

import jwt from "jsonwebtoken";
import UserSchema from "./models/UserSchema.js";
import { AddUser, SignIn } from "./mutation.Auth/AddUser.js";
import { GetUser } from "./query.graphql/GetUser.js";
import {Addproduct} from "./mutation.Auth/AddBlinkitProduct.js"
import { GetProduct } from "./query.graphql/product.query/GetProduct.js";
import { AddToCart } from "./query.graphql/Add.to.Cart/AddtoCart.js";
import { GetCartItem } from "./query.graphql/Add.to.Cart/GetCartItem.js";
import { BookOrder } from "./mutation.Auth/BookOrder.js";
const resolvers = {
  Query: {
    welcome: () => {
      return "Welcome to blink it";
    },
    GetUser,
    GetProduct,
    GetCartItem
  },
  Mutation: {
    AddUser,
    SignIn,
    Addproduct,
    AddToCart,
    BookOrder
    
  },
};

export default resolvers;
