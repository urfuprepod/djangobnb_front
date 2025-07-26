import { SearchQuery } from "@/shared/types";
import { create } from "zustand";

interface SearchModalStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    query: SearchQuery;
    setQuery: (query: SearchQuery) => void;
}

export const useSearchModal = create<SearchModalStore>((set) => {
    return {
        isOpen: false,
        open() {
            set({ isOpen: true });
        },
        close() {
            set({ isOpen: false });
        },
        setQuery(query) {
            set({ query });
        },
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
