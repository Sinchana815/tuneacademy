const mongoose = require("mongoose");
const User = require("../models/User");
const Payment = require("../models/Payment");
const Enrollment = require("../models/Enrollment");
const { courses } = require("./courseController");
const { createEnrollment } = require("./enrollmentController");

// Create a demo payment and enroll the user.
const createPayment = async (req, res) => {
  try {
    const { userId, courseId, paymentMethod } = req.body;

    if (!userId || !courseId || !paymentMethod) {
      return res.status(400).json({
        message: "User, course and payment method are required.",
      });
    }

    if (!mongoose.isValidObjectId(userId)) {
      return res.status(401).json({
        message: "Invalid user. Please login again.",
      });
    }

    if (!["card", "upi"].includes(paymentMethod)) {
      return res.status(400).json({
        message: "Invalid payment method.",
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({
        message: "User not found. Please login again.",
      });
    }

    const course = courses.find(
      (item) => String(item.id) === String(courseId)
    );

    if (!course) {
      return res.status(404).json({
        message: "Course not found.",
      });
    }

    const existingEnrollment = await Enrollment.findOne({
      userId,
      courseId: String(courseId),
    });

    if (existingEnrollment) {
      return res.status(400).json({
        message: "You are already enrolled in this course.",
      });
    }

    // This is a demo payment record, not a real card/UPI charge.
    const payment = await Payment.create({
      userId,
      courseId: String(courseId),
      amount: Number(course.fee),
      paymentMethod,
      paymentStatus: "Paid",
      paymentDate: new Date(),
    });

    let enrollment;

    try {
      enrollment = await createEnrollment(
        userId,
        String(courseId),
        payment._id.toString()
      );
    } catch (error) {
      // Avoid leaving a payment record behind if enrollment creation fails.
      await Payment.findByIdAndDelete(payment._id);

      if (
        error.code === 11000 ||
        error.message === "You are already enrolled in this course."
      ) {
        return res.status(400).json({
          message: "You are already enrolled in this course.",
        });
      }

      throw error;
    }

    res.status(201).json({
      message: "Payment successful. Enrollment created.",
      payment: {
        id: payment._id.toString(),
        userId: payment.userId.toString(),
        courseId: payment.courseId,
        amount: payment.amount,
        paymentMethod: payment.paymentMethod,
        paymentStatus: payment.paymentStatus,
        paymentDate: payment.paymentDate,
      },
      enrollment,
    });
  } catch (error) {
  console.error("Create payment error:", error);
  res.status(500).json({
    message: "Unable to complete the demo payment. Please try again.",
    debug: error.message,
  });
}
};

// Get a user's saved payments.
const getUserPayments = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!mongoose.isValidObjectId(userId)) {
      return res.status(400).json({
        message: "Invalid user ID.",
      });
    }

    const payments = await Payment.find({ userId }).sort({
      paymentDate: -1,
    });

    res.json(
      payments.map((payment) => ({
        id: payment._id.toString(),
        userId: payment.userId.toString(),
        courseId: payment.courseId,
        amount: payment.amount,
        paymentMethod: payment.paymentMethod,
        paymentStatus: payment.paymentStatus,
        paymentDate: payment.paymentDate,
      }))
    );
  } catch (error) {
    console.error("Get payments error:", error.message);

    res.status(500).json({
      message: "Unable to retrieve payments.",
    });
  }
};

module.exports = {
  createPayment,
  getUserPayments,
};