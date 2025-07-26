import { BaseInstanse } from "@/processes/axiosInstance";
import { IConversation } from "../types";

export const getConversations = async (): Promise<IConversation[]> => {
    try {
        const response = await BaseInstanse.get<{ data: IConversation[] }>(
            `chat`
        );
        return response.data.data;
    } catch (e) {
        return [];
    }
};
