import * as moveService from "../../services/movesService";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function MoveForm() {
  const { movesId } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rating: "",
    genre: "",
  });

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
      <h1>{hootId ? 'Edit Hoot' : 'New Hoot'}</h1>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text"
          name="title"
          id="title-input"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="text-input">Text</label>
        <textarea
          required
          type="text"
          name="text"
          id="text-input"
          value={formData.text}
          onChange={handleChange}
        />
        <label htmlFor="category-input">Category</label>
        <select
          required
          name="category"
          id="category-input"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="News">News</option>
          <option value="Games">Games</option>
          <option value="Music">Music</option>
          <option value="Movies">Movies</option>
          <option value="Sports">Sports</option>
          <option value="Television">Television</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
}
