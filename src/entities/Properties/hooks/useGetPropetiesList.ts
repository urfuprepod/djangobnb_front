import { useQuery } from "@tanstack/react-query";
import { getProperties } from "../api";

export const useGetPropertiesList = (landlordId?: string) => {
    const { data, isLoading } = useQuery({
        queryKey: ["properties", `l-${landlordId}`],
        queryFn: () => getProperties(landlordId),
        staleTime: 0,
    });

    return {data, isLoading}
};
