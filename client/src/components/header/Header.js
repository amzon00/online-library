import "./Header.css";
import LoginBtn from "../buttons/loginBtn/LoginBtn";
import RegisterBtn from "../buttons/registerBtn/RegisterBtn";
import HomeBtn from "../buttons/homeBtn/HomeBtn";
import MyCollectionBtn from "../buttons/myCollectionBtn/MyCollectionBtn";
import LogoutBtn from "../buttons/logoutBtn/LogoutBtn";
import { useState, useEffect } from "react";

function Header() {
  let [logged, isLogged] = useState(false);

  useEffect(() => {
    if (localStorage.length === 3) {
      isLogged((logged = true));
    }
  }, []);

  const Logout = () => {
    isLogged((logged = true));
    console.log(logged);
  };
  return (
    <div className="header">
      <HomeBtn />
      {logged === true ? <MyCollectionBtn /> : undefined}
      {logged === false ? <RegisterBtn /> : undefined}
      {logged === false ? <LoginBtn /> : undefined}
      <LogoutBtn onClick={Logout} />
    </div>
  );
}

export default Header;
