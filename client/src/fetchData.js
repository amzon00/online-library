const fetchData = async (url) => {
  try {
    return await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        return data;
      });
  } catch (error) {
    console.log(error);
  }
};

const postLoginUser = async (url, { username, password }) => {
  return await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: username, password: password }),
  });
};

const postRegisteredUser = async (url, { name, email, password }) => {
  return await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, email: email, password: password }),
  });
};

const removeBookFromColl = async (url, { username, bookId, token }) => {
  return await fetch(url, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ username: username, bookId: bookId }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};

export { fetchData, postLoginUser, postRegisteredUser, removeBookFromColl };
