import React, { FC, PropsWithChildren } from "react";

const ErrorMessage: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
            {children}
        </div>
    );
};

export default ErrorMessage;
