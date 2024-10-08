import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { getUser } from "../../services/authService";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import SignUpPage from "../SignUpPage/SignUpPage";
import LogInPage from "../LogInPage/LogInPage";
import MovePage from "../MovePage/MovePage";
import MoveForm from "../MoveForm/MoveForm";
import MoveDetails from "../MoveDetails/MoveDetails";
import * as moveService from "../../services/movesService";
import * as apartmentService from "../../services/apartmentService";
import ComboFooter from "../../components/ComboFooter/ComboFooter";
import ApartmentIndex from "../ApartmentIndex/ApartmentIndex";
import ApartmentForm from "../ApartmentForm/ApartmentForm";
import ApartmentPage from "../ApartmentPage/ApartmentPage";



function App() {
  const [user, setUser] = useState(getUser());
  const [move, setMove] = useState([]);
  const [apartment, setApartment] = useState([]);
  const navigate = useNavigate();

  const handleDeleteMove = async (movesId) => {
    try {
      const deletedMove = await moveService.deleteMove(movesId);
      setMove(move.filter((move) => move._id !== deletedMove._id));
      navigate("/moves");
    } catch (error) {
      console.error("Failed to delete move:", error);
    }
  };

  const handleDeleteApartment = async (apartmentsId) => {
    try {
      const deletedApartment = await apartmentService.deleteApartment(apartmentsId);
      setApartment(apartment.filter((apartment) => apartment._id !== deletedApartment._id));
      navigate("/apartments");
    } catch (error) {
      console.error("Failed to delete apartment:", error);
    }
  };

  return (
    <main id="react-app">
      <NavBar user={user} setUser={setUser} />
      <section id="main-section">
        {user ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/moves" element={<MovePage />} />
            <Route path="/moves/new" element={<MoveForm  />} />
            <Route path="/moves/:movesId" element={<MoveDetails user={user} handleDeleteMove={handleDeleteMove} />} />
            <Route path="/moves/:movesId/edit" element={<MoveForm />} />
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/apartments" element={<ApartmentIndex user={user}/>} />
            <Route path="/apartments/new" element={<ApartmentForm />} />
            <Route path="/apartments/:apartmentsId" element={<ApartmentPage user={user} handleDeleteApartment={handleDeleteApartment}/>} />
            <Route path="/apartments/:apartmentsId/edit" element={<ApartmentForm />} />
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
      <ComboFooter />
    </main>
  );
}

export default App;
