import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Completion.css";

const courses = {
  "1": "Hindustani Classical Singing",
  "2": "Carnatic Classical Singing",
  "3": "Western Vocal Singing",
};

function Completion() {
  const { id } = useParams();

  const courseName = courses[id] || courses["1"];

  return (
    <div className="completion-page">

      <div className="completion-card">

        <div className="success-icon">
          🎉
        </div>

        <p className="completion-label">
          TUNE ACADEMY
        </p>

        <h1>
          Course Completed!
        </h1>

        <p className="completion-message">
          Congratulations! You have successfully completed
          your singing course.
        </p>

        <div className="course-completed-box">

          <span>COURSE COMPLETED</span>

          <h2>
            {courseName}
          </h2>

          <p>
            All lessons have been successfully completed.
          </p>

        </div>

        <div className="certificate-box">

          <div className="certificate-icon">
            🏆
          </div>

          <div>
            <h3>
              Your Certificate is Ready!
            </h3>

            <p>
              You have earned a certificate for completing
              this course.
            </p>
          </div>

        </div>

        <div className="completion-buttons">

          <Link
            to={`/certificate/${id}`}
            className="certificate-button"
          >
            🏆 View Certificate
          </Link>

          <Link
            to={`/learning/${id}`}
            className="back-learning-button"
          >
            ← Back to Learning
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Completion;