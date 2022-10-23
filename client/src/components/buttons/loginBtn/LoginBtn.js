import { Link } from "react-router-dom";

function LoginBtn() {
  return (
    <div>
      <Link to="/login">
        <button style={{ marginLeft: "1em" }} className="goToBook">
          Login
        </button>
      </Link>
    </div>
  );
}

export default LoginBtn;
