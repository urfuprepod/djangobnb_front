import React, { FC } from "react";
import Image from "next/image";
import { IProperty } from "@/entities/Properties/types";
import Link from "next/link";

type Props = {
    property: IProperty;
};

const PropertyPageInfo: FC<Props> = (props) => {
    const {
        property: { title, bathrooms, bedrooms, guests, description, landlord },
    } = props;

    return (
        <div className="py-6 pr-6 col-span-3">
            <h1 className="mb-4 text-4xl">{title}</h1>
            <span className="mb-6 block text-lg text-gray-600">
                Guests: {guests} - bedrooms: {bedrooms} - bathrooms: {bathrooms}
            </span>

            <hr />

            <Link
                href={`/lanlords/${landlord.id}`}
                className="py-6 flex items-center space-x-4"
            >
                {landlord.avatar_url && (
                    <Image
                        src={`${landlord.avatar_url}`}
                        width={50}
                        height={50}
                        className="rounded-full"
                        alt="the user name"
                    />
                )}

                <p>
                    <strong>{landlord.name}</strong> is your host
                </p>
            </Link>

            <hr />
            <p className="mt-6 text-lg" id="description">
                {description}
            </p>
        </div>
    );
};

export default PropertyPageInfo;
