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

module.exports = getUserCollection;
