import "./GoToBookBtn.css";
import { Link } from "react-router-dom";

function GoToBookBtn({ id }) {
  return (
    <div>
      <Link to={`/single-book/${id}`}>
        <button className="goToBook">View</button>
      </Link>
    </div>
  );
}

export default GoToBookBtn;
