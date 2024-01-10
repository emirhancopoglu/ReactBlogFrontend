import Button from "./Button";
import "../styles/PostAndMemberListButton.css";
import { Link } from "react-router-dom";

const PostAndMember = () => {
  return (
    <div className="PostAndMember">
      <Link to={"/memberlist"}>
        <Button buttonText={"Üye Listesi"} buttonClass={"memberlistbutton"} />
      </Link>

      <Link to={"/sendpost"}>
        <Button buttonText={"Yeni Post"} buttonClass={"postbutton"} />
      </Link>
    </div>
  );
};

export default PostAndMember;
