"use client";

import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { conversationDetailClass } from "./constants";
import ConversationInput from "./ConversationInput";
import { IConversation, IMessage } from "@/entities/Inbox/types";
import { useUserData } from "@/processes/store/hooks";
import { IUser } from "@/entities/User/types";
import useWebSocket, { ReadyState } from "react-use-websocket";
import ConversationMessage from "./ConversationMessage";

type Props = {
    conversation: IConversation;
    token: string;
    oldMessages?: IMessage[];
};

const ConversationDetail: FC<Props> = ({
    conversation,
    token,
    oldMessages,
}) => {
    const { userId } = useUserData();

    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
        `ws://127.0.0.1:8000/ws/${conversation.id}/?token=${token}`,
        { share: false, shouldReconnect: () => true }
    );

    useEffect(() => {
        if (
            lastJsonMessage &&
            typeof lastJsonMessage === "object" &&
            "name" in lastJsonMessage &&
            "body" in lastJsonMessage
        ) {
            const message: IMessage = {
                id: "",
                name: String(lastJsonMessage.name),
                body: String(lastJsonMessage.body),
                conversationId: conversation.id,
                sent_to: users.partner!,
                created_by: users.me!,
            };

            setRealTimeMessages((prev) => prev.concat(message));

            scrollToBottom();
        }
    }, [lastJsonMessage]);

    const users = useMemo(() => {
        const users = conversation.users;

        const user: Record<string, null | IUser> = {
            me: null,
            partner: null,
        };

        users.forEach((el) => {
            if (el.id === userId) {
                user.me = el;
            } else if (user.partner === null) {
                user.partner = el;
            }
        });

        return user;
    }, [userId, conversation]);

    const onSendMessage = async () => {
        sendJsonMessage({
            event: "chat_message",
            data: {
                body: newMessage,
                name: users?.me?.name,
                sent_to_id: users?.partner?.id,
                conversation_id: conversation.id,
            },
        });

        setNewMessage("");
        setTimeout(() => {
            scrollToBottom();
        }, 500);
    };

    const [newMessage, setNewMessage] = useState<string>("");
    const [realTimeMessages, setRealTimeMessages] = useState<IMessage[]>([]);

    const scrollToBottom = () => {
        if (messageDivRef.current) {
            messageDivRef.current.scrollTop =
                messageDivRef.current.scrollHeight;
        }
    };

    const messageDivRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <div ref={messageDivRef} className={conversationDetailClass}>
                {oldMessages?.map((el, id) => (
                    <ConversationMessage
                        message={el.body}
                        author={el.created_by.name}
                        key={id}
                        additionalClassName={
                            el.created_by.name === users.me?.name
                                ? "ml-[20%] bg-blue-200"
                                : "bg-gray-200"
                        }
                    />
                ))}

                {realTimeMessages.map((el, id) => (
                    <ConversationMessage
                        message={el.body}
                        author={el.name}
                        key={id}
                        additionalClassName={
                            el.name === users.me?.name
                                ? "ml-[20%] bg-blue-200"
                                : "bg-gray-200"
                        }
                    />
                ))}
            </div>
            <ConversationInput
                onSendMessage={onSendMessage}
                value={newMessage}
                onChange={setNewMessage}
            />
        </>
    );
};

export default ConversationDetail;
