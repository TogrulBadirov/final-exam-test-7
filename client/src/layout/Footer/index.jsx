import { Link } from "react-router-dom";
import "./index.scss";
import { LuBeef } from "react-icons/lu";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="form">
          <div className="content">
            <LuBeef />
            <h3>Contact us</h3>
          </div>
          <form action="">
            <div className="row">
            <input type="text" placeholder="Name" className="col-lg-6 col-md-6 col-12" />
            <input type="text" placeholder="E-mail" className="col-lg-6 col-md-6 col-12" />
            </div>
            <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright ©2024 All rights reserved | This template is made with  by <Link>Colorlib</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
