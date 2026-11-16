const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    courseId: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
      min: 0,
    },
    paymentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
      required: true,
    },
    enrollmentStatus: {
      type: String,
      enum: ["Enrolled", "Completed"],
      default: "Enrolled",
    },
    enrolledDate: {
      type: Date,
      default: Date.now,
    },
    completedLessons: {
      type: [Number],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// A user can enroll in a course only once.
enrollmentSchema.index(
  { userId: 1, courseId: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "Enrollment",
  enrollmentSchema
);