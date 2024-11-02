import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useTopRateQuery } from "../../hooks/useCustomQuery";
import { Link } from "react-router-dom";

export function TopRate() {
  const { data: topRate, error, isLoading } = useTopRateQuery();

  if (isLoading) return
  if (error) return `Error: ${error.message}`;

  return (
    <div className="ml-4 sm:ml-16 space-y-4">
      <h2 className="text-xl font-semibold">Filmes Mais Bem Avaliados</h2>
      <Swiper
        modules={[Navigation]}
        slidesPerView={5}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
        watchSlidesProgress
        navigation
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "20px",
          paddingRight: "100px",
        }}
        className="custom-swiper swiper-test group "
      >
        {topRate?.map((movie, index) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`} >
              <div className="flex number relative">
                <p className="absolute sm:-right-4 -bottom-1 xl:static ml-2 mt-1 text-7xl md:text-8xl lg:text-9xl font-semibold z-10 ">
                  {index + 1}
                </p>
                <img
                  className="h-[260px] sm:w-[240px] md:h-[340px] md:w-[260px] cursor-pointer border border-transparent transition duration-300 ease-in-out hover:border-2 hover:border-gray-200 rounded-sm object-cover"
                  src={movie.imageOriginal}
                  alt={movie.title}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
