"use client";

import React, { FC, useMemo } from "react";
import { conversationClass } from "./constants";
import { IConversation } from "@/entities/Inbox/types";
import { useUserData } from "@/processes/store/hooks";
import { useRouter } from "next/navigation";
import { IUser } from "@/entities/User/types";

type Props = {
    conversation: IConversation;
};

const Conversation: FC<Props> = (props) => {
    const { conversation } = props;
    const { userId } = useUserData();
    const router = useRouter();

    const partner = useMemo<IUser>(() => {
        return (
            conversation.users.find((el) => el.id !== userId) ??
            conversation.users[0]
        );
    }, [userId, conversation]);

    return (
        <div className={conversationClass}>
            <p className="mb-6 text-xl">{partner.name}</p>

            <p
                onClick={() => router.push(`inbox/${conversation.id}`)}
                className="text-airbnb-dark"
            >
                Go to conversation
            </p>
        </div>
    );
};

export default Conversation;
