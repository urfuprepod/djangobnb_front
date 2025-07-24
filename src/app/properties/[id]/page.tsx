"use client";

import PropertyPageInfo from "@/components/Properties/PropertyPageInfo";
import ReservationSidebar from "@/components/Properties/ReservationSidebar";
import { getDetailPropery } from "@/entities/Properties/api";
import { useGetDetailProperty } from "@/entities/Properties/hooks/useGetDetailProperty";
import { MainContainer } from "@/shared/components";
import Image from "next/image";
import React from "react";

const PropertyPage = async ({ params }: { params: { id: string } }) => {
    const { data: property } = useGetDetailProperty(params.id);

    if (!property) return null;
    return (
        <MainContainer className="pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    src={property.imageUrl}
                    fill
                    className="object-cover w-full h-full"
                    alt={property.title}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <PropertyPageInfo property={property} />

                <ReservationSidebar property={property} />
            </div>
        </MainContainer>
    );
};

export default PropertyPage;
