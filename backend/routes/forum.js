const express = require("express");
const router = express.Router();
const {
    getAllForums,
    createForum,
    updateForum,
    deleteForum
} = require("../controllers/forum");

router.get("/", getAllForums);
router.post("/", createForum);
router.put("/:id", updateForum);
router.delete("/:id", deleteForum);

module.exports = router;