import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as apartmentService from "../../services/apartmentService";
import "./ApartmentIndex.css";

export default function ApartmentIndex() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    async function fetchMoves() {
      const apartments = await apartmentService.getAll();
      setApartments(apartments);
    }
    fetchMoves();
  }, []);

  if (apartments.length === 0) {
    return (
      <div id="apartmentIndex">
        <div className="apartmentfirst">
          <h1 className="apartment-page-title">
            No current Apartments!
          </h1>
        </div>
        <div className="apartmentsecond">
          <Link to="/apartments/new">Create a new apartment</Link>
        </div>
        <div className="apartmentthree">
          <img src="/images/logo_new.png" id="logo"></img>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="apartmentfirst">
          <h1 className="apartment-page-title">Apartment List</h1>
        </div>
        <div className="apartmentsecond">
          <section>
            {apartments.map((apartment) => (
              <Link to={`/apartments/${apartment._id}`} key={apartment._id}>
                {apartment.name}
              </Link>
            ))}
          </section>
        </div>
      </>
    );
  }
}
