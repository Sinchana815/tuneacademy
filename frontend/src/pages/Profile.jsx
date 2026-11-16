import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    const fetchEnrollments = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/payments/enrollments/${currentUser.id}`
        );

        if (!response.ok) {
          throw new Error("Unable to fetch enrollments");
        }

        const data = await response.json();

        setEnrollments(data);
      } catch (error) {
        console.error("Enrollment fetch error:", error);
        setEnrollments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollments();
  }, [navigate, currentUser?.id]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div className="profile-page">

      <div className="profile-card">

        {/* Profile Header */}
        <div className="profile-header">

          <div className="profile-avatar">
            {currentUser.name
              ? currentUser.name.charAt(0).toUpperCase()
              : "S"}
          </div>

          <h1>{currentUser.name}</h1>

          <p>Student • Tune Academy</p>

        </div>


        {/* Personal Information */}
        <div className="profile-section">

          <h2>Personal Information</h2>

          <div className="profile-info">

            <div className="info-item">
              <span>Full Name</span>
              <strong>{currentUser.name}</strong>
            </div>

            <div className="info-item">
              <span>Email Address</span>
              <strong>{currentUser.email}</strong>
            </div>

          </div>

        </div>


        {/* Enrolled Courses */}
        <div className="profile-section">

          <h2>My Enrolled Courses</h2>

          {loading ? (

            <div className="no-courses">

              <div className="no-courses-icon">
                🎵
              </div>

              <h3>Loading Courses...</h3>

              <p>
                Please wait while we load your enrolled courses.
              </p>

            </div>

          ) : enrollments.length === 0 ? (

            <div className="no-courses">

              <div className="no-courses-icon">
                🎵
              </div>

              <h3>No Courses Enrolled Yet</h3>

              <p>
                Browse our courses and start your musical journey.
              </p>

              <button
                className="learning-button"
                onClick={() => navigate("/courses")}
              >
                Browse Courses
              </button>

            </div>

          ) : (

            <div className="enrolled-courses">

              {enrollments.map((course) => {

                const completedLessons =
                  JSON.parse(
                    localStorage.getItem(
                      `completedLessons_${course.courseId}`
                    )
                  ) || [];

                const totalLessons = 4;

                const progress = Math.min(
                  100,
                  Math.round(
                    (completedLessons.length / totalLessons) * 100
                  )
                );

                return (

                  <div
                    className="enrolled-course-card"
                    key={course.courseId}
                  >

                    {/* Course Icon */}
                    <div className="enrolled-course-icon">
                      🎤
                    </div>


                    {/* Course Information */}
                    <div className="enrolled-course-info">

                      <h3>
                        {course.courseName}
                      </h3>

                      <p>
                        Fee: {course.fee}
                      </p>

                      {/* Progress Bar */}
                      <div className="profile-progress">

                        <div
                          className="profile-progress-bar"
                          style={{
                            width: `${progress}%`
                          }}
                        ></div>

                      </div>

                      <span className="progress-text">
                        {progress}% Completed
                      </span>

                    </div>


                    {/* Course Actions */}
                    <div className="enrolled-course-action">

                      {progress === 100 ? (

                        <>
                          {/* Certificate Button */}
                          <button
                            className="certificate-profile-button"
                            onClick={() =>
                              navigate(
                                `/certificate/${course.courseId}`
                              )
                            }
                          >
                            🏆 Certificate
                          </button>

                          {/* Watch Course Again */}
                          <button
                            className="watch-again-button"
                            onClick={() =>
                              navigate(
                                `/learning/${course.courseId}`
                              )
                            }
                          >
                            🎬 Watch Course Again
                          </button>
                        </>

                      ) : (

                        /* Continue Learning */
                        <button
                          className="continue-learning-button"
                          onClick={() =>
                            navigate(
                              `/learning/${course.courseId}`
                            )
                          }
                        >
                          ▶ Continue Learning
                        </button>

                      )}

                    </div>

                  </div>

                );
              })}

            </div>

          )}

        </div>


        {/* Academy Information */}
        <div className="profile-section">

          <h2>Academy Information</h2>

          <div className="academy-box">

            <div>
              <span>Academy</span>
              <strong>Tune Academy</strong>
            </div>

            <div>
              <span>Role</span>
              <strong>Student</strong>
            </div>

          </div>

        </div>


        {/* Actions */}
        <div className="profile-actions">

          <button
            className="learning-button"
            onClick={() => navigate("/courses")}
          >
            🎵 Browse Courses
          </button>

          <button
            className="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;