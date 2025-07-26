import { Conversation } from "@/components/Inbox";
import { getConversations } from "@/entities/Inbox/api";
import { BigTitle, MainContainer } from "@/shared/components";
import React from "react";

const InboxPage = async () => {
    const conversations = await getConversations();

    return (
        <MainContainer className="pb-6 space-y-4">
            <BigTitle>Inbox</BigTitle>

            {conversations.map((el) => (
                <Conversation conversation={el} key={el.id} />
            ))}
        </MainContainer>
    );
};

export default InboxPage;
