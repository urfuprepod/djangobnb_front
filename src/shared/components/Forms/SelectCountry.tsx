"use client";

import { useCountries } from "@/shared/hooks";
import { SelectCountryType } from "@/shared/types";
import React, { FC } from "react";
import Select from "react-select";

type Props = {
    value: SelectCountryType | null;
    onChange: (value: SelectCountryType) => void;
};

const SelectCountry: FC<Props> = (props) => {
    const { value, onChange } = props;
    const { all, } = useCountries();

    return (
        <Select<SelectCountryType>
            placeholder="Anywhere"
            options={all}
            isClearable
            value={value}
            onChange={(value) => onChange(value as SelectCountryType)}
        />
    );
};

export default SelectCountry;
