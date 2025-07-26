import { BaseInstanse } from "@/processes/axiosInstance";
import { IConversation, IMessage } from "../types";

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

export const getConversationById = async (
    id: string
): Promise<{
    conversation: IConversation;
    message: IMessage[];
} | null> => {
    try {
        const response = await BaseInstanse.get<{
            conversation: IConversation;
            message: IMessage[];
        }>(`chat/${id}`);
        return response.data;
    } catch (e) {
        return null;
    }
};
