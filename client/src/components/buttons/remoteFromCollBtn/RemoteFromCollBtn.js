import "./RemoteFromCollBtn.css";
import { removeBookFromColl } from "../../../fetchData";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function RemoteFromCollBtn(props) {
  const navigate = useNavigate();
  const params = useParams();
  const username = params.username;
  const bookId = props.id;
  const token = localStorage.getItem("token");
  const [state, setState] = useState({});

  const handleClick = async () => {
    removeBookFromColl(
      `http://localhost:8000/api/v1/user/${username}/collection`,
      { username, bookId, token }
    );
    navigate(0); // to refresh the page.. temporary until i figure out how to implement useEffect
  };

  useEffect(() => {}, []);
  return (
    <IconContext.Provider value={{ className: "deleteIcon" }}>
      <div>
        <RiDeleteBin2Fill onClick={handleClick} />
      </div>
    </IconContext.Provider>
  );
}

export default RemoteFromCollBtn;
