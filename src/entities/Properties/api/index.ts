import { BaseInstanse } from "@/processes/axiosInstance"
import { IProperty } from "../types"

export const getProperties = async () => {
    try {
        const response = await BaseInstanse.get<IProperty[]>('properties');
        return response.data;
    }
    catch (e) {
        return []
    }
}