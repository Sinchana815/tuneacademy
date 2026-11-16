const express = require("express");

const {
  getUserEnrollments,
  completeLesson,
  getLessonProgress,
} = require("../controllers/enrollmentController");

const router = express.Router();

// Get all enrollments for a user
router.get("/user/:userId", getUserEnrollments);

// Mark a lesson as completed
router.post("/lesson-complete", completeLesson);

// Get lesson progress for a course
router.get("/lesson-progress/:userId/:courseId", getLessonProgress);

module.exports = router;
