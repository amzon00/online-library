const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
const cors = require("cors");
const authenticateUser = require("./middleware/authentication");

//routers
const booksRouter = require("./routes/books");
const authRouter = require("./routes/auth");
const userCollection = require("./routes/collection");

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/books", booksRouter); // authenticateUser // needs to be inserted before accessing each persons collection
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userCollection);
// deleteFromCollection
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
