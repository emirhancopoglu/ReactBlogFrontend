import "../styles/SendPost.css";
import Button from "../components/Button";
const SendPost = () => {
  return (
    <div className="container-sendpost">
      <h3 className="container-title">Konu başlığı: </h3>
      <input
        className="text-input"
        type="text"
        placeholder="Konu başlığı yazınız:"
      ></input>
      <div className="container-message">
        <textarea className="textarea" rows={"20"} cols={"80"}></textarea>
      </div>
      <div>
        <a href="/">
          <Button buttonText={"Gönder"} buttonClass={"submitbutton"} />
        </a>
      </div>
    </div>
  );
};

export default SendPost;
