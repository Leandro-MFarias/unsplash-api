import { useGenreComedy } from "../../hooks/useCustomQuery";
import { CustomSwiper } from "../CustomSwiper";

export function Comedy() {
  const { data: genreComedy, error, isLoading } = useGenreComedy();

  if (isLoading) return
  if (error) return `Error: ${error.message}`;

  return (
    <div>
      <CustomSwiper
        title="Filme de Comédia"
        slides={genreComedy.map((movie) => ({
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