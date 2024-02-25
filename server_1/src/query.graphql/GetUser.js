
import UserSchema from "../models/UserSchema.js";

export const GetUser=async(_,args)=>{
    console.log(args)
    const {id}=args;
    console.log(id);
    try {
        const User_Find=await UserSchema.findById(id);
        if(!User_Find){
            throw new Error("User Not exist");
        }
        else{
            return User_Find
        }
        
    } catch (error) {
        console.log(error);
        throw new Error("error",error)
        
    }

}