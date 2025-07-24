import React, { FC } from "react";
import { reservationContainer } from "./constants";
import { DetailPageImage } from "@/shared/components";
import { IReservation } from "@/entities/Reservations/types";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
    reservation: IReservation;
};

const ReservationItem: FC<Props> = (props) => {
    const { reservation } = props;

    return (
        <div className={reservationContainer}>
            <div className="cols-span-1">
                <div className="relative overflow-hidden aspect-square rounded-xl">
                    <DetailPageImage
                        src={reservation.property.imageUrl}
                        alt={reservation.property.title}
                    />
                </div>
            </div>

            <div className="col-span-1 md:col-span-3 space-y-2">
                <h2 className="mb-4 text-xl">{reservation.property.title}</h2>

                <p>
                    <strong>Check in date:</strong> {reservation.start_date}
                </p>

                <p>
                    <strong>Check out date:</strong> {reservation.end_date}
                </p>

                <p>
                    <strong>Number of nights:</strong>{" "}
                    {reservation.number_of_nights}
                </p>

                <p>
                    <strong>Total price:</strong> ${reservation.total_price}
                </p>

                <Link
                    href={`/properties/${reservation.property.id}`}
                    className="mt-6 cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl"
                >
                    Go to proprty
                </Link>
            </div>
        </div>
    );
};

export default ReservationItem;
