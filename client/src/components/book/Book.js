import "./Book.css";
import GoToBookBtn from "../buttons/goToBookBtn/GoToBookBtn";

function Book(props) {
  return (
    <div className="individual-book">
      <img src={props.cover}></img>
      <h5 className="title">{props.title}</h5>
      {props.id ? <GoToBookBtn id={props.id} /> : undefined}
    </div>
  );
}

export default Book;
