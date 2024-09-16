import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as moveService from "../../services/movesService";
// import "./MovePage.css";

export default function MovePage() {
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    async function fetchMoves() {
      const moves = await moveService.getAll();
      console.log(moves);
      setMoves(moves);
    }
    fetchMoves();
  }, []);

  if (moves.length === 0) {
    return (
      <>
        <h1 className="move-page-title">
          Move Headquarters is currently empty!
        </h1>
        <Link to="/moves/new">Create a new move</Link>
      </>
    );
  } else {
  return (
    <>
      <h1 className="move-page-title">Move Headquarters</h1>
      <section>
        {moves.map((move) => (
          <Link to={`/moves/${move._id}`} key={move._id}>{move.title}</Link>
        ))}
      </section>
    </>
  );
  }
}