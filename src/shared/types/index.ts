export interface ICategory {
    src: string;
    alt: string;
    title: string;
    onClick?: () => void;
    isActive?: boolean;
}

export type SelectCountryType = {
    label: string;
    value: string;
};

export enum EnumTokens {
    ACCESS_TOKEN = "session_access_token",
    REFRESH_TOKEN = "session_refresh_token",
}

export type SearchQuery = {
    country: string
    checkIn: null | Date
    checkOut: null | Date
    guests: number
    bedrooms: number
    category: string
}