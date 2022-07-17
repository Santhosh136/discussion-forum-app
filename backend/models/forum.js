const mongoose = require("mongoose");
const Comment = require("./comment");

const forumSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Comment
    }]
});

const Forum = mongoose.model("Forum", forumSchema);

module.exports = Forum;