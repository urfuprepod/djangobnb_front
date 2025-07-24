"use client";

import { getProperties } from "@/entities/Properties/api";
import { useQuery } from "@tanstack/react-query";
import React, { FC } from "react";
import PropertyListItem from "./PropertyListItem";

type Props = {
    landlordId?: string;
};

const PropertiesList: FC<Props> = (props) => {
    const { landlordId } = props;

    const { data, isLoading } = useQuery({
        queryKey: ["properties", `l-${landlordId}`],
        queryFn: () => getProperties(landlordId),
        staleTime: 0,
    });

    if (isLoading) return <p>loading...</p>;
    return (
        <>
            {data?.map((el) => (
                <PropertyListItem property={el} key={el.id} />
            ))}
        </>
    );
};

export default PropertiesList;
