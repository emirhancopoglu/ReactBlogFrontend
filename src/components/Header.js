import Button from "./Button";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-header">
      <img
        className="header-logo"
        src="images/copoglulogo.png"
        alt="Copoglu Blog Logo"
      ></img>

      <Link to={"/login"}>
        <Button buttonText={"Giriş Yap"} buttonClass={"loginbutton"} />
      </Link>

      <Link to={"/signup"}>
        <Button buttonText={"Kaydol"} buttonClass={"signupbutton"} />
      </Link>
    </div>
  );
};

export default Header;
