import { usePopularQuery } from "../../hooks/useCustomQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export function Populares() {
  const { data: popular, error, isLoading } = usePopularQuery();
  console.log(popular);

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <h2 className="text-4xl">Carregando...</h2>
      </div>
    );
  if (error) return `Error: ${error.message}`;

  return (
    <section className="ml-14 space-y-4">
      <h2 className="text-xl font-semibold">Populares</h2>

      <Swiper
        modules={[Navigation]}
        slidesPerView={7}
        watchSlidesProgress
        navigation
        spaceBetween={10}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "20px",
        }}
        className="custom-swiper group"
      >
        {popular.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              className="h-[340px] w-[260px] cursor-pointer border border-transparent transition duration-300 ease-in-out hover:border-2 hover:border-gray-200 rounded-sm object-cover"
              src={movie.imagem500}
              alt={movie.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
