"use client";

import PropertiesList from "@/components/Properties/PropertiesList";
import { useUserData } from "@/processes/store/hooks";
import { BigTitle, MainContainer } from "@/shared/components";
import React from "react";

const MyFavoritesPage = () => {
    const { userId } = useUserData();

    if (!userId)
        return (
            <MainContainer className="py-12">
                <p>you need to be authenticated...</p>
            </MainContainer>
        );

    return (
        <MainContainer className="pb-12">
            <BigTitle>My favorites</BigTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PropertiesList landlordId={userId ?? undefined} />
            </div>
        </MainContainer>
    );
};

export default MyFavoritesPage;
