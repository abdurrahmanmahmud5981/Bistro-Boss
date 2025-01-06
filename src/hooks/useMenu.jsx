import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";

export default function useMenu() {
  const axiosPublic = useAxiosPublic();
  const {
    data: menu = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const response = await axiosPublic.get("/menu");

      return response.data;
    },
  });
  return [menu, loading, refetch];
}
