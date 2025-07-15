import React, { FC, PropsWithChildren } from "react";
import { maxWidthClass } from "./constants";
import classNames from "classnames";

type Props = {
    className?: string;
};

const MainContainer: FC<PropsWithChildren<Props>> = ({
    children,
    className,
}) => {
    return (
        <main className={classNames(maxWidthClass, className)}>{children}</main>
    );
};

export default MainContainer;
