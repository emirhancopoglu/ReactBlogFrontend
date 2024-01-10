import React from "react";
import "../styles/Signup.css";

const Signup = () => {
  return (
    <div className="container-signup">
      <div className="container-form">
        <form className="signup-form">
          <h2 className="welcomeMessage">Aramıza Hoş geldin!</h2>
          <input
            className="forminput"
            type="text"
            placeholder="Kullanıcı adı"
            required
          ></input>
          <input
            className="forminput"
            type="password"
            placeholder="Şifre"
            required
          ></input>
          <button className="signup-button">Kaydol</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
