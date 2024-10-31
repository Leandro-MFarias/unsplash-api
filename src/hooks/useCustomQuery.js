import { carouselData, genreActionData, popularData, topRateData } from "../services/api";
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

export function useGenreAction() {
  return useMovieQuery('genreAction', genreActionData)
}
