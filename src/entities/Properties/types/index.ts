import { IUser } from "@/entities/User/types";

export interface IProperty {
    title: string
    id: string
    pricePerNight: number;
    imageUrl: string
    bedrooms: number
    bathrooms: number
    country: string
    country_code: string
    guests: number
    description: string
    landlord: IUser
}