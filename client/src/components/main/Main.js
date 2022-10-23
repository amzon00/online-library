import "./Main.css";
import Book from "../book/Book";
import { fetchData } from "../../fetchData";
import { useState, useEffect } from "react";

function Main() {
  const fetch = fetchData("http://localhost:8000/api/v1/books");
  const [data, setData] = useState({});

  useEffect(() => {
    fetch.then((res) => {
      setData(res);
    });
  }, []);
  // console.log(data);

  return (
    <div className="container-main">
      {Object.keys(data).length !== 0
        ? data.books.map((book, index) => {
            return (
              <Book
                title={book.title}
                author={book.author}
                cover={book.cover}
                id={book._id}
                key={index}
              ></Book>
            );
          })
        : undefined}
    </div>
  );
}

export default Main;
