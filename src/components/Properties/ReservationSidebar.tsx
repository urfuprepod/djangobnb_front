import React from "react";
import { propertySidebarClass } from "./constants";
import PropetyPriceBlock from "./PropetyPriceBlock";

const ReservationSidebar = () => {
    return (
        <aside className={propertySidebarClass}>
            <h2 className="mb-5 text-2xl">$200 per night</h2>

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
                    className="w-full -ml-1 text-xm"
                >
                    <option>1</option>
                </select>
            </div>

            <div className="w-full mb-6 py-6 text-center transition text-white hover:bg-airbnb-dark bg-airbnb rounded-xl">
                Book
            </div>

            <PropetyPriceBlock items={["$200 * 4 nights", "$800"]} />

            <PropetyPriceBlock items={["Djangobnb fee", "$40"]} />

            <hr />

            <PropetyPriceBlock
                className="font-bold"
                items={["Total", "$840"]}
            />
        </aside>
    );
};

export default ReservationSidebar;
