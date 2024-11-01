import { useQuery } from "@tanstack/react-query";
import { movieDetailsData } from "../../services/api";

export function Details() {
  const { data: details, isLoading } = useQuery({
    queryKey: ["details"],
    queryFn: movieDetailsData,
  });
  console.log(details);

  if (isLoading) return <p>Carregando..</p>;

  return (
    <div className="fixed inset-0 bg-black z-10 flex items-center justify-center">
      <img src={details.imageOriginal} className="fixed z-0 w-full h-screen opacity-20" alt="" />

      <div className="flex flex-col self-start z-10">
        <h1 className="text-4xl text-sky-800">{details.title}</h1>
        
        <div>
          <p className="text-2xl ">{details.genres[0].name}</p>
          <p className="text-2xl ">{details.genres[1].name}</p>
        </div>

        <p>{details.overview}</p>
        <p>{details.release_date}</p>
        <p>{details.runtime}min</p>
        <span>{details.spoken_languages[0].english_name}</span>
        <span>{details.status}</span>

        <div className="self-center">
          <iframe src={`https://www.youtube.com/embed/${details.videos.results[0].key}`} width={1000} height={680}></iframe>
        </div>
      </div>
    </div>
  );
}
