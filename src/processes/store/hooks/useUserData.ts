import { create } from "zustand";

interface UserDataStore {
    userId: string | null;
    resetId: () => void;
    setId: (pk: string) => void;
    
}

export const useUserData= create<UserDataStore>((set) => {
    return {
        userId: null,
        resetId: () => set({ userId: null }),
        setId(pk) {
            set({
                userId: pk,
            });
        },
    };
});
