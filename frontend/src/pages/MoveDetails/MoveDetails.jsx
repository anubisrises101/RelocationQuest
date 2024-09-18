import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as movesService from "../../services/movesService";
import "./MoveDetails.css";

const MoveDetails = (props) => {
  const { movesId } = useParams();
  console.log("movesId", movesId);
  const [move, setMove] = useState(null);

  useEffect(() => {
    const fetchMove = async () => {
      console.log("movesId", movesId);
      const moveData = await movesService.show(movesId);
      console.log("moveData", moveData);
      setMove(moveData);
    };
    fetchMove();
  }, [movesId]);

  if (!move) return <main>Unable to retrieve move</main>;
  return (
    <main>
      <div className="maindetails">
        <div className="movefirst">
          <header>
            <h1>{move.title}</h1>
          </header>
        </div>
        <div className="movesecond">
          <label htmlFor="date-input">Date</label>
          <p>{move.date}</p>
          <label htmlFor="apartment-input">Apartment</label>
          <a href="../ApartmentPage/ApartmentPage.jsx">
            <button type="button">Apartments</button>
          </a>
          <label htmlFor="departMover-input">Depart Mover</label>
          <a href="../MoverPage/MoverPage.jsx">
            <button type="button">Origin Mover</button>
          </a>
          <label htmlFor="destMover-input">Dest Mover</label>
          <a href="../MoverPage/MoverPage.jsx">
            <button type="button">Destination Mover</button>
          </a>
          <label htmlFor="rentals-input">Rentals</label>
          <a href="../RentalPage/RentalPage.jsx">
            <button type="button">Rentals</button>
          </a>
          <label htmlFor="transitCost-input">Transit Cost</label>
          <p>{move.transitCost}</p>
          <label htmlFor="hotelCost-input">Hotel Cost</label>
          <p>{move.hotelCost}</p>
          {move.userId === props.user._id && (
            <>
              <Link to={`/moves/${movesId}/edit`}>Edit</Link>

              <button onClick={() => props.handleDeleteMove(movesId)}>
                Delete
              </button>
            </>
          )}
        </div>
        <div className="movethree">
          <img src="/images/logo_new.png" id="logo"></img>
        </div>
      </div>
    </main>
  );
};

export default MoveDetails;
