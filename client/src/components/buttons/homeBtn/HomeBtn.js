import { Link } from "react-router-dom";

function HomeBtn() {
  return (
    <div>
      <Link to="/">
        <button
          style={{ marginRight: "1em", marginLeft: "1em" }}
          className="goToBook"
        >
          Home
        </button>
      </Link>
    </div>
  );
}

export default HomeBtn;
