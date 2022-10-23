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

export { fetchData, postLoginUser, postRegisteredUser };
