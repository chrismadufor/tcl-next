import React from "react";
import Image from "next/image";
// import { Link } from "react-router-dom";
import HeroSliderObject from "./heroSliderFile";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/Carousel.module.css";
import globalStyles from "../../styles/Global.module.css";

function HeroSlide() {
  return (
    <section>
      <Swiper
      className={styles.swiper}
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, Parallax]}
        loop={true}
        slidesPerView={1}
        speed={1500}
        parallax={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {HeroSliderObject.map((item, index) => (
          <SwiperSlide className={globalStyles.hero_section} key={index}>
            <div
              className={`${styles.heroSlide} relative overflow-hidden relative flex justify-center flex-col text-white bg-black h-screen`}
            >
              <div
                className={`absolute top-0 z-0 ${styles.slider_image_wrap} ${
                  item.position === "right" ? globalStyles.custom_right : "object-center"
                }`}
              >
                <Image src={item.image} alt="" layout="fill" />
              </div>
              <div
                className={`${styles.sliderText} md:px-20 xl:px-32`}
                data-swiper-parallax="-300"
              >
                <h1
                  className="text-2xl md:text-4xl font-semibold uppercase tracking-wide"
                  data-swiper-parallax="-200"
                >
                  {item.heading}
                </h1>
                <p
                  className="text-base text-left md:text-lg mb-5 mt-5 md:mb-10 font-light tracking-wide"
                  data-swiper-parallax="-100"
                >
                  {item.subText}
                </p>
                {/* {item.link ? (
                  <Link to={item.link} data-swiper-parallax="-50">
                    <button className="hero-btn font-semibold bg-transparent border-solid border-white border-2 px-4 py-2 md:px-5 text-sm uppercase flex items-center">
                      Read More{" "}
                      <i className="fas fa-chevron-right ml-5 font-semibold"></i>
                    </button>
                  </Link>
                ) : null} */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSlide;
