import "./index.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { LiaCocktailSolid } from "react-icons/lia";
import { BsCupHot } from "react-icons/bs";

const OurMenu = () => {
  return (
    <section id="OurMenu">
      <div className="container">
        <div className="content">
          <BsCupHot/>
          <h3>OurMenu</h3>
        </div>
        <div className="buttons">
          <button>Breakfast</button>
          <button>Brunch</button>
          <button>Lunch</button>
          <button>Dinner</button>
        </div>
        <div className="row">
          
          <div className="menu-card col-lg-6 col-md-6 col-md-12">
           <div>
           <h5>Scrambled Eggs with ham</h5>
            <div className="price">
              <span className="menu-name">with wild mushrooms and asparagus</span>
              <div className="dots"></div>
              <span className="menu-price">$9.00</span>
            </div> 
           </div>
          </div>
          <div className="menu-card col-lg-6 col-md-6 col-md-12">
           <div>
           <h5>Scrambled Eggs with ham</h5>
            <div className="price">
              <span className="menu-name">with wild mushrooms and asparagus</span>
              <div className="dots"></div>
              <span className="menu-price">$9.00</span>
            </div> 
           </div>
          </div>
          <div className="menu-card col-lg-6 col-md-6 col-md-12">
           <div>
           <h5>Scrambled Eggs with ham</h5>
            <div className="price">
              <span className="menu-name">with wild mushrooms and asparagus</span>
              <div className="dots"></div>
              <span className="menu-price">$9.00</span>
            </div> 
           </div>
          </div>
          <div className="menu-card col-lg-6 col-md-6 col-md-12">
            <div>
            <h5>Scrambled Eggs with ham</h5>
            <div className="price">
              <span className="menu-name">with wild mushrooms and asparagus</span>
              <div className="dots"></div>
              <span className="menu-price">$9.00</span>
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
