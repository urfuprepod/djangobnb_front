import classNames from "classnames";
import React, { FC, PropsWithChildren } from "react";
import { customButtonClass } from "./constants";

type Props = {
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
};

const CustomButton: FC<PropsWithChildren<Props>> = (props) => {
    const { children, type, onClick, className } = props;

    return (
        <button
            type={type || "button"}
            onClick={onClick}
            className={classNames(customButtonClass, className)}
        >
            {children}
        </button>
    );
};

export default CustomButton;
