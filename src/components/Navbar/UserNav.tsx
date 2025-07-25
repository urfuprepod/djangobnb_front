"use client";

import { CircleUserRound, Logs } from "lucide-react";
import React, { useMemo, useState } from "react";
import MenuLink from "./MenuLink";
import { useLoginModal, useUserData } from "@/processes/store/hooks";
import { menuLinkContainerClass } from "./constants";
import { useRouter } from "next/navigation";
import { resetAuthCookies } from "@/processes/lib/actions";

const UserNav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { open, updateModalConfig } = useLoginModal();
    const router = useRouter();
    const { userId, resetId } = useUserData();

    const menuLinkConfig = useMemo(() => {
        return [
            {
                title: 'My properties',
                showed: !!userId,
                callback: () => {
                    router.push('/myproperties')
                }
            },
            {
                title: 'Inbox',
                showed: !!userId,
                callback: () => {
                    router.push('/inbox')
                }
            },
            {
                title: 'My favorites',
                showed: !!userId,
                callback: () => {
                    router.push('/myfavorites')
                }
            },
            {
                title: 'My reservations',
                showed: !!userId,
                callback: () => {
                    router.push('/myreservations')
                }
            },
            {
                title: "Log In",
                showed: !userId,
                callback: () => {
                    updateModalConfig(
                        [
                            {
                                type: "email",
                                name: "email",
                                placeholder: "Your email address",
                            },
                            {
                                type: "password",
                                name: "password",
                                placeholder: "Your password",
                            },
                        ],
                        "Login"
                    );
                    open();
                },
            },
            {
                title: "Sign up",
                showed: !userId,
                callback: () => {
                    updateModalConfig(
                        [
                            {
                                type: "email",
                                name: "email",
                                placeholder: "Your email address",
                            },
                            {
                                type: "password",
                                name: "password1",
                                placeholder: "Your password",
                            },
                            {
                                type: "password",
                                name: "password2",
                                placeholder: "Repeat password",
                            },
                        ],
                        "Sign up"
                    );
                    open();
                },
            },
            {
                title: "Logout",
                showed: !!userId,
                callback: () => {
                    resetAuthCookies().then(() => {
                        resetId();
                        router.push("/");
                    });
                },
            },
        ];
    }, [open, updateModalConfig, resetId, userId]);

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
                <div className={menuLinkContainerClass}>
                    {menuLinkConfig
                        .filter((el) => el.showed)
                        .map((link, id) => (
                            <MenuLink
                                key={id}
                                onClick={() => {
                                    link.callback();
                                    setIsOpen(false);
                                }}
                            >
                                {link.title}
                            </MenuLink>
                        ))}
                </div>
            )}
        </div>
    );
};

export default UserNav;
