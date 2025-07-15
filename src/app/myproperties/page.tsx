import PropertiesList from "@/components/Properties/PropertiesList";
import { BigTitle, MainContainer } from "@/shared/components";
import React from "react";

const MyPropertiesPage = () => {
    return (
        <MainContainer className="pb-6">
            <BigTitle>My Properties</BigTitle>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PropertiesList />
            </div>
        </MainContainer>
    );
};

export default MyPropertiesPage;
