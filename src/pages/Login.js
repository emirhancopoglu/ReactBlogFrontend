import "../styles/Login.css";

const Login = () => {
  return (
    <div className="container-login">
      <h1 className="welcometext">Merhaba!</h1>
      <form className="login-form">
        <input
          type="text"
          placeholder="Kullanıcı adı"
          className="input-field"
          required
        ></input>

        <input
          type="password"
          placeholder="Şifre"
          className="input-field"
          required
        ></input>
      </form>
      <button className="container-button">Giriş</button>
    </div>
  );
};

export default Login;
