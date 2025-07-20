export interface ICategory {
    src: string;
    alt: string;
    title: string;
    onClick?: () => void;
    isActive?: boolean;
}

export type SelectCountryType = {
    label: string
    value: string
}
