import { useGenreHorror } from "../../hooks/useCustomQuery";
import { CustomSwiper } from "../CustomSwiper";

export function Horror() {
  const { data: genreHorror, error, isLoading } = useGenreHorror();

  if (isLoading) return
  if (error) return `Error: ${error.message}`;

  return (
    <div>
      <CustomSwiper
        title="Filmes de Terror"
        slides={genreHorror.map((movie) => ({
          id: movie.id,
          content: (
            <img
              src={movie.imageOriginal}
              alt={movie.title}
              className="h-[340px] w-[260px] cursor-pointer border border-transparent transition duration-300 ease-in-out hover:border-2 hover:border-gray-200 rounded-sm object-cover"
            />
          ),
        }))}
      />
    </div>
  );
}