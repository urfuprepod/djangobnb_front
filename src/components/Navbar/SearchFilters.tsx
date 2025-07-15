import React from "react";
import SearchFilter from "./SearchFilter";
import Image from "next/image";
import classNames from "classnames";
import { NavHeightClass } from "./constants";

const filters = [
    { title: "Where", description: "Wanted location", className: "w-[250px]" },
    { title: "Check in", description: "Add dates" },
    { title: "Check out", description: "Add dates" },
    { title: "Who", description: "Add guests" },
];

const SearchFilters = () => {
    return (
        <div
            className={classNames(
                NavHeightClass,
                "flex flex-row items-center justify-between border rounded-full"
            )}
        >
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between">
                    {filters.map((filter, index) => (
                        <SearchFilter key={index} {...filter} />
                    ))}
                </div>
            </div>

            <div className="p-2">
                <div className="p-2 lg:p-4 cursor-pointer bg-airbnb hover:bg-airbnb transition rounded-full text-white">
                    <Image alt="search" width={20} height={20} src={"/assets/search.svg"} />
                </div>
            </div>
        </div>
    );
};

export default SearchFilters;
