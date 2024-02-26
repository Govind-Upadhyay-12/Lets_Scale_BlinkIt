import User_Delievery from "../models/User_Delievery.js";
import bcryptjs from "bcryptjs";

export const SignUp = async (req, res) => {
  const { username, email, age, location, password } = req.body;
  try {
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User_Delievery({
      username,
      email,
      age,
      location,
      password: hashedPassword,
    });
    try {
      await newUser.save();
      console.log("New user created");
      return res.status(200).send({ message: "User created" });
    } catch (err) {
       console.log(err)
      throw err;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error hashing password");
  }
};
