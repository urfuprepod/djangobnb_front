import React, { FC } from "react";
import classNames from "classnames";

type Props = {
    className?: string;
    type?: "email" | "password" | "number" | "text";
    placeholder?: string;
    name: string;
    defaultValue?: string;
};

const CustomInput: FC<Props> = (props) => {
    const {
        className,
        type = "text",
        placeholder = "Type...",
        name,
        defaultValue,
    } = props;

    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={classNames(
                "w-full h-[54px] border border-gray-100 px-2 py-1 rounded-xl",
                className
            )}
            defaultValue={defaultValue}
        />
    );
};

export default CustomInput;
