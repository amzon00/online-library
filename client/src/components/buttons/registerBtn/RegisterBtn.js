import { Link } from "react-router-dom";

function RegisterBtn() {
  return (
    <div>
      <Link to="/register">
        <button className="goToBook">Register</button>
      </Link>
    </div>
  );
}

export default RegisterBtn;
