import { SelectCountryType } from "@/shared/types";
import React, { FC } from "react";
import { SelectCountry } from "../../Forms";

type Props = {
    country?: SelectCountryType;
    updateCountry: (val: SelectCountryType) => void;
};

const LocationScreen: FC<Props> = (props) => {
    const { country, updateCountry } = props;

    return (
        <>
            

            <SelectCountry value={country ?? null} onChange={updateCountry} />
        </>
    );
};

export default LocationScreen;
