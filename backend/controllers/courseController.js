const courses = [
  {
    id: "1",
    title: "Hindustani Classical Singing",
    level: "Beginner to Intermediate",
    duration: "12 Weeks",
    fee: "₹2,999",
    icon: "🎤",
    description:
      "Learn Hindustani classical vocal techniques, ragas, swaras and voice culture.",
    learn: [
      "Basic Swara and Alankara",
      "Introduction to Ragas",
      "Voice Culture and Practice",
      "Rhythm and Taal",
      "Classical Singing Techniques"
    ]
  },
  {
    id: "2",
    title: "Carnatic Classical Singing",
    level: "Beginner to Intermediate",
    duration: "12 Weeks",
    fee: "₹2,999",
    icon: "🎶",
    description:
      "Learn Carnatic vocal music through swaras, ragas, rhythm and traditional exercises.",
    learn: [
      "Swaras and Sarali Varisai",
      "Introduction to Ragas",
      "Tala and Rhythm",
      "Voice Training",
      "Carnatic Singing Techniques"
    ]
  },
  {
    id: "3",
    title: "Western Vocal Singing",
    level: "Beginner",
    duration: "10 Weeks",
    fee: "₹2,499",
    icon: "🎵",
    description:
      "Develop your voice with Western vocal techniques, breathing exercises and pitch training.",
    learn: [
      "Breathing Techniques",
      "Pitch and Voice Control",
      "Vocal Warm-ups",
      "Western Music Basics",
      "Singing Exercises"
    ]
  },
  {
    id: "4",
    title: "Bollywood Singing",
    level: "Beginner to Intermediate",
    duration: "8 Weeks",
    fee: "₹2,199",
    icon: "🎤",
    description:
      "Learn Bollywood singing with expression, voice modulation and popular song techniques.",
    learn: [
      "Voice Modulation",
      "Expression and Emotion",
      "Bollywood Song Techniques",
      "Pitch Control",
      "Performance Skills"
    ]
  },
  {
    id: "5",
    title: "Ghazal Singing",
    level: "Intermediate",
    duration: "8 Weeks",
    fee: "₹2,299",
    icon: "🎼",
    description:
      "Explore the expressive style of Ghazal singing and improve your vocal presentation.",
    learn: [
      "Ghazal Singing Basics",
      "Voice Expression",
      "Pronunciation",
      "Melody and Rhythm",
      "Performance Techniques"
    ]
  },
  {
    id: "6",
    title: "Bhajan Singing",
    level: "Beginner",
    duration: "6 Weeks",
    fee: "₹1,799",
    icon: "🎵",
    description:
      "Learn devotional singing techniques, pronunciation, rhythm and traditional melodies.",
    learn: [
      "Devotional Singing Basics",
      "Voice Training",
      "Rhythm and Melody",
      "Pronunciation",
      "Bhajan Performance"
    ]
  },
  {
    id: "7",
    title: "Light Music",
    level: "Beginner",
    duration: "8 Weeks",
    fee: "₹1,999",
    icon: "🎶",
    description:
      "Build confidence in light music through melody, rhythm and practical singing exercises.",
    learn: [
      "Melody Training",
      "Basic Voice Control",
      "Rhythm Practice",
      "Song Practice",
      "Performance Confidence"
    ]
  },
  {
    id: "8",
    title: "Playback Singing",
    level: "Intermediate",
    duration: "10 Weeks",
    fee: "₹2,799",
    icon: "🎤",
    description:
      "Improve your voice, expression, modulation and singing skills for playback-style singing.",
    learn: [
      "Playback Singing Basics",
      "Voice Modulation",
      "Expression and Emotion",
      "Microphone Techniques",
      "Recording Practice"
    ]
  }
];

const getCourses = (req, res) => {
  res.json(courses);
};

const getCourseById = (req, res) => {
  const course = courses.find(
    (item) => item.id === req.params.id
  );

  if (!course) {
    return res.status(404).json({
      message: "Course not found"
    });
  }

  res.json(course);
};

module.exports = {
  courses,
  getCourses,
  getCourseById
};