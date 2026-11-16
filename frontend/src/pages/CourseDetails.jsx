import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./CourseDetails.css";

function CourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
        console.error("Course details error:", error);

        setError("Unable to load course details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="course-not-found">
        <h2>Loading Course...</h2>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="course-not-found">
        <h2>Course Not Found</h2>

        <Link to="/courses">
          Back to Courses
        </Link>
      </div>
    );
  }

  const learnItems = Array.isArray(course.learn)
    ? course.learn
    : [];

  return (
    <div className="course-details-page">

      <section className="course-details-header">

        <div className="details-icon">
          {course.icon}
        </div>

        <p>COURSE DETAILS</p>

        <h1>{course.title}</h1>

        <span>
          Start learning and develop your singing skills with
          Tune Academy.
        </span>

      </section>

      <section className="details-container">

        <div className="details-card">

          <h2>About This Course</h2>

          <p className="details-description">
            {course.description}
          </p>

          <div className="details-info">

            <div>
              <span>Level</span>
              <strong>{course.level}</strong>
            </div>

            <div>
              <span>Duration</span>
              <strong>{course.duration}</strong>
            </div>

            <div>
              <span>Course Fee</span>
              <strong>{course.fee}</strong>
            </div>

          </div>

          <h2>What You Will Learn</h2>

          <div className="learn-list">

            {learnItems.length > 0 ? (
              learnItems.map((item, index) => (
                <div
                  className="learn-item"
                  key={index}
                >
                  <span>✓</span>

                  <p>{item}</p>
                </div>
              ))
            ) : (
              <p>
                Course learning details will be available soon.
              </p>
            )}

          </div>

          <div className="details-buttons">

            <Link
              to="/courses"
              className="back-btn"
            >
              Back to Courses
            </Link>

            <Link
              to={`/payment/${course.id}`}
              className="pay-btn"
            >
              Pay Fees
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default CourseDetails;