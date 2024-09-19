import * as moveService from "../../services/movesService";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MoveForm.css";

export default function MoveForm() {
  const { movesId } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    apartments: [],
    departMover: null,
    destMover: null,
    rentals: [],
    transitCost: "",
    hotelCost: "",
  });
  const navigate = useNavigate();

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleUpdateMove = async (movesId, formData) => {
    console.log("formData", formData);
    await moveService.update(movesId, formData);
    navigate(`/moves/${movesId}`);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (movesId) {
      handleUpdateMove(movesId, formData);
    } else {
      moveService.handleAddMove(formData);
    }
    navigate("/moves");
  };

  useEffect(() => {
    const fetchMove = async () => {
      const move = await moveService.show(movesId);
      setFormData(move);
    };
    if (movesId) fetchMove();
  }, [movesId]);

  return (
    <main>
      <form onSubmit={handleSubmit} id="moveform">
        <div className="content">
          <div className="newmovefirst">
            <h1>{movesId ? "Edit Move" : "New Move"}</h1>
          </div>
          <div className="newmovesecond">
            <label htmlFor="title-input">Title</label>
            <input
              required
              type="text"
              name="title"
              id="title-input"
              value={formData.title}
              onChange={handleChange}
            />
            <br />
          </div>
          <div className="newmovethird">
            <label htmlFor="date-input">Date</label>
            <textarea
              required
              type="text"
              name="date"
              id="date-input"
              value={formData.date}
              onChange={handleChange}
            />
            <br />
          </div>
        

          {movesId && (
          <>
          
            <label htmlFor="apartments-input">Apartments</label>
            <a href="../ApartmentPage/ApartmentPage.jsx">
              <button type="button">Add Apartment</button>
            </a>
            <br />
            <label htmlFor="departMover-input">Departure Mover</label>
            <a href="../MoversPage/MoversPage.jsx">
              <button type="button">Add Departure Mover</button>
            </a>
            <br />
            <label htmlFor="destMover-input">Dest Mover</label>
            <a href="../MoversPage/MoversPage.jsx">
              <button type="button">Add Destination Mover</button>
            </a>
            <br />
            <label htmlFor="rentals-input">Rentals</label>
            <a href="../RentalPage/RentalPage.jsx">
              <button type="button">Add Rental</button>
            </a>
            <br />
            <label htmlFor="transitCost-input">Transit Cost</label>
            <input
              type="text"
              name="transitCost"
              id="transitCost-input"
              value={formData.transitCost}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="hotelCost-input">Hotel Cost</label>
            <input
              type="text"
              name="hotelCost"
              id="hotelCost-input"
              value={formData.hotelCost}
              onChange={handleChange}
            />

          
          </>
        )}
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
}
