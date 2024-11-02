import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export function CustomSwiper({
  title,
  slides = [],
}) {
  return (
    <div className="ml-4 sm:ml-14 space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <Swiper
        modules={[Navigation]}
        slidesPerView={7}
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
          1440: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
        }}
        watchSlidesProgress
        spaceBetween={10}
        navigation
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "20px",
        }}
        className="custom-swiper group"
      >
        {slides.map(( { id, content } ) => (
          <SwiperSlide key={id}>
            <Link to={`/movie/${id}`}>{content}</Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
