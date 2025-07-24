import { BaseInstanse } from "@/processes/axiosInstance";

export const addReservation = async (formData: FormData, id: string) => {
    try {
        const response = await BaseInstanse.post(
            `properties/${id}/book/`,
            formData
        );
    } catch (err) {
        console.error(err);
    }
};

export const getReservations = async (id: string): Promise<IReservation[]> => {
    try {
        const reservations = await BaseInstanse.get<{ data: IReservation[] }>(
            `properties/${id}/resrvations`
        );
        return reservations.data.data;
    } catch (e) {
        return [];
    }
};

export const getMyReservartions = async (): Promise<IReservation[]> => {
    try {
        const response = await BaseInstanse.get<{data: IReservation[]}>('auth/myreservations')
        return response.data.data
    } catch (err) {
        return []
    }
}