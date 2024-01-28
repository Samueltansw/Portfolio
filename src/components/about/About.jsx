// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./About.css";
import FL from "../../assets/fl.jpg";
import ME from "../../assets/me3.jpg";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function About() {
  return (
    <section id="about" className="container container__about">
      <h4>MORE</h4>
      <h1>ABOUT ME</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="learner">
          <h2>Constant Learner</h2>
          <div>
            <img src={ME} alt="" />
            <p>
              I'm Samuel Tan, an ethusiastic and aspiring computer engineer with
              a passion for pushing the boundaries of technology. As a perpetual
              learner, I thrive on exploring and mastering new technologies
              during my free time. Whether it's delving into the intricacies of
              coding, or staying up-to-date with the latest tech trends, I find
              joy in the ever-evolving world of computer engineering.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="fitness">
          <h2>Fitness Enthusiast</h2>
          <div>
            <img src={FL} alt="" />
            <p>
              Beyond the digital realm, I am a fitness enthusiast who finds
              balance through running and calisthenics. Just as I optimize code
              for effiency, I strive to optimize my physical well-being through
              these activities. Join me in embracing the synergy between mind
              and body, where the precision of code meets the discipline of a
              fitness regimen.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
