import { IUser } from "@/entities/User/types";
import { BaseInstanse } from "@/processes/axiosInstance";

export const getLandlord = async (id: string) => {
    try {
        const response = await BaseInstanse.get<{ data: IUser }>(`auth/${id}`);
        return response.data.data;
    } catch (err) {
        console.error(err);
    }
};

export const startConversation = async (id: string) => {
    try {
        const response = await BaseInstanse.get<{ data: string }>(
            `chat/start/${id}`
        );
        return response.data.data
    } catch (e) {
        throw new Error('Bad request')
    }
};
