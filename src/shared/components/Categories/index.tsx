import React, { FC } from "react";
import Category from "./Category";
import { ICategory } from "@/shared/types";

type Props = {
    categories: ICategory[];
};

const Categories: FC<Props> = (props) => {
    const { categories } = props;

    return (
        <div className="pt-4 cursor-pointer pb-6 flex items-center space-x-12">
            {categories.map((el, id) => (
                <Category category={el} key={id} />
            ))}
        </div>
    );
};

export default Categories;
