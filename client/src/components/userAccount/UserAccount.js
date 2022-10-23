import { useState, useEffect } from "react";
import { fetchData } from "../../fetchData";
import { useParams } from "react-router";
import Book from "../book/Book";

function UserAccount() {
  // const username = localStorage.username;
  const params = useParams();
  const username = params.username;

  const fetch = fetchData(
    `http://localhost:8000/api/v1/user/${username}/collection`
  );
  const [data, setData] = useState({});

  useEffect(() => {
    fetch.then((res) => {
      setData(res);
    });
  }, []);

  // console.log(data);
  // console.log(localStorage.length);

  return (
    <div>
      <h1>My collection</h1>
      <div className="container-main">
        {Object.keys(data).length !== 0 ? (
          data.user.bookCollection.map((book, index) => {
            return (
              <Book
                key={index}
                cover={book.cover}
                title={book.title}
                id={book.id}
              />
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default UserAccount;
