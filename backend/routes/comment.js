const express = require("express");
const router = express.Router({mergeParams: true});
const {
    createComment,
    getAllCommentsByForumId
} = require("../controllers/comment");

router.get("/", getAllCommentsByForumId);
router.post("/", createComment);

module.exports = router;
