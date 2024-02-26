// Import the necessary modules from mongoose
import mongoose, { Schema, Document } from "mongoose";

// Interface to define the type for a Document
interface ICategory extends Document {
    name: string;
    description: string;
}

// Create a Schema corresponding to the document interface.
const CategorySchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    },
);

// Create a Model.
const CategoryModel = mongoose.model<ICategory>('Cateogry', CategorySchema);

export default CategoryModel;