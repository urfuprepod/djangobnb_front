"use client";

import React, { FC, useEffect } from "react";

type Props = {
    value: {
        title: string;
        description: string;
    };
    updateValue: (val: string, key: "title" | "description") => void;
    resetValue: () => void;
};

const Description: FC<Props> = (props) => {
    const { value, updateValue, resetValue } = props;

    useEffect(() => {
        resetValue();
    }, []);

    return (
        <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
                <label>Title</label>
                <input
                    value={value.title}
                    onChange={(e) => updateValue(e.target.value, "title")}
                    className="p-4 w-full border-gray-600 rounded-xl"
                />
            </div>

            <div className="flex flex-col space-y-2">
                <label>Description</label>
                <textarea
                    value={value.description}
                    onChange={(e) => updateValue(e.target.value, "description")}
                    rows={5}
                    className="resize-none p-4 w-full border-gray-600 rounded-xl"
                />
            </div>
        </div>
    );
};

export default Description;
