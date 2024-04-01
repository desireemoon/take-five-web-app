// Import the necessary modules from mongoose
import mongoose, { Schema, Document } from "mongoose";

// Interface to define the type for a Document
interface IUser extends Document {
  username: string;
  name: string;
  email: string;
  password: string;
  roles: string[];
  categories: Schema.Types.ObjectId[];
  friends: IUser["_id"][];
  favorites: mongoose.Types.ObjectId[];
  completedActivities: mongoose.Types.ObjectId[];
}

// Create a Schema corresponding to the document interface.
const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [{
    type: String,
    required: true,
    enum: ['admin', 'user'], //Specify allowed roles
    default: 'user' // Default role for new users
  }],
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Activity",
    },
  ],
  completedActivities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Activity",
    },
  ],
});

// Create a Model.
const User = mongoose.model<IUser>("User", userSchema);

export default User;
