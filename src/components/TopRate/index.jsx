import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useTopRateQuery } from "../../hooks/useCustomQuery";

export function TopRate() {
  const { data: topRate, isLoading, error } = useTopRateQuery();
  console.log(topRate);

  return (
    <section className="ml-16 space-y-4">
      <h2 className="text-xl font-semibold">Filmes Mais Bem Avaliados</h2>
      <Swiper
        modules={[Navigation]}
        slidesPerView={5}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        watchSlidesProgress
        navigation
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "20px",
        }}
        className="custom-swiper swiper-test group"
      >
        {topRate?.map((movie, index) => (
          <SwiperSlide key={movie.key}>
            <div className="flex number">
              <p className="text-9xl font-semibold z-10 ">{index + 1}</p>
              <img
                className="h-[340px] w-[260px] cursor-pointer border border-transparent transition duration-300 ease-in-out hover:border-2 hover:border-gray-200 rounded-sm object-cover"
                src={movie.imageOriginal}
                alt={movie.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
