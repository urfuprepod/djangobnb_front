import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makePropertyFavorite } from "../api";

export const useMakePropertyFavorite = (id: string) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: () => makePropertyFavorite(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["property", id],
            });
        },
    });

    function onToggleFavorite() {
         mutation.mutate();
    }

    return {
        onToggleFavorite
    }
};
