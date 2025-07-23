"use client";

import React, { FC } from "react";
import { propertyListItemClass } from "./constants";
import { DetailPageImage } from "@/shared/components";
import { useRouter } from "next/navigation";
import { IProperty } from "@/entities/Properties/types";

type Props = {
    property: IProperty;
};

const PropertyListItem: FC<Props> = (props) => {
    const {
        property: { id, title: name, imageUrl, pricePerNight: price },
    } = props;

    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/properties/${id}`)}
            className="cursor-pointer"
        >
            <div className={propertyListItemClass}>
                <DetailPageImage
                    src={imageUrl}
                    alt={name}
                    sizes="{max-width: 768px} 768px, {max-width: 1200px}: 768px, 768px"
                />
            </div>

            <div className="mt-2">
                <p className="text-lg font-bold">{name}</p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-700">
                    <strong>${price} per night</strong>
                </p>
            </div>
        </div>
    );
};

export default PropertyListItem;
