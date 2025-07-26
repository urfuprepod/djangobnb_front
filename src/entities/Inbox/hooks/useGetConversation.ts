import { useQuery } from "@tanstack/react-query";
import { getConversationById } from "../api";

export const useGetConversation = (id: string) => {
    const { data, isLoading } = useQuery({
        queryKey: ["conversation", `conv-${id}`],
        queryFn: () => getConversationById(id),
        staleTime: 0,
    });

    return {data, isLoading}
};
