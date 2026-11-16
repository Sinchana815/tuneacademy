import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./StudyMaterial.css";

/* =========================================
   TUNE ACADEMY - COURSE STUDY MATERIALS
   8 Courses | 32 Complete Study Modules
========================================= */

const studyMaterials = {
  "1": {
    title: "Hindustani Classical Singing",
    materials: [
      {
        title: "Hindustani Swara Notes",
        introduction:
          "Swara means a musical note. The seven basic swaras in Hindustani classical music are Sa, Re, Ga, Ma, Pa, Dha and Ni. These notes form the foundation of melody and raga singing.",
        concepts: [
          {
            heading: "The Seven Swaras",
            text: "Sa (Shadja), Re (Rishabh), Ga (Gandhar), Ma (Madhyam), Pa (Pancham), Dha (Dhaivat) and Ni (Nishad) are the seven basic swaras. Sa is the tonic or reference note chosen according to the singer's comfortable pitch."
          },
          {
            heading: "Saptak",
            text: "A Saptak is a group of seven notes. Mandra Saptak refers to the lower register, Madhya Saptak to the middle register, and Tara Saptak to the upper register."
          },
          {
            heading: "Shuddha, Komal and Tivra",
            text: "Shuddha means natural note. Komal refers to a flattened form of a note, while Tivra refers to the sharpened form of Madhyam. Sa and Pa are considered fixed notes in the basic system."
          },
          {
            heading: "Aroha and Avaroha",
            text: "Aroha is the ascending movement of notes: Sa Re Ga Ma Pa Dha Ni Sa. Avaroha is the descending movement: Sa Ni Dha Pa Ma Ga Re Sa."
          }
        ],
        exercises: [
          "Use a tanpura or a steady drone to establish your comfortable Sa.",
          "Sing Sa Re Ga Ma Pa Dha Ni Sa slowly, then sing the notes in reverse.",
          "Hold each note for four steady counts without forcing your voice.",
          "Record your practice and listen for clear, accurate transitions."
        ],
        tip: "Practice slowly and comfortably. Accurate pitch is more important than singing loudly or reaching high notes."
      },
      {
        title: "Introduction to Ragas",
        introduction:
          "A raga is a melodic framework that gives Hindustani classical music its distinctive character. A raga is more than a scale because it includes characteristic phrases, note movements and rules of melodic expression.",
        concepts: [
          {
            heading: "Meaning of Raga",
            text: "A raga is a traditional arrangement of musical notes and phrases used to create a particular melodic identity. Each raga has characteristic ways of approaching and connecting notes."
          },
          {
            heading: "Aroha and Avaroha",
            text: "Aroha describes the ascending note structure of a raga. Avaroha describes the descending structure. Some ragas use different note movements while ascending and descending."
          },
          {
            heading: "Vadi and Samvadi",
            text: "Vadi is traditionally described as the prominent note of a raga. Samvadi is its supporting or complementary note. These notes help establish the melodic character."
          },
          {
            heading: "Pakad",
            text: "Pakad is a characteristic musical phrase that helps identify a raga. Learning its pakad is useful for understanding the raga's identity and traditional movement."
          }
        ],
        exercises: [
          "Choose one beginner raga taught in your class.",
          "Write its aroha and avaroha in your notebook.",
          "Listen to a demonstration and hum the characteristic phrase.",
          "Repeat the phrase slowly with a tanpura or reference pitch."
        ],
        tip: "Learn one raga at a time. Listen carefully to traditional demonstrations before attempting to create your own phrases."
      },
      {
        title: "Riyaz Practice Exercises",
        introduction:
          "Riyaz means regular and disciplined musical practice. It helps singers develop pitch accuracy, breath control, voice coordination and familiarity with musical patterns.",
        concepts: [
          {
            heading: "Importance of Riyaz",
            text: "Regular practice improves familiarity with notes and melodies. Short, focused sessions with correct technique are more useful than long sessions performed with strain."
          },
          {
            heading: "Alankars",
            text: "Alankars are patterned note exercises. They help develop coordination and familiarity with swaras. Begin with simple patterns and increase difficulty gradually."
          },
          {
            heading: "Voice Culture",
            text: "Voice culture includes gentle exercises that develop vocal control and flexibility. Humming and comfortable sustained notes can be used as part of a warm-up."
          },
          {
            heading: "Practice Diary",
            text: "A practice diary records the exercises completed, time spent, observations and goals. It helps identify progress and areas that need attention."
          }
        ],
        exercises: [
          "Begin with three to five minutes of gentle humming.",
          "Practice Sa Re Ga Re Sa slowly with a steady drone.",
          "Repeat a simple alankar three times at a comfortable tempo.",
          "Write down one improvement and one goal for the next session."
        ],
        tip: "Keep your neck, jaw and shoulders relaxed. Stop if you experience pain or persistent hoarseness."
      },
      {
        title: "Taal and Rhythm Guide",
        introduction:
          "Taal is a rhythmic cycle used to organize musical time. It helps singers maintain a steady pulse and coordinate melodic phrases with accompaniment.",
        concepts: [
          {
            heading: "Matra",
            text: "Matra means a beat or unit of time within a rhythmic cycle. Counting matras helps singers understand the timing of a composition."
          },
          {
            heading: "Sam",
            text: "Sam is the important starting point of a taal cycle. Singers learn to recognize and return to sam while performing melodic phrases."
          },
          {
            heading: "Laya",
            text: "Laya refers to tempo or pace. Common descriptions include Vilambit (slow), Madhya (medium) and Drut (fast)."
          },
          {
            heading: "Clapping and Rhythm",
            text: "Clapping, waving and counting are used to mark sections of a taal. The exact pattern depends on the rhythmic cycle being studied."
          }
        ],
        exercises: [
          "Count a slow and steady pulse while clapping.",
          "Listen to a taal demonstration and mark the cycle.",
          "Practice a short melodic phrase while maintaining the beat.",
          "Try to return to sam without speeding up."
        ],
        tip: "Practice rhythm separately before combining it with difficult melodies."
      }
    ]
  },

  "2": {
    title: "Carnatic Classical Singing",
    materials: [
      {
        title: "Carnatic Swara Notes",
        introduction:
          "Carnatic music uses the syllables Sa, Ri, Ga, Ma, Pa, Da and Ni. These swaras are the foundation of Carnatic melodies, exercises and compositions.",
        concepts: [
          {
            heading: "Seven Basic Swaras",
            text: "The basic syllables are Shadja (Sa), Rishabha (Ri), Gandhara (Ga), Madhyama (Ma), Panchama (Pa), Dhaivata (Da) and Nishada (Ni)."
          },
          {
            heading: "Swarasthanas",
            text: "Certain swaras have different pitch positions. The note varieties used depend on the raga. Learn the exact positions from your instructor's demonstration."
          },
          {
            heading: "Tonic and Drone",
            text: "Sa is the tonic reference. A tanpura or electronic drone helps maintain the tonic and develop accurate pitch relationships."
          },
          {
            heading: "Pitch Accuracy",
            text: "Correct swara singing requires listening carefully, matching pitch and maintaining an even tone without vocal strain."
          }
        ],
        exercises: [
          "Sing Sa Pa Sa with a drone at a comfortable pitch.",
          "Practice the basic swara sequence slowly.",
          "Sing each swara clearly with even timing.",
          "Listen to your instructor and imitate a short phrase."
        ],
        tip: "Maintain the same tonic throughout practice and avoid forcing notes outside your comfortable range."
      },
      {
        title: "Sarali Varisai Practice",
        introduction:
          "Sarali Varisai are basic graded exercises in Carnatic music. They help beginners develop pitch accuracy, swara familiarity and coordination.",
        concepts: [
          {
            heading: "Purpose of Sarali Varisai",
            text: "These exercises introduce simple swara patterns in an organized sequence. They build the foundation needed for more advanced exercises."
          },
          {
            heading: "Correct Pronunciation",
            text: "Sing each swara clearly and give every note its proper duration. Avoid rushing through the pattern."
          },
          {
            heading: "Tempo",
            text: "Begin at a slow tempo. Increase speed only when the notes remain accurate and evenly spaced."
          },
          {
            heading: "Practice Method",
            text: "Practice each pattern separately before combining it with other patterns. Use a drone to maintain pitch."
          }
        ],
        exercises: [
          "Sing the first Sarali Varisai pattern taught in class.",
          "Repeat it three times slowly with a steady pulse.",
          "Practice the pattern using clear swara syllables.",
          "Increase the tempo slightly only when comfortable."
        ],
        tip: "Accuracy and clarity should come before speed."
      },
      {
        title: "Raga and Gamaka Practice",
        introduction:
          "A Carnatic raga is a melodic framework defined by its swaras, characteristic phrases and ornamentation. Gamakas are important expressive movements used in Carnatic music.",
        concepts: [
          {
            heading: "Arohanam",
            text: "Arohanam is the ascending arrangement of notes in a raga. It shows how the melody moves from lower to higher notes."
          },
          {
            heading: "Avarohanam",
            text: "Avarohanam is the descending arrangement of notes. It describes how the raga moves from higher to lower notes."
          },
          {
            heading: "Gamaka",
            text: "Gamaka refers to ornamented movements or oscillations of notes. Different ragas use characteristic gamakas that contribute to their identity."
          },
          {
            heading: "Raga Identity",
            text: "A raga is not only a scale. Its characteristic phrases and traditional ornamentation are essential to learning it correctly."
          }
        ],
        exercises: [
          "Write the arohanam and avarohanam of one beginner raga.",
          "Listen to a short demonstration of the raga.",
          "Hum one characteristic phrase slowly.",
          "Practice the demonstrated gamaka without forcing your voice."
        ],
        tip: "Learn gamakas from a reliable demonstration because their correct form depends on the raga."
      },
      {
        title: "Tala and Rhythm Exercises",
        introduction:
          "Tala is the rhythmic framework of Carnatic music. It organizes musical time and helps singers coordinate swaras and compositions with a steady beat.",
        concepts: [
          {
            heading: "Tala Structure",
            text: "A tala has a defined rhythmic structure. Different talas use different counts and combinations of rhythmic actions."
          },
          {
            heading: "Marking Tala",
            text: "Claps, finger counts and other hand actions are used to mark the tala cycle. Learn the correct pattern for the tala being taught."
          },
          {
            heading: "Steady Pulse",
            text: "Maintaining a consistent pulse helps the singer perform accurately with instrumental accompaniment."
          },
          {
            heading: "Combining Melody and Rhythm",
            text: "Practice the rhythm separately before combining it with complex melodic phrases."
          }
        ],
        exercises: [
          "Mark the tala cycle slowly while counting aloud.",
          "Speak a simple swara pattern in time.",
          "Sing the pattern while maintaining the hand actions.",
          "Practice a familiar phrase without changing the tempo."
        ],
        tip: "If the melody becomes difficult, return to a slower tempo and practice the rhythm separately."
      }
    ]
  },

  "3": {
    title: "Western Vocal Singing",
    materials: [
      {
        title: "Western Vocal Basics",
        introduction:
          "Western vocal singing combines pitch, rhythm, vocal technique and musical expression. Good singing begins with relaxed posture, comfortable breathing and accurate listening.",
        concepts: [
          {
            heading: "Posture",
            text: "Stand or sit comfortably with a balanced body position. Keep your shoulders relaxed and avoid unnecessary tension in the neck."
          },
          {
            heading: "Pitch",
            text: "Pitch describes how high or low a sound is. Singers develop pitch accuracy by listening to a reference note and reproducing it."
          },
          {
            heading: "Tone",
            text: "Tone is the quality or character of a sound. A relaxed and comfortable tone is preferable to a forced or excessively loud sound."
          },
          {
            heading: "Vocal Health",
            text: "Avoid pushing the voice to reach high notes. Pain or persistent hoarseness means you should stop singing and seek appropriate professional guidance."
          }
        ],
        exercises: [
          "Stand comfortably with relaxed shoulders.",
          "Sing a comfortable vowel on one steady note.",
          "Match a reference note from a keyboard or pitch source.",
          "Record a short melody and listen for steady pitch."
        ],
        tip: "Choose a comfortable key and volume while learning new songs."
      },
      {
        title: "Breathing and Warm-up Guide",
        introduction:
          "Breath management helps support singing phrases. Warm-ups prepare the voice gradually and should feel comfortable rather than tiring or painful.",
        concepts: [
          {
            heading: "Natural Breathing",
            text: "Allow the ribs and abdomen to move naturally during inhalation. Avoid lifting the shoulders excessively or forcing deep breaths."
          },
          {
            heading: "Steady Airflow",
            text: "A controlled release of air helps sustain a phrase. Avoid squeezing the throat or pushing excessive air."
          },
          {
            heading: "Humming",
            text: "Gentle humming on comfortable notes can be used to begin a warm-up and develop awareness of resonance."
          },
          {
            heading: "Lip Trills",
            text: "Lip trills create a gentle sound while air passes through relaxed lips. Use them only if comfortable and avoid forcing the range."
          }
        ],
        exercises: [
          "Take a comfortable breath and release a gentle 'sss' sound.",
          "Hum softly on a comfortable pitch.",
          "Try a small, gentle lip trill if it feels easy.",
          "Sing a familiar short phrase after warming up."
        ],
        tip: "Warm up gradually and take breaks if you feel dizzy or vocally tired."
      },
      {
        title: "Pitch Training Exercises",
        introduction:
          "Pitch training develops the ability to hear a note and reproduce it accurately. Regular listening and feedback help improve musical accuracy.",
        concepts: [
          {
            heading: "Reference Pitch",
            text: "A reference pitch is a note played or sung to guide your practice. Listen carefully before attempting to match it."
          },
          {
            heading: "Intervals",
            text: "An interval is the distance between two pitches. Start with small steps before practicing larger intervals."
          },
          {
            heading: "Ear Training",
            text: "Ear training develops the ability to recognize pitch relationships through listening and repetition."
          },
          {
            heading: "Recording Feedback",
            text: "Recording yourself allows you to compare your singing with a reference and identify notes that need more practice."
          }
        ],
        exercises: [
          "Listen to one comfortable reference note and sing it back.",
          "Practice two-note patterns moving up and down by small steps.",
          "Sing a short scale slowly with a reference pitch.",
          "Record your practice and compare the notes carefully."
        ],
        tip: "Do not force a note that feels too high or low. Adjust the practice range to your comfort."
      },
      {
        title: "Western Music Practice Sheet",
        introduction:
          "A structured practice session combines scales, rhythm, listening and song rehearsal. Practicing in short sections makes learning more manageable.",
        concepts: [
          {
            heading: "Scales",
            text: "A scale is an ordered set of pitches. Practice the scales assigned in your lessons, focusing on accuracy and evenness."
          },
          {
            heading: "Rhythm",
            text: "Rhythm organizes the duration and timing of notes. Clapping a melody's rhythm before singing can improve timing."
          },
          {
            heading: "Song Phrasing",
            text: "A musical phrase is a short musical idea. Divide songs into phrases and practice difficult sections separately."
          },
          {
            heading: "Practice Planning",
            text: "Set one goal for each practice session and record what you accomplished."
          }
        ],
        exercises: [
          "Sing a comfortable five-note scale slowly.",
          "Clap the rhythm of a short melody before singing.",
          "Practice one song phrase three times.",
          "Focus on pitch first, rhythm second and expression third."
        ],
        tip: "Use a slow metronome setting while learning difficult rhythmic patterns."
      }
    ]
  },

  "4": {
    title: "Bollywood Singing",
    materials: [
      {
        title: "Bollywood Singing Basics",
        introduction:
          "Bollywood singing includes many musical styles and moods. Singers need to understand the melody, lyrics, rhythm and character of the song.",
        concepts: [
          {
            heading: "Song Structure",
            text: "Many songs contain verses, a refrain or chorus, and instrumental sections. Identify these sections before rehearsing."
          },
          {
            heading: "Melody",
            text: "Learn the main melodic line carefully. Hum the tune before adding the lyrics."
          },
          {
            heading: "Lyrics and Diction",
            text: "Clear pronunciation helps communicate the song's meaning. Practice unfamiliar words separately."
          },
          {
            heading: "Comfortable Key",
            text: "Choose a pitch range that suits your voice rather than forcing yourself to copy the original singer's exact key."
          }
        ],
        exercises: [
          "Listen to a song and identify its verse and refrain.",
          "Hum the melody slowly without lyrics.",
          "Sing one phrase with clear pronunciation.",
          "Practice a difficult transition separately."
        ],
        tip: "Learn the melody and lyrics accurately before focusing on performance style."
      },
      {
        title: "Voice Modulation Guide",
        introduction:
          "Voice modulation involves changing vocal intensity, tone and phrasing to express the musical idea. Modulation should be controlled and comfortable.",
        concepts: [
          {
            heading: "Dynamics",
            text: "Dynamics refer to changes in loudness. Singers may use softer or fuller tones depending on the song's mood."
          },
          {
            heading: "Tone Variation",
            text: "Tone variation changes the color of the voice. It should not involve squeezing or forcing the throat."
          },
          {
            heading: "Phrasing",
            text: "Phrasing determines how musical lines are shaped. Natural pauses and phrase endings help communicate the song."
          },
          {
            heading: "Vocal Comfort",
            text: "Avoid shouting or imitating another singer in a way that causes strain."
          }
        ],
        exercises: [
          "Sing one line softly at a comfortable pitch.",
          "Repeat it with a slightly fuller but relaxed tone.",
          "Keep the melody unchanged while varying the expression.",
          "Record both versions and compare clarity."
        ],
        tip: "Control your volume through comfortable technique rather than throat pressure."
      },
      {
        title: "Expression and Emotion Exercises",
        introduction:
          "Expression connects a song's lyrics and melody with the listener. Understanding the meaning of the words helps guide vocal interpretation.",
        concepts: [
          {
            heading: "Understanding Lyrics",
            text: "Read the lyrics and understand their meaning before deciding how to sing them."
          },
          {
            heading: "Mood",
            text: "Identify the emotional character of the song, such as joy, sadness, romance or devotion."
          },
          {
            heading: "Musical Emphasis",
            text: "Give natural emphasis to meaningful words while maintaining accurate pitch and rhythm."
          },
          {
            heading: "Natural Expression",
            text: "Expression should feel natural. Avoid creating unnecessary jaw or neck tension."
          }
        ],
        exercises: [
          "Speak one verse naturally and identify its meaning.",
          "Sing a line with two different emotional intentions.",
          "Maintain the original melody while changing expression.",
          "Choose the interpretation that communicates the words clearly."
        ],
        tip: "Good expression supports the lyrics without sacrificing pitch accuracy."
      },
      {
        title: "Bollywood Song Practice Guide",
        introduction:
          "A planned rehearsal routine helps improve song memory, pitch, rhythm and performance confidence.",
        concepts: [
          {
            heading: "Song Selection",
            text: "Choose a song suited to your current vocal range and experience."
          },
          {
            heading: "Section Practice",
            text: "Learn the song one phrase at a time. Repeat difficult sections before connecting them."
          },
          {
            heading: "Rhythm Practice",
            text: "Use a manageable tempo while learning. Gradually approach the original tempo when accurate."
          },
          {
            heading: "Performance Review",
            text: "Record your practice and identify strengths as well as areas that need improvement."
          }
        ],
        exercises: [
          "Warm up gently and sing the first verse slowly.",
          "Repeat one difficult phrase several times with short rests.",
          "Practice the transition between verse and refrain.",
          "Perform the full song and write down one goal."
        ],
        tip: "Regular short practice sessions help develop consistency and confidence."
      }
    ]
  },

  "5": {
    title: "Ghazal Singing",
    materials: [
      {
        title: "Ghazal Singing Basics",
        introduction:
          "Ghazal singing combines poetry and melody. The singer must understand the words, maintain a measured melodic flow and communicate the meaning of the poetry.",
        concepts: [
          {
            heading: "Ghazal Poetry",
            text: "A ghazal is a poetic form commonly built from couplets. Each couplet expresses an idea or emotion and deserves careful interpretation."
          },
          {
            heading: "Melodic Flow",
            text: "The melody should support the poetry. Listen to the composition and learn its phrases before singing."
          },
          {
            heading: "Diction",
            text: "Clear pronunciation helps the audience understand the words. Confirm unfamiliar words with a reliable teacher or speaker."
          },
          {
            heading: "Phrasing",
            text: "Allow natural pauses and space between poetic phrases so the meaning remains clear."
          }
        ],
        exercises: [
          "Read a couplet and explain its meaning in your own words.",
          "Hum the melody before adding the lyrics.",
          "Sing one couplet slowly with natural pauses.",
          "Record the couplet and listen for clear diction."
        ],
        tip: "Understand the poetry before focusing on vocal ornamentation."
      },
      {
        title: "Ghazal Pronunciation Guide",
        introduction:
          "Correct pronunciation is essential for communicating ghazal poetry. Unfamiliar Urdu and Persian-origin words should be learned carefully.",
        concepts: [
          {
            heading: "Word Clarity",
            text: "Pronounce each word clearly without interrupting the natural flow of the melody."
          },
          {
            heading: "Unfamiliar Vocabulary",
            text: "Use a reliable dictionary, fluent speaker or instructor to confirm the pronunciation and meaning of unfamiliar words."
          },
          {
            heading: "Articulation",
            text: "Practice difficult consonants and vowels slowly before singing the complete line."
          },
          {
            heading: "Musical Diction",
            text: "Maintain clear word endings while sustaining notes comfortably."
          }
        ],
        exercises: [
          "Choose two lines and speak them slowly.",
          "Identify unfamiliar words and confirm their pronunciation.",
          "Practice difficult words separately.",
          "Sing the lines slowly while keeping the words understandable."
        ],
        tip: "Do not guess the pronunciation of unfamiliar poetry; verify it before performing."
      },
      {
        title: "Melody and Expression Notes",
        introduction:
          "Ghazal expression often uses subtle phrasing, melodic ornamentation and changes in vocal intensity. These techniques should serve the poetry and composition.",
        concepts: [
          {
            heading: "Meend",
            text: "Meend is a smooth glide between pitches. It should be practiced gently between comfortable notes."
          },
          {
            heading: "Ornamentation",
            text: "Ornaments add expression to a melodic phrase. Learn the appropriate ornaments from the composition or instructor."
          },
          {
            heading: "Subtle Dynamics",
            text: "Small changes in intensity can emphasize a meaningful word or phrase."
          },
          {
            heading: "Poetic Expression",
            text: "Musical expression should enhance the meaning of the words rather than make them difficult to understand."
          }
        ],
        exercises: [
          "Sing a short phrase plainly before adding ornamentation.",
          "Practice a gentle glide between two comfortable notes.",
          "Repeat the phrase using the ornament taught by your instructor.",
          "Check whether the words remain clear."
        ],
        tip: "Use ornamentation only where it fits the composition."
      },
      {
        title: "Ghazal Practice Exercises",
        introduction:
          "A structured practice routine helps improve melodic stability, pronunciation and expressive presentation.",
        concepts: [
          {
            heading: "Warm-up",
            text: "Begin with gentle humming and comfortable notes before singing demanding phrases."
          },
          {
            heading: "Lyrics and Melody",
            text: "Practice the words and melody separately before combining them."
          },
          {
            heading: "Accompaniment",
            text: "Keep accompaniment at a manageable level so the voice and poetry remain audible."
          },
          {
            heading: "Review",
            text: "Record a short performance and listen for diction, pitch and natural phrasing."
          }
        ],
        exercises: [
          "Warm up gently for a few minutes.",
          "Speak and then sing one couplet clearly.",
          "Practice the couplet at a slow tempo.",
          "Perform it without stopping and note one improvement."
        ],
        tip: "Allow the poetry to remain the focus of your singing."
      }
    ]
  },

  "6": {
    title: "Bhajan Singing",
    materials: [
      {
        title: "Bhajan Singing Basics",
        introduction:
          "Bhajans are devotional songs performed individually or in groups. Clear lyrics, a steady melody and comfortable vocal delivery help communicate the devotional meaning.",
        concepts: [
          {
            heading: "Meaning of Bhajan",
            text: "A bhajan is a devotional song. Understanding its lyrics helps the singer communicate its message."
          },
          {
            heading: "Melody",
            text: "Learn the melody and choose a comfortable pitch that suits the full song."
          },
          {
            heading: "Pronunciation",
            text: "Practice unfamiliar words so the lyrics remain understandable."
          },
          {
            heading: "Steady Tempo",
            text: "Maintain a consistent pulse, especially when singing with others or with accompaniment."
          }
        ],
        exercises: [
          "Read the lyrics and identify unfamiliar words.",
          "Hum the melody with a steady reference pitch.",
          "Sing one verse slowly with clear pronunciation.",
          "Practice the refrain separately."
        ],
        tip: "Choose a comfortable pitch and keep the words clear."
      },
      {
        title: "Devotional Singing Notes",
        introduction:
          "Devotional singing combines melody, lyrical clarity and thoughtful interpretation. A balanced performance allows the words and music to be heard naturally.",
        concepts: [
          {
            heading: "Understanding the Text",
            text: "Read and understand the devotional text before deciding how to phrase it."
          },
          {
            heading: "Vocal Delivery",
            text: "Use a comfortable tone and avoid forcing volume."
          },
          {
            heading: "Verse and Refrain",
            text: "Practice the transition between verses and refrain so the song flows naturally."
          },
          {
            heading: "Expression",
            text: "Use natural phrasing and expression while maintaining pitch and rhythm."
          }
        ],
        exercises: [
          "Speak the refrain clearly, then sing it.",
          "Practice moving from a verse to the refrain.",
          "Sing the refrain at a comfortable volume.",
          "Record a short section and review your diction."
        ],
        tip: "Expression should feel natural and should not require vocal strain."
      },
      {
        title: "Rhythm and Melody Guide",
        introduction:
          "Rhythm supports the melody and helps a group sing together. A steady pulse is particularly useful when singing with claps or simple accompaniment.",
        concepts: [
          {
            heading: "Pulse",
            text: "A pulse is a regular beat that provides a sense of musical timing."
          },
          {
            heading: "Clapping",
            text: "Clapping can help singers maintain a steady beat and coordinate their entrances."
          },
          {
            heading: "Group Singing",
            text: "Listen to the other singers and follow the same tempo and melodic line."
          },
          {
            heading: "Accompaniment",
            text: "Simple accompaniment should support the voice rather than overpower it."
          }
        ],
        exercises: [
          "Clap a steady pulse while speaking the lyrics.",
          "Sing the refrain while maintaining the pulse.",
          "Practice the rhythm before adding the melody.",
          "Sing with simple accompaniment at a slow tempo."
        ],
        tip: "Listen carefully to maintain timing when singing with a group."
      },
      {
        title: "Bhajan Practice Exercises",
        introduction:
          "Regular and gentle practice helps develop confidence, consistent pitch and clear pronunciation in devotional singing.",
        concepts: [
          {
            heading: "Preparation",
            text: "Begin with a comfortable warm-up and establish your tonic."
          },
          {
            heading: "Short Sections",
            text: "Practice the opening line, verse and refrain separately."
          },
          {
            heading: "Complete Rehearsal",
            text: "Combine the sections after their melody and rhythm are stable."
          },
          {
            heading: "Vocal Rest",
            text: "Take breaks and stop if your voice feels painful or unusually tired."
          }
        ],
        exercises: [
          "Hum gently and sing the opening line.",
          "Repeat the refrain three times with steady rhythm.",
          "Practice one verse and its refrain.",
          "Record the complete section and review your progress."
        ],
        tip: "Regular, comfortable practice is more helpful than singing for long periods without rest."
      }
    ]
  },

  "7": {
    title: "Light Music",
    materials: [
      {
        title: "Light Music Basics",
        introduction:
          "Light music includes accessible melody-based styles. It focuses on pitch, rhythm, clear diction and natural musical expression.",
        concepts: [
          {
            heading: "Melody",
            text: "Identify the main tune and listen for the shape of each musical phrase."
          },
          {
            heading: "Rhythm",
            text: "Maintain a steady tempo and understand the timing of the song."
          },
          {
            heading: "Diction",
            text: "Pronounce lyrics clearly while maintaining the natural flow of the melody."
          },
          {
            heading: "Song Selection",
            text: "Choose songs that fit your comfortable vocal range and current experience."
          }
        ],
        exercises: [
          "Listen to a song and hum its main melody.",
          "Sing one phrase slowly with lyrics.",
          "Practice difficult transitions separately.",
          "Record a short section and identify one improvement."
        ],
        tip: "Focus on melody and rhythm before adding performance effects."
      },
      {
        title: "Melody Training Notes",
        introduction:
          "Melody training develops the ability to hear, remember and reproduce musical phrases accurately.",
        concepts: [
          {
            heading: "Active Listening",
            text: "Listen carefully to a short melodic phrase before attempting to sing it."
          },
          {
            heading: "Phrase Division",
            text: "Divide longer melodies into small sections to make learning easier."
          },
          {
            heading: "Pitch Memory",
            text: "Repeating a phrase after listening helps strengthen musical memory and pitch accuracy."
          },
          {
            heading: "Gradual Practice",
            text: "Learn each section accurately before connecting the entire melody."
          }
        ],
        exercises: [
          "Listen to a four- or five-note phrase and hum it back.",
          "Practice the phrase in small sections.",
          "Connect the sections after each becomes comfortable.",
          "Try singing the phrase without the recording and compare."
        ],
        tip: "Listen first, sing second, and repeat slowly until the melody is familiar."
      },
      {
        title: "Voice Control Exercises",
        introduction:
          "Voice control includes steady pitch, comfortable dynamics and smooth transitions. It develops through relaxed and consistent practice.",
        concepts: [
          {
            heading: "Steady Notes",
            text: "Practice holding a comfortable note without unnecessary changes in pitch."
          },
          {
            heading: "Dynamic Control",
            text: "Learn to sing softly and at a moderately fuller volume without pushing."
          },
          {
            heading: "Smooth Transitions",
            text: "Move between nearby notes smoothly and comfortably."
          },
          {
            heading: "Relaxation",
            text: "Keep the jaw, neck and shoulders relaxed during vocal exercises."
          }
        ],
        exercises: [
          "Sustain a comfortable note softly for a few seconds.",
          "Sing a short phrase softly, then at a fuller comfortable volume.",
          "Practice a gentle slide between nearby notes.",
          "Rest if your voice feels tired."
        ],
        tip: "Do not force high notes or increase volume through throat pressure."
      },
      {
        title: "Light Music Practice Guide",
        introduction:
          "A balanced practice session includes warm-up, melody study, rhythm exercises, song rehearsal and review.",
        concepts: [
          {
            heading: "Practice Goals",
            text: "Set one small and achievable goal for every practice session."
          },
          {
            heading: "Tempo",
            text: "Use a manageable tempo when learning difficult melodies or rhythmic patterns."
          },
          {
            heading: "Song Sections",
            text: "Practice challenging phrases separately before connecting them into a complete song."
          },
          {
            heading: "Progress Review",
            text: "Record your practice and note the areas that need attention."
          }
        ],
        exercises: [
          "Warm up gently and practice a melody for five minutes.",
          "Clap the rhythm before singing the phrase.",
          "Practice one song section from beginning to end.",
          "Write down your next practice goal."
        ],
        tip: "Track your progress and increase difficulty gradually."
      }
    ]
  },

  "8": {
    title: "Playback Singing",
    materials: [
      {
        title: "Playback Singing Basics",
        introduction:
          "Playback singing involves preparing vocal performances for recording and synchronization with music or visual media. Accuracy, timing and repeatable delivery are important skills.",
        concepts: [
          {
            heading: "Song Preparation",
            text: "Learn the lyrics, melody and mood of the song before attempting a complete recording."
          },
          {
            heading: "Timing",
            text: "Listen to the reference or instrumental track and identify the correct entry points."
          },
          {
            heading: "Repeatable Performance",
            text: "Practice producing a relaxed and consistent performance across multiple takes."
          },
          {
            heading: "Interpretation",
            text: "Understand the lyrics and use appropriate phrasing and dynamics."
          }
        ],
        exercises: [
          "Listen to the instrumental track and mark entry points.",
          "Practice the melody in short phrases.",
          "Sing the phrases with a comfortable volume.",
          "Record a practice take and note timing or pitch issues."
        ],
        tip: "Aim for accurate and comfortable takes rather than forcing a perfect first attempt."
      },
      {
        title: "Microphone Techniques Guide",
        introduction:
          "Microphone technique helps capture a clear and balanced vocal. Correct positioning and recording levels reduce unwanted noise and distortion.",
        concepts: [
          {
            heading: "Microphone Position",
            text: "Keep the microphone stable and follow the distance recommended for the particular microphone and recording setup."
          },
          {
            heading: "Recording Levels",
            text: "Check the recording level before singing. Excessively high levels can cause distortion or clipping."
          },
          {
            heading: "Background Noise",
            text: "Choose a quiet recording space and avoid unnecessary handling of the microphone."
          },
          {
            heading: "Headphone Safety",
            text: "Use a comfortable listening volume when monitoring through headphones."
          }
        ],
        exercises: [
          "Speak and sing a short line while maintaining a stable position.",
          "Record a short test and listen for distortion.",
          "Check for background noise.",
          "Make a small adjustment to position or recording level and repeat."
        ],
        tip: "The appropriate microphone distance depends on the equipment and recording environment."
      },
      {
        title: "Voice Modulation Exercises",
        introduction:
          "Playback singing may require different vocal colors and dynamics to suit a song. Modulation should remain controlled, intelligible and comfortable.",
        concepts: [
          {
            heading: "Dynamics",
            text: "Change vocal intensity to match the musical arrangement without shouting or forcing."
          },
          {
            heading: "Emotional Interpretation",
            text: "Use phrasing and tone to communicate the meaning of the lyrics."
          },
          {
            heading: "Pitch Stability",
            text: "Maintain accurate pitch while changing the intensity or color of the voice."
          },
          {
            heading: "Healthy Technique",
            text: "Avoid imitating another singer in a way that creates vocal discomfort."
          }
        ],
        exercises: [
          "Sing one line softly at a comfortable pitch.",
          "Repeat it with a slightly fuller but relaxed tone.",
          "Try two different emotional interpretations.",
          "Listen to both recordings and compare clarity."
        ],
        tip: "Let the song guide your expression while keeping the voice relaxed."
      },
      {
        title: "Recording Practice Guide",
        introduction:
          "A simple recording workflow helps singers prepare, record, review and improve their performances.",
        concepts: [
          {
            heading: "Recording Preparation",
            text: "Prepare the lyrics, instrumental track, recording device and room before starting."
          },
          {
            heading: "Test Recording",
            text: "Make a short test recording to check sound levels and background noise."
          },
          {
            heading: "Recording Takes",
            text: "Record short sections when learning. Keep track of the takes you want to review."
          },
          {
            heading: "Review",
            text: "Listen for pitch, timing, diction and noise. Choose one improvement at a time."
          }
        ],
        exercises: [
          "Make a short test recording and check the sound level.",
          "Record one phrase and listen carefully.",
          "Write down one improvement to make.",
          "Record the phrase again and compare the two takes."
        ],
        tip: "Use safe headphone volume and take breaks during recording sessions."
      }
    ]
  }
};

