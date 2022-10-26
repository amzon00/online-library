import "./RemoteFromCollBtn.css";
import { removeBookFromColl } from "../../../fetchData";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

function RemoteFromCollBtn(props) {
  const params = useParams();
  const username = params.username;
  const bookId = props.id;
  const token = localStorage.getItem("token");

  const handleClick = async () => {
    await removeBookFromColl(
      `http://localhost:8000/api/v1/user/${username}/collection`,
      { username, bookId, token }
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
    props.setCollLength(); // <---- i should pass an arugment equal to the new length of the collection
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
