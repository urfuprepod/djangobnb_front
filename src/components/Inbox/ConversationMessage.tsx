import React, { FC, PropsWithChildren } from "react";
import classNames from "classnames";

type Props = {
    author: string;
    additionalClassName: string;
    message: string;
};

const ConversationMessage: FC<Props> = (props) => {
    const { additionalClassName, author, message } = props;

    return (
        <div
            className={classNames(
                `w-[80%] py-4 px-6 rounded-xl bg-gray-200`,
                additionalClassName
            )}
        >
            <p className="font-bold text-gray-500">{author}</p>
            <p>{message}</p>
        </div>
    );
};

export default ConversationMessage;
