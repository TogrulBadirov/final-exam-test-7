import "./index.scss";
import { LuBeef } from "react-icons/lu";
const WelcomeSection = () => {
  return (
    <section id="WelcomeSection">
      <div className="container">
        <div className="content">
          <LuBeef />
          <h3>Welcome</h3>
        </div>
        <div className="cards row">
          <div className="welcome-card col-lg-4 col-md-6 col-12">
            <h3>2002</h3>
            <p>
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
            </p>
          </div>
          <div className="welcome-card col-lg-4 col-md-6 col-12">
            <h3>2010</h3>
            <p>
              Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id
              lobortis leo volutpat. Maecenas sollicitudin est in libero
              pretium.
            </p>
          </div>
          <div className="welcome-card col-lg-4 col-md-6 col-12">
            <h3>2018</h3>
            <p>
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
            </p>
          </div>
        </div>
        <div className="image">
            <img src="https://preview.colorlib.com/theme/pulse/img/sign.png.webp" alt="" />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
