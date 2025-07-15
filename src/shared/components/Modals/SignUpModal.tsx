"use client";

import { useSignUpModal } from "@/processes/store/hooks";
import React from "react";
import Modal from "./Modal";
import { CustomButton } from "../Forms";

const SignUpModal = () => {
    const { isOpen, close } = useSignUpModal();

    return (
        <Modal isOpen={isOpen} close={close} title="Log in">
            <form className="space-y-4">
                <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full h-[54px] border border-gray-100 rounded-xl"
                />

                <input
                    type="email"
                    placeholder="Your password"
                    className="w-full h-[54px] border border-gray-100 rounded-xl"
                />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>

                <CustomButton type="submit">Log in</CustomButton>
            </form>
        </Modal>
    );
};

export default SignUpModal;
