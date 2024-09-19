import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as apartmentService from "../../services/apartmentService";
import "./ApartmentPage.css";

const ApartmentPage = (props) => {
  const { apartmentsId } = useParams();
  console.log("apartmentsId", apartmentsId);
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    const fetchMove = async () => {
      console.log("apartmentsId", apartmentsId);
      const apartmentData = await apartmentService.show(apartmentsId);
      console.log("apartmentData", apartmentData);
      setApartment(apartmentData);
    };
    fetchMove();
  }, [apartmentsId]);

  if (!apartment) return <main>Unable to retrieve apartment</main>;
  return (
    <main>
      <div className="maindetails">
        <div className="apartmentfirst">
          <header>
            <h1>{apartment.name}</h1>
          </header>
        </div>
        <div className="apartmentsecond">
          <label htmlFor="price-input">Price</label>
          <p>{apartment.price}</p>
          <label htmlFor="apartment-input">Deposit</label>
            <p>{apartment.deposit}</p>
          <label htmlFor="departMover-input">Available</label>
            <p>{apartment.available}</p>
         
          {apartment.userId === props.user._id && (
            <>
              <Link to={`/apartments/${apartmentsId}/edit`}>Edit</Link>

              <button onClick={() => props.handleDeleteApartment(apartmentsId)}>
                Delete
              </button>
            </>
          )}
        </div>
        <div className="apartmentthree">
          <img src="/images/logo_new.png" id="logo"></img>
        </div>
      </div>
    </main>
  );
};

export default ApartmentPage;
