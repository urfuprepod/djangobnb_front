import { SelectCountry } from "@/shared/components/Forms";
import { SelectCountryType } from "@/shared/types";
import React, { FC } from "react";

type Props = {
    value: SelectCountryType | null;
    onChange: (value: SelectCountryType) => void;
};

const Location: FC<Props> = (props) => {
    const { value, onChange } = props;

    return (
        <div className="pt-3 pb-6 space-y-4">
            <SelectCountry value={value} onChange={onChange} />
        </div>
    );
};

export default Location;
