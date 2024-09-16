import { Link } from "react-router-dom";
import "./HomePage.css";
// import Navbar from "../../components/Navbar/Navbar";

export default function HomePage() {
  return (
    <div className="home-page">
      {/* <Navbar /> */}
      <div className="form-container">
        <div className="login-form">
          <form>
            <label>Login</label>
            <input type="text" placeholder="Username" />
            <label>Password</label>
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="signup-box">
          <p>To sign up</p>
          <Link to="/signup">Click here!</Link>
        </div>
      </div>
      <footer>
        <p>McKenzie Coding © 2024</p>
        <a href="https://www.linkedin.com/in/your-linkedin-profile">LinkedIn</a>
      </footer>
    </div>
  );
}
