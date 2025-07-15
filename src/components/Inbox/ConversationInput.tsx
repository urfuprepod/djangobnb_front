"use client";

import { CustomButton } from "@/shared/components/Forms";
import React from "react";

const ConversationInput = () => {
    return (
        <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
            <input
                type="text"
                placeholder="Type your message..."
                className="w-full p-2 bg-gray-200 rounded-xl"
            />

            <CustomButton
                className="w-[100px]"
                onClick={() => console.log("sex")}
            >
                Send
            </CustomButton>
        </div>
    );
};

export default ConversationInput;
