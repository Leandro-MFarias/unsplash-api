import { useCarouselQuery } from "../../hooks/useCustomQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export function Carousel() {
  const { data: carousel, error, isLoading } = useCarouselQuery();

  if (isLoading) return <h2>Carrengando</h2>;
  if (error) return `Error: ${error.message}`;

  return (
    <section className="w-full flex flex-col items-center  space-y-2">
      <div className="w-full">
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
                <source media="(max-width:540px)" srcSet={movie.image780} />
                <img
                  src={movie.imageOriginal}
                  alt={movie.title}
                  className="h-[640px] lg:h-[840px] w-full  md:object-fill"
                />
              </picture>

              <div className="flex flex-col items-center sm:items-start absolute bottom-12 text-center sm:text-start md:bottom-28 sm:pl-6 md:pl-8 z-10 space-y-4 w-full sm:max-w-[640px]">
                <h3 className="text-2xl sm:text-5xl text-zinc-50">
                  {movie.title}
                </h3>
                <p className="pl-2 text-zinc-300 text-sm sm:text-base">
                  {movie.overview.slice(0, 130)}...
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

// absolute
