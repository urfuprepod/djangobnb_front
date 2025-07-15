import { getProperties } from "@/entities/Properties/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import PropertyListItem from "./PropertyListItem";

const PropertiesList = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["properties"],
        queryFn: getProperties,
    });

    if (isLoading) return <p>loading...</p>;
    return (
        <>
            {data?.map((el) => (
                <PropertyListItem
                    name={el.title}
                    price={el.pricePerNight}
                    imageUrl={el.image_url}
                    key={el.id}
                />
            ))}
        </>
    );
};

export default PropertiesList;
