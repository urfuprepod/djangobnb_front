"use client";

import { CustomButton } from "@/shared/components/Forms";
import React, { FC } from "react";

type Props = {
    value: string
    onChange: (val: string) => void
    onSendMessage: () => Promise<void>
}

const ConversationInput: FC<Props> = (props) => {

    const {value, onChange, onSendMessage} = props

    return (
        <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Type your message..."
                className="w-full p-2 bg-gray-200 rounded-xl"
            />

            <CustomButton
                className="w-[100px]"
                onClick={onSendMessage}
            >
                Send
            </CustomButton>
        </div>
    );
};

export default ConversationInput;
