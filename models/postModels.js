import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
    title: String,
    description: String,
    image: String,
    category: String,
    created_at: Date,
}, {
    toJSON: {
        virtuals: true,
    }
});

postSchema.virtual('short_description').get(function () {
    return this.description.substr(0, 50) + '...';
});

postSchema.virtual('created_at_formatted').get(function () {
    return changedDate(this.created_at);
});

function changedDate(created_at) {
    if (typeof created_at === 'string') {
        // If created_at is a string, split it by "-" to extract year, month, and day
        const [year, month, day] = created_at.split('-');
        return `${month}/${day}/${year}`;
    } else if (created_at instanceof Date) {
        // If created_at is a Date object, extract year, month, and day components
        const year = created_at.getFullYear();
        const month = ('0' + (created_at.getMonth() + 1)).slice(-2); // Add 1 to month because months are zero-based
        const day = ('0' + created_at.getDate()).slice(-2);
        return `${month}/${day}/${year}`;
    } else {
        // If the format is not recognized, return empty string or handle accordingly
        return '';
    }
}

const PostModel = models.Post || model('Post', postSchema);

export default PostModel;
