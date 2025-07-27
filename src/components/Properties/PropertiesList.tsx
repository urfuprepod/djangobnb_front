"use client";

import { getProperties } from "@/entities/Properties/api";
import { useQuery } from "@tanstack/react-query";
import React, { FC, useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import { useSearchModal } from "@/processes/store/hooks";

type Props = {
    landlordId?: string;
    favorites?: boolean;
};

const PropertiesList: FC<Props> = (props) => {
    const { landlordId, favorites = false } = props;
    const { query } = useSearchModal();

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["properties", `l-${landlordId}`],
        queryFn: () => getProperties(landlordId, favorites, query),
        staleTime: 0,
    });

    useEffect(() => {
        refetch();
    }, [query]);

    const markFavorite = (id: string) => {
        if (localFavorites.includes(id)) {
            setLocalFavorites((prev) => prev.filter((el) => el !== id));
        } else {
            setLocalFavorites((prev) => prev.concat(id));
        }
    };

    const [localFavorites, setLocalFavorites] = useState<string[]>([]);

    useEffect(() => {
        if (!data?.favorites) {
            return;
        }
        setLocalFavorites(localFavorites);
    }, [data?.favorites]);

    if (isLoading) return <p>loading...</p>;
    return (
        <>
            {data?.data?.map((el) => (
                <PropertyListItem
                    markFavorite={markFavorite}
                    is_favorite={localFavorites.includes(el.id)}
                    property={el}
                    key={el.id}
                />
            ))}
        </>
    );
};

export default PropertiesList;
