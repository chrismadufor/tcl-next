import React from "react";
import Image from "next/image";
import { PartnerIcons } from "./iconsFile";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/Carousel.module.css";
import globalStyles from "../../styles/Global.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function PartnerIconSlide() {
  return (
    <section className="pb-10 sm:pb-12">
      <div className="who-we-are text-center text-gray-700 mb-10 sm:mb-10 mx-auto">
        <h1 className="text-xl md:text-3xl uppercase font-semibold tracking-wide">
          Our Partners
        </h1>
      </div>
      <section className={styles.clientsIconWrap}>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          loop={true}
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1000}
          breakpoints={{
            1200: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            950: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            760: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {PartnerIcons.map((item, index) => (
            <div key={index}>
              <SwiperSlide className={styles.clientsIconSlide} key={index}>
                <div className={`${styles.iconImgWrap} relative`} key={index}>
                  <Image src={item} layout="fill" alt="" />
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </section>
    </section>
  );
}

export default PartnerIconSlide;
