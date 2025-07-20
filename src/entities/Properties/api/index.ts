import { BaseInstanse } from "@/processes/axiosInstance";
import { IProperty } from "../types";

export const getProperties = async () => {
    try {
        const response = await BaseInstanse.get<{ data: IProperty[] }>(
            "properties"
        );
        return response.data?.data;
    } catch (e) {
        return null;
    }
};

export const createProperty = async (formData: FormData) => {
    try {
        const response = await BaseInstanse.post("properties/create/", formData);
    } catch (e) {
        return null;
    }
};
