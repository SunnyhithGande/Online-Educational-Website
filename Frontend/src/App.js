import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
<<<<<<< HEAD
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
=======
>>>>>>> origin/main
import UserManagement from "./components/UserManagement/UserManagement";
import "./components/UserManagement/UserManagement.css";
import BlogManagement from "./components/BlogManagement/BlogManagement";
import "./components/BlogManagement/BlogManagement.css";
<<<<<<< HEAD
import BlogList from "./pages/BlogList";
import "./pages/BlogList.css";
import BlogEditor from "./components/BlogManagement/BlogEditor";
import "./components/BlogManagement/BlogEditor.css";
import CourseEnrollment from "./components/CourseEnrollment/CourseEnrollment";
import "./components/CourseEnrollment/CourseEnrollment.css";
import ReadingProgress from "./components/ReadingProgress/ReadingProgress";
import LearningPathGenerator from "./components/LearningPath/LearningPathGenerator";
import "./components/LearningPath/LearningPathGenerator.css";
import BlogDetail from "./pages/BlogDetail";
import LearningPath from "./pages/LearningPath";
import Quiz from "./pages/Quiz";
import BrainBreak from "./pages/BrainBreak";
=======
import CourseEnrollment from "./components/CourseEnrollment/CourseEnrollment";
import "./components/CourseEnrollment/CourseEnrollment.css";
import BrainBreak from "./components/BrainBreak/BrainBreak";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import "./components/Dashboard/Dashboard.css";
>>>>>>> origin/main

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/blogs/create" element={<BlogEditor />} />
        <Route path="/blogs/edit/:id" element={<BlogEditor />} />
        <Route path="/blogs/manage" element={<BlogManagement />} />
        <Route path="/courses/:courseId" element={<CourseEnrollment />} />
        <Route path="/reading-progress" element={<ReadingProgress />} />
        <Route path="/learning-path" element={<LearningPath />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/brain-break" element={<BrainBreak />} />
=======
        <Route path="/signup" element={<Signup />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/blogs" element={<BlogManagement />} />
        <Route path="/courses/:courseId" element={<CourseEnrollment />} />
        <Route 
          path="/brain-break" 
          element={
            <ProtectedRoute>
              <BrainBreak />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
>>>>>>> origin/main
      </Routes>
    </div>
  );
}

export default App;
