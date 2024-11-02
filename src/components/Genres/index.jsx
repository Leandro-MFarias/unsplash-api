import { useGenreAction, useGenreAnimation, useGenreComedy, useGenreDrama, useGenreHorror, useGenreRomance } from "../../hooks/useCustomQuery";
import { CustomSwiper } from "../CustomSwiper";


export function Genres() {
  const { data: genreAction, isLoading, error } = useGenreAction();
  const { data: genreDrama } = useGenreDrama();
  const { data: genreComedy } = useGenreComedy();
  const { data: genreAnimation } = useGenreAnimation();
  const { data: genreRomance } = useGenreRomance();
  const { data: genreHorror } = useGenreHorror();

  if (isLoading) return <h2>Carrengando...</h2>;
  if (error) return `Error: ${error.message}`;

  return (
    <div className="space-y-10">
      <CustomSwiper
        title="Filme de Ação"
        slides={genreAction.map((movie) => (
          <img
            src={movie.imageOriginal}
            alt={movie.title}
            className="h-[340px] w-[260px] cursor-pointer border border-transparent transition duration-300 ease-in-out hover:border-2 hover:border-gray-200 rounded-sm object-cover"
          />
        ))}
      />
      <CustomSwiper
        title="Filme de Drama"
        slides={genreDrama.map((movie) => (
          <img
            src={movie.imageOriginal}
            alt={movie.title}
            className="h-[340px] w-[260px] cursor-pointer border border-transparent transition duration-300 ease-in-out hover:border-2 hover:border-gray-200 rounded-sm object-cover"
          />
        ))}
      />
      <CustomSwiper
        title="Filme de Comedia"
        slides={genreComedy.map((movie) => (
          <img
            src={movie.imageOriginal}
            alt={movie.title}
            className="h-[340px] w-[260px] cursor-pointer border border-transparent transition duration-300 ease-in-out hover:border-2 hover:border-gray-200 rounded-sm object-cover"
          />
        ))}
      />
      <CustomSwiper
        title="Animações"
        slides={genreAnimation.map((movie) => (
          <img
            src={movie.imageOriginal}
            alt={movie.title}
            className="h-[340px] w-[260px] cursor-pointer border border-transparent transition duration-300 ease-in-out hover:border-2 hover:border-gray-200 rounded-sm object-cover"
          />
        ))}
      />
      <CustomSwiper
        title="Filme de Romance"
        slides={genreRomance.map((movie) => (
          <img
            src={movie.imageOriginal}
            alt={movie.title}
            className="h-[340px] w-[260px] cursor-pointer border border-transparent transition duration-300 ease-in-out hover:border-2 hover:border-gray-200 rounded-sm object-cover"
          />
        ))}
      />
      <CustomSwiper
        title="Filme de Terror"
        slides={genreHorror.map((movie) => (
          <img
            src={movie.imageOriginal}
            alt={movie.title}
            className="h-[340px] w-[260px] cursor-pointer border border-transparent transition duration-300 ease-in-out hover:border-2 hover:border-gray-200 rounded-sm object-cover"
          />
        ))}
      />
    </div>
  );
}