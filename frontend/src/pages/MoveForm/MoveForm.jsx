import * as moveService from "../../services/movesService";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";



export default function MoveForm() {
  const { movesId } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rating: "",
    genre: "",
  });
  const navigate = useNavigate();

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
  

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (movesId) {
      moveService.handleUpdateMove(movesId, formData);
    } else {
      moveService.handleAddMove(formData);
    }
    navigate("/moves");
  };

  useEffect(() => {
    const fetchMove = async () => {
      const move = await moveService.getOne(movesId);
      setFormData(move);
    };
    if (movesId) fetchMove();
  }, [movesId]);

  return (
    <main>
      <form onSubmit={handleSubmit}>
      <h1>{movesId ? 'Edit Move' : 'New Move'}</h1>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text"
          name="title"
          id="title-input"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="date-input">Date</label>
        <textarea
          required
          type="text"
          name="date"
          id="date-input"
          value={formData.date}
          onChange={handleChange}
        />
        {movesId && (
          <>
            <label htmlFor="apartments-input">Apartments</label>
            <a href="../ApartmentPage/ApartmentPage.jsx"><button type="button">Add Apartment</button></a>
            
            {/* // <label htmlFor="departMover-input">Depart Mover</label>
            // <input
            //   type="text"
            //   name="departMover"
            //   id="departMover-input"
            //   value={formData.departMover}
            //   onChange={handleChange}
            // />
            // <label htmlFor="destMover-input">Dest Mover</label>
            // <input
            //   type="text"
            //   name="destMover"
            //   id="destMover-input"
            //   value={formData.destMover}
            //   onChange={handleChange}
            // />
            // <label htmlFor="rentals-input">Rentals</label>
            // <input
            //   type="text"
            //   name="rentals"
            //   id="rentals-input"
            //   value={formData.rentals}
            //   onChange={handleChange}
            // /> */}
            <label htmlFor="transitCost-input">Transit Cost</label>
            <input
              type="text"
              name="transitCost"
              id="transitCost-input"
              value={formData.transitCost}
              onChange={handleChange}
            />
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
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
}
