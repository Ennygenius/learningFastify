import { timeStamp } from "console";
import mongoose from "mongoose";

const todo = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("todo", todo);
export default Todo;
