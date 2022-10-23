const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const getUserCollection = async (req, res) => {
  // console.log(req.params.username);
  const {
    params: { username: username },
  } = req;

  const user = await User.findOne({
    name: username,
  });

  if (!user) {
    throw new Error(`No user with name ${username}`);
  }

  res.status(StatusCodes.OK).json({ user: user });
};

const deleteFromCollection = async (req, res) => {
  const { username: username, bookId: bookId } = req.body;
  const user = await User.update(
    { name: username },
    { $pull: { bookCollection: { id: bookId } } }
  );
  console.log(user);
  res.status(StatusCodes.OK).json({});
};

module.exports = { getUserCollection, deleteFromCollection };