/* =========================================
   STUDY MATERIAL PAGE
========================================= */

function StudyMaterial() {
  const { courseId, materialId } = useParams();
  const navigate = useNavigate();

  const course = studyMaterials[courseId];

  const materialIndex = Number(materialId) - 1;

  const material =
    course && materialIndex >= 0
      ? course.materials[materialIndex]
      : null;

  const handlePrint = () => {
    window.print();
  };

  if (!course || !material) {
    return (
      <div className="study-material-page">
        <div className="material-content">
          <h1>Study Material Not Found</h1>

          <p>
            The requested study material could not be found.
            Please return to your course and select a valid material.
          </p>

          <button
            className="material-back-button"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="study-material-page">

      {/* Page Header */}

      <div className="material-header">
        <p className="material-label">
          TUNE ACADEMY • STUDY MATERIAL
        </p>

        <h1>{material.title}</h1>

        <h2>{course.title}</h2>

        <p>
          Module {materialIndex + 1} of 4
        </p>
      </div>

      {/* Lesson Introduction */}

      <section className="material-content">
        <h2>📖 Lesson Overview</h2>

        <p>{material.introduction}</p>
      </section>

      {/* Main Lesson Notes */}

      <section className="material-content">
        <h2>🎵 Lesson Notes</h2>

        {material.concepts.map((concept, index) => (
          <div
            className="material-topic"
            key={index}
          >
            <h3>
              {index + 1}. {concept.heading}
            </h3>

            <p>{concept.text}</p>
          </div>
        ))}
      </section>

      {/* Practice Exercises */}

      <section className="material-content">
        <h2>🎤 Practice Exercises</h2>

        <p>
          Complete these activities at a comfortable pace.
          Repeat the exercises as needed.
        </p>

        <ol className="material-exercise-list">
          {material.exercises.map((exercise, index) => (
            <li key={index}>
              {exercise}
            </li>
          ))}
        </ol>
      </section>

      {/* Practice Tip */}

      <section className="material-practice-tip">
        <h2>🎵 Practice Tip</h2>

        <p>{material.tip}</p>
      </section>

      {/* Practice Reflection */}

      <section className="material-content">
        <h2>📝 Practice Reflection</h2>

        <p>
          After completing this lesson, reflect on your practice.
        </p>

        <div className="reflection-question">
          <strong>1. What did I learn in this lesson?</strong>
          <div className="reflection-line"></div>
        </div>

        <div className="reflection-question">
          <strong>2. Which exercise needs more practice?</strong>
          <div className="reflection-line"></div>
        </div>

        <div className="reflection-question">
          <strong>3. What will I practice next time?</strong>
          <div className="reflection-line"></div>
        </div>
      </section>

      {/* Navigation and PDF Buttons */}

      <div className="material-buttons">

        <button
          className="material-back-button"
          onClick={() => navigate(-1)}
        >
          ← Back to Learning
        </button>

        <button
          className="material-download-button"
          onClick={handlePrint}
        >
          ↓ Print / Save as PDF
        </button>

      </div>

    </div>
  );
}

export default StudyMaterial;