// Import the necessary modules from mongoose
import mongoose, { Schema, Document } from "mongoose";

// Interface to define the type for a Document
interface ICategory extends Document {
    name: string;
    description: string;
    activities: Schema.Types.ObjectId[];
}

// Create a Schema corresponding to the document interface.
const categorySchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        activities: [{
            type: Schema.Types.ObjectId,
            ref: 'Activity'
        }],
    },
);

// Create a Model.
const Category = mongoose.model<ICategory>('Category', categorySchema);

export default Category;