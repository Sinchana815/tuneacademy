import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("card");

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [upiId, setUpiId] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/courses/${id}`
        );

        if (!response.ok) {
          throw new Error("Course not found");
        }

        const data = await response.json();

        setCourse(data);
      } catch (error) {
        console.error("Course fetch error:", error);
        setError("Unable to load course details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handlePayment = async () => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!currentUser) {
      alert("Please login before making a payment.");
      navigate("/login");
      return;
    }

    if (!course) {
      alert("Course information is not available.");
      return;
    }

    if (paymentMethod === "card") {
      if (
        !cardNumber ||
        !cardName ||
        !expiryDate ||
        !cvv
      ) {
        alert("Please enter all card details.");
        return;
      }

      if (cardNumber.replace(/\s/g, "").length !== 16) {
        alert("Please enter a valid 16-digit card number.");
        return;
      }

      if (cvv.length !== 3) {
        alert("Please enter a valid 3-digit CVV.");
        return;
      }
    }

    if (paymentMethod === "upi") {
      if (!upiId) {
        alert("Please enter your UPI ID.");
        return;
      }

      if (!upiId.includes("@")) {
        alert("Please enter a valid UPI ID.");
        return;
      }
    }

    try {
      setProcessing(true);

      const response = await fetch(
        "http://localhost:5000/api/payments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId: currentUser.id,
            courseId: course.id,
            paymentMethod: paymentMethod
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Payment failed.");
        return;
      }

      const enrollment = {
        courseId: course.id,
        courseName: course.title,
        fee: course.fee,
        paymentMethod: paymentMethod,
        paymentStatus: "Paid",
        enrollmentStatus: "Enrolled",
        enrolledDate: new Date().toLocaleDateString("en-IN")
      };

      const existingEnrollments =
        JSON.parse(
          localStorage.getItem("enrollments")
        ) || [];

      const alreadyEnrolled =
        existingEnrollments.some(
          (item) => item.courseId === course.id
        );

      if (!alreadyEnrolled) {
        existingEnrollments.push(enrollment);

        localStorage.setItem(
          "enrollments",
          JSON.stringify(existingEnrollments)
        );
      }

      alert(
        "Payment successful! 🎉\nYou are now enrolled in the course."
      );

      navigate(`/enrollment/${course.id}`);
    } catch (error) {
      console.error("Payment error:", error);

      alert(
        "Unable to connect to the server. Please make sure the backend is running."
      );
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="payment-not-found">
        <h2>Loading Payment...</h2>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="payment-not-found">
        <h2>Course Not Found</h2>

        <Link to="/courses">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="payment-page">

      <section className="payment-header">

        <p>SECURE PAYMENT</p>

        <h1>Pay Course Fees</h1>

        <span>
          Complete your payment and start your musical journey.
        </span>

      </section>

      <section className="payment-container">

        <div className="payment-card">

          <div className="payment-course-icon">
            {course.icon}
          </div>

          <h2>
            {course.title}
          </h2>

          <p className="payment-subtitle">
            You are enrolling for this singing course.
          </p>

          <div className="payment-summary">

            <div>
              <span>Course</span>

              <strong>
                {course.title}
              </strong>
            </div>

            <div>
              <span>Course Fee</span>

              <strong>
                {course.fee}
              </strong>
            </div>

          </div>

          <h3>
            Payment Method
          </h3>

          <div className="payment-methods">

            <label>
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />

              <span>
                💳 Credit / Debit Card
              </span>
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="upi"
                checked={paymentMethod === "upi"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />

              <span>
                📱 UPI
              </span>
            </label>

          </div>

          {paymentMethod === "card" && (
            <div className="payment-details">

              <h3>
                Enter Card Details
              </h3>

              <input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                maxLength="16"
                onChange={(e) =>
                  setCardNumber(
                    e.target.value.replace(/\D/g, "")
                  )
                }
              />

              <input
                type="text"
                placeholder="Card Holder Name"
                value={cardName}
                onChange={(e) =>
                  setCardName(e.target.value)
                }
              />

              <div className="card-small-fields">

                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  maxLength="5"
                  onChange={(e) =>
                    setExpiryDate(e.target.value)
                  }
                />

                <input
                  type="password"
                  placeholder="CVV"
                  value={cvv}
                  maxLength="3"
                  onChange={(e) =>
                    setCvv(
                      e.target.value.replace(/\D/g, "")
                    )
                  }
                />

              </div>

            </div>
          )}

          {paymentMethod === "upi" && (
            <div className="payment-details">

              <h3>
                Enter UPI Details
              </h3>

              <input
                type="text"
                placeholder="Enter your UPI ID"
                value={upiId}
                onChange={(e) =>
                  setUpiId(e.target.value)
                }
              />

              <p className="dummy-payment-note">
                Example: yourname@upi
              </p>

            </div>
          )}

          <button
            className="make-payment-btn"
            onClick={handlePayment}
            disabled={processing}
          >
            {processing
              ? "Processing Payment..."
              : "Pay & Enroll Course"}
          </button>

          <Link
            to={`/course/${course.id}`}
            className="back-details-btn"
          >
            Back to Course Details
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Payment;