import "./index.scss";
import { LuBeef } from "react-icons/lu";
import { BiDish } from "react-icons/bi";
import { BsCupHot } from "react-icons/bs";
import { BiBowlHot } from "react-icons/bi";
import { GiDrippingHoney } from "react-icons/gi";
const OurServices = () => {
  return (
    <section id="OurServices">
      <div className="container">
        <div className="content">
        <BiDish />
          <h3>Our Services</h3>
        </div>
        <div className="cards row">
          <div className="welcome-card col-lg-4 col-md-6 col-12">
            <h3><BsCupHot /></h3>
            <p>
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
            </p>
          </div>
          <div className="welcome-card col-lg-4 col-md-6 col-12">
            <h3><GiDrippingHoney /></h3>
            <p>
              Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id
              lobortis leo volutpat. Maecenas sollicitudin est in libero
              pretium.
            </p>
          </div>
          <div className="welcome-card col-lg-4 col-md-6 col-12">
            <h3><BiBowlHot /></h3>
            <p>
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
