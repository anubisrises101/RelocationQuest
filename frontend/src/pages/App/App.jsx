import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../services/authService";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import SignUpPage from "../SignUpPage/SignUpPage";
import LogInPage from "../LogInPage/LogInPage";
import MovePage from "../MovePage/MovePage";
import MoveForm from "../MoveForm/MoveForm";
import MoveDetails from "../MoveDetails/MoveDetails";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main id="react-app">
      <NavBar user={user} setUser={setUser} />
      <section id="main-section">
        {user ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/moves" element={<MovePage />} />
            <Route path="/moves/new" element={<MoveForm  />} />
            <Route path="/moves/:movesId" element={<MoveDetails user={user} />} />
            <Route path="/moves/:movesId/edit" element={<MoveForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LogInPage setUser={setUser} />} />
            <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </section>
    </main>
  );
}

export default App;
