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
  await User.updateOne(
    { name: username },
    { $pull: { bookCollection: { id: bookId } } }
  );

  const size = await User.aggregate([
    // { $project: { count: { $size: "$bookCollection" } } },
    {
      $group: {
        _id: username,
        totalSize: { $sum: { $sum: "$bookCollection" } }, // <--- what does it return ??
      },
    },
  ]);
  console.log(size);
  res.status(StatusCodes.OK).json({ size });
};

module.exports = { getUserCollection, deleteFromCollection };
