import classNames from "classnames";
import React, { FC } from "react";
import { NavHeightClass } from "./constants";

type Props = {
    title: string;
    description: string;
    className?: string;
};

const SearchFilter: FC<Props> = (props) => {
    const { title, description, className } = props;

    return (
        <div
            className={classNames(
                "cursor-pointer px-8 flex flex-col justify-center rounded-full hover:bg-gray-100",
                className,
                NavHeightClass
            )}
        >
            <p className="text-xs font-semibold">{title}</p>
            <p className="text-sm">{description}</p>
        </div>
    );
};

export default SearchFilter;
