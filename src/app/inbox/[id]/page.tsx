
import { ConversationDetail } from "@/components/Inbox";
import { MainContainer } from "@/shared/components";
import React from "react";

const ConversationPage = () => {
    return (
        <MainContainer className="pb-6">
            <ConversationDetail />
        </MainContainer>
    );
};

export default ConversationPage;
