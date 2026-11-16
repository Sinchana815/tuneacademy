import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./LessonDetails.css";

const courseLessons = {
  1: [
    "Introduction to Singing",
    "Voice Training and Breathing",
    "Basic Swaras and Pitch",
    "Voice Culture Exercises",
  ],
  2: [
    "Introduction to Carnatic Music",
    "Sarali Varisai",
    "Basic Swaras and Ragas",
    "Carnatic Voice Practice",
  ],
  3: [
    "Introduction to Western Vocal",
    "Breathing and Vocal Warmups",
    "Pitch and Voice Control",
    "Western Singing Techniques",
  ],
  4: [
    "Introduction to Bollywood Singing",
    "Voice Modulation",
    "Expression and Emotion",
    "Bollywood Song Practice",
  ],
  5: [
    "Introduction to Ghazal Singing",
    "Voice and Pronunciation",
    "Ghazal Expression",
    "Ghazal Singing Practice",
  ],
  6: [
    "Introduction to Bhajan Singing",
    "Bhajan Voice Training",
    "Rhythm and Devotional Expression",
    "Bhajan Singing Practice",
  ],
  7: [
    "Introduction to Light Music",
    "Voice Modulation",
    "Melody and Rhythm",
    "Light Music Practice",
  ],
  8: [
    "Introduction to Playback Singing",
    "Microphone Techniques",
    "Voice Expression and Modulation",
    "Playback Song Practice",
  ],
};

