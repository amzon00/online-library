import "./App.css";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleBook from "./components/singleBookPage/SingleBook";
import Register from "./components/auth/register/Register";
import Login from "./components/auth/login/Login";
import UserAccount from "./components/userAccount/UserAccount";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/single-book/:id" element={<SingleBook />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/:username/collection" element={<UserAccount />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
