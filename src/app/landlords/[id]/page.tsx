import { ContactButton } from "@/components/Landlords/";
import { LandlordProfileClass } from "@/components/Landlords/constants";
import PropertiesList from "@/components/Properties/PropertiesList";
import { getLandlord } from "@/entities/Landlords/api";
import { MainContainer } from "@/shared/components";
import { flexColumnClass } from "@/shared/constants";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

const LandlordsPage = async ({ params }: { params: { id: string } }) => {
    const landlord = await getLandlord(params.id);

    if (!landlord) return null;

    const { name, avatar_url } = landlord;

    return (
        <MainContainer className="pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1 mb-4">
                    <div
                        className={classNames(
                            flexColumnClass,
                            LandlordProfileClass
                        )}
                    >
                        <Image
                            src={avatar_url}
                            width={200}
                            height={200}
                            alt={name}
                            className="rounded-full"
                        />

                        <h1 className="mt-6 text-2xl">{name}</h1>

                        <ContactButton landlordId={params.id} />
                    </div>
                </aside>
                <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <PropertiesList landlordId={params.id} />
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default LandlordsPage;
