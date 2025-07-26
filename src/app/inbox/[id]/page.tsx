"use client";

import { ConversationDetail } from "@/components/Inbox";
import { useGetConversation } from "@/entities/Inbox/hooks";
import { getAccessToken } from "@/processes/lib/actions";
import { MainContainer } from "@/shared/components";
import React, { useEffect, useState } from "react";

const ConversationPage = ({ params }: { params: { id: string } }) => {
    const { data: conversation } = useGetConversation(params.id);
    const [token, setToken] = useState<string>("");

    useEffect(() => {
        getAccessToken().then((res) => {
            setToken(res ?? "");
        });
    }, [params.id]);

    if (!conversation) return null;
    return (
        <MainContainer className="pb-6">
            <ConversationDetail
                token={token}
                conversation={conversation.conversation}
            />
        </MainContainer>
    );
};

export default ConversationPage;
