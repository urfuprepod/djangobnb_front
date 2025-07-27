"use client";

import React, { FC, useMemo, useState } from "react";
import { propertySidebarClass } from "./constants";
import PropetyPriceBlock from "./PropetyPriceBlock";
import { IProperty } from "@/entities/Properties/types";
import { Range } from "react-date-range";
import { differenceInDays, eachDayOfInterval, format } from "date-fns";
import { useUserData } from "@/processes/store/hooks";
import { Calendar } from "@/shared/components/Forms";
import {
    useAddReservation,
    useGetReservations,
} from "@/entities/Reservations/hooks";
import { initialDateRange } from "@/shared/constants";
import { IReservation } from "@/entities/Reservations/types";

type Props = {
    property: IProperty;
};

const feeValue = 0.05;

const ReservationSidebar: FC<Props> = ({ property }) => {
    const { pricePerNight } = property;

    const { userId } = useUserData();
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);
    const [guests, setGuests] = useState<string>("1");

    const { onAddReservation } = useAddReservation(property.id);

    const performBooking = async () => {
        if (userId) {
            if (dateRange.startDate && dateRange.endDate) {
                const formData = new FormData();
                formData.append("guests", guests);
                formData.append(
                    "start_date",
                    format(dateRange.startDate, "yyyy-MM-dd")
                );
                formData.append(
                    "end_date",
                    format(dateRange.startDate, "yyyy-MM-dd")
                );
                formData.append("number_of_nights", String(rangeConfig.nights));
                formData.append("total_price", String(rangeConfig.totalPrice));

                const response = onAddReservation(formData);
            }
        }
    };

    const _setDateRange = (selection: Range) => {
        const newStartDate = new Date(selection["startDate"]!);
        const newEndDate = new Date(selection.endDate!);

        if (newEndDate <= newStartDate) {
            newEndDate.setDate(newStartDate.getDate() + 1);
        }

        setDateRange({
            ...dateRange,
            startDate: newStartDate,
            endDate: newEndDate,
        });
    };

    const guestsRange = useMemo(() => {
        return Array.from({ length: property.guests }, (_, index) => index + 1);
    }, [guests]);

    const rangeConfig = useMemo(() => {
        const { startDate, endDate } = dateRange;
        const defaultValue = {
            fee: 0,
            nights: 0,
            totalPrice: 0,
            message: `${pricePerNight} * 0 nights`,
        };

        if (startDate && endDate) {
            const dayCount = differenceInDays(endDate, startDate);
            if (dayCount && pricePerNight) {
                return {
                    fee: dayCount * pricePerNight * feeValue,
                    nights: dayCount,
                    totalPrice: pricePerNight * dayCount,
                    message: `${pricePerNight} * ${dayCount} nights`,
                };
            }
            return defaultValue;
        }
        return defaultValue;
    }, [pricePerNight, dateRange]);

    const { data: reservations } = useGetReservations(property.id);

    const bookedDates = useMemo(() => {
        if (!reservations?.length) return [];

        return reservations.reduce((acc: Date[], cur: IReservation) => {
            const range = eachDayOfInterval({
                start: new Date(cur.start_date),
                end: new Date(cur.end_date),
            });

            return acc.concat(range);
        }, []);
    }, [reservations]);

    return (
        <aside className={propertySidebarClass}>
            <h2 className="mb-5 text-2xl">${pricePerNight} per night</h2>

            <Calendar
                value={dateRange}
                bookedDates={bookedDates}
                onChange={(value) => _setDateRange(value.selection)}
            />

            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label
                    htmlFor="nights"
                    className="mb-2 block font-bold text-xs"
                >
                    Guests
                </label>
                <select
                    name="nights"
                    id="nights"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full -ml-1 text-xm"
                >
                    {guestsRange.map((el) => (
                        <option key={el} value={el}>
                            {el}
                        </option>
                    ))}
                </select>
            </div>

            <div
                onClick={performBooking}
                className="w-full mb-6 py-6 text-center transition text-white hover:bg-airbnb-dark bg-airbnb rounded-xl"
            >
                Book
            </div>

            <PropetyPriceBlock
                items={[rangeConfig.message, `$${rangeConfig.totalPrice}`]}
            />

            <PropetyPriceBlock
                items={["Djangobnb fee", `$${rangeConfig.fee}`]}
            />

            <hr />

            <PropetyPriceBlock
                className="font-bold"
                items={["Total", `${rangeConfig.totalPrice + rangeConfig.fee}`]}
            />
        </aside>
    );
};

export default ReservationSidebar;
