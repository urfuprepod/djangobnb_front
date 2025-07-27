"use client";

import React, { FC } from "react";
import { propertyListItemClass } from "./constants";
import { DetailPageImage, FavoriteButton } from "@/shared/components";
import { useRouter } from "next/navigation";
import { IProperty } from "@/entities/Properties/types";

type Props = {
    property: IProperty;
    markFavorite?: (val: string) => void;
    is_favorite?: boolean
};

const PropertyListItem: FC<Props> = (props) => {
    const {
        property: { id, title: name, imageUrl, pricePerNight: price },
        markFavorite,
        is_favorite = false,
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

                {markFavorite && <FavoriteButton markFavorite={markFavorite} is_favorite={is_favorite} id={id} />}
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
