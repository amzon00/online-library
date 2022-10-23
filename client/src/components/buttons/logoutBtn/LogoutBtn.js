import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  let navigate = useNavigate();

  const emptyLocalStorage = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    // console.log(localStorage.length);
    navigate("/");
    navigate(0);
  };
  return (
    <div>
      {localStorage.length !== 1 ? (
        <Link to="/">
          <button
            onClick={emptyLocalStorage}
            style={{ marginLeft: "1em" }}
            className="goToBook"
          >
            Logout
          </button>
        </Link>
      ) : undefined}
    </div>
  );
}

export default LogoutBtn;
