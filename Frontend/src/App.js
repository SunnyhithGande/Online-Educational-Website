import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import UserManagement from "./components/UserManagement/UserManagement";
import "./components/UserManagement/UserManagement.css";
import BlogManagement from "./components/BlogManagement/BlogManagement";
import "./components/BlogManagement/BlogManagement.css";
import CourseEnrollment from "./components/CourseEnrollment/CourseEnrollment";
import "./components/CourseEnrollment/CourseEnrollment.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/blogs" element={<BlogManagement />} />
        <Route path="/courses/:courseId" element={<CourseEnrollment />} />
      </Routes>
    </div>
  );
}

export default App;
