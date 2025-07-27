import { SearchQuery } from "@/shared/types";
import { create } from "zustand";

interface SearchModalStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    query: SearchQuery;
    setQuery: (query: SearchQuery) => void;
    step: number;
    changeStep:(val: number) => void
}

export const useSearchModal = create<SearchModalStore>((set) => {
    return {
        isOpen: false,
        open() {
            set({ isOpen: true, step: 0 });
        },
        close() {
            set({ isOpen: false, step: 0 });
        },
        setQuery(query) {
            set({ query });
        },
        changeStep(val: number) {
            set({step: val})
        },
        step: 0,
        query: {
            category: "",
            checkIn: null,
            checkOut: null,
            bedrooms: 0,
            guests: 0,
            country: "",
        },
    };
});
