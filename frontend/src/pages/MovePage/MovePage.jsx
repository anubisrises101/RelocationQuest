import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as moveService from "../../services/movesService";
import "./MovePage.css";

export default function MovePage() {
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    async function fetchMoves() {
      const moves = await moveService.getAll();
      setMoves(moves);
    }
    fetchMoves();
  }, []);

  if (moves.length === 0) {
    return (
      <div id="moveindex">
        <div className="movefirst">
          <h1 className="move-page-title">
            Move Headquarters is currently empty!
          </h1>
        </div>
        <div className="movesecond">
          <Link to="/moves/new">Create a new move</Link>
        </div>
        <div className="movethree">
          <img src="/images/logo_new.png" id="logo"></img>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="movefirst">
          <h1 className="move-page-title">Move Headquarters</h1>
        </div>
        <div className="movesecond">
          <section>
            {moves.map((move) => (
              <Link to={`/moves/${move._id}`} key={move._id}>
                {move.title}
              </Link>
            ))}
          </section>
        </div>
      </>
    );
  }
}
