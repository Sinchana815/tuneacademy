import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Courses.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/courses"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch courses.");
        }

        const data = await response.json();

        setCourses(data);
      } catch (error) {
        console.error("Course fetch error:", error);

        setError(
          "Unable to load courses. Please make sure the backend is running."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="courses-page">

      {/* Header */}
      <section className="courses-header">

        <p className="courses-label">
          TUNE ACADEMY
        </p>

        <h1>
          Explore Singing Courses
        </h1>

        <p>
          Choose your favorite singing style and begin your musical journey
          with Tune Academy.
        </p>

      </section>

      {/* Courses */}
      <section className="courses-container">

        {loading && (
          <p style={{ textAlign: "center" }}>
            Loading courses...
          </p>
        )}

        {error && (
          <p
            style={{
              textAlign: "center",
              color: "red"
            }}
          >
            {error}
          </p>
        )}

        {!loading && !error && (
          <div className="courses-grid">

            {courses.map((course) => (

              <div
                className="course-box"
                key={course.id}
              >

                <div className="course-icon">
                  {course.icon}
                </div>

                <h2>
                  {course.title}
                </h2>

                <p className="course-description">
                  {course.description}
                </p>

                <div className="course-info">

                  <div>
                    <span>
                      Level
                    </span>

                    <strong>
                      {course.level}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Duration
                    </span>

                    <strong>
                      {course.duration}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Fee
                    </span>

                    <strong>
                      {course.fee}
                    </strong>
                  </div>

                </div>

                <Link
                  to={`/course/${course.id}`}
                  className="view-course-btn"
                >
                  View Course
                </Link>

              </div>

            ))}

          </div>
        )}

      </section>

    </div>
  );
}

export default Courses;