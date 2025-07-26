import { IUser } from "@/entities/User/types"

export interface IConversation {
    id: string
    users: IUser[]
}

export interface IMessage {
    id: string
    name: string
    body: string
    conversationId: string
    sent_to: IUser
    created_by: IUser
}

export type MessagePost = Pick<IMessage, 'name' | 'body' | 'conversationId'>