import React, { FC, PropsWithChildren } from "react";

const BigTitle: FC<PropsWithChildren> = ({ children }) => {
    return <h1 className="my-6 text-2xl">{children}</h1>;
};

export default BigTitle;
