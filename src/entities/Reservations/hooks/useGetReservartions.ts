import { useQuery } from "@tanstack/react-query";
import { getReservations } from "../api";

export const useGetReservations = (id: string) => {
    const { data, isLoading } = useQuery({
        queryKey: ["reservations", `r-${id}`],
        queryFn: () => getReservations(id),
    });

    return {data, isLoading}
};
