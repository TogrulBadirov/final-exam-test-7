import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
const Header = () => {
  return (
    <section id="header">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg"
            alt=""
          />
          <div className="content">
            <h2>Food and more.</h2>
            <p>By Chef Francis Smith</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/pulse/img/slider/slider-2.jpg"
            alt=""
          />
          <div className="content">
            <h2>Food and more.</h2>
            <p>By Chef Francis Smith</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/pulse/img/slider/slider-3.jpg"
            alt=""
          />
          <div className="content">
            <h2>Food and more.</h2>
            <p>By Chef Francis Smith</p>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div className="container">
            
        </div> */}
    </section>
  );
};

export default Header;
