import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
    title: String,
    description: String,
    image: String,
    category: String,
    created_at: Date,
},{
    toJSON: {
        virtuals: true,
    }
});
postSchema.virtual('short_description').get(function () {
    return this.description.substr(0, 50) + '...';
});

const PostModel = models.Post || model('Post', postSchema);

export default PostModel;