const LessonDetails = () => {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();

  const [videoError, setVideoError] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [checkingEnrollment, setCheckingEnrollment] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrollmentError, setEnrollmentError] = useState("");

  const [completingLesson, setCompletingLesson] =
    useState(false);

  const lessons = courseLessons[courseId];
  const lessonNumber = Number(lessonId);
  const lessonTitle = lessons?.[lessonNumber - 1];

  const videoPath =
    `/Videos/course${courseId}/lesson${lessonId}.mp4`;

  /*
   * Check whether the logged-in user is enrolled
   * in this course.
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
          throw new Error(
            "Unable to check enrollment."
          );
        }

        const data = await response.json();

        const enrolled = data.some(
          (item) =>
            String(item.courseId) === String(courseId)
        );

        if (!enrolled) {
          setIsEnrolled(false);

          setEnrollmentError(
            "You are not enrolled in this course."
          );
        } else {
          setIsEnrolled(true);
        }
      } catch (error) {
        console.error(
          "Enrollment check error:",
          error
        );

        setIsEnrolled(false);

        setEnrollmentError(
          "Unable to verify your enrollment. Please make sure the backend is running."
        );
      } finally {
        setCheckingEnrollment(false);
      }
    };

    checkEnrollment();
  }, [courseId, navigate]);

  /*
   * Load completed lesson status from backend
   */

  useEffect(() => {
    if (!isEnrolled) {
      return;
    }

    const loadLessonProgress = async () => {
      const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
      );

      if (!currentUser) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:5000/api/payments/lesson-progress/${currentUser.id}/${courseId}`
        );

        if (!response.ok) {
          throw new Error(
            "Unable to load lesson progress."
          );
        }

        const data = await response.json();

        const completedLessons =
          data.completedLessons || [];

        setCompleted(
          completedLessons.includes(lessonNumber)
        );
      } catch (error) {
        console.error(
          "Lesson progress error:",
          error
        );

        setCompleted(false);
      }

      setVideoError(false);
    };

    loadLessonProgress();
  }, [
    courseId,
    lessonNumber,
    isEnrolled,
    navigate,
  ]);

  /*
   * Complete lesson through backend
   */

  const handleCompleteLesson = async () => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!currentUser) {
      navigate("/login");
      return;
    }

    if (completed) {
      navigate(`/learning/${courseId}`);
      return;
    }

    try {
      setCompletingLesson(true);

      const response = await fetch(
        "http://localhost:5000/api/payments/lesson-complete",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: currentUser.id,
            courseId: courseId,
            lessonId: lessonNumber,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(
          data.message ||
            "Unable to complete this lesson."
        );

        return;
      }

      setCompleted(true);

      navigate(`/learning/${courseId}`);
    } catch (error) {
      console.error(
        "Complete lesson error:",
        error
      );

      alert(
        "Unable to save lesson completion. Please make sure the backend is running."
      );
    } finally {
      setCompletingLesson(false);
    }
  };

  const handlePreviousLesson = () => {
    if (lessonNumber > 1) {
      navigate(
        `/lesson/${courseId}/${lessonNumber - 1}`
      );
    }
  };

  const handleNextLesson = () => {
    if (lessonNumber < 4) {
      navigate(
        `/lesson/${courseId}/${lessonNumber + 1}`
      );
    }
  };

  /*
   * Invalid lesson
   */

  if (
    !lessons ||
    !lessonTitle ||
    lessonNumber < 1 ||
    lessonNumber > 4
  ) {
    return (
      <div className="lesson-page">

        <div className="lesson-card">

          <h2>
            Lesson Not Found
          </h2>

          <p>
            Sorry, this lesson is not available.
            Please select a valid lesson from your
            course.
          </p>

          <button
            className="lesson-btn"
            onClick={() =>
              navigate(`/learning/${courseId}`)
            }
          >
            Back to Learning
          </button>

        </div>

      </div>
    );
  }

  /*
   * Checking enrollment
   */

  if (checkingEnrollment) {
    return (
      <div className="lesson-page">

        <div className="lesson-card">

          <h2>
            Checking Course Access...
          </h2>

          <p>
            Please wait while we verify your enrollment.
          </p>

        </div>

      </div>
    );
  }

  /*
   * User is not enrolled
   */

  if (!isEnrolled) {
    return (
      <div className="lesson-page">

        <div className="lesson-card">

          <h2>
            Enrollment Required
          </h2>

          <p>
            {enrollmentError}
          </p>

          <button
            className="lesson-btn"
            onClick={() =>
              navigate(`/course/${courseId}`)
            }
          >
            View Course
          </button>

        </div>

      </div>
    );
  }

  /*
   * Enrolled user can access lesson
   */

  return (
    <div className="lesson-page">

      <div className="lesson-container">

        <button
          className="back-btn"
          onClick={() =>
            navigate(`/learning/${courseId}`)
          }
        >
          ← Back to Learning
        </button>

        <div className="lesson-header">

          <span className="lesson-badge">
            Lesson {lessonNumber} of 4
          </span>

          <h1>
            {lessonTitle}
          </h1>

          <p>
            Watch the lesson video carefully and
            practice along with your instructor.
          </p>

        </div>

        <div className="lesson-video">

          {!videoError ? (

            <video
              key={videoPath}
              controls
              controlsList="nodownload"
              preload="metadata"
              onError={() =>
                setVideoError(true)
              }
            >
              <source
                src={videoPath}
                type="video/mp4"
              />

              Your browser does not support
              video playback.

            </video>

          ) : (

            <div className="video-error">

              <div className="video-error-icon">
                ▶
              </div>

              <h3>
                Video Not Found
              </h3>

              <p>
                Please check that your video is
                inside the correct course folder
                and has the correct filename.
              </p>

              <p className="video-path">
                {videoPath}
              </p>

            </div>

          )}

        </div>

        <div className="lesson-info">

          <h2>
            About This Lesson
          </h2>

          <p>
            This lesson is part of your Tune Academy
            singing course. Follow the instructor's
            demonstration, practice the techniques,
            and repeat the exercises to improve your
            singing skills.
          </p>

          <div className="lesson-tip">

            <strong>
              Practice Tip:
            </strong>

            <p>
              Find a quiet place, keep your posture
              comfortable, and practice at your own
              pace.
            </p>

          </div>

        </div>

        <div className="lesson-navigation">

          <button
            className="lesson-btn secondary-btn"
            onClick={handlePreviousLesson}
            disabled={lessonNumber === 1}
          >
            ← Previous Lesson
          </button>

          <button
            className="lesson-btn complete-btn"
            onClick={handleCompleteLesson}
            disabled={completingLesson}
          >
            {completingLesson
              ? "Saving..."
              : completed
              ? "Completed ✓"
              : "Mark as Completed"}
          </button>

          <button
            className="lesson-btn secondary-btn"
            onClick={handleNextLesson}
            disabled={lessonNumber === 4}
          >
            Next Lesson →
          </button>

        </div>

      </div>

    </div>
  );
};

export default LessonDetails;