function AddToCollection({ props }) {
  const handleClick = () => {
    if (localStorage.length !== 0) {
      //   console.log(localStorage.username);
      const username = localStorage.username;
      console.log(username);
      const title = props.book.title;
      const cover = props.book.cover;
      // console.log(props);
      updateCollection(`http://localhost:8000/api/v1/books/user/${username}`, {
        username,
        title,
        cover,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
      //   console.log(props);
      //   console.log(localStorage);
    } else {
      window.alert("You need to login into your account!");
    }
  };

  const updateCollection = async (url, { username, title, cover }) => {
    return await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: username, title: title, cover: cover }),
    });
  };
  return (
    <div>
      <button onClick={handleClick} className="goToBook">
        Add to my collection
      </button>
    </div>
  );
}

export default AddToCollection;
