import "../styles/Button.css";

const Button = ({ buttonText, buttonClass }) => {
  return (
    <>
      <button className={buttonClass}>{buttonText}</button>
    </>
  );
};

export default Button;
