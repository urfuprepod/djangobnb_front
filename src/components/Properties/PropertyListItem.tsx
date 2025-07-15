import React from "react";
import { propertyListItemClass } from "./constants";
import { DetailPageImage } from "@/shared/components";

const PropertyListItem = () => {
    return (
        <div className="cursor-pointer">
            <div className={propertyListItemClass}>
                <DetailPageImage
                    src="/"
                    alt=""
                    sizes="{max-width: 768px} 768px, {max-width: 1200px}: 768px, 768px"
                />
            </div>

            <div className="mt-2">
                <p className="text-lg font-bold">Proprty Name</p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-700">
                    <strong>$200 per night</strong>
                </p>
            </div>
        </div>
    );
};

export default PropertyListItem;
