'use client'

import { flexColumnClass } from "@/shared/constants";
import classNames from "classnames";
import React, { FC } from "react";
import { categoriesClass } from "./constants";
import Image from "next/image";
import { ICategory } from "@/shared/types";

type Props = {
    category: ICategory;
};

const Category: FC<Props> = ({ category }) => {
    const { alt, src, title, isActive, onClick } = category;

    return (
        <div
            onClick={() => onClick?.()}
            className={classNames(categoriesClass, flexColumnClass, {
                "border-white": !isActive,
                "border-gray-800": isActive,
            })}
        >
            <Image
                alt={alt}
                src={`/assets/${src}.png`}
                width={20}
                height={20}
            />

            <span className="text-xs">{title}</span>
        </div>
    );
};

export default Category;
