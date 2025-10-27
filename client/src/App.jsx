import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage"; // ✅ Updated import
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AnalyzeIdeaPage from "./pages/AnalyzeIdeaPage";
import ProtectedRoute from "./components/ProtectedRoute";
import IdeaDetailsPage from "./pages/IdeaDetailsPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* ✅ Protected Dashboard Route */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />

            {/* ✅ Protected Analyze Page */}
            <Route
              path="/analyze"
              element={
                <ProtectedRoute>
                  <AnalyzeIdeaPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/idea/:id"
              element={
                <ProtectedRoute>
                  <IdeaDetailsPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
