import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Payment from "./pages/Payment";
import Enrollment from "./pages/Enrollment";
import Learning from "./pages/Learning";
import LessonDetails from "./pages/LessonDetails";
import Completion from "./pages/Completion";
import Certificate from "./pages/Certificate"; 
import StudyMaterial from "./pages/StudyMaterial"; 
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/course/:id" element={<CourseDetails />} />

        <Route path="/payment/:id" element={<ProtectedRoute><Payment /></ProtectedRoute>} />

        <Route path="/enrollment/:id"  element={<ProtectedRoute> <Enrollment /> </ProtectedRoute>}/>

        <Route path="/learning/:id" element={<ProtectedRoute> <Learning /> </ProtectedRoute>} />

        <Route path="/lesson/:courseId/:lessonId" element={<ProtectedRoute> <LessonDetails /> </ProtectedRoute>} />

        <Route path="/completion/:id" element={<ProtectedRoute> <Completion /> </ProtectedRoute>} />

        <Route path="/certificate/:id" element={<ProtectedRoute> <Certificate /> </ProtectedRoute>} />

       <Route path="/study-material/:courseId/:materialId" element={<StudyMaterial />} />

        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;