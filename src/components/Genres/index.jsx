import { useGenreAction } from "../../hooks/useCustomQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export function Genres() {
  const { data: genreAction, isLoading, error } = useGenreAction();

  if (isLoading) return <p>Carregando...</p>;

  return (
    <div>
      <section className="ml-4 sm:ml-14 space-y-4">
        <h2 className="text-xl font-semibold">Filmes de Ação</h2>
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
          {genreAction?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <img
                className="h-[340px] w-[260px] cursor-pointer border border-transparent transition duration-300 ease-in-out hover:border-2 hover:border-gray-200 rounded-sm object-cover"
                src={movie.imageOriginal}
                alt={movie.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
