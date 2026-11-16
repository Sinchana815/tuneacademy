const mongoose = require("mongoose");
const User = require("../models/User");
const Payment = require("../models/Payment");
const Enrollment = require("../models/Enrollment");
const { courses } = require("./courseController");

// Create an enrollment in MongoDB after a payment record exists.
const createEnrollment = async (userId, courseId, paymentId) => {
  const course = courses.find(
    (item) => String(item.id) === String(courseId)
  );

  if (!course) {
    throw new Error("Course not found.");
  }

  if (
    !mongoose.isValidObjectId(userId) ||
    !mongoose.isValidObjectId(paymentId)
  ) {
    throw new Error("Invalid user or payment ID.");
  }

  const user = await User.findById(userId);
  const payment = await Payment.findById(paymentId);

  if (!user || !payment) {
    throw new Error("User or payment record not found.");
  }

  const existingEnrollment = await Enrollment.findOne({
    userId,
    courseId: String(courseId),
  });

  if (existingEnrollment) {
    throw new Error("You are already enrolled in this course.");
  }

  const enrollment = await Enrollment.create({
    userId,
    courseId: String(courseId),
    courseName: course.title,
    fee: Number(course.fee),
    paymentId,
    enrollmentStatus: "Enrolled",
    enrolledDate: new Date(),
    completedLessons: [],
  });

  return {
    id: enrollment._id.toString(),
    userId: enrollment.userId.toString(),
    courseId: enrollment.courseId,
    courseName: enrollment.courseName,
    fee: enrollment.fee,
    paymentId: enrollment.paymentId.toString(),
    enrollmentStatus: enrollment.enrollmentStatus,
    enrolledDate: enrollment.enrolledDate,
    completedLessons: enrollment.completedLessons,
  };
};

// Get all enrollments for a user.
const getUserEnrollments = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!mongoose.isValidObjectId(userId)) {
      return res.status(400).json({
        message: "Invalid user ID.",
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({
        message: "User not found.",
      });
    }

    const enrollments = await Enrollment.find({ userId }).sort({
      enrolledDate: -1,
    });

    res.json(
      enrollments.map((item) => ({
        id: item._id.toString(),
        userId: item.userId.toString(),
        courseId: item.courseId,
        courseName: item.courseName,
        fee: item.fee,
        paymentId: item.paymentId.toString(),
        enrollmentStatus: item.enrollmentStatus,
        enrolledDate: item.enrolledDate,
        completedLessons: item.completedLessons,
      }))
    );
  } catch (error) {
    console.error("Get enrollments error:", error.message);
    res.status(500).json({
      message: "Unable to retrieve enrollments.",
    });
  }
};

// Save completed lesson progress in MongoDB.
const completeLesson = async (req, res) => {
  try {
    const { userId, courseId, lessonId } = req.body;

    if (
      !userId ||
      !courseId ||
      lessonId === undefined ||
      lessonId === null
    ) {
      return res.status(400).json({
        message: "User, course and lesson are required.",
      });
    }

    if (!mongoose.isValidObjectId(userId)) {
      return res.status(400).json({
        message: "Invalid user ID.",
      });
    }

    const numericLessonId = Number(lessonId);

    if (
      !Number.isInteger(numericLessonId) ||
      numericLessonId < 1
    ) {
      return res.status(400).json({
        message: "Invalid lesson ID.",
      });
    }

    const course = courses.find(
      (item) => String(item.id) === String(courseId)
    );

    if (
      !course ||
      !Array.isArray(course.lessons) ||
      numericLessonId > course.lessons.length
    ) {
      return res.status(404).json({
        message: "Course or lesson not found.",
      });
    }

    const enrollment = await Enrollment.findOne({
      userId,
      courseId: String(courseId),
    });

    if (!enrollment) {
      return res.status(403).json({
        message: "You are not enrolled in this course.",
      });
    }

    if (
      !enrollment.completedLessons.includes(numericLessonId)
    ) {
      enrollment.completedLessons.push(numericLessonId);
      enrollment.completedLessons.sort((a, b) => a - b);

      if (
        enrollment.completedLessons.length >= course.lessons.length
      ) {
        enrollment.enrollmentStatus = "Completed";
      }

      await enrollment.save();
    }

    res.json({
      message: "Lesson completed successfully.",
      progress: {
        userId: enrollment.userId.toString(),
        courseId: enrollment.courseId,
        completedLessons: enrollment.completedLessons,
      },
    });
  } catch (error) {
    console.error("Complete lesson error:", error.message);
    res.status(500).json({
      message: "Unable to save lesson progress.",
    });
  }
};

// Retrieve saved lesson progress.
const getLessonProgress = async (req, res) => {
  try {
    const { userId, courseId } = req.params;

    if (!mongoose.isValidObjectId(userId)) {
      return res.status(400).json({
        message: "Invalid user ID.",
      });
    }

    const progress = await Enrollment.findOne({
      userId,
      courseId: String(courseId),
    });

    res.json({
      userId,
      courseId: String(courseId),
      completedLessons: progress
        ? progress.completedLessons
        : [],
    });
  } catch (error) {
    console.error("Get lesson progress error:", error.message);
    res.status(500).json({
      message: "Unable to retrieve lesson progress.",
    });
  }
};

module.exports = {
  createEnrollment,
  getUserEnrollments,
  completeLesson,
  getLessonProgress,
};