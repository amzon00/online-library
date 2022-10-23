import "./RemoteFromCollBtn.css";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

function RemoteFromCollBtn(props) {
  const [state, setState] = useState({});
  const params = useParams();
  const username = params.username;
  const token = localStorage.getItem("token");

  useEffect(() => {
    setState();
  }, []);

  const removeBookFromColl = async () => {
    console.log(`removeing book with id ${props.id}`);

    return await fetch(
      `http://localhost:8000/api/v1/user/${username}/collection`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ username: username, bookId: props.id }),
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <IconContext.Provider value={{ className: "deleteIcon" }}>
      <div>
        <RiDeleteBin2Fill onClick={removeBookFromColl} />
      </div>
    </IconContext.Provider>
  );
}

export default RemoteFromCollBtn;
