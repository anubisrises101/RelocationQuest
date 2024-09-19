import * as apartmentService from "../../services/apartmentService";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ApartmentForm.css";

export default function ApartmentForm() {
  const { apartmentsId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    deposit: "",
    available: "",
  });
  const navigate = useNavigate();

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleUpdateApartment = async (apartmentsId, formData) => {
    console.log("formData", formData);
    await apartmentService.update(apartmentsId, formData);
    navigate(`/apartments/${apartmentsId}`);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (apartmentsId) {
      handleUpdateApartment(apartmentsId, formData);
    } else {
      apartmentService.handleAddApartment(formData);
    }
    navigate("/apartments");
  };

  useEffect(() => {
    const fetchApartment = async () => {
      const apartment = await apartmentService.show(apartmentsId);
      setFormData(apartment);
    };
    if (apartmentsId) fetchApartment();
  }, [apartmentsId]);

  return (
    <main>
      <form onSubmit={handleSubmit} id="apartmentform">
        <div className="content">
          <div className="newapartmentfirst">
            <h1>{apartmentsId ? "Edit Apartment" : "New Apartment"}</h1>
          </div>
          <div className="newapartmentsecond">
            <label htmlFor="name-input">Name</label>
            <input
              required
              type="text"
              name="name"
              id="name-input"
              value={formData.name}
              onChange={handleChange}
            />
            <br />
          </div>

          {apartmentsId && (
            <>
              <div className="apartmentthird">
                <label htmlFor="price-input">Price</label>
                <textarea
                  required
                  type="text"
                  name="price"
                  id="price-input"
                  value={formData.price}
                  onChange={handleChange}
                />
                <br />
              </div>
              <label htmlFor="deposit-input">Deposit</label>
              <input
                type="text"
                name="deposit"
                id="deposit-input"
                value={formData.deposit}
                onChange={handleChange}
              />
              <br />
              <label htmlFor="available-input">Available Date</label>
              <input
                type="text"
                name="available"
                id="available-input"
                value={formData.available}
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
