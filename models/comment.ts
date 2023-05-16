import mongoose, { Schema } from "mongoose";

interface IComment {
  itemId: string;
  userId: string;
  comment: string;
}
const commentSchema = new Schema<IComment>(
  {
    itemId: { type: String, required: true },
    userId: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);
const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
