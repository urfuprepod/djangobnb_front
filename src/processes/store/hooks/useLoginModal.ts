import { create } from "zustand";

type FormField = { type: 'email' | 'password'; name: string; placeholder: string };

interface LoginModalStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    fields: FormField[];
    type: "Sign up" | "Login" | "none";
    updateModalConfig: (
        fields: FormField[],
        type: "Sign up" | "Login" | "none"
    ) => void;
}

export const useLoginModal = create<LoginModalStore>((set) => {
    return {
        isOpen: false,
        open() {
            set({ isOpen: true });
        },
        close() {
            set({ isOpen: false });
        },
        type: "none",
        fields: [],
        updateModalConfig(items, type) {
            set({ type, fields: items });
        },
    };
});
