"use client";

import { useUserData } from "@/processes/store/hooks";
import { useAddPropertyModal } from "@/processes/store/hooks/usePropertyModal";
import React from "react";

const AddPropertyButton = () => {
    const { open } = useAddPropertyModal();
    const { userId } = useUserData();

    if (!userId) return null;
    return (
        <div
            onClick={() => open()}
            className="p-3 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200"
        >
            Djangobnb your home
        </div>
    );
};

export default AddPropertyButton;
