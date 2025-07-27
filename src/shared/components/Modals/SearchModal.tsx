"use client";

import { useSearchModal } from "@/processes/store/hooks";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { Calendar, CustomButton } from "../Forms";
import { SearchQuery, SelectCountryType } from "@/shared/types";
import { LocationScreen } from "./SearchModalScreens";
import { initialDateRange, steps } from "../../constants";
import { Range } from "react-date-range";

const SearchModal = () => {
    const { isOpen, close, step, changeStep, setQuery } = useSearchModal();
    const [country, setCountry] = useState<SelectCountryType | undefined>(
        undefined
    );
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);
    const [guests, setGuests] = useState<string>("1");
    const [bedrooms, setBedrooms] = useState<string>("1");

    const updateRange = (selection: Range) => {
        setDateRange(selection);
    };

    const closeAndSearch = () => {
        close();


        const newSearchQuery: SearchQuery = {
            country: country?.label ?? '',
            checkIn: dateRange.startDate ?? null,
            checkOut: dateRange.endDate ?? null,
            guests: +guests,
            bedrooms: +bedrooms,
            category: ''
        }
        setQuery(newSearchQuery)
    };

    useEffect(() => {
        setCountry(undefined);
        setBedrooms("1");
        setGuests("1");
        setDateRange(initialDateRange);
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen} title="Search" close={close}>
            <h2 className="mb-6 text-2-xl">Please check</h2>
            {steps[step] === "location" && (
                <LocationScreen country={country} updateCountry={setCountry} />
            )}

            {steps[step] === "checkin" && (
                <Calendar
                    value={dateRange}
                    onChange={(val) => updateRange(val.selection)}
                />
            )}

            {steps[step] === "detail" && (
                <>
                    <div className="space-y-4">
                        <label>Number of guests:</label>
                        <input
                            type="number"
                            min={1}
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                        />
                    </div>

                    <div className="space-y-4">
                        <label>Number of bedrooms:</label>
                        <input
                            type="number"
                            min={1}
                            value={bedrooms}
                            onChange={(e) => setBedrooms(e.target.value)}
                            className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                        />
                    </div>
                </>
            )}

            <div className="mt-6 flex flex-row gap-4 flex-auto">
                <CustomButton onClick={() => changeStep(step + 1)}>
                    Check in date
                </CustomButton>

                {step === steps.length - 1 && (
                    <CustomButton onClick={closeAndSearch}>Search</CustomButton>
                )}
            </div>
        </Modal>
    );
};

export default SearchModal;
