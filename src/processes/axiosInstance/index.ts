/* eslint-disable no-restricted-globals */
import axios from "axios";

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
        // "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Accept: "application/json"
        // Expires: "0",
    },
});

// export const RestInstanse = axios.create({
//     withCredentials: true,
//     baseURL: `${urlApi}/rest`,
//     // headers : { "Authorization" : "BasicCustom", }
//     // headers: { "Content-Type": "multipart/form-data","Access-Control-Allow-Origin": "*",
//     // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS", }
// });

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
