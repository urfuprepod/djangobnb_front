import { BaseInstanse } from "@/processes/axiosInstance";
import { IProperty } from "../types";
import { AxiosError } from "axios";
import qs from 'qs'; 

export const getProperties = async (
    landlordId?: string,
    isFavorites?: boolean,
    query?: Record<string, any>
) => {
    try {
        const response = await BaseInstanse.get<{
            data: IProperty[];
            favorites: string[];
        }>("properties", {
            params: landlordId
                ? { landlord_id: landlordId, is_favorites: !!isFavorites }
                : {},
            paramsSerializer: (params) => {
                return qs.stringify(params, {
                    serializeDate: (date: Date) => date.toISOString(), // Даты → ISO
                    arrayFormat: "brackets", // Массивы → ?counts[]=1&counts[]=2
                });
            },
        });
        return response.data;
    } catch (e) {
        return null;
    }
};

export const createProperty = async (formData: FormData) => {
    try {
        const response = await BaseInstanse.post(
            "properties/create/",
            formData
        );
    } catch (error) {
        const axiosError = error as AxiosError<string>;
        const message = axiosError.response?.data;
        throw new Error(message);
    }
};

export const getDetailPropery = async (
    id: string
): Promise<IProperty | null> => {
    try {
        const response = await BaseInstanse.get<{ data: IProperty }>(
            `properties/${id}`
        );
        return response.data.data;
    } catch (err) {
        return null;
    }
};

export const makePropertyFavorite = async (id: string) => {
    try {
        await BaseInstanse.post(`properties/${id}/toggle_favorite/`);
    } catch (err) {
        console.error(err);
    }
};
