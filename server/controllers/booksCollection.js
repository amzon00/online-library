const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const addToCollection = async (req, res) => {
  // console.log(req.body);
  const user = await User.findOneAndUpdate(
    { name: req.body.name },
    {
      $push: {
        bookCollection: {
          id: req.body.id,
          title: req.body.title,
          cover: req.body.cover,
        },
      },
    }
  );
  res.status(StatusCodes.OK).json({ user: user });
};

module.exports = addToCollection;
