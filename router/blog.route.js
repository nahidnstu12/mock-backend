const express = require("express");
const { BlogController } = require("../controller/blog.controller");
const catchAsync = require("../util/catchAsync");
const uploadImage = require("../middleware/uploadImage");
const checkAuth = require("../middleware/checkAuth");

const router = express.Router();

// Get all blogs
router.get("/", catchAsync(BlogController.getAllBlogs));

// Create a new Notice
router.post(
  "/",
  checkAuth,
  uploadImage.single("thumbnail"),
  catchAsync(BlogController.createNewBlog)
);

// Get a single Notice
router.get("/:postId", checkAuth, catchAsync(BlogController.getSingleBlog));

// Update a Notice
router.patch(
  "/:postId",
  checkAuth,
  uploadImage.single("thumbnail"),
  catchAsync(BlogController.updateBlog)
);

// Delete a Notice
router.delete("/:postId", checkAuth, catchAsync(BlogController.deleteBlog));

module.exports = router;
