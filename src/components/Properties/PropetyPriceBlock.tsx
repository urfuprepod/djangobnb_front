import classNames from "classnames";
import React, { FC } from "react";

type Props = {
    items: string[];
    className?: string;
};

const PropetyPriceBlock: FC<Props> = ({ items, className }) => {
    return (
        <div
            className={classNames(
                "mb-4 flex justify-between align-center",
                className
            )}
        >
            {items.map((el, index) => (
                <p key={index}>{el}</p>
            ))}
        </div>
    );
};

export default PropetyPriceBlock;
