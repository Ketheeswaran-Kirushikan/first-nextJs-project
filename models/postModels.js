import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
    title: String,
    description: String,
    image: String,
    category: String,
    created_at: Date,
});

const PostModel = models.Post || model('Post', postSchema);

export default PostModel;
