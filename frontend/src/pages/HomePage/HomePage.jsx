import { Link } from "react-router-dom";
import "./HomePage.css";
// import Navbar from "../../components/Navbar/Navbar";

export default function HomePage() {
  return (
    <div className="home-page">
      <div id="one">
        <h1 id="catchphrase">Get ready for a new adventure!</h1>
      </div>
      <div className="form-container" id="two">
        <div className="login-form">
          <p>To log in please click the Login button in the navbar above!!</p>
        </div>
        <div className="animation">
          <img src="/animation/sword_animation.gif" alt="animation" id="sword"/>
        </div>
        <div className="signup-box">
          <p>To sign up</p>
          <Link to="/signup">Click here!</Link>
        </div>
      </div>
      <div id="three">
      <img src="/images/logo_new.png" id="logo"></img>
      <p>PROGRESS BAR</p>
      <h3>Adventure Progress</h3>
      </div>
    </div>
  );
}
