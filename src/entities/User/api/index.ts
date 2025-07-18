import { BaseInstanse } from "@/processes/axiosInstance";
import { handleLogin } from "@/processes/lib/actions";
import { AxiosError } from "axios";

type AuthError = Record<string, string[]>;
type AuthResponse = {
    access: string;
    refresh: string;
    user: {
        pk: string;
    };
};

function generateErrors(error: unknown) {
    const axiosError = error as AxiosError<AuthError>;
    const data = axiosError.response?.data;
    let errors: string[] = [];
    if (data) {
        errors = Object.values(data).reduce((acc: string[], cur: string[]) => {
            return acc.concat(cur);
        }, []);
    }
    return errors;
}

export const authorize = async (formData: FormData, type: string, setId: (pk: string) => void) => {
    try {
        const response = await BaseInstanse.post<AuthResponse>(
            `auth/${type === "Sign up" ? "register" : "login"}/`,
            formData
        );
        const {
            access,
            refresh,
            user: { pk },
        } = response.data;
        handleLogin(pk, access, refresh);
        setId(pk)
        return [];
    } catch (error) {
        return generateErrors(error);
    }
};
