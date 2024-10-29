import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

export function Home() {
  async function fetchData() {
    const key = "16a0e103ded9a57b467984107a8dff79";
    const url = `https://api.themoviedb.org/3/trending/movie/day?&language=pt-BR&page=1&api_key=${key}`;

    const response = await axios.get(url);
    const results = await response.data.results;
    const firstFive = results.slice(0, 5);
    const movieImage = firstFive.map((movie) => ({
      ...movie,
      imageOriginal: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
      image780: `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`,
    }));
    return movieImage;
  }

  const { data, status, error, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchData,
    refetchOnWindowFocus: false,
  });
  console.log(data);

  if (status === "peding") return <span>Loading...</span>;
  if (isLoading) return <h2>Carrengando</h2>;
  if (error) return `Error: ${error.message}`;

  return (
    <div className="mb-3 ">
      <h1 className="text-zinc-50 text-3xl px-8 py-10 ml-6 absolute z-10 font-bold">
        Cinevault
      </h1>

      <section className="w-full flex flex-col items-center px-4 space-y-2">
        <div className="h-full w-full flex items-center justify-between m-0">
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={ { clickable: true } }
            navigation
            style={{
              "--swiper-pagination-color": "#f8fafc",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-inactive-color": "#f1f5f9",
              "--swiper-navigation-color": "#c1c1c1",
              "--swiper-navigation-size": "20px",
            }}
          >
            {data.map((image) => (
              <SwiperSlide key={image.id}>
                <picture>
                  <source media="(max-width:768px)" srcSet={image.image780} />
                  <img src={image.imageOriginal} alt={image.title} className="h-[450px] md:h-[640px] lg:h-[840px] w-full"/>
                </picture>

                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <div className="mt-5 space-y-10">
        <section className="ml-14 space-y-4">
          <h2 className="text-xl font-semibold">Destaques</h2>

          <div className="flex space-x-6 overflow-hidden">
            <div className="cursor-pointer border border-transparent transition duration-300 ease-in-out hover:border hover:border-gray-200 ">
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
          </div>
        </section>

        <section className="ml-14 space-y-4">
          <h2 className="text-xl font-semibold">Filmes</h2>

          <div className="flex space-x-6 overflow-hidden">
            <div className="cursor-pointer border border-transparent transition duration-300 ease-in-out hover:border hover:border-gray-200 ">
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
            <div>
              <img src="https://fakeimg.pl/230x340" alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
