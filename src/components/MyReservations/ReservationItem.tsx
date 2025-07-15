import React from "react";
import { reservationContainer } from "./constants";
import { DetailPageImage } from "@/shared/components";

const ReservationItem = () => {
    return (
        <div className={reservationContainer}>
            <div className="cols-span-1">
                <div className="relative overflow-hidden aspect-square rounded-xl">
                    <DetailPageImage src="" alt="" />
                </div>
            </div>

            <div className="col-span-1 md:col-span-3 space-y-2">
                <h2 className="mb-4 text-xl">Property name</h2>

                <p>
                    <strong>Check in date:</strong> 14/7/2025
                </p>

                <p>
                    <strong>Check out date:</strong> 16/7/2025
                </p>

                <p>
                    <strong>Number of nights:</strong> 2
                </p>

                <p>
                    <strong>Total price:</strong> $200
                </p>

                <div className="mt-6 cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">
                    Go to proprty
                </div>
            </div>
        </div>
    );
};

export default ReservationItem;
