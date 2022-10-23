import "./RemoteFromCollBtn.css";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { useParams } from "react-router";

function RemoteFromCollBtn(props) {
  const params = useParams();
  const username = params.username;
  const token = localStorage.getItem("token");

  const removeBookFromColl = async () => {
    console.log(`removeing book with id ${props.id}`);

    return await fetch(
      `http://localhost:8000/api/v1/user/${username}/collection`,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          Authorization: token,
        },
        body: JSON.stringify({ username: username, bookId: props.id }),
      }
    );
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
