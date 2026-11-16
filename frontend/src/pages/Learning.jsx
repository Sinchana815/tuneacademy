import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Learning.css";

const courses = [
  {
    id: "1",
    title: "Hindustani Classical Singing",
  },
  {
    id: "2",
    title: "Carnatic Classical Singing",
  },
  {
    id: "3",
    title: "Western Vocal Singing",
  },
  {
    id: "4",
    title: "Bollywood Singing",
  },
  {
    id: "5",
    title: "Ghazal Singing",
  },
  {
    id: "6",
    title: "Bhajan Singing",
  },
  {
    id: "7",
    title: "Light Music",
  },
  {
    id: "8",
    title: "Playback Singing",
  },
];

const studyMaterials = {
  "1": [
    "Hindustani Swara Notes",
    "Introduction to Ragas",
    "Riyaz Practice Exercises",
    "Taal and Rhythm Guide",
  ],

  "2": [
    "Carnatic Swara Notes",
    "Sarali Varisai Practice",
    "Raga Practice Guide",
    "Tala and Rhythm Exercises",
  ],

  "3": [
    "Western Vocal Basics",
    "Breathing and Warm-up Guide",
    "Pitch Training Exercises",
    "Western Music Practice Sheet",
  ],

  "4": [
    "Bollywood Singing Basics",
    "Voice Modulation Guide",
    "Expression and Emotion Exercises",
    "Bollywood Song Practice Guide",
  ],

  "5": [
    "Ghazal Singing Basics",
    "Ghazal Pronunciation Guide",
    "Melody and Expression Notes",
    "Ghazal Practice Exercises",
  ],

  "6": [
    "Bhajan Singing Basics",
    "Devotional Singing Notes",
    "Rhythm and Melody Guide",
    "Bhajan Practice Exercises",
  ],

  "7": [
    "Light Music Basics",
    "Melody Training Notes",
    "Voice Control Exercises",
    "Light Music Practice Guide",
  ],

  "8": [
    "Playback Singing Basics",
    "Microphone Techniques Guide",
    "Voice Modulation Exercises",
    "Recording Practice Guide",
  ],
};

