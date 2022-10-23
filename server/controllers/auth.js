const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
// const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  console.log(req.body);
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    // throw new BadRequestError("Please provide email and password");
    console.log("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    // throw new UnauthenticatedError("Invalid Credentials");
    console.log("invalid credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    // throw new UnauthenticatedError("Invalid Credentials");
    console.log("Invalid Credentials");
  }
  // compare password
  const token = user.createJWT();
  console.log("Success!!!");
  console.log("sending response..");
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = {
  register,
  login,
};
