const Comment = require("../models/comment");
const Forum = require("../models/forum");

const createComment = (req, res) => {
    Comment.create(req.body)
        .then((newComment) => {
            Forum.findById(req.params.id)
            .then((forum) => {
                forum.comments.push(newComment);
                forum.save();
                res.json(newComment);
            })
            .catch((err) => 
                res
                .status(404)
                .json({ message: "Comment not added, Forum not found", error: err.message })
            ) 
        })
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add comment", error: err.message })
        );
}

const getAllCommentsByForumId = (req, res) => {

    Forum.
        findById(req.params.id).
        populate('comments').
        exec(function (err, forum) {
            if (err)
                res
                    .status(404)
                    .json({ message: "Failed to fetch comments, forum not found ", error: err.message });
            else
                res.send(forum.comments);
        });
};

module.exports = {
    createComment,
    getAllCommentsByForumId
}