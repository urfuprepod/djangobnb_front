import React from "react";
import Category from "./Category";

const categoriesItems = [
    { src: "beach", alt: "Category - Beach", title: "Beach" },
    { src: "wow", alt: "Category - Wow", title: "Wow" },
    { src: "skis", alt: "Category - Skis", title: "Skis" },
];

const Categories = () => {
    return (
        <div className="pt-4 cursor-pointer pb-6 flex items-center space-x-12">
            {categoriesItems.map((el, id) => (
                <Category category={el} key={id} />
            ))}
        </div>
    );
};

export default Categories;
