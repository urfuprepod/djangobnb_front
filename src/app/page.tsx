"use client";

import Categories from "@/shared/components/Categories";
import PropertiesListContainer from "@/components/Properties/PropertiesListContainer";
import { MainContainer } from "@/shared/components";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchModal } from "@/processes/store/hooks";

export default function Home() {
    const [category, setCategory] = useState("");
    const { query, setQuery } = useSearchModal();

    const onUpdateCategory = useCallback(
        (val: string) => {
            setCategory(val);
        },
        [setCategory]
    );

    useEffect(() => {
        setQuery({ ...query, category });
    }, [category]);

    const categoriesItems = useMemo(() => {
        return [
            {
                src: "beach",
                alt: "Category - Beach",
                title: "Beach",
                isActive: "beach" === category,
                onClick: () => onUpdateCategory("beach"),
            },
            {
                src: "wow",
                alt: "Category - Wow",
                title: "Wow",
                isActive: "wow" === category,
                onClick: () => onUpdateCategory("wow"),
            },
            {
                src: "skis",
                alt: "Category - Skis",
                title: "Skis",
                isActive: "skis" === category,
                onClick: () => onUpdateCategory("skis"),
            },
        ];
    }, [onUpdateCategory, category]);

    return (
        <MainContainer>
            <Categories categories={categoriesItems} />
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-col-5 gap-6">
                <PropertiesListContainer />
            </div>
            Django BnB
            <h2 className="text-airbnb">Django and Next rules</h2>
        </MainContainer>
    );
}
