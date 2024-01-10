import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="container-footer">
      <a href="https://github.com/emirhancopoglu">
        <img
          src="images/github.png"
          className="githubicon"
          alt="Github Link"
        ></img>
      </a>
      <a href="https://www.linkedin.com/in/emirhancopoglu/">
        <img
          src="images/linkedin.png"
          className="linkedinicon"
          alt="Linkedin Link"
        ></img>
      </a>
      <a href="https://www.instagram.com/mocheesca/">
        <img
          src="images/instagram.png"
          className="instagramicon"
          alt="İnstagram Link"
        ></img>
      </a>
    </div>
  );
};

export default Footer;
