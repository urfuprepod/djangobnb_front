import { flexColumnClass } from "@/shared/constants";
import classNames from "classnames";
import React, { FC } from "react";
import { categoriesClass } from "./constants";
import Image from "next/image";

type Props = {
    category: {
        alt: string;
        src: string;
        title: string;
    };
};

const Category: FC<Props> = ({ category }) => {
    const { alt, src, title } = category;

    return (
        <div className={classNames(categoriesClass, flexColumnClass)}>
            <Image alt={alt} src={`/assets/${src}.png`} width={20} height={20} />

            <span className="text-xs">{title}</span>
        </div>
    );
};

export default Category;
