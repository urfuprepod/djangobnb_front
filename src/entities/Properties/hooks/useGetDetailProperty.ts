import { useQuery } from "@tanstack/react-query";
import { getDetailPropery } from "../api";

export function useGetDetailProperty(userId: string) {
    const { data, isLoading } = useQuery({
        queryKey: ["property", userId],
        queryFn: () => getDetailPropery(userId),
        refetchOnMount: true,
        staleTime: 0
    });

    return { data, isLoading };
}
