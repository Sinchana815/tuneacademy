const express = require("express");

const {
  createPayment,
  getUserPayments,
} = require("../controllers/paymentController");

const {
  getUserEnrollments,
  completeLesson,
  getLessonProgress,
} = require("../controllers/enrollmentController");

const router = express.Router();

// Payment routes
router.post("/", createPayment);

router.get(
  "/user/:userId",
  getUserPayments
);

// Enrollment routes
router.get(
  "/enrollments/:userId",
  getUserEnrollments
);

// Lesson progress routes
router.post(
  "/lesson-complete",
  completeLesson
);

router.get(
  "/lesson-progress/:userId/:courseId",
  getLessonProgress
);

module.exports = router;