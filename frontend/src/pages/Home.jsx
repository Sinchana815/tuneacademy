import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  const singingStyles = [
    {
      title: "Hindustani Classical",
      description:
        "Learn traditional Hindustani vocal techniques, ragas and classical singing."
    },
    {
      title: "Carnatic Classical",
      description:
        "Explore Carnatic vocal music with swaras, ragas and traditional techniques."
    },
    {
      title: "Western Vocal",
      description:
        "Develop your vocal skills with Western singing techniques and exercises."
    },
    {
      title: "Bollywood Singing",
      description:
        "Learn popular Bollywood songs and improve your expression and vocal style."
    },
    {
      title: "Ghazal Singing",
      description:
        "Discover the beautiful art of Ghazal singing and expressive vocals."
    },
    {
      title: "Playback Singing",
      description:
        "Build your voice, expression and confidence for playback-style singing."
    }
  ];

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">

          <p className="hero-small-title">
            WELCOME TO
          </p>

          <h1>
            Tune Academy
          </h1>

          <h2>
            Discover Your Voice. <br />
            Create Your Music.
          </h2>

          <p>
            Learn different singing styles from the comfort of your home
            with structured online music classes and study materials.
          </p>

          <Link to="/courses" className="hero-btn">
            Explore Singing Courses
          </Link>

        </div>

        <div className="hero-icon">
          🎤
        </div>
      </section>


      {/* About Section */}
      <section className="about-section">

        <p className="section-label">
          ABOUT US
        </p>

        <h2>
          Learn. Sing. Grow.
        </h2>

        <p>
          Tune Academy is an online platform designed for students who
          want to learn and improve their singing skills. Choose your
          preferred singing style, attend online classes, access study
          materials and complete your course to earn a certificate.
        </p>

      </section>


      {/* Singing Styles */}
      <section className="courses-section">

        <p className="section-label">
          OUR COURSES
        </p>

        <h2>
          Explore Singing Styles
        </h2>

        <div className="course-grid">

          {singingStyles.map((course, index) => (
            <div className="course-card" key={index}>

              <div className="course-icon">
                🎵
              </div>

              <h3>
                {course.title}
              </h3>

              <p>
                {course.description}
              </p>

              <Link
                to="/courses"
                className="course-btn"
              >
                View Course
              </Link>

            </div>
          ))}

        </div>

      </section>


      {/* Why Tune Academy */}
      <section className="why-section">

        <p className="section-label">
          WHY TUNE ACADEMY?
        </p>

        <h2>
          Everything You Need to Learn Singing
        </h2>

        <div className="features">

          <div className="feature">
            <span>🎤</span>
            <h3>Online Classes</h3>
            <p>
              Attend music classes online from anywhere.
            </p>
          </div>

          <div className="feature">
            <span>📚</span>
            <h3>Study Materials</h3>
            <p>
              Access useful learning materials for your course.
            </p>
          </div>

          <div className="feature">
            <span>🏆</span>
            <h3>Course Certificate</h3>
            <p>
              Receive a certificate after completing your course.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;