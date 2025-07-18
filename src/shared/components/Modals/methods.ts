import { ISigningFormState } from "./types";

export const validateForm = (formState: Record<string, string>) => {
    const errors: string[] = [];
    Object.entries(formState).forEach(([key, value]) => {
        if (!value) {
            errors.push(key);
        }
    })
    return errors
}