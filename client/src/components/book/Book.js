import "./Book.css";
import GoToBookBtn from "../buttons/goToBookBtn/GoToBookBtn";
import RemoteFromCollBtn from "../buttons/remoteFromCollBtn/RemoteFromCollBtn";

function Book(props) {
  // console.log(props);

  return (
    <div className="individual-book">
      <img src={props.cover}></img>
      <h5 className="title">{props.title}</h5>
      {props.author ? (
        <GoToBookBtn id={props.id} />
      ) : (
        <RemoteFromCollBtn id={props.id} setCollLength={props.setCollLength} />
      )}
    </div>
  );
}

export default Book;
