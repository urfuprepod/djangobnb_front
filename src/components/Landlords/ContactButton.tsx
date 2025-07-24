"use client";

import { useUserData } from "@/processes/store/hooks";
import React, { FC } from "react";

type Props = {
    landlordId: string;
};

const ContactButton: FC<Props> = (props) => {
    const { landlordId } = props;
    const { userId } = useUserData();

    if (userId === landlordId) return null;

    return (
        <div className="mt-6 py-4 px-6 cursor-pointer transition hover:bg-airbnb-dark bg-airbnb text-white rounded-xl">
            Contact
        </div>
    );
};

export default ContactButton;
