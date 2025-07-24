import ReservationItem from "@/components/MyReservations/ReservationItem";
import { getMyReservartions } from "@/entities/Reservations/api";
import { BigTitle, MainContainer } from "@/shared/components";
import React from "react";

const MyReservationsPage = async () => {
    const myReservations = await getMyReservartions();

    return (
        <MainContainer className="pb-6">
            <BigTitle>My reservations</BigTitle>
            <div className="space-y-4">
                {myReservations.map((el) => (
                    <ReservationItem reservation={el} key={el.id} />
                ))}
            </div>
        </MainContainer>
    );
};

export default MyReservationsPage;
