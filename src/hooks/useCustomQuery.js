import { carouselData, popularData, topRateData } from "../services/api";
import { useQuery } from "@tanstack/react-query";

export function useCarouselQuery() {
  return useQuery({
    queryKey: ["carousel"],
    queryFn: carouselData,
    refetchOnWindowFocus: false,
  });
}

export function usePopularQuery() {
  return useQuery({
    queryKey: ["popular"],
    queryFn: popularData,
    refetchOnWindowFocus: false,
  });
}

export function useTopRateQuery() {
  return useQuery({
    queryKey: ["topRate"],
    queryFn: topRateData,
    refetchOnWindowFocus: false
  })
}
