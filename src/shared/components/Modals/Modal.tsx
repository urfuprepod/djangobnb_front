"use client";

import classNames from "classnames";
import { CircleX } from "lucide-react";
import React, { FC, PropsWithChildren, useState } from "react";
import {
    blackCloak,
    modalContainer,
    modalContent,
    modalContentHeader,
} from "./constants";

type Props = {
    title: string;
    close: () => void;
    isOpen: boolean;
};

const Modal: FC<PropsWithChildren<Props>> = (props) => {
    const { title, children, isOpen, close } = props;

    return (
        <div className={classNames(blackCloak, { ["hidden"]: !isOpen })}>
            <div className={modalContainer}>
                <div
                    className={classNames(
                        "translate duration h-full opacity-100",
                        {
                            ["translate-y-0"]: isOpen,
                            ["translate-y-full"]: !isOpen,
                        }
                    )}
                >
                    <div className={modalContent}>
                        <header className={modalContentHeader}>
                            <button
                                onClick={close}
                                className="p-3 absolute left-3 hover:bg-gray-300 rounded-full cursor-pointer"
                            >
                                <CircleX size={16} />
                            </button>

                            <h2 className="text-lg font-bold">{title}</h2>
                        </header>

                        <section className="p-6">{children}</section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
