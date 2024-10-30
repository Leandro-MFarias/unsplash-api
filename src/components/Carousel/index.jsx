import { useCarouselQuery } from "../../hooks/useCustomQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export function Carousel() {
  const { data: carousel, error, isLoading } = useCarouselQuery();
  console.log(carousel);

  if (isLoading) return <h2>Carrengando</h2>;
  if (error) return `Error: ${error.message}`;

  return (
    <section className="w-full flex flex-col items-center px-4 space-y-2">
      <div className="h-full w-full flex items-center justify-between m-0">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation
          style={{
            "--swiper-pagination-color": "#f8fafc",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-inactive-color": " #64748b ",
            "--swiper-pagination-bullet-horizontal-gap": "8px",
            "--swiper-navigation-color": "#f8fafc",
            "--swiper-navigation-size": "20px",
          }}
        >
          {carousel.map((movie) => (
            <SwiperSlide key={movie.id} className="relative">
              <picture>
                <source media="(max-width:768px)" srcSet={movie.image780} />
                <img
                  src={movie.imageOriginal}
                  alt={movie.title}
                  className="h-[450px] md:h-[640px] lg:h-[840px] w-full"
                />
              </picture>
              <div className="absolute bottom-28 px-8 max-w-[600px] z-10 space-y-4">
                <h3 className="text-5xl text-zinc-50">
                  {movie.title}
                </h3>
                <p className="pl-2 text-zinc-300">
                  {movie.overview.slice(0,130)}...
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
