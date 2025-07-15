import { Conversation } from "@/components/Inbox";
import { BigTitle, MainContainer } from "@/shared/components";
import React from "react";

const InboxPage = () => {
    return (
        <MainContainer className="pb-6 space-y-4">
            <BigTitle>Inbox</BigTitle>

            <Conversation />
        </MainContainer>
    );
};

export default InboxPage;
