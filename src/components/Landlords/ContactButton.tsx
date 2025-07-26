"use client";

import { startConversation } from "@/entities/Landlords/api";
import { useUserData } from "@/processes/store/hooks";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

type Props = {
    landlordId: string;
};

const ContactButton: FC<Props> = (props) => {
    const { landlordId } = props;
    const { userId } = useUserData();
    const router = useRouter();

    if (!userId || userId === landlordId) return null;

    return (
        <div
            onClick={() => {
                startConversation(landlordId)
                    .then((conversationId) => {
                        router.push(`/inbox/${conversationId}`)
                    })
                    .catch(console.error);
            }}
            className="mt-6 py-4 px-6 cursor-pointer transition hover:bg-airbnb-dark bg-airbnb text-white rounded-xl"
        >
            Contact
        </div>
    );
};

export default ContactButton;
