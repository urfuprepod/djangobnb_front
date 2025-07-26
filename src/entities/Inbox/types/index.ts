import { IUser } from "@/entities/User/types"

export interface IConversation {
    id: string
    users: IUser[]
}