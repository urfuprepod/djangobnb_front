import ReservationItem from "@/components/MyReservations/ReservationItem";
import { BigTitle, MainContainer } from "@/shared/components";
import React from "react";

const MyReservationsPage = () => {
    return (
        <MainContainer className="pb-6">
            <BigTitle>My reservations</BigTitle>
            <div className="space-y-4">
                <ReservationItem />
            </div>
        </MainContainer>
    );
};

export default MyReservationsPage;
