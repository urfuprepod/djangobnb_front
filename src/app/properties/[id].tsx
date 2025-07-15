import PropertyPageInfo from "@/components/Properties/PropertyPageInfo";
import { MainContainer } from "@/shared/components";
import Image from "next/image";
import React from "react";

const PropertyPage = () => {
    return (
        <MainContainer className="pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    src={"/"}
                    fill
                    className="object-cover w-full h-full"
                    alt=""
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <PropertyPageInfo />

                <div className="">right</div>
            </div>
        </MainContainer>
    );
};

export default PropertyPage;
