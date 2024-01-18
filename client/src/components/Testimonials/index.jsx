import "./index.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { LiaCocktailSolid } from "react-icons/lia";

const Testimonials = () => {
  return (
    <section id="Testimonials">
      <div className="container">
        <div className="content">
          <LiaCocktailSolid />
          <h3>Testimonials</h3>
        </div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <p>
              Integer sed facilisis eros. In iaculis rhoncus velit in malesuada.
              In hac habitasse platea dictumst. Fusce erat ex, consectetur sit
              amet ornare suscipit, porta et erat. Donec nec nisi in nibh
              commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce
              ultricies ante tortor, non vestibulum est <br /> feu-giat ut.{" "}
            </p>
            <h5><span>Ted Chapman</span>, Client</h5>
          </SwiperSlide>
          <SwiperSlide>
            <p>
              Integer sed facilisis eros. In iaculis rhoncus velit in malesuada.
              In hac habitasse platea dictumst. Fusce erat ex, consectetur sit
              amet ornare suscipit, porta et erat. Donec nec nisi in nibh
              commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce
              ultricies ante tortor, non vestibulum est <br /> feu-giat ut.{" "}
            </p>
            <h5><span>Ted Chapman</span>, Client</h5>
          </SwiperSlide>
          <SwiperSlide>
            <p>
              Integer sed facilisis eros. In iaculis rhoncus velit in malesuada.
              In hac habitasse platea dictumst. Fusce erat ex, consectetur sit
              amet ornare suscipit, porta et erat. Donec nec nisi in nibh
              commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce
              ultricies ante tortor, non vestibulum est <br /> feu-giat ut.{" "}
            </p>
            <h5><span>Ted Chapman</span>, Client</h5>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
