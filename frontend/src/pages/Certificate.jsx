import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, Navigate } from "react-router-dom";
import "./Certificate.css";

const courses = {
  "1": "Hindustani Classical Singing",
  "2": "Carnatic Classical Singing",
  "3": "Western Vocal Singing",
  "4": "Bollywood Singing",
  "5": "Ghazal Singing",
  "6": "Bhajan Singing",
  "7": "Light Music",
  "8": "Playback Singing",
};

function Certificate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const courseName = courses[id];

  const [loading, setLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [completedLessons, setCompletedLessons] = useState([]);

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  useEffect(() => {
    const checkCertificateEligibility = async () => {
      if (!currentUser) {
        navigate("/login");
        return;
      }

      try {
        // -----------------------------
        // Check course enrollment
        // -----------------------------

        const enrollmentResponse = await fetch(
          `http://localhost:5000/api/payments/enrollments/${currentUser.id}`
        );

        if (!enrollmentResponse.ok) {
          throw new Error(
            "Unable to check enrollment."
          );
        }

        const enrollments =
          await enrollmentResponse.json();

        const enrolled = enrollments.some(
          (item) =>
            String(item.courseId) === String(id)
        );

        if (!enrolled) {
          setIsEnrolled(false);
          return;
        }

        setIsEnrolled(true);

        // -----------------------------
        // Get lesson progress
        // -----------------------------

        const progressResponse = await fetch(
          `http://localhost:5000/api/payments/lesson-progress/${currentUser.id}/${id}`
        );

        if (!progressResponse.ok) {
          throw new Error(
            "Unable to load lesson progress."
          );
        }

        const progressData =
          await progressResponse.json();

        const completed =
          progressData.completedLessons || [];

        setCompletedLessons(completed);

        // -----------------------------
        // Check all 4 lessons
        // -----------------------------

        const allLessonsCompleted =
          [1, 2, 3, 4].every((lessonId) =>
            completed.includes(lessonId)
          );

        setIsCompleted(allLessonsCompleted);
      } catch (error) {
        console.error(
          "Certificate eligibility error:",
          error
        );

        setIsEnrolled(false);
        setIsCompleted(false);
        setCompletedLessons([]);
      } finally {
        setLoading(false);
      }
    };

    checkCertificateEligibility();
  }, [id, navigate, currentUser]);

  // -----------------------------
  // Course does not exist
  // -----------------------------

  if (!courseName) {
    return <Navigate to="/courses" replace />;
  }

  // -----------------------------
  // User not logged in
  // -----------------------------

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // -----------------------------
  // Loading
  // -----------------------------

  if (loading) {
    return (
      <div className="certificate-not-completed">

        <div className="certificate-warning-card">

          <div className="warning-icon">
            🎓
          </div>

          <h1>Checking Certificate...</h1>

          <p>
            Please wait while we verify your
            course enrollment and lesson progress.
          </p>

        </div>

      </div>
    );
  }

  // -----------------------------
  // Not enrolled
  // -----------------------------

  if (!isEnrolled) {
    return (
      <div className="certificate-not-completed">

        <div className="certificate-warning-card">

          <div className="warning-icon">
            🔒
          </div>

          <h1>Course Enrollment Required</h1>

          <p>
            You are not enrolled in this course.
            Please enroll in the course before
            accessing the certificate.
          </p>

          <Link
            to={`/course/${id}`}
            className="certificate-learning-button"
          >
            View Course
          </Link>

        </div>

      </div>
    );
  }

  // -----------------------------
  // Course not completed
  // -----------------------------

  if (!isCompleted) {
    return (
      <div className="certificate-not-completed">

        <div className="certificate-warning-card">

          <div className="warning-icon">
            🎓
          </div>

          <h1>
            Certificate Not Available Yet
          </h1>

          <p>
            You need to complete all 4 lessons
            of this course before receiving
            your certificate.
          </p>

          <div className="certificate-progress">

            <strong>
              {completedLessons.length} / 4
              {" "}Lessons Completed
            </strong>

            <div className="certificate-progress-bar">

              <div
                style={{
                  width: `${Math.min(
                    completedLessons.length * 25,
                    100
                  )}%`,
                }}
              ></div>

            </div>

          </div>

          <Link
            to={`/learning/${id}`}
            className="certificate-learning-button"
          >
            Continue Learning
          </Link>

        </div>

      </div>
    );
  }

  // -----------------------------
  // Certificate information
  // -----------------------------

  const studentName =
    currentUser.name || "Student";

  const completionDate =
    new Date().toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    );

  // -----------------------------
  // Generate fixed certificate ID
  // -----------------------------

  const certificateStorageKey =
    `certificateId_${id}`;

  let certificateId =
    localStorage.getItem(
      certificateStorageKey
    );

  if (!certificateId) {
    certificateId =
      `TA-${id}-${Date.now()
        .toString()
        .slice(-6)}`;

    localStorage.setItem(
      certificateStorageKey,
      certificateId
    );
  }

  // -----------------------------
  // Certificate UI
  // -----------------------------

  return (
    <div className="certificate-page">

      <div className="certificate">

        <div className="certificate-border">

          <p className="certificate-academy">
            🎵 TUNE ACADEMY
          </p>

          <p className="certificate-label">
            CERTIFICATE OF COMPLETION
          </p>

          <div className="certificate-line"></div>

          <p className="presented-text">
            This certificate is proudly presented to
          </p>

          <h1 className="student-name">
            {studentName}
          </h1>

          <p className="certificate-text">
            for successfully completing the course
          </p>

          <h2 className="course-name">
            {courseName}
          </h2>

          <p className="certificate-text">
            and demonstrating commitment to learning
            and developing musical skills.
          </p>

          <div className="certificate-details">

            <div>
              <span>
                Completion Date
              </span>

              <strong>
                {completionDate}
              </strong>
            </div>

            <div>
              <span>
                Certificate ID
              </span>

              <strong>
                {certificateId}
              </strong>
            </div>

          </div>

          <div className="signature-section">

            <div>
              <div className="signature-line"></div>

              <p>
                Tune Academy
              </p>

              <span>
                Authorized Signature
              </span>
            </div>

            <div className="certificate-seal">
              🏆
            </div>

          </div>

        </div>

      </div>

      <div className="certificate-actions">

        <button
          className="download-certificate"
          onClick={() => window.print()}
        >
          🖨 Print / Save Certificate
        </button>

        <Link
          to={`/learning/${id}`}
          className="back-learning"
        >
          ← Back to Learning
        </Link>

      </div>

    </div>
  );
}

export default Certificate;