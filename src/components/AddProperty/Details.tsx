import { DetailsConfig } from "@/entities/AddProperty/types";
import React, { FC } from "react";

type Props = {
    details: DetailsConfig;
    updateDetails: (val: number, key: keyof DetailsConfig) => void;
    resetDetails: () => void;
};

const Details: FC<Props> = (props) => {
    const { details, updateDetails, resetDetails } = props;

    return (
        <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
                <label>Price per night</label>
                <input
                    type="number"
                    value={details.price}
                    onChange={(e) => updateDetails(+e.target.value, "price")}
                    className="p-4 w-full border-gray-600 rounded-xl"
                    step={10}
                />
            </div>

            <div className="flex flex-col space-y-2">
                <label>Bedrooms</label>
                <input
                    type="number"
                    value={details.price}
                    onChange={(e) => updateDetails(+e.target.value, "bedrooms")}
                    className="p-4 w-full border-gray-600 rounded-xl"
                />
            </div>

            <div className="flex flex-col space-y-2">
                <label>Guests</label>
                <input
                    type="number"
                    value={details.price}
                    onChange={(e) => updateDetails(+e.target.value, "guests")}
                    className="p-4 w-full border-gray-600 rounded-xl"
                />
            </div>
        </div>
    );
};

export default Details;
