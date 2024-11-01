import { IoArrowUndo } from "react-icons/io5";
import { useDetailsQuery } from "../../hooks/useCustomQuery";

export function Details() {
  const { data: details, isLoading } = useDetailsQuery()

  if (isLoading) return <p>Carregando..</p>;

  return (
    <div>
      <button className="absolute top-10 left-10 z-10">
        <IoArrowUndo className="size-10 hover:scale-125 transition duration-300 ease-in"/>
      </button>

      <img
        src={details.imageBackdrop}
        className="absolute h-[60%] z-0 w-full opacity-30 object-cover"
        alt={details.title}
      />

      <div className="z-10 mb-20 pt-32 px-12 sm:space-y-0 space-y-32">
        <div className="z-10 flex flex-col sm:flex-row items-center justify-center sm:space-y-0 space-y-10 space-x-12 h-[80vh]">
          <img
            src={details.imagePoster}
            alt={details.title}
            className="z-50 w-80 h-[520px] object-fit rounded-3xl"
          />

          <div className="z-10 space-y-10 max-w-2xl">
            <h1 className="text-5xl font-bold ">{details.title}</h1>

            <div className="flex space-x-4">
              {details.genres.map((genre) => (
                <p key={genre.id} className="text-xl border-2 font-light border-white rounded-3xl px-3 py-1">
                  {genre.name}
                </p>
              ))}
            </div>

            <div className="space-y-2">
              <p className="max-w-2/5 text-xl mb-6">{details.overview}</p>
              <p>
                <span className="text-purple-600">Duração: </span>{" "}
                {details.runtime}min
              </p>
              <p>
                <span className="text-purple-600">Data de lançamento: </span>{" "}
                {details.release_date}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <iframe
            src={`https://www.youtube.com/embed/${details.videos.results[0].key}`}
            className="z-10 w-[95%] h-[430px] lg:w-[1000px] md:h-[680px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
