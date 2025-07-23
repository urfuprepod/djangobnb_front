/* eslint-disable no-restricted-globals */
import axios from "axios";
import { useUserData } from "../store/hooks";
import { getAccessToken, removeFromStorage } from "@/shared/methods";
export const urlApi = `http://localhost:8000` + "/api";

type ErrorWithMessage = {
    response: {
        data: { Message: string };
    };
};
function errorHasMessage(error: unknown): error is ErrorWithMessage {
    return "response" in (error as any);
}

const errorHandler = (error: unknown) => {
    console.log(error);
    let message = "Возникла ошибка при выполнении запроса";
    if (errorHasMessage(error)) {
        message = error.response.data.Message;
    }
    // callError(message);

    return Promise.reject(error);
};

export const BaseInstanse = axios.create({
    withCredentials: true,
    baseURL: `${urlApi}`,
    headers: {
       
        Pragma: "no-cache",
        Accept: "application/json",
        
    },
});

BaseInstanse.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if ([302, 500, 400].includes(error?.request?.status))
            return errorHandler(error);
        const originalRequest = error.config;
    }
);

BaseInstanse.interceptors.request.use((config) => {
    const accessToken = getAccessToken();

    // console.log(useUserData?.())
    if (config?.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config;
});

BaseInstanse.interceptors.response.use(config => config, async error => {
    const originalRequest = error.config;

    if (error?.response?.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            return BaseInstanse.request(originalRequest)
        } catch (error) {
            removeFromStorage();
        }
    }
})