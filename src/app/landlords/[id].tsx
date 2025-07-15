import { ContactButton } from "@/components/Landlords/";
import { LandlordProfileClass } from "@/components/Landlords/constants";
import PropertiesList from "@/components/Properties/PropertiesList";
import { MainContainer } from "@/shared/components";
import { flexColumnClass } from "@/shared/constants";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

const LandlordsPage = () => {
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
                            src={"/"}
                            width={200}
                            height={200}
                            alt=""
                            className="rounded-full"
                        />

                        <h1 className="mt-6 text-2xl">Landlord name</h1>
                        <ContactButton />
                    </div>
                </aside>
                <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <PropertiesList />
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default LandlordsPage;