function Learning() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [completedLessons, setCompletedLessons] = useState([]);
  const [checkingEnrollment, setCheckingEnrollment] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrollmentError, setEnrollmentError] = useState("");

  const course =
    courses.find((item) => item.id === id) || courses[0];

  const lessons = [
    {
      id: 1,
      title: "Introduction to Singing",
      duration: "20 Minutes",
    },
    {
      id: 2,
      title: "Voice Training and Breathing",
      duration: "25 Minutes",
    },
    {
      id: 3,
      title: "Basic Swaras and Pitch",
      duration: "30 Minutes",
    },
    {
      id: 4,
      title: "Voice Culture Exercises",
      duration: "25 Minutes",
    },
  ];

  const materials =
    studyMaterials[course.id] || studyMaterials["1"];

  /*
   * Check backend enrollment
   */

  useEffect(() => {
    const checkEnrollment = async () => {
      const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
      );

      if (!currentUser) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:5000/api/payments/enrollments/${currentUser.id}`
        );

        if (!response.ok) {
          throw new Error("Unable to check enrollment.");
        }

        const data = await response.json();

        const enrolled = data.some(
          (item) => item.courseId === course.id
        );

        if (!enrolled) {
          setEnrollmentError(
            "You are not enrolled in this course."
          );
          setIsEnrolled(false);
        } else {
          setIsEnrolled(true);
        }
      } catch (error) {
        console.error("Enrollment check error:", error);

        setEnrollmentError(
          "Unable to verify your enrollment. Please make sure the backend is running."
        );

        setIsEnrolled(false);
      } finally {
        setCheckingEnrollment(false);
      }
    };

    checkEnrollment();
  }, [course.id, navigate]);

  /*
   * Load completed lessons
   */

 useEffect(() => {
  const loadLessonProgress = async () => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!currentUser) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/payments/lesson-progress/${currentUser.id}/${course.id}`
      );

      if (!response.ok) {
        throw new Error("Unable to load lesson progress.");
      }

      const data = await response.json();

      setCompletedLessons(data.completedLessons || []);
    } catch (error) {
      console.error("Lesson progress error:", error);

      setCompletedLessons([]);
    }
  };

  loadLessonProgress();
}, [course.id]);

  const progress = Math.round(
    (completedLessons.length / lessons.length) * 100
  );

  /*
   * Loading enrollment
   */

  if (checkingEnrollment) {
    return (
      <div className="learning-page">
        <div className="learning-header">
          <div>
            <p className="learning-label">
              MY LEARNING
            </p>

            <h1>
              Checking Course Access...
            </h1>

            <p>
              Please wait while we verify your enrollment.
            </p>
          </div>
        </div>
      </div>
    );
  }

  /*
   * Not enrolled
   */

  if (!isEnrolled) {
    return (
      <div className="learning-page">
        <div className="learning-header">
          <div>
            <p className="learning-label">
              COURSE ACCESS
            </p>

            <h1>
              Enrollment Required
            </h1>

            <p>
              {enrollmentError}
            </p>

            <button
              className="completion-button"
              onClick={() =>
                navigate(`/course/${course.id}`)
              }
            >
              View Course
            </button>
          </div>
        </div>
      </div>
    );
  }

  /*
   * Enrolled user learning page
   */

  return (
    <div className="learning-page">

      {/* Header */}

      <div className="learning-header">

        <div>

          <p className="learning-label">
            MY LEARNING
          </p>

          <h1>
            {course.title}
          </h1>

          <p>
            Continue your singing journey with online
            classes and study materials.
          </p>

        </div>

        <div className="progress-box">

          <span>
            Course Progress
          </span>

          <strong>
            {progress}%
          </strong>

        </div>

      </div>

      {/* Progress Bar */}

      <div className="progress-container">

        <div
          className="progress-bar"
          style={{
            width: `${progress}%`,
          }}
        ></div>

      </div>

      {/* Online Classes */}

      <section className="learning-section">

        <div className="section-heading">

          <div className="section-icon">
            🎤
          </div>

          <div>

            <h2>
              Online Classes
            </h2>

            <p>
              Watch your lessons and improve your
              singing skills.
            </p>

          </div>

        </div>

        <div className="lesson-list">

          {lessons.map((lesson, index) => {

            const completed =
              completedLessons.includes(
                lesson.id
              );

            return (

              <div
                className={`lesson-card ${
                  completed
                    ? "lesson-completed"
                    : ""
                }`}
                key={lesson.id}
              >

                <div className="lesson-number">
                  {index + 1}
                </div>

                <div className="lesson-info">

                  <h3>
                    {lesson.title}
                  </h3>

                  <p>
                    {lesson.duration}
                  </p>

                </div>

                <Link
                  to={`/lesson/${course.id}/${lesson.id}`}
                  className={`lesson-button ${
                    completed
                      ? "completed-button"
                      : "watch-button"
                  }`}
                >
                  {completed
                    ? "✓ Completed"
                    : "Start Class"}
                </Link>

              </div>

            );
          })}

        </div>

      </section>

      {/* Study Materials */}

      <section className="learning-section">

        <div className="section-heading">

          <div className="section-icon">
            📚
          </div>

          <div>

            <h2>
              Study Materials
            </h2>

            <p>
              Access study materials specially prepared
              for this course.
            </p>

          </div>

        </div>

        <div className="materials-grid">

          {materials.map((material, index) => (

            <div
              className="material-card"
              key={index}
            >

              <div className="material-icon">
                📄
              </div>

              <div>

                <h3>
                  {material}
                </h3>

                <p>
                  PDF Study Material
                </p>

              </div>

              <Link
                to={`/study-material/${course.id}/${index + 1}`}
                className="download-button"
              >
                View
              </Link>

            </div>

          ))}

        </div>

      </section>

      {/* Completion */}

      <section className="completion-section">

        <h2>
          Ready to Complete Your Course?
        </h2>

        <p>
          Complete all your lessons to proceed
          to course completion.
        </p>

        {progress === 100 ? (

          <Link
            to={`/completion/${course.id}`}
            className="completion-button"
          >
            Complete Course
          </Link>

        ) : (

          <button
            className="completion-button disabled-button"
            disabled
          >
            Complete All Lessons First
          </button>

        )}

      </section>

    </div>
  );
}

export default Learning;