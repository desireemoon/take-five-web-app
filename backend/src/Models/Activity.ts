// Import the necessary modules from mongoose
import mongoose, { Schema, Document } from "mongoose";

// Interface to define the type for a Document
interface IActivity extends Document {
  name: string;
  link: string;
  image: string;
  description: string;
  categories: Schema.Types.ObjectId[];
}

// Create a Schema corresponding to the document interface.
const activitySchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

// Create a Model.
const Activity = mongoose.model<IActivity>("Activity", activitySchema);

export default Activity;
