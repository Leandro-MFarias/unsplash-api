import { carouselData, genreActionData, genreAnimationData, genreComedyData, genreDramaData, genreHorrorData, genreRomanceData, movieDetailsData, popularData, searchMovieData, topRateData } from "../services/api";
import { useQuery } from "@tanstack/react-query";

function useMovieQuery(queryKey, queryFn) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: queryFn,
    refetchOnWindowFocus: false,
  })
}

export function useCarouselQuery() {
  return useMovieQuery('caroulse', carouselData)
}

export function usePopularQuery() {
  return useMovieQuery('popular', popularData)
}

export function useTopRateQuery() {
  return useMovieQuery('topRate', topRateData)
}

export function useDetailsQuery(id) {
  return useMovieQuery(['details', id], () => movieDetailsData(id))
}

export function useSearchMovie(movieName) {
  return useMovieQuery(['search', movieName], () => searchMovieData(movieName), {
    enabled: false, // Inicia a busca manualmente
  });
}

// EndPoints Generos

export function useGenreAction() {
  return useMovieQuery('genreAction', genreActionData)
}

export function useGenreDrama() {
  return useMovieQuery('genreDrama', genreDramaData)
}

export function useGenreComedy() {
  return useMovieQuery('genreComedy', genreComedyData)
}

export function useGenreAnimation() {
  return useMovieQuery('genreAnimation', genreAnimationData)
}

export function useGenreRomance() {
  return useMovieQuery('genreRomance', genreRomanceData)
}

export function useGenreHorror() {
  return useMovieQuery('genreHorror', genreHorrorData)
}