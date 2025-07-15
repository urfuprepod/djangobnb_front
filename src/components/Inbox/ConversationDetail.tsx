import React from "react";
import { conversationDetailClass } from "./constants";
import ConversationInput from "./ConversationInput";

const ConversationDetail = () => {
    return (
        <>
            <div className={conversationDetailClass}>
                <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
                    <p className="font-bold text-gray-500">John Doe</p>
                    <p>Description</p>
                </div>

                <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
                    <p className="font-bold text-gray-500">John Doe</p>
                    <p>wdwdwd</p>
                </div>
            </div>
            <ConversationInput />
        </>
    );
};

export default ConversationDetail;
