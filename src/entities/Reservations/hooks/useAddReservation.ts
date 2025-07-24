import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addReservation } from "../api";

export const useAddReservation = (id: string) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (formData: FormData) => addReservation(formData, id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["reservations", `r-${id}`],
            });
        },
    });

    function onAddReservation(formData: FormData) {
         mutation.mutate(formData);
    }

    return {
        onAddReservation
    }
};
