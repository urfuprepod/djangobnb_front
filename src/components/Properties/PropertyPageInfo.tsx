import React from "react";
import Image from "next/image";

const PropertyPageInfo = () => {
    return (
        <div className="py-6 pr-6 col-span-3">
            <h1 className="mb-4 text-4xl">Property name</h1>
            <span className="mb-6 block text-lg text-gray-600">
                Guests: 4 - 2 bedrooms - 1 bathroom
            </span>

            <hr />

            <div className="py-6 flex items-center space-x-4">
                <Image
                    src={"/"}
                    width={50}
                    height={50}
                    className="rounded-full"
                    alt="the user name"
                />

                <p>
                    <strong>John Doe</strong> is your host
                </p>
            </div>

            <hr />
            <p className="mt-6 text-lg" id="description">
                ddddddd
            </p>
        </div>
    );
};

export default PropertyPageInfo;
