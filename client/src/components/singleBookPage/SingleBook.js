import "./SingleBook.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import AddToCollection from "../buttons/addToCollectionBtn/AddToCollection";

function SingleBook() {
  const params = useParams();
  const [bookData, setBookData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/books/${params.id}`)
      .then((result) => result.json())
      .then((data) => {
        setBookData(data);
      });
  }, []);

  console.log(bookData);

  if (Object.keys(bookData).length !== 0) {
    return (
      <div className="book-container">
        <div className="book-cover">
          <img src={bookData.book.cover}></img>
        </div>
        <div className="book-details">
          <h1 className="book-title">{bookData.book.title}</h1>
          <h3 className="book-author"> Author: {bookData.book.author}</h3>
          <h2 className="book-year">Year: {bookData.book.year_written}</h2>
          <h2 className="book-edition">Edition: {bookData.book.edition}</h2>
          <h2 className="book-price">Price {bookData.book.price}$</h2>
          <AddToCollection props={bookData} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}

export default SingleBook;
