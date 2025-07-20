import { ICategory } from "@/shared/types";
import React, { FC, useMemo } from "react";
import SharedCategories from "@/shared/components/Categories";

type Props = {
    dataCategory: string;
    updateCategory: (cat: string) => void;
};

const Categories: FC<Props> = (props) => {
    const { dataCategory, updateCategory } = props;

    const categoriesItems = useMemo<ICategory[]>(() => {
        return [
            {
                src: "beach",
                onClick: () => updateCategory("Beach"),
                alt: "Category - Beach",
                title: "Beach",
                isActive: dataCategory === "Beach",
            },
            {
                src: "wow",
                onClick: () => updateCategory("Wow"),
                alt: "Category - Wow",
                title: "Wow",
                isActive: dataCategory === "Wow",
            },
            {
                src: "skis",
                onClick: () => updateCategory("Skis"),
                alt: "Category - Skis",
                title: "Skis",
                isActive: dataCategory === "Skis",
            },
        ];
    }, [updateCategory, dataCategory]);

    return <SharedCategories categories={categoriesItems} />;
};

export default Categories;
