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
