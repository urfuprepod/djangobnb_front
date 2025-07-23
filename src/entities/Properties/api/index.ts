import { BaseInstanse } from "@/processes/axiosInstance";
import { IProperty } from "../types";
import { AxiosError } from "axios";

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
    } catch (error) {
        const axiosError = error as AxiosError<string>
        const message = axiosError.response?.data;
        throw new Error(message)
    }
};

export const getDetailPropery = async (id: string) => {
    try {
        const response = await BaseInstanse.get(`properties/${id}`);
        return response.data
    } catch (err) {
        return []
    }
}