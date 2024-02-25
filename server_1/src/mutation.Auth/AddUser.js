import bcryptjs from "bcryptjs";
import UserSchema from "../models/UserSchema.js";
import jwt from "jsonwebtoken";

const secretKey = "oefnfdfndjifhdefndnn&r6sf2wndnfn134";
export const AddUser = async (_, args) => {
  const { username, email, age, location, password } = args;
  try {
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new UserSchema({
      username,
      email,
      age,
      location,
      password: hashedPassword,
    });
    try {
      await newUser.save();
      console.log("New user created");
      return newUser;
    } catch (err) {
      if (err.message.includes("E11000")) {
        throw new Error("Error: Email already in use");
      }
      throw err;
    }
  } catch (error) {
    throw new Error("Error hashing password");
  }
};
export const SignIn = async (_, args, { res }) => {
  const { password, email } = args;
  try {
    const validUser = await UserSchema.findOne({ email: email });
    console.log(validUser);
    if (!validUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const validPassword = await bcryptjs.compare(password, validUser.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const { _id, password: hashedPassword, ...userInfo } = validUser._doc;
    const token = jwt.sign({ id: _id }, secretKey);
    // console.log(token);


    return validUser;
  } catch (error) {
    console.error("Error signing in", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
