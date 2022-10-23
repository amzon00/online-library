import { Link } from "react-router-dom";

function MyCollectionBtn() {
  const username = localStorage.username;
  return (
    <div>
      <Link to={`/user/${username}/collection`}>
        <button className="goToBook">My Collection</button>
      </Link>
    </div>
  );
}

export default MyCollectionBtn;
