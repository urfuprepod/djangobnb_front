import { IProperty } from "@/entities/Properties/types"

export interface IReservation {
    id: string,
    start_date: string
    end_date: string
    property: IProperty
    number_of_nights: number
    total_price: number
}