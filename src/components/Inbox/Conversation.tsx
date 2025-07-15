import React from "react";
import { conversationClass } from "./constants";

const Conversation = () => {
    return (
        <div className={conversationClass}>
            <p className="mb-6 text-xl">John Doe</p>

            <p className="text-airbnb-dark">Go to conversation</p>
        </div>
    );
};

export default Conversation;
