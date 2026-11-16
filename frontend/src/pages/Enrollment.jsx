import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Enrollment.css";

function Enrollment() {
  const { id } = useParams();

  const [enrollment, setEnrollment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEnrollment = async () => {
      try {
        const currentUser = JSON.parse(
          localStorage.getItem("currentUser")
        );

        if (!currentUser) {
          setError("Please login to view your enrollment.");
          setLoading(false);
          return;
        }

        const response = await fetch(
          `http://localhost:5000/api/payments/enrollments/${currentUser.id}`
        );

        if (!response.ok) {
          throw new Error("Unable to fetch enrollment.");
        }

        const data = await response.json();

        const currentEnrollment = data.find(
          (item) => item.courseId === id
        );

        if (!currentEnrollment) {
          setError("Enrollment not found.");
          setLoading(false);
          return;
        }

        setEnrollment(currentEnrollment);
      } catch (error) {
        console.error("Enrollment fetch error:", error);
        setError(
          "Unable to connect to the server. Please make sure the backend is running."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollment();
  }, [id]);

  if (loading) {
    return (
      <div className="enrollment-page">
        <div className="enrollment-container">
          <h2>Loading Enrollment...</h2>
        </div>
      </div>
    );
  }

  if (error || !enrollment) {
    return (
      <div className="enrollment-page">
        <div className="enrollment-container">
          <div className="enrollment-icon">
            ⚠️
          </div>

          <h1 className="enrollment-title">
            Enrollment Not Found
          </h1>

          <p className="enrollment-subtitle">
            {error}
          </p>

          <Link
            to="/courses"
            className="enrollment-btn enrollment-btn-primary"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="enrollment-page">
      <div className="enrollment-container">

        <div className="enrollment-icon">
          🎤
        </div>

        <h1 className="enrollment-title">
          Enrollment Successful!
        </h1>

        <p className="enrollment-subtitle">
          Welcome to Tune Academy. Your course enrollment is confirmed.
        </p>

        <h2 className="enrollment-course-title">
          {enrollment.courseName}
        </h2>

        <p className="enrollment-course-text">
          You have successfully enrolled in this singing course.
        </p>

        <div className="enrollment-details">

          <div className="enrollment-row">
            <span className="enrollment-label">
              Course
            </span>

            <span className="enrollment-value">
              {enrollment.courseName}
            </span>
          </div>

          <div className="enrollment-row">
            <span className="enrollment-label">
              Course Fee
            </span>

            <span className="enrollment-value">
              {enrollment.fee}
            </span>
          </div>

          <div className="enrollment-row">
            <span className="enrollment-label">
              Payment
            </span>

            <span className="enrollment-value">
              Paid
            </span>
          </div>

          <div className="enrollment-row">
            <span className="enrollment-label">
              Status
            </span>

            <span className="enrollment-value">
              {enrollment.enrollmentStatus}
            </span>
          </div>

        </div>

        <div className="enrollment-next">

          <h3>What's Next?</h3>

          <p>
            Start attending your online singing classes and
            access your study materials.
          </p>

          <div className="enrollment-buttons">

            <Link
              to={`/learning/${enrollment.courseId}`}
              className="enrollment-btn enrollment-btn-primary"
            >
              Start Learning
            </Link>

            <Link
              to="/"
              className="enrollment-btn enrollment-btn-secondary"
            >
              Back to Home
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Enrollment;