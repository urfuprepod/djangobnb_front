import { getProperties } from "@/entities/Properties/api";
import ReactQueryProvider from "@/processes/tanstack/ReactQueryProvider";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";
import React from "react";
import PropertiesList from "./PropertiesList";

const PropertiesListContainer = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["properties"],
        queryFn: getProperties,
    });

    return (
        <ReactQueryProvider>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <PropertiesList />
            </HydrationBoundary>
        </ReactQueryProvider>
    );
};

export default PropertiesListContainer;
