"use client";

import { CircleUserRound, Logs } from "lucide-react";
import React, { useState } from "react";
import MenuLink from "./MenuLink";
import { useLoginModal, useSignUpModal } from "@/processes/store/hooks";

const UserNav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { open } = useLoginModal();
    const { open: openSignUp } = useSignUpModal();

    return (
        <div className="p-3 relative inline-block border rounded-full">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center"
            >
                <Logs className="w-6 h-6" />

                <CircleUserRound className="w-6 h-6" />
            </button>

            {isOpen && (
                <div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-xl shadow-md flex flex-col cursor-pointer">
                    <MenuLink onClick={open}>Log in</MenuLink>
                    <MenuLink onClick={openSignUp}>Sign up</MenuLink>
                </div>
            )}
        </div>
    );
};

export default UserNav;
